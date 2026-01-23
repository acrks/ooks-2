"use client";

import { useSession } from "next-auth/react";

export default function WelcomeComponent() {
    const { data: session } = useSession();
    const userName = session?.user?.name;
    return (
        <div>
            {session ? (
                <>
                    Welcome back to your OOKS, <br /> {userName}!
                </>
            ) : (
                "Welcome to OOKS!"
            )}
        </div>
    );
}
