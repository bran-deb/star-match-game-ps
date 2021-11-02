import React from 'react';

const PlayAgain = ({ resetGame }) => {
    return (
        <button onClick={resetGame}>
            Play Again
        </button>
    );
}

export default PlayAgain;