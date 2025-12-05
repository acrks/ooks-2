'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { meetingParticipants , subTeams } from "./const";
import SubmitWorkerNotes from "./submit-worker-notes";
import DisplayWorkerNotes from "./display-worker-notes";

export default function NextToPresent() {
    const [presentingIndex, setPresentingIndex] = useState(-1);
    const [presentedIndexes, setPresentedIndexes] = useState<number[]>([]);
    const [yetToPresentIndexes, setYetToPresentIndexes] = useState<number[]>(Object.keys(meetingParticipants).map(Number));
    
    const spinTheWheel = () => {
        const oldIndex = presentingIndex;
        if (oldIndex >= 0) {
            if (!presentedIndexes.includes(oldIndex)) {
                setPresentedIndexes(presentedIndexes.concat(oldIndex));
            }  
        }
            const newIndex = yetToPresentIndexes[Math.floor(Math.random() * yetToPresentIndexes.length)];
            setPresentingIndex(newIndex);
            setYetToPresentIndexes(prevIndexes => prevIndexes.filter(index => index !== newIndex));
        }

    const saveNotes = (index: number, type: 'wins' | 'needsPeerReview' | 'blockers', ticketId: string, notes: string) => {
        if (type === 'wins') meetingParticipants[index].wins.push(
            { 'ticketId': ticketId,'notes' :notes }
        );
        if (type === 'needsPeerReview') meetingParticipants[index].needsPeerReview.push(notes);
        if (type === 'blockers') meetingParticipants[index].blockers.push(
            { 'ticketId': ticketId,'notes' :notes }
        );
    }

    return (
        <>
        <div className="flex flex-col justify-center gap-4">
            {presentedIndexes.length == Object.keys(meetingParticipants).length ? null : <Button onClick={spinTheWheel} className="cursor-pointer self-center">Spin the Wheel!</Button>}
            {/* Yet to Present Column */}
            <div className="flex flex-row gap-4">
            <div className="flex flex-col w-1/3 gap-2 items-center rounded-2xl border-2 border-solid border-grey-500 bg-background-variant shadow-md p-4">
                <h4 className="text-xl font-bold">Yet To Present</h4>
                <ul className="flex flex-col gap-2 w-3/4">
                    {yetToPresentIndexes.map((index) => (
                        <li key={index} className="cursor-pointer" onClick={() => {
                            if (presentingIndex >= 0) {
                                setPresentedIndexes(presentedIndexes.concat(presentingIndex));
                            }
                            setPresentingIndex(index);
                            setYetToPresentIndexes(prevIndexes => prevIndexes.filter(i => i !== index));
                        }}>{meetingParticipants[index].name}</li>
                    ))}
                </ul>
            </div>

                <div className="flex flex-col min-h-auto w-1/3 border-2 border-solid rounded-2xl border-grey-500 items-center shadow-md bg-background-variant p-4">
                {
                    presentedIndexes.length == Object.keys(meetingParticipants).length ?
                    <h2 className="text-xl font-bold">🎊 All Done! 🎊</h2>
                : <div className="flex flex-col min-h-1/2 gap-3 items-center">
                <h4 className="text-xl font-bold">At Bat: </h4>
                <div className="h-1/2">
                <h4>{presentingIndex >= 0 ? (meetingParticipants[presentingIndex].name === 'QA' 
                || meetingParticipants[presentingIndex].name === 'UX' 
                || meetingParticipants[presentingIndex].name === 'Product' ? 
                <div className="min-h-7/8">
                    <h4 className="text-l font-bold">{meetingParticipants[presentingIndex].name}</h4>
                    <ul>{subTeams[meetingParticipants[presentingIndex].name].map((member, index) => <li key={index}>{member} </li>)}</ul> 
                </div>
                    : 
                    meetingParticipants[presentingIndex].name) : 'Click to start'}</h4></div>
                {presentedIndexes.length == Object.keys(meetingParticipants).length && presentedIndexes.length > 0 ? null : 
                <div className="h-1/2"><SubmitWorkerNotes saveNotes={saveNotes} index={presentingIndex} /></div>}
                </div>
            } 
            </div>
        {/* Presented Column */}
                <div className="flex flex-col items-center w-1/3 rounded-2xl border-2 border-solid border-grey-500 shadow-md bg-background-variant p-4">
                    <h4 className="text-xl font-bold">Presented</h4>
                        <ul className="flex flex-col gap-2 w-3/4">
                        {presentedIndexes.map((index) => (
                            <>
                            <li key={index}>{meetingParticipants[index].name}</li>
                            <DisplayWorkerNotes meetingParticipant={meetingParticipants[index]} />
                            </>
                        ))}
                        </ul>
                </div>
            </div>
        </div>
        </>
    );
};