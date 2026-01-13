"use client";

import { Button } from "@/components/ui/button";
import { FaHandPaper } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { meetingParticipantsTraits, notesPlaceholderText } from "./const";

import { useState } from "react";
import DisplayWorkerNotes from "./display-worker-notes";

export default function SubmitWorkerNotes({
    saveNotes,
    index,
    meetingParticipant,
    spinning,
}: {
    saveNotes: (
        index: number,
        type: "wins" | "needsPeerReview" | "blockers",
        ticketId: string,
        notes: string
    ) => void;
    index: number;
    meetingParticipant: meetingParticipantsTraits;
    spinning: boolean;
}) {
    const [type, setType] = useState<"wins" | "needsPeerReview" | "blockers">(
        "wins"
    );
    const [note, addToNotes] = useState("");
    const [ticketId, setTicketId] = useState("");
    const [typeTheme, setTypeTheme] = useState<
        "bg-yellow-50" | "bg-blue-50" | "bg-red-50"
    >("bg-yellow-50");

    return (
        <div className="flex flex-col gap-2 w-full">
            <DisplayWorkerNotes meetingParticipant={meetingParticipant} />
            {!spinning && (
                <>
                    <input
                        type="text"
                        className={`w-full p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${typeTheme}`}
                        placeholder="Enter ticket ID here..."
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                    />
                    <input
                        type="text"
                        className={`w-full justify-start h-16 p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${typeTheme}`}
                        placeholder={notesPlaceholderText[type]}
                        value={note}
                        onChange={(e) => addToNotes(e.target.value)}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-evenly">
                            <Button
                                onClick={() => {
                                    setType("wins");
                                    setTypeTheme("bg-yellow-50");
                                }}
                                className={`cursor-pointer self-start bg-yellow-500 ${type === "wins" ? "ring-2 ring-offset-2 ring-yellow-500" : ""}`}
                            >
                                <BsFillRocketTakeoffFill />
                            </Button>
                            <Button
                                onClick={() => {
                                    setType("needsPeerReview");
                                    setTypeTheme("bg-blue-50");
                                }}
                                className={`cursor-pointer self-start bg-blue-900 ${type === "needsPeerReview" ? "ring-2 ring-offset-2 ring-blue-900" : ""}`}
                            >
                                <PiEyesFill />
                            </Button>
                            <Button
                                onClick={() => {
                                    setType("blockers");
                                    setTypeTheme("bg-red-50");
                                }}
                                className={`cursor-pointer self-start bg-red-500 ${type === "blockers" ? "ring-2 ring-offset-2 ring-red-500" : ""}`}
                            >
                                <FaHandPaper />
                            </Button>
                        </div>
                        <Button
                            disabled={
                                (ticketId.trim() === "" &&
                                    note.trim().length > 0) ||
                                note.trim() === ""
                            }
                            className="cursor-pointer"
                            onClick={() => {
                                addToNotes("");
                                setTicketId("");
                                saveNotes(index, type, ticketId, note);
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
