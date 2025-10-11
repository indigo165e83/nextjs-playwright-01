import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Container */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={26}
              priority
            />
            <span className="text-sm text-slate-500">Playwright demo sandbox</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              nextjs.org →
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-3 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight">Next.js + Playwright</h1>
            <p className="mt-3 max-w-prose text-slate-600">
              Minimal sandbox with a clean layout for UI exploration and E2E testing. Start with the demo page and extend components as needed.
            </p>
            <p className="mt-3 max-w-prose text-slate-600">
              <a
                href="https://playwright.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 text-sm hover:bg-slate-50"
              >
                Playwright docs
              </a>
            </p>
          </div>
        </section>

        <div>
          <h2 className="text-lg font-semibold">Project info</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-center">
              <span className="mr-3">Framework</span>
              <span className="font-medium">Next.js</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">Testing</span>
              <span className="font-medium">Playwright</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">Styling</span>
              <span className="font-medium">Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <div className="my-3 flex flex-wrap gap-3">
          <Link
            href="/demo01"
            className="py-2 text-base font-semibold hover:opacity-90 underline"
          >
            Demo Page 01
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t pt-6 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Demo Sandbox</p>
            <div className="flex gap-4">
              <a
                className="hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                nextjs.org
              </a>
              <a
                className="hover:underline hover:underline-offset-4"
                href="https://playwright.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                playwright.dev
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
