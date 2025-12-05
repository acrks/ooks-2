"use client";

import { Button } from "@/components/ui/button";
import { FaHandPaper } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

import { useState } from "react";

export default function SubmitWorkerNotes({saveNotes, index}: {saveNotes: (index: number, type: 'wins' | 'needsPeerReview' | 'blockers', ticketId: string, notes: string) => void, index:number}) {
    const [type, setType] = useState<'wins' | 'needsPeerReview' | 'blockers'>("wins");
    const [notes, setNotes] = useState("");
    const [ticketId, setTicketId] = useState("");

    return (
        <div className="flex flex-col gap-2 w-full">
            <h4 className="text-lg font-bold">Notes</h4>
            <input type="text"
                className="w-full p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                placeholder="Enter ticket ID here..."
                value={ticketId}
                onChange={e => setTicketId(e.target.value)}
            />
            <input type="text"
                className="w-full justify-start h-16 p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
                placeholder="Enter your notes here..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
            />
            <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-evenly">
                <Button key={index}onClick={() => setType("wins")} className={`cursor-pointer self-start bg-yellow-500 ${type==='wins' ? 'ring-2 ring-offset-2 ring-yellow-500' : ''}`}>
                    <BsFillRocketTakeoffFill />
                </Button>
                <Button key={index}onClick={() => setType("needsPeerReview")} className={`cursor-pointer self-start bg-green-500 ${type==='needsPeerReview' ? 'ring-2 ring-offset-2 ring-green-500' : ''}`}>
                    <PiEyesFill />
                </Button>
                <Button key={index}onClick={() => setType("blockers")} className={`cursor-pointer self-start bg-red-500 ${type==='blockers' ? 'ring-2 ring-offset-2 ring-red-500' : ''}`}>
                    <FaHandPaper />
                </Button>
            </div>
            <Button className="cursor-pointer" onClick={() => saveNotes(index, type, ticketId, notes)}>Add</Button>
            </div>
        </div>
    );
}