"use client";

import { login } from "@/lib/actions/auth";
import { Button } from "./ui/button";

export default function ThirdPartyAuthSignIn() {
    return (
        <div className="flex flex-col gap-4">
            <form action={login.bind(null, "github")}>
                <Button type="submit" className="bg-black cursor-pointer">
                    Sign in with GitHub
                </Button>
            </form>

            <form action={login.bind(null, "google")}>
                <Button type="submit" className="bg-[#0F9D58] cursor-pointer">
                    Sign in with Google
                </Button>
            </form>
        </div>
    );
}
