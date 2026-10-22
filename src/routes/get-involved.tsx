import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/get-involved")({
  head: () => meta("Get Involved", "Join the SheSMAT community as a member, volunteer, mentor, or partner."),
  component: GetInvolved,
});

const ways = [
  ["Become a Member", "Access community resources, events, and training updates."],
  ["Volunteer", "Support outreach events, workshops, and educational programs."],
  ["Mentor", "Share your expertise with students and emerging researchers."],
  ["Partner", "Collaborate on research, training, or community initiatives."],
];

function GetInvolved() {
  return (
    <>
      <PageHero eyebrow="Get involved" title="Join Our Community" subtitle="There are many ways to help advance knowledge and expand opportunity." />
      <Section tone="white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <InquiryForm title="Community registration" submitLabel="Join the community" fields={[...contactFields, { name: "role", label: "I'd like to", type: "select", options: ["Become a member", "Volunteer", "Mentor", "Partner"] }, { name: "affiliation", label: "Affiliation", required: false }, { name: "interests", label: "Interests", type: "textarea", required: false }]} />
        </div>
      </Section>
    </>
  );
}
