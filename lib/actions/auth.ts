"use server"

import { signIn, signOut } from "next-auth/react";

{}

export async function login(provider: string) {
    await signIn(provider, { redirectTo: '/' });
    // Placeholder for server-side login logic
    console.log(`Logging in with provider: ${provider}`);
}

export async function logout() {
    await signOut({ redirectTo: '/' });
    // Placeholder for server-side logout logic
    console.log("Logging out");
}