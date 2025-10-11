'use client'

import Link from "next/link";

export default function Demo01() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Heading */}
        {/* Top link */}
        <div className="mb-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-sm hover:bg-slate-50" aria-label="トップ画面に戻る">
            ← トップへ戻る
          </Link>
        </div>

        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Demo Page 01</h1>
            <p className="mt-1 text-sm text-slate-500">
              Structured sample UI with accessible forms, product cards, and lists.
            </p>
          </div>
        </header>

        {/* Main grid */}
        <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="mb-4 text-xl font-semibold">Text</h2>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                Welcome, John
              </span>
              <span
                className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
                title="Issues count"
              >
                25 issues
              </span>
            </div>
          </section>

          {/* Auth card */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="mb-4 text-xl font-semibold">Account</h2>

            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
                Sign in
              </button>
              <Link
                href="#signup"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Sign up
              </Link>
            </div>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                <span>Subscribe</span>
              </label>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>

          {/* Actions & directions */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="mb-4 text-xl font-semibold">Actions</h2>
            <div className="flex flex-wrap gap-3">
              <button data-testid="directions" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
                Itinéraire
              </button>
              <button data-pw="directions" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
                Itinéraire
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Buttons above are duplicated intentionally with different attributes for testing.
            </p>
          </section>

          {/* Issues / Status */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-1">
            <h2 className="mb-4 text-xl font-semibold">Status</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between rounded-xl border px-3 py-2">
                <span>Current user</span>
                <span className="font-medium">John</span>
              </li>
              <li className="flex items-center justify-between rounded-xl border px-3 py-2">
                <span>Open issues</span>
                <span className="font-medium">25</span>
              </li>
            </ul>
          </section>

          {/* Product grid */}
          <section className="md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Products</h2>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <li key={n} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-medium">Product {n}</h3>
                  <p className="mt-1 text-sm text-slate-500">Short description for product {n}.</p>
                  <div className="mt-4">
                    <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                      Add to cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Lists */}
          <section className="space-y-6 md:col-span-1">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold">Fruits</h2>
              <ul className="list-inside list-disc text-sm">
                <li>apple</li>
                <li>banana</li>
                <li>orange</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold">Fruits (for tests)</h2>
              <ul className="space-y-2 text-sm">
                <li data-testid="apple" className="rounded-lg border px-3 py-2">apple</li>
                <li data-testid="banana" className="rounded-lg border px-3 py-2">banana</li>
                <li data-testid="orange" className="rounded-lg border px-3 py-2">orange</li>
              </ul>
            </div>
          </section>

          {/* People actions */}
          <section className="md:col-span-3">
            <h2 className="mb-4 text-xl font-semibold">People</h2>
            <ul className="divide-y rounded-2xl border bg-white shadow-sm">
              {[
                { name: "John", action: "Say hello" },
                { name: "Mary", action: "Say hello" },
                { name: "John", action: "Say goodbye" },
                { name: "Mary", action: "Say goodbye" },
              ].map((item, idx) => (
                <li key={`${item.name}-${item.action}-${idx}`} className="flex items-center justify-between p-4">
                  <div className="font-medium">{item.name}</div>
                  <div>
                    <button className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">{item.action}</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
