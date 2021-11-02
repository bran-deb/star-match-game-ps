import React from 'react';

const PlayNumber = ({ number, status, onClickk }) => {

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    }

    return (
        <button
            className="number"
            style={{ backgroundColor: colors[status] }}
            onClick={() => onClickk(number, status)}
        >
            {number}
        </button>
    );
}

export default PlayNumber;