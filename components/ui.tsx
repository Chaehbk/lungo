import Link from "next/link";
import type { ReactNode } from "react";

export function PageShell({ children, eyebrow, title, description }: { children: ReactNode; eyebrow?: string; title: string; description?: string }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mb-8 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{eyebrow}</p> : null}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {description ? <p className="mt-4 text-lg leading-8 text-moss">{description}</p> : null}
      </div>
      {children}
    </main>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-3xl border border-ink/10 bg-white p-6 shadow-soft ${className}`}>{children}</section>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "amber" | "blue" }) {
  const tones = {
    neutral: "bg-ink/5 text-moss",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-sky-50 text-sky-700",
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <div className="mt-2">{children}</div>
      {hint ? <span className="mt-2 block text-xs leading-5 text-moss">{hint}</span> : null}
    </label>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-moss/60 focus:border-clay focus:ring-4 focus:ring-clay/10";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss">
      {children}
    </Link>
  );
}
