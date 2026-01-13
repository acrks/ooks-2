import { auth } from "@/auth";
import LoginPieces from "./login-pieces";

export default async function SignInPage() {
    const session = await auth();

    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen py-2">
            <LoginPieces session={session} />
        </div>
    );
}
