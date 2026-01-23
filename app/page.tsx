import WelcomeComponent from "@/components/welcome-component";

export const runtime = "nodejs";

export default async function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
            <main>
                <h1 className="text-4xl font-bold text-center text-gray-800">
                    <WelcomeComponent />
                </h1>
            </main>
        </div>
    );
}
