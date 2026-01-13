"use client";

import Link from "next/link";

export function HeaderMenu() {
    return (
        <div className="w-full flex justify-between items-center border-b-2 border-solid border-gray-300 p-2">
            <div className="w-1/3"></div>
            <div className="flex justify-evenly w-1/3"></div>
            <div className="h-full w-1/3 mr-5 flex justify-end items-center">
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
}
