import React from 'react';

const PlayAgain = ({ resetGame, gameStatus }) => (
    <div className="game-done">
        <div
            className="message"
            style={{
                color: gameStatus === 'lost'
                    ? 'red'
                    : 'green'
            }}
        >
            {gameStatus === 'lost'
                ? 'Game Over'
                : 'Nice'
            }
        </div>
        <button onClick={resetGame}>Play Again</button>
    </div>
)
export default PlayAgain;