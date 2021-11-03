import React, { useEffect, useState } from 'react';
import "./StarMatch.css"
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';

const StarMatch = () => {

    const [stars, setStars] = useState(utils.random(1, 9))
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
    const [candidateNums, setCandidateNums] = useState([])
    const [secondsLeft, setSecondsLeft] = useState(10)

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1)
            }, 1000);
            // function cleaner
            return () => clearTimeout(timerId)
        }
    })


    const candidatesAreWrong = utils.sum(candidateNums) > stars


    const gameStatus = (availableNums.length === 0)
        ? 'won'
        : (secondsLeft === 0)
            ? 'lost'
            : 'active'


    const resetGame = () => {
        setStars(utils.random(1, 9))
        setAvailableNums(utils.range(1, 9))
        setCandidateNums([])
    }

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used'
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate'
        }
        return 'available'
    }

    const onNumberClick = (number, currentStatus) => {
        if (gameStatus !== 'active' || currentStatus === 'used') {
            return
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums)
        } else {

            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            )

            setStars(utils.randomSumIn(newAvailableNums, 9))
            setAvailableNums(newAvailableNums)
            setCandidateNums([])
        }
    }

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                {/* stars */}
                <div className="left">
                    {gameStatus !== 'active'
                        ? (<PlayAgain
                            resetGame={resetGame}
                            gameStatus={gameStatus}
                        />)
                        : (<StarsDisplay
                            stars={stars}
                            utils={utils}
                        />)
                    }
                </div>
                {/* nums */}
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClickk={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};

// Math science
const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length - 1)];
    },
}

export default StarMatch;