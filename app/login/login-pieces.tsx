"use client";

import LoginForm from "@/components/auth/login-form";
import ThirdPartyAuthSignIn from "@/components/third-party-signin";
import { Separator } from "@/components/ui/separator";

export default function LoginPieces() {
    return (
        <>
            <LoginForm />
            <Separator className="w-8" />
            <ThirdPartyAuthSignIn />
        </>
    );
}
