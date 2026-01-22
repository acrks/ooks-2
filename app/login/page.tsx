"use client";
import LoginPieces from "./login-pieces";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();
    const { data: currentSession } = useSession();
    if (currentSession) router.push("/");

    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen py-2">
            <LoginPieces />
        </div>
    );
}
