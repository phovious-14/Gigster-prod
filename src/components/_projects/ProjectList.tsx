"use client"

import { useState } from 'react';
import ProjectCard from './project-card';

const WinnerList = ({ winners, projects }: any) => {
    return (
      <div className="mb-6 p-4 bg-slate-100 rounded-lg">
        <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-2">Winners</h2>
            <button className='bg-purple-500 text-white p-2 rounded-lg shadow-md'>Annouce 🚀</button>
        </div>
        
        {winners.length === 0 ? (
          <p>No winners selected yet.</p>
        ) : (
          <ol className="list-decimal list-inside">
            {winners.map((winnerIndex: any, index: any) => (
              <li key={index} className="mb-1">
                {projects[winnerIndex].title} - {projects[winnerIndex].submittedBy}
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  };
  const ProjectList = ({ projects }: any) => {
    const [winners, setWinners] = useState<number[]>([]);
  
    const handleSelectWinner = (index: number) => {
      if (winners.length < 3 && !winners.includes(index)) {
        const newWinners = [...winners, index];
        setWinners(newWinners);
        return newWinners.length;
      }
      return null;
    };
  
    return (
      <div>
        <WinnerList winners={winners} projects={projects} />
        <div className="w-full flex justify-start items-start flex-row flex-wrap">
          {projects.length != 0 && projects?.map((project: any, index: any) => (
            <ProjectCard
              key={index}
              item={project}
              index={index}
              onSelectWinner={handleSelectWinner}  // Make sure this line is present
            />
          ))}
        </div>
      </div>
    );
  };

export default ProjectList;