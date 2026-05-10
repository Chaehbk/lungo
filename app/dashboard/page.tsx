import Link from "next/link";
import { Badge, Card, PageShell } from "@/components/ui";
import { candidates, demoCriteria, demoRoom } from "@/lib/mock-data";
import type { CandidateStatus } from "@/lib/types";

const statusTone: Record<CandidateStatus, "neutral" | "green" | "amber" | "blue"> = {
  New: "blue",
  "Strong potential fit": "green",
  "Possible fit — follow-up needed": "amber",
  "Low priority": "neutral",
  "Invited to showing": "green",
  "Not moving forward": "neutral",
};

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Landlord dashboard"
      title="Candidate review shell"
      description="Review local mock candidates for a configurable room profile. Statuses are manual labels in Phase 1; there is no persistence, AI, or automation yet."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{demoRoom.title}</h2>
                <p className="mt-2 text-sm text-moss">{demoRoom.locationLabel}</p>
              </div>
              <Badge tone="blue">Demo room</Badge>
            </div>
            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-linen p-4"><dt className="text-moss">Rent</dt><dd className="mt-1 font-semibold">${demoRoom.rent}/mo</dd></div>
              <div className="rounded-2xl bg-linen p-4"><dt className="text-moss">Available</dt><dd className="mt-1 font-semibold">{demoRoom.availableMoveInDate}</dd></div>
              <div className="rounded-2xl bg-linen p-4"><dt className="text-moss">Lease target</dt><dd className="mt-1 font-semibold">{demoCriteria.preferredLeaseLength}</dd></div>
              <div className="rounded-2xl bg-linen p-4"><dt className="text-moss">Application</dt><dd className="mt-1 font-semibold">Configurable</dd></div>
            </dl>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Phase 1 guardrails</h2>
            <p className="mt-3 text-sm leading-6 text-moss">
              AI summaries are for organization only when added later. Final decisions are made manually by the landlord based on consistent screening criteria.
            </p>
          </Card>
        </div>

        <section className="space-y-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold">{candidate.fullName}</h2>
                    <Badge tone={statusTone[candidate.status]}>{candidate.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-moss">{candidate.occupationOrFieldOfStudy} · {candidate.workStudyArrangement}</p>
                </div>
                <Link href={`/dashboard/candidates/${candidate.id}`} className="rounded-full border border-ink/15 px-4 py-2 text-center text-sm font-semibold transition hover:bg-linen">
                  View detail
                </Link>
              </div>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div><dt className="text-moss">Move-in</dt><dd className="font-medium">{candidate.preferredMoveInDate}</dd></div>
                <div><dt className="text-moss">Lease</dt><dd className="font-medium">{candidate.desiredLeaseLength}</dd></div>
                <div><dt className="text-moss">Income/support</dt><dd className="font-medium">{candidate.incomeOrFinancialSupportRange}</dd></div>
                <div><dt className="text-moss">Credit</dt><dd className="font-medium">{candidate.selfReportedCreditRange}</dd></div>
                <div><dt className="text-moss">Smoking/vaping</dt><dd className="font-medium">{candidate.smokeOrVape}</dd></div>
                <div><dt className="text-moss">Pets</dt><dd className="font-medium">{candidate.petsOrAnimals}</dd></div>
              </dl>
            </Card>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
