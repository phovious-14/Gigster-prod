"use client"

import Sidebar from "@/components/sidebar/Sidebar"
import Task from "@/components/task/Task";
import TaskList from "@/components/task/TaskList";
import WinnerList from "@/components/winner/WinnerList";
import { useState } from "react";

export default function CreateGig() {
    const [activeTab, setActiveTab] = useState('Bounty');
    return (
        <div className="w-[calc(100%_-_95px)] ml-[81px] h-screen flex justify-center items-start p-4 overflow-y-auto ">
            <Sidebar />
            <div className="flex justify-start items-center flex-col w-[70%] bg-[#00000050] p-4 rounded-lg">
                <div className="w-full">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">1.</span>
                        <span className="ml-2 text-xl text-black">Headline for your bounty</span>
                    </div>
                    <input type="text" placeholder="Add GiG title here" className="w-full p-2 text-xl bg-transparent my-4 border-[3px] outline-none border-transparent border-b-white" />
                    <div className={"w-full mt-4"}>
                        <b className={"text-slate-300 font-normal"}>Example titles:</b>
                            <div className={"mt-2 text-slate-200 text-sm"}>
                                <li className={"my-1"}>
                                    Build a responsive dApp to trade Pokemonsta cards.
                                </li>
                                <li className={"my-1"}>
                                    Design an UI for a cooking social media.
                                </li>
                                <li className="my-1">Create a video ad for YouClip Shorts.</li>
                            </div>
                    </div>
                </div>
                <div className="w-full mt-14">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">2.</span>
                        <span className="ml-2 text-xl text-black">Describe your bounty</span>
                    </div>
                    <textarea placeholder="Add GiG description here" className="w-full p-2 text-xl bg-transparent my-4 border-4 outline-none border-transparent border-b-white" />
                    <div className={"w-full mt-4"}>
                        <b className={"text-slate-300 font-normal"}>Example description:</b>
                            <div className={"mt-2 text-slate-200 text-sm my-1"}>
                            “Looking for an experienced Freelance that can deliver in a
                    timely manner a clean and well designed Dashboard, to
                    manage, swap and keep tracks of multiple Hamster Coins, we
                    are a team of VCs looking to find long term collaborations.
                    Messages are open on the global chat”
                            </div>
                    </div>
                </div>
                <div className="w-full mt-14">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">3.</span>
                        <span className="ml-2 text-xl text-black">Choose your bounty category</span>
                    </div>
                    <div className="flex justify-around items-center flex-row sticky top-0 p-2 w-full bg-[#00000050] text-slate-300 mt-2 rounded-xl text-sm">
                        <button onClick={() => setActiveTab('Content')} className={ activeTab === "Content" ? "transition-all text-black p-2 bg-cyan-400" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Content</button>
                        <button onClick={() => setActiveTab('Opportunity')} className={ activeTab === "Opportunity" ? "transition-all text-black p-2 bg-cyan-400" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Event</button>
                        <button onClick={() => setActiveTab('Tech')} className={ activeTab === "Tech" ? "transition-all text-black p-2 bg-cyan-400" : "hover:text-slate-50 transition-all border border-transparent hover:border-b-cyan-200 p-1"}>Tech</button>
                    </div>
                </div>
                <div className="w-full mt-14">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">4.</span>
                        <span className="ml-2 text-xl text-black">Describe Tasks</span>
                    </div>
                    <TaskList />                
                </div>
                <div className="w-full mt-14">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">5.</span>
                        <span className="ml-2 text-xl text-black">Select deadline</span>
                    </div>
                    <div className="flex justify-around items-center flex-row sticky top-0 p-2 bg-[#00000050] text-slate-300 mt-2 rounded-xl text-sm">
                        <input type="datetime-local" id="birthdaytime" name="birthdaytime" className="p-2 rounded-lg"/>
                    </div>
                </div>
                <div className="w-full mt-14">
                    <div className="flex justify-start items-center w-full bg-white">
                        <span className="bg-black text-white text-xl p-4 font-mono">6.</span>
                        <span className="ml-2 text-xl text-black">Add bounty budget</span>
                    </div>
                    <WinnerList />
                </div>
                <button className="w-full bg-cyan-400 p-4 rounded-xl transition-all mt-10 hover:bg-cyan-200">Create Gig</button>
            </div>
        </div>
    )
}