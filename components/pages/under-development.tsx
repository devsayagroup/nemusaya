// app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "NemuSaya Villa — Coming Soon",
  description:
    "NemuSaya Villa and our website are currently under development. We’ll be back soon.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#A7B18E] text-neutral-900">
      {/* subtle glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-[-10%] h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-24 right-[-10%] h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <section className="w-full text-center ">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-600">
            Coming soon
          </p>

          <h1 className="mt-4 text-4xl font-style font-light tracking-tight uppercase md:text-7xl">
            Nemu Saya Villa
          </h1>

          <p className="mt-5 max-w-xl mx-auto font-text leading-relaxed text-zinc-600 md:text-md">
            Our villa is currently under development and so is our website.
            We’re building a serene stay and a digital experience to match.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-5">
            {/* Update these */}
            <Link
              href="mailto:hello@nemusaya.com"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-900"
            >
              Contact
            </Link>

            <Link
              href="https://instagram.com/nemusayavillas"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-900"
            >
              Instagram
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}