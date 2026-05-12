import Link from "next/link";
import { Card, PageShell, PrimaryLink } from "@/components/ui";

export default function ThankYouPage() {
  return (
    <PageShell
      eyebrow="Intake submitted"
      title="Thank you for your interest."
      description="Your intake response has been received."
    >
      <Card className="max-w-2xl">
        <h2 className="text-xl font-semibold">What happens next</h2>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-moss">
          <li>• The landlord reviews your structured intake response against the configured room criteria.</li>
          <li>• If more context is needed, they may follow up with questions before scheduling a showing.</li>
          <li>• No automated approval or rejection is made by Lungo.</li>
        </ul>
        <div className="mt-5 rounded-2xl bg-linen p-4 text-sm leading-6 text-moss">
          <span className="font-semibold text-ink">Local storage only.</span> Your response is saved in this browser only. It is not sent to a server, and is not visible on any other device or browser. To remove it, clear local storage for this site.
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href="/">Back to home</PrimaryLink>
          <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold transition hover:bg-linen">
            View dashboard
          </Link>
        </div>
      </Card>
    </PageShell>
  );
}
