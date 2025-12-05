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
                <Button onClick={() => setType("wins")}><BsFillRocketTakeoffFill /></Button>
                <Button onClick={() => setType("needsPeerReview")}><PiEyesFill /></Button>
                <Button onClick={() => setType("blockers")}><FaHandPaper /></Button>
            </div>
            <Button onClick={() => saveNotes(index, type, ticketId, notes)}>Save</Button>
            </div>
        </div>
    );
}