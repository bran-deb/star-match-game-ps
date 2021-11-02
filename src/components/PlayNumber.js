import React from 'react';

const PlayNumber = ({ number, status }) => {

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
            onClick={() => console.log('Num', number)}
        >
            {number}
        </button>
    );
}

export default PlayNumber;