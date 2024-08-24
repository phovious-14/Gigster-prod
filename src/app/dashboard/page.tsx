"use client"
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar"
import { useState, Suspense, lazy } from 'react';
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const ContentComponent = lazy(() => import('@/components/ContentComponent'));
const BountyComponent = lazy(() => import('@/components/BountyComponent'));
const FreelancingComponent = lazy(() => import('@/components/FreelancingComponent'));

export default function Home() {
  
  const [activeTab, setActiveTab] = useState('Bounty');

  const renderContent = () => {
    switch (activeTab) {
      case 'Grant':
        return <ContentComponent />;
      case 'Bounty':
        return <BountyComponent />;
      case 'Opportunity':
        return <FreelancingComponent />;
      default:
        return <BountyComponent />;
    }
  };

  return (
    <div className="w-[calc(100%_-_95px)] ml-[81px] h-screen flex justify-between items-start flex-row">
      <Sidebar />
      <div className="flex justify-start items-center flex-col w-[70%] h-screen bg-[#00000060]">
        <div className="flex justify-around items-center flex-row sticky top-0 p-2 w-[40%] bg-[#00000050] text-slate-300 mt-2 rounded-xl text-sm">
          <button onClick={() => setActiveTab('Bounty')} className={ activeTab === "Bounty" ? "hover:text-slate-50 transition-all border border-transparent border-b-cyan-200 p-1" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Bounty</button>
          <button onClick={() => setActiveTab('Opportunity')} className={ activeTab === "Content" ? "hover:text-slate-50 transition-all border border-transparent border-b-cyan-200 p-1" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Content</button>
          <button onClick={() => setActiveTab('Grant')} className={ activeTab === "Freelancing" ? "hover:text-slate-50 transition-all border border-transparent border-b-cyan-200 p-1" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Freelancing</button>
        </div>
        <div className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </div>
      <div className="w-[30%] flex justify-center items-start flex-col">
        <div className="flex justify-around items-center flex-row w-full mt-2">
          <Link href={"/become-sponser"}><button className="button-78" role="button">Become Sponser</button></Link>
          <Link href={"/become-hunter"}><button className="button-77" role="button">Become Hunter</button></Link>
        </div>
      </div>
    </div>
  );
}
