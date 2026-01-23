"use client";

import { useSession } from "next-auth/react";

export default function ProfileContent() {
    const { data: session } = useSession();
    console.log("Session data in ProfileContent:", session);
    if (!session) {
        return (
            <div className="container mx-auto p-4">
                <p>You must be logged in to view this page.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-neutral-900 rounded p-3">
                <pre className="text-xs text-gray-300">
                    {JSON.stringify(session.user, null, 2)}
                </pre>
            </div>
        </div>
    );
}
