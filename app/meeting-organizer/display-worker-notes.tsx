"use client";

import { meetingParticipantsTraits, subTeams } from "./const";
import Link from "next/link";
import { BASE_URL } from "./const";

export default function DisplayWorkerNotes({
    meetingParticipant,
}: {
    meetingParticipant: meetingParticipantsTraits;
}) {
    const { wins, needsPeerReview, blockers } = meetingParticipant;

    return (
        <div className="flex flex-col gap-2 w-full grow p-4 rounded-xl bg-white">
            {meetingParticipant.name === "QA" ||
            meetingParticipant.name === "UX" ||
            meetingParticipant.name === "Apollo" ||
            meetingParticipant.name === "Product" ? (
                <div className="flex flex-col grow w-full justify-start">
                    <h4 className="text-l font-bold w-full">
                        {meetingParticipant.name}
                    </h4>
                    <ul>
                        {subTeams[meetingParticipant.name].map(
                            (member, index) => (
                                <li key={index}>{member} </li>
                            )
                        )}
                    </ul>
                </div>
            ) : (
                <h4 className="text-l w-full flex justify-start">
                    {meetingParticipant.name}
                </h4>
            )}
            {wins.length === 0 &&
            needsPeerReview.length === 0 &&
            blockers.length === 0 ? null : (
                <>
                    <p className="text-lg font-bold">Notes</p>
                    {wins.length > 0 ? (
                        <div>
                            <h5 className="font-semibold">Wins:</h5>
                            <ul className="list-disc list-inside">
                                {wins.map((note, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={`${BASE_URL}${note.ticketId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            {note.ticketId}
                                        </Link>
                                        : {note.notes}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {needsPeerReview.length > 0 ? (
                        <div>
                            <h5 className="font-semibold">
                                Needs Peer Review:
                            </h5>
                            <ul className="list-disc list-inside">
                                {needsPeerReview.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={`${BASE_URL}${link.ticketId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.ticketId}
                                        </Link>
                                        : {link.notes}
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
                                        <Link
                                            href={`${BASE_URL}${note.ticketId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {note.ticketId}
                                        </Link>
                                        : {note.notes}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </>
            )}
        </div>
    );
}
