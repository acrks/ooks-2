"use client";

import LoginForm from "@/components/auth/login-form";
import ThirdPartyAuthSignIn from "@/components/signin";
import { Separator } from "@/components/ui/separator";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export default function LoginPieces({ session }: { session: Session | null }) {
    const router = useRouter();
    if (session) router.push("/");
    return (
        <>
            <LoginForm />
            <Separator className="w-8" />
            <ThirdPartyAuthSignIn />
        </>
    );
}
