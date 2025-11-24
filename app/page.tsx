import { HeaderMenu } from "@/components/header/header-menu";


const currentDate: Date = new Date();

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <header className="flex justify-center fixed top-0 left-0 right-0 z-50 border-2 border-solid border-red-700">
        <HeaderMenu />
      </header>
      <main>
        <h1 className="text-4xl font-bold text-center text-gray-800">OOKS</h1>

      </main>
    </div>
  );
}
