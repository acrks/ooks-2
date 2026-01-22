"use client";

import { useSession } from "next-auth/react";

export default function ProfileContent() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
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
