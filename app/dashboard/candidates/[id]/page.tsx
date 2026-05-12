import dynamic from "next/dynamic";

const CandidateDetail = dynamic(
  () => import("@/components/candidate-detail").then((mod) => ({ default: mod.CandidateDetail })),
  { ssr: false }
);

export default function CandidateDetailPage({ params }: { params: { id: string } }) {
  return <CandidateDetail id={params.id} />;
}
