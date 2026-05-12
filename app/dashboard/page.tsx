import { Badge, Card, PageShell } from "@/components/ui";
import { CandidateList } from "@/components/candidate-list";
import { demoCriteria, demoRoom } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Landlord dashboard"
      title="Candidate review shell"
      description="Review candidates for a configurable room profile. Local submissions appear above mock data. Statuses are manual labels in Phase 1; there is no persistence, AI, or automation yet."
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

        <CandidateList />
      </div>
    </PageShell>
  );
}
