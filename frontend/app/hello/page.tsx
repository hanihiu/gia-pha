import Link from "next/link";

import { getApiBaseUrl } from "@/lib/apiBaseUrl";

export default function HelloPage() {
  const apiBaseUrl = getApiBaseUrl();

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-20">
        <header className="space-y-2">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            gia-pha / frontend
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Hello Gia Phả</h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Minimal hello screen to confirm Next.js + TypeScript + Tailwind are wired up.
          </p>
        </header>

        <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
            Env wiring
          </h2>
          <div className="mt-3 space-y-1 text-sm">
            <div className="flex flex-wrap gap-x-2">
              <span className="font-medium">NEXT_PUBLIC_API_BASE_URL:</span>
              <span className="text-zinc-700 dark:text-zinc-300">
                {apiBaseUrl || "(not set)"}
              </span>
            </div>
          </div>
        </section>

        <nav>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="/"
          >
            Back to home
          </Link>
        </nav>
      </main>
    </div>
  );
}
