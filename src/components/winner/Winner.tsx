import React from 'react';

const Winner = ({ rank, winner, updateWinner, removeWinner }: any) => {
    return (
        <div className="flex items-center mb-2 p-2 bg-[#ffffff5e] rounded">
            <span className="font-bold mr-2">{rank}:</span>
            <input
                type="text"
                value={winner}
                onChange={(e) => updateWinner(rank, e.target.value)}
                placeholder={`Winner ${rank}`}
                className="flex-grow bg-transparent border outline-none border-[#ffffff80] rounded px-3 py-2 mr-2"
            />
            <button
                onClick={() => removeWinner(rank)}
                className="ml-2 px-2 py-1 text-white rounded bg-[#00000080]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 36 36"><path fill="#ff1a5e" d="m19.61 18l4.86-4.86a1 1 0 0 0-1.41-1.41l-4.86 4.81l-4.89-4.89a1 1 0 0 0-1.41 1.41L16.78 18L12 22.72a1 1 0 1 0 1.41 1.41l4.77-4.77l4.74 4.74a1 1 0 0 0 1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#ff1a5e" d="M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            </button>
        </div>
    );
};

export default Winner;
