import React from 'react';

const PlayNumber = ({ number }) => {

    return (
        <button onClick={() => {
            console.log('Num', number)
        }} className="number">{number}</button>
    );
}

export default PlayNumber;