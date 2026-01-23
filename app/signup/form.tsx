"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Create user in your database via API route
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name }),
        });

        if (res.ok) {
            // Optionally, automatically send a magic link
            await signIn("email", { email, callbackUrl: "/" });
        } else {
            alert("Signup failed");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
            </button>
        </form>
    );
}
