import Bounty from "@/components/_bounty/Bounty";

export default function Dashboard() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[1290px] h-full flex justify-start items-start flex-row">
                <div className="w-[65%] h-full">
                    <div className="flex gap-4">
                        <button className="border-2 border-gray-400 rounded-3xl py-1 px-4 text-sm">Content</button>
                        <button className="border-2 border-gray-400 rounded-3xl py-1 px-4 text-sm">Event</button>
                        <button className="border-2 border-gray-400 rounded-3xl py-1 px-4 text-sm">Tech</button>
                    </div>
                    <div className="w-full rounded-lg p-6 text-white text-xl bg-slate-800 mt-4 mb-2">
                        Welcome Krishn
                    </div>
                    <Bounty />
                </div>
                <div className="flex justify-center items-start flex-col">
                    <div className="flex justify-between items-center flex-row w-full bg-gray-300">
                        Total value earned
                    </div>
                    
                </div>
            </div>
        </div>
    )
}