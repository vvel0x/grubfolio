import { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";

import { api } from "~/trpc/server";
import AuthState from "./AuthState";

export const runtime = "edge";

export default async function HomePage() {
  const auth = await api.auth.getSession.query();

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-pink-400">T3</span> Turbo
        </h1>

        <div className="block w-full">
          <span>Client Auth</span>
          <Suspense fallback={<p>Loading...</p>}>
            <AuthState />
          </Suspense>

          <span className="mt-4">Server Auth</span>
          <pre className="text-xs">{JSON.stringify(auth, null, 2)}</pre>
        </div>

        <UserButton />
      </div>
    </main>
  );
}
