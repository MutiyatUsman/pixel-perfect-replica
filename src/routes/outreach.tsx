import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/outreach")({
  head: () => meta("Community Outreach", "STEM education, data literacy, and research awareness programs connecting communities with knowledge and opportunity."),
  component: Outreach,
});

const programs = [
  ["STEM Education Outreach", "School visits, STEM awareness sessions, introductory data science workshops, research demonstrations, and career exploration events."],
  ["Community Data Literacy", "Helping community members understand, interpret, and use data in everyday decisions."],
  ["Women and Emerging Researchers in STEM", "Supporting women and early-stage researchers to enter and thrive in scientific careers."],
  ["Underserved Community Engagement", "Bringing scientific knowledge and opportunity to communities with limited access."],
  ["Research Awareness and Public Engagement", "Making biomedical research understandable and relevant to the public."],
];

function Outreach() {
  return (
    <>
      <PageHero eyebrow="SheSMAT Community Outreach" title="Connecting Communities With Knowledge, Skills, and Opportunities." />
      <Section eyebrow="Programs" title="Outreach programs" tone="white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
        </div>
      </Section>
      <Section eyebrow="Requests" title="Bring SheSMAT to Your Community" intro="Schools, community groups, and organizations can request a visit, workshop, or partnership.">
        <div className="max-w-3xl">
          <InquiryForm title="Outreach request" submitLabel="Send request" fields={[...contactFields, { name: "org", label: "Organization / school" }, { name: "type", label: "Request type", type: "select", options: ["School outreach", "Community partnership", "Workshop", "Volunteer interest"] }, { name: "details", label: "Tell us about your community", type: "textarea" }]} />
        </div>
      </Section>
    </>
  );
}
