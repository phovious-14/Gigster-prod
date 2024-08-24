import React, { useState } from 'react';
import Winner from './Winner';

const WinnerList = () => {
    const [winners, setWinners] = useState([{ rank: 1, name: '' }]);

    const addWinner = () => {
        setWinners([...winners, { rank: winners.length + 1, name: '' }]);
    };

    const updateWinner = (rank: any, name: any) => {
        setWinners(winners.map(winner =>
            winner.rank === rank ? { ...winner, name } : winner
        ));
    };

    const removeWinner = (rank: any) => {
        setWinners(winners.filter(winner => winner.rank !== rank)
            .map((winner, index) => ({ ...winner, rank: index + 1 })));
    };

    return (
        <div className="w-[60%] mx-auto mt-10">
            <div className="text-xl font-bold mb-4 w-full flex justify-between items-center">
                <h2>Winners</h2> 
            <button
                onClick={addWinner}
                className="mt-4 bg-[#00000050] text-white px-4 py-2 rounded "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 256 256"><g fill="none" stroke="#00e62e" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><circle cx="128" cy="128" r="112"/><path d="M 79.999992,128 H 176.0001"/><path d="m 128.00004,79.99995 v 96.0001"/></g></svg>
            </button></div>
            {winners.map(winner => (
                <Winner
                    key={winner.rank}
                    rank={winner.rank}
                    winner={winner.name}
                    updateWinner={updateWinner}
                    removeWinner={removeWinner}
                />
            ))}
        </div>
    );
};

export default WinnerList;
