"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

export function NavBar({ session }: { session: Session | null }) {
    const pathname = usePathname();
    if (pathname.includes("/login")) {
        return (
            <div className="w-full flex justify-end items-center border-b-2 border-solid border-gray-300 p-2">
                <div className="pr-4">
                    <Link href="/">Home</Link>
                </div>
            </div>
        );
    }
    if (!session) {
        return (
            <div className="w-full flex justify-end items-center border-b-2 border-solid border-gray-300 p-2">
                <div className="pr-4">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="w-full flex justify-between items-center border-b-2 border-solid border-gray-300 p-2">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex flex-row justify-between items-center">
                <Link href="/">Home</Link>

                <Link href="/lists">Lists</Link>

                <Link href="/meeting-organizer">Meeting Organizer</Link>
            </div>
            <div className="w-1/3 flex justify-end pr-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
                            <DropdownMenuItem
                                onSelect={() =>
                                    (window.location.href = "/settings")
                                }
                            >
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    Invite users
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            Email
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Message
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        {/* <DropdownMenuItem>
                                            More...
                                        </DropdownMenuItem> */}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>New Team</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
