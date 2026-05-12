"use client";

import { useRouter } from "next/navigation";
import { IntakeForm } from "@/components/intake-form";
import { Card, PageShell } from "@/components/ui";
import { intakeQuestionSections } from "@/lib/intake-form";
import { saveLocalCandidate } from "@/lib/local-candidates";
import { demoCriteria, demoRoom } from "@/lib/mock-data";
import type { Candidate } from "@/lib/types";

const roomFacts: [string, string][] = [
  ["Available", demoRoom.availableMoveInDate],
  ["Rent", `$${demoRoom.rent}/mo`],
  ["Utilities", `$${demoRoom.utilitiesFee}/mo`],
  ["Private room", demoRoom.hasPrivateRoom ? "Yes" : "No"],
  ["Private bathroom", demoRoom.hasPrivateBathroom ? "Yes" : "No"],
  ["Furnished", demoRoom.isFurnished ? "Yes" : "No"],
];

export default function IntakePage() {
  const router = useRouter();

  function handleSubmit(values: Record<string, string | boolean>) {
    const candidate: Candidate = {
      id: `local-${Date.now()}`,
      roomId: demoRoom.id,
      fullName: values.full_name as string,
      email: values.email as string,
      phone: values.phone as string,
      preferredMoveInDate: values.preferred_move_in_date as string,
      desiredLeaseLength: values.desired_lease_length as string,
      occupancyConfirmation: values.occupancy_confirmation as string,
      occupationOrFieldOfStudy: values.occupation_or_field_of_study as string,
      workStudyArrangement: values.work_study_arrangement as string,
      typicalHomeRoutine: values.typical_home_routine as string,
      cleanlinessHabits: values.cleanliness_habits as string,
      incomeOrFinancialSupportRange: values.income_or_financial_support_range as string,
      selfReportedCreditRange: values.self_reported_credit_range as string,
      smokeOrVape: values.smoke_or_vape as string,
      petsOrAnimals: values.pets_or_animals as string,
      selfIntro: values.self_intro as string,
      openToApplication: values.open_to_application as string,
      nearbyRoomOptionsOptIn: values.nearby_room_options_opt_in as boolean,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    saveLocalCandidate(candidate);
    router.push("/intake/thank-you");
  }

  return (
    <PageShell
      eyebrow="Public intake"
      title="Tell us about your housing fit"
      description="This reusable prescreening form collects consistent information before a showing. The demo room below is seed data and can be replaced for another homeowner or room."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-4">
          <Card>
            <h2 className="text-xl font-semibold">{demoRoom.title}</h2>
            <p className="mt-2 text-sm text-moss">{demoRoom.locationLabel}</p>
            <dl className="mt-5 space-y-3 text-sm">
              {roomFacts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-moss">{label}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 rounded-2xl bg-linen p-4 text-sm leading-6 text-moss">{demoRoom.homeEnvironmentDescription}</p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">Configurable screening criteria</h2>
            <ul className="mt-4 space-y-3 text-sm text-moss">
              <li>Occupancy: {demoCriteria.requiredOccupancy}</li>
              <li>Lease: {demoCriteria.preferredLeaseLength}</li>
              <li>Smoking: {demoCriteria.smokingPolicy}</li>
              <li>Pets: {demoCriteria.petPolicy}</li>
              <li>Application: {demoCriteria.applicationRequired ? "Required after mutual fit" : "Not required"}</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">Why this form asks these questions</h2>
            <p className="mt-3 text-sm leading-6 text-moss">
              Lungo uses a consistent question set so every prospect can provide the same baseline information. This phase saves submissions to your browser&apos;s local storage only.
            </p>
          </Card>
        </aside>

        <Card>
          <IntakeForm sections={intakeQuestionSections} onSubmit={handleSubmit} />
        </Card>
      </div>
    </PageShell>
  );
}
