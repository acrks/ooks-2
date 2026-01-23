import { signIn } from "next-auth/react";
import { useState } from "react";

export default function  LoginForm() {
    const [email, setEmail] = useState("");
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Sign In Via Email</h1>
            <div className="flex flex-col gap-2 w-1/3 justify-center items-center">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded w-full"
                />
                <button
                    onClick={() => signIn("email", { email, callbackUrl: "/" })}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-1/4 cursor-pointer"
                >
                    Sign In
                </button>
            </div>
        </>
    );
}
