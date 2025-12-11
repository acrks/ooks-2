import SignIn from "@/components/signin";
import SignOut from "@/components/signout";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);
  const userName = session?.user ? `${session?.user?.name}'s `: "";
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main>
        <h1 className="text-4xl font-bold text-center text-gray-800">{userName}OOKS</h1>
        {!session && (
          <SignIn />)}
        {session && (
          <SignOut />)}
      </main>
    </div>
  );
}
