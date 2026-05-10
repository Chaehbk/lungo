import Link from "next/link";
import { Card, PageShell, PrimaryLink } from "@/components/ui";

export default function ThankYouPage() {
  return (
    <PageShell
      eyebrow="Confirmation"
      title="Thanks — your intake was received."
      description="In this Phase 1 mockup, submissions are not saved yet. The final version will store structured responses and notify the landlord for manual review."
    >
      <Card className="max-w-2xl">
        <h2 className="text-xl font-semibold">What happens next?</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-moss">
          <li>• The landlord reviews your structured intake response against the configured room criteria.</li>
          <li>• If more context is needed, they may follow up with questions before scheduling a showing.</li>
          <li>• No automated approval or rejection is made by Lungo.</li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/">Back to landing page</PrimaryLink>
          <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold transition hover:bg-linen">
            View dashboard mock data
          </Link>
        </div>
      </Card>
    </PageShell>
  );
}
