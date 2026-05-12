"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, Card } from "@/components/ui";
import { getLocalCandidates } from "@/lib/local-candidates";
import { candidates as mockCandidates } from "@/lib/mock-data";
import type { Candidate, CandidateStatus } from "@/lib/types";

const statusTone: Record<CandidateStatus, "neutral" | "green" | "amber" | "blue"> = {
  New: "blue",
  "Strong potential fit": "green",
  "Possible fit — follow-up needed": "amber",
  "Low priority": "neutral",
  "Invited to showing": "green",
  "Not moving forward": "neutral",
};

function CandidateCard({ candidate, isLocal }: { candidate: Candidate; isLocal: boolean }) {
  return (
    <Card className="transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold">{candidate.fullName}</h2>
            <Badge tone={statusTone[candidate.status]}>{candidate.status}</Badge>
            {isLocal && <Badge tone="amber">Local submission</Badge>}
          </div>
          <p className="mt-2 text-sm text-moss">
            {candidate.occupationOrFieldOfStudy} · {candidate.workStudyArrangement}
          </p>
        </div>
        <Link
          href={`/dashboard/candidates/${candidate.id}`}
          className="rounded-full border border-ink/15 px-4 py-2 text-center text-sm font-semibold transition hover:bg-linen"
        >
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
  );
}

export function CandidateList() {
  const [localCandidates, setLocalCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setLocalCandidates(getLocalCandidates());
  }, []);

  return (
    <section className="space-y-4">
      {localCandidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} isLocal={true} />
      ))}
      {mockCandidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} isLocal={false} />
      ))}
    </section>
  );
}
