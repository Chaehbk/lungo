import Link from "next/link";
import { Badge, Card, PrimaryLink } from "@/components/ui";

const steps = [
  "Configure a reusable room profile",
  "Share a consistent public intake form",
  "Review structured responses in one dashboard",
  "Manually decide who to contact for a showing",
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <Badge tone="amber">Phase 1 MVP skeleton</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Form-first prescreening for shared housing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-moss">
            Lungo helps homeowners and small landlords turn messy room inquiries into structured, consistent candidate profiles before scheduling showings.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/intake">Preview public intake</PrimaryLink>
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold transition hover:bg-white">
              Open dashboard shell
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-moss">
            Lungo is not a tenant approval engine. It keeps the landlord as the final decision-maker and supports consistent screening criteria.
          </p>
        </div>

        <Card className="self-start">
          <div className="rounded-2xl bg-linen p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay">Workflow</p>
            <ol className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                  <span className="pt-1 text-sm font-medium text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-moss sm:grid-cols-2">
            <p className="rounded-2xl border border-ink/10 p-4">Reusable room profiles, not hard-coded listings.</p>
            <p className="rounded-2xl border border-ink/10 p-4">Local mock data only in this phase.</p>
            <p className="rounded-2xl border border-ink/10 p-4">No AI summaries or automated decisions yet.</p>
            <p className="rounded-2xl border border-ink/10 p-4">Mobile-friendly intake and review shells.</p>
          </div>
        </Card>
      </section>
    </main>
  );
}
