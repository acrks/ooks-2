'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BASE_URL, meetingParticipants } from "./const";
import SubmitWorkerNotes from "./submit-worker-notes";
import DisplayWorkerNotes from "./display-worker-notes";
import { HiChevronDoubleRight } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";



export default function NextToPresent() {
    const [presentingIndex, setPresentingIndex] = useState(-1);
    const [presentedIndexes, setPresentedIndexes] = useState<number[]>([]);
    const [yetToPresentIndexes, setYetToPresentIndexes] = useState<number[]>(Object.keys(meetingParticipants).map(Number));
    const [copied, setCopied] = useState(false);
    
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
        if (type === 'needsPeerReview') meetingParticipants[index].needsPeerReview.push(
            { 'ticketId': ticketId,'notes' :notes }
        );
        if (type === 'blockers') meetingParticipants[index].blockers.push(
            { 'ticketId': ticketId,'notes' :notes }
        );
    }

    const copyPresentedSummaryToClipboard = () => {
        let wins = "";
        let needsPeerReview = "";
        let blockers = "";
        let summary = "";
        (presentedIndexes.map((index) => {
            const participant = meetingParticipants[index];
            if (participant.wins.length > 0) {
                wins += `\n${participant.wins.map(win => `- [${win.ticketId}](${BASE_URL}${win.ticketId}): ${win.notes} - ${participant.name}`).join('\n')}\n`;
            }
            if (participant.needsPeerReview.length > 0) {
                needsPeerReview += `\n${participant.needsPeerReview.map(pr => `- [${pr.ticketId}](${BASE_URL}${pr.ticketId}): ${pr.notes} - ${participant.name}`).join('\n')}\n`;
            }
            if (participant.blockers.length > 0) {
                blockers += `\n${participant.blockers.map(blocker => `- [${blocker.ticketId}](${BASE_URL}${blocker.ticketId}): ${blocker.notes} - ${participant.name}`).join('\n')}\n`;
            }
            return summary;
        }).join('\n'));
        summary += `**Wins:**\n` + wins + `\n**Needs Peer Review:**\n` + needsPeerReview + `\n**Blockers:**\n` + blockers;
        navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    function cuePresentingIndex(index: number) {
        if (presentingIndex >= 0) {
            setPresentedIndexes(presentedIndexes.concat(presentingIndex));
        }
        setPresentingIndex(index);
        setYetToPresentIndexes(prevIndexes => prevIndexes.filter(i => i !== index));
    }

    return (
        <>
        <div className="flex flex-col justify-center gap-4">
            {presentedIndexes.length == Object.keys(meetingParticipants).length ? null : <Button onClick={spinTheWheel} className="cursor-pointer self-center">Spin the Wheel!</Button>}
            {/* Yet to Present Column */}
            <div className="flex flex-row gap-4">
            <div className="flex flex-col h-min w-1/3 gap-2 items-center rounded-2xl border-2 border-solid border-grey-500 bg-background-variant shadow-md p-4">
                <h4 className="text-xl font-bold">Yet To Present</h4>
                <ul className="flex flex-col gap-2 w-3/4">
                    {yetToPresentIndexes.map((index) => (
                        <li key={index} className="group cursor-pointer flex items-center bg-white rounded-2xl p-2 px-4 justify-between" onClick={() => {cuePresentingIndex(index)}}>
                            {meetingParticipants[index].name}
                            <HiChevronDoubleRight className="hidden group-hover:inline-block ml-2 text-green-500" />
                        </li>
                    ))}
                </ul>
            </div>
                <div className="flex flex-col h-min w-1/3 border-2 border-solid rounded-2xl border-grey-500 items-center shadow-md bg-background-variant p-4">
                {
                    presentedIndexes.length == Object.keys(meetingParticipants).length ?
                    <h2 className="text-xl font-bold">🎊 All Done! 🎊</h2>
                : <div className="flex flex-col min-h-1/2 gap-3 items-center">
                <h4 className="text-xl font-bold">At Bat: </h4>
                <div className="h-1/2">
                <h4>{presentingIndex >= 0 ? (
                    null) : 'Click to start'}</h4>
                    </div>
                {(presentedIndexes.length == Object.keys(meetingParticipants).length && presentedIndexes.length > 0) || presentingIndex < 0 ? null : 
                    <div className="h-1/2"><SubmitWorkerNotes saveNotes={saveNotes} index={presentingIndex} meetingParticipant={meetingParticipants[presentingIndex]} /></div>}
                </div>
            }
            </div>
        {/* Presented Column */}
                <div className="flex flex-col items-center h-min w-1/3 rounded-2xl border-2 border-solid border-grey-500 shadow-md bg-background-variant p-4 gap-2">
                <div className="flex flex-row gap-4 items-center">
                    <h4 className="text-xl font-bold">Presented</h4><FiCopy className={`cursor-pointer ${copied ? 'hidden' : 'inline-block'}`} onClick={() => copyPresentedSummaryToClipboard()} /><LuCopyCheck className={`text-green-500 ${copied ? 'inline-block' : 'hidden'}`} />
                </div>
                        <ul className="flex flex-col gap-2 w-3/4">
                        {presentedIndexes.map((index) => (
                            <li key={index}>
                            <DisplayWorkerNotes meetingParticipant={meetingParticipants[index]} />
                            </li>
                        ))}
                        </ul>
                </div>
            </div>
        </div>
        </>
    );
};