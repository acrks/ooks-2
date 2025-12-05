"use client";

import { meetingParticipantsTraits } from "./const";
import Link from "next/link";

export default function DisplayWorkerNotes({meetingParticipant}: {meetingParticipant: meetingParticipantsTraits}) {
    const { name, wins, needsPeerReview, blockers } = meetingParticipant;

    const BASE_URL = "https://targetcw.atlassian.net/browse/SNR-"
    return (
        <div className="flex flex-col gap-2 w-full p-4 rounded-xl bg-white">
            <h4>{name}</h4>
            {wins.length === 0 && needsPeerReview.length === 0 && blockers.length === 0 ? null : <>
            <p className="text-lg font-bold">Notes</p>
            {wins.length > 0 ? (
                <div>
                    <h5 className="font-semibold">Wins:</h5>
                    <ul className="list-disc list-inside">
                        {wins.map((note, idx) => (
                            <li key={idx}>
                                <Link href={`${BASE_URL}${note.ticketId}`} target="_blank" rel="noopener noreferrer">{note.ticketId}</Link>: {note.notes}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
            {needsPeerReview.length > 0 ? (
                <div>
                    <h5 className="font-semibold">Needs Peer Review:</h5>
                    <ul className="list-disc list-inside">
                        {needsPeerReview.map((link, idx) => (
                            <li key={idx}>
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
            {blockers.length > 0 ? (
                <div>
                    <h5 className="font-semibold">Blockers:</h5>
                    <ul className="list-disc list-inside">
                        {blockers.map((note, idx) => (
                            <li key={idx}>
                                {note.ticketId}: {note.notes}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
            </>}
        </div>
    );
}