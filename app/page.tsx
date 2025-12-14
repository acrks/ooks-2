import SignIn from "@/components/signin";
import SignOut from "@/components/signout";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export default async function Home() {
  const session = await auth();
  // console.log("Session:", session);
  let user = null;

  if (session) {
    user = await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      }
    });
  }
  const userName = session?.user ? `${ session?.user?.name}'s `: "";
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main>
        <h1 className="text-4xl font-bold text-center text-gray-800">{userName}OOKS</h1>
        {!session && (
          <SignIn />)}
        {session && (
          <>
          <div className="bg-neutral-900 rounded p-3">
              <pre className="text-xs text-gray-300">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          <SignOut />
          </>)}
      </main>
    </div>
  );
}
