"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function SignOut() {
    return (
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
            Log out
        </DropdownMenuItem>
    );
}
