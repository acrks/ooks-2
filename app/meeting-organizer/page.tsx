"use client";

import { getDay } from "./utils";
import MeetingTheme from "./theme";
import NextToPresent from "./next-to-present";
import { Announcements } from "./announcements";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function MeetingOrganizer() {
    const router = useRouter();
    const day = getDay();
    const { data: currentSession } = useSession();
    if (!currentSession) {
        router.push("/login");
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Please log in to access the Meeting Organizer.
                </h1>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">
                Meeting Organizer
            </h1>
            <p className="text-xl font-bold text-center text-gray-800">{day}</p>
            <MeetingTheme />
            <Announcements />
            <NextToPresent />
        </div>
    );
}

export default MeetingOrganizer;
