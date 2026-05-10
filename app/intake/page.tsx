import { IntakeForm } from "@/components/intake-form";
import { Card, PageShell } from "@/components/ui";
import { intakeQuestionSections } from "@/lib/intake-form";
import { demoCriteria, demoRoom } from "@/lib/mock-data";

const roomFacts = [
  ["Available", demoRoom.availableMoveInDate],
  ["Rent", `$${demoRoom.rent}/mo`],
  ["Utilities", `$${demoRoom.utilitiesFee}/mo`],
  ["Private room", demoRoom.hasPrivateRoom ? "Yes" : "No"],
  ["Private bathroom", demoRoom.hasPrivateBathroom ? "Yes" : "No"],
  ["Furnished", demoRoom.isFurnished ? "Yes" : "No"],
];

export default function IntakePage() {
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
              Lungo uses a consistent question set so every prospect can provide the same baseline information. This phase does not save submissions, run AI, or make rental decisions.
            </p>
          </Card>
        </aside>

        <Card>
          <IntakeForm sections={intakeQuestionSections} />
        </Card>
      </div>
    </PageShell>
  );
}
