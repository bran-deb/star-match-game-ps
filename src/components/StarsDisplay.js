import React from 'react';

const StarsDisplay = ({ stars, utils }) => {
    return (
        <>
            {utils.range(1, stars).map(starId =>
                <div key={starId} className="star"></div>
            )}
        </>

    )
}

export default StarsDisplay;