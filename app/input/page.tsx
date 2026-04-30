import Link from "next/link";

export default function InputPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-slate-950 text-white">
      <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold mb-4">Input Page</h1>
        <p className="text-base text-slate-300 mb-8">
          This page was restored because the route file was empty and could not be treated as a module.
        </p>
        <Link href="/">
          <button className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
            Back to home
          </button>
        </Link>
      </div>
    </main>
  );
}
