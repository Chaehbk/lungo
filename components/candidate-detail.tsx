"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, Card, PageShell, inputClass } from "@/components/ui";
import { getLocalCandidates } from "@/lib/local-candidates";
import { demoCriteria, demoRoom, getCandidateById } from "@/lib/mock-data";
import type { Candidate, CandidateStatus } from "@/lib/types";

const statuses: CandidateStatus[] = [
  "New",
  "Strong potential fit",
  "Possible fit — follow-up needed",
  "Low priority",
  "Invited to showing",
  "Not moving forward",
];

function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link href="/dashboard" className="text-sm font-semibold text-moss hover:text-ink">
        ← Back to dashboard
      </Link>
      <p className="mt-6 text-moss">Candidate not found.</p>
    </main>
  );
}

function DetailView({ candidate, isLocal }: { candidate: Candidate; isLocal: boolean }) {
  const responseRows: [string, string][] = [
    ["Preferred move-in date", candidate.preferredMoveInDate],
    ["Desired lease length", candidate.desiredLeaseLength],
    ["Occupancy confirmation", candidate.occupancyConfirmation],
    ["Occupation or field of study", candidate.occupationOrFieldOfStudy],
    ["Work/study arrangement", candidate.workStudyArrangement],
    ["Typical home routine", candidate.typicalHomeRoutine],
    ["Cleanliness habits", candidate.cleanlinessHabits],
    ["Income or financial support", candidate.incomeOrFinancialSupportRange],
    ["Self-reported credit", candidate.selfReportedCreditRange],
    ["Smoking/vaping", candidate.smokeOrVape],
    ["Pets or animals", candidate.petsOrAnimals],
    ["Open to application", candidate.openToApplication],
    ["Nearby room opt-in", candidate.nearbyRoomOptionsOptIn ? "Yes" : "No"],
  ];

  return (
    <PageShell
      eyebrow="Candidate detail"
      title={candidate.fullName}
      description="A shell for reviewing one structured intake response. AI summary, notes, and status changes are placeholders until later phases."
    >
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm font-semibold text-moss hover:text-ink">
          ← Back to dashboard
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Profile</h2>
                <p className="mt-2 text-sm text-moss">
                  Submitted {new Date(candidate.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <Badge tone="amber">{candidate.status}</Badge>
                {isLocal && <Badge tone="blue">Local submission</Badge>}
              </div>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              <div><dt className="text-moss">Email</dt><dd className="font-medium">{candidate.email}</dd></div>
              <div><dt className="text-moss">Phone</dt><dd className="font-medium">{candidate.phone}</dd></div>
              <div><dt className="text-moss">Room</dt><dd className="font-medium">{demoRoom.title}</dd></div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">Manual status</h2>
            <p className="mt-2 text-sm leading-6 text-moss">Status updates are visual only in Phase 1 and are not persisted.</p>
            <select defaultValue={candidate.status} className={`${inputClass} mt-4`} aria-label="Manual candidate status">
              {statuses.map((status) => <option key={status}>{status}</option>)}
            </select>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">Landlord notes</h2>
            <textarea className={`${inputClass} mt-4`} rows={5} placeholder="Notes placeholder — persistence comes later." />
          </Card>
        </aside>

        <section className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold">AI summary placeholder</h2>
            <p className="mt-3 rounded-2xl bg-linen p-4 text-sm leading-6 text-moss">
              AI summaries are not implemented in Phase 1. When added, they will organize information, surface missing details, and suggest follow-ups without approving, rejecting, or ranking candidates automatically.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Configured criteria snapshot</h2>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 p-4"><dt className="text-moss">Occupancy</dt><dd className="mt-1 font-medium">{demoCriteria.requiredOccupancy}</dd></div>
              <div className="rounded-2xl border border-ink/10 p-4"><dt className="text-moss">Move-in</dt><dd className="mt-1 font-medium">{demoCriteria.preferredMoveInTimeline}</dd></div>
              <div className="rounded-2xl border border-ink/10 p-4"><dt className="text-moss">Lease</dt><dd className="mt-1 font-medium">{demoCriteria.preferredLeaseLength}</dd></div>
              <div className="rounded-2xl border border-ink/10 p-4"><dt className="text-moss">Financial range</dt><dd className="mt-1 font-medium">{demoCriteria.financialQualificationRange}</dd></div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold">Full intake response</h2>
            <dl className="mt-5 divide-y divide-ink/10 text-sm">
              {responseRows.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-[0.35fr_0.65fr]">
                  <dt className="font-semibold text-ink">{label}</dt>
                  <dd className="leading-6 text-moss">{value}</dd>
                </div>
              ))}
              <div className="grid gap-2 py-4 sm:grid-cols-[0.35fr_0.65fr]">
                <dt className="font-semibold text-ink">Self-introduction</dt>
                <dd className="leading-6 text-moss">{candidate.selfIntro}</dd>
              </div>
            </dl>
          </Card>
        </section>
      </div>
    </PageShell>
  );
}

export function CandidateDetail({ id }: { id: string }) {
  const mockMatch = getCandidateById(id);

  const [localCandidates, setLocalCandidates] = useState<Candidate[] | null>(null);

  useEffect(() => {
    setLocalCandidates(getLocalCandidates());
  }, [id]);

  if (mockMatch) return <DetailView candidate={mockMatch} isLocal={false} />;

  // Still reading localStorage
  if (localCandidates === null) return null;

  const localMatch = localCandidates.find((c) => c.id === id);
  if (!localMatch) return <NotFound />;

  return <DetailView candidate={localMatch} isLocal={true} />;
}
