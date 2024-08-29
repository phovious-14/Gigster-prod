"use client"

import { useState } from 'react';
import { StarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Code } from '@chakra-ui/react';
import Link from 'next/link';

const ProjectCard = ({ item, index }: any) => {

  return (
    <div className="bg-white border m-3 px-3 pt-3 pb-12 w-[45%] rounded-lg">
      <div className="px-3">
        <div className='flex w-full justify-end items-center flex-row'>
          <button 
            className={`flex gap-4 p-1 px-2 rounded-md bg-yellow-200`}
          >
            <StarIcon className={`h-4 w-4 text-yellow-500`} />
            <h3 className="text-red text-sm font-medium font-mono -ml-2">
              {item?.rank}
            </h3>
          </button>
        </div>
        <h4 className="text-2xl font-bold pt-6 text-black">{item?.submissionTitle}</h4>
        <div>
        <h3 className="text-base font-normal pt-1 opacity-75 font-mono">{item.walletAddress}</h3>
        </div>
        <div className="relative rounded-3xl  py-4">
          <div className="flex items-center justify-center bg-black  rounded-lg p-1">
            {/* image */}
          </div>
        </div>
        <h3 className="mb-2">Submitted At: {item?.submittedAt}</h3>
        <Code>by {item.submittedBy}</Code> <br />
        <hr style={{ color: '#C4C4C4' }} />
        <a className="relative rounded-3xl cursor-pointer py-4" href={item?.submissionLink} target='_blank'>
          <div className="flex items-center justify-center bg-slate-800  rounded-lg p-1">
            <h3 className="flex cursor-pointer gap-2 items-center text-white text-center text-sm font-medium">
              <p>View</p> <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

function getOrdinalSuffix(i: number) {
  const j = i % 10,
        k = i % 100;
  if (j == 1 && k != 11) {
    return "st";
  }
  if (j == 2 && k != 12) {
    return "nd";
  }
  if (j == 3 && k != 13) {
    return "rd";
  }
  return "th";
}

export default ProjectCard;