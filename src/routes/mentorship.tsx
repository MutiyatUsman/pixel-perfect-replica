import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, BulletList } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/mentorship")({
  head: () => meta("Mentorship & Professional Development", "Apply for mentorship or become a mentor with SheSMAT Foundation."),
  component: Mentorship,
});

function Mentorship() {
  return (
    <>
      <PageHero eyebrow="Mentorship & professional development" title="Guidance, Growth, and Opportunity." />
      <Section eyebrow="Who we serve" title="Mentorship for emerging researchers" tone="white">
        <div className="max-w-xl"><BulletList items={["Undergraduate students", "Graduate students", "Early-career researchers", "Aspiring data scientists", "Emerging STEM professionals"]} /></div>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <InquiryForm title="Apply for Mentorship" submitLabel="Apply" fields={[...contactFields, { name: "stage", label: "Career stage", type: "select", options: ["Undergraduate", "Graduate", "Early-career", "Professional"] }, { name: "interests", label: "Research interests", type: "textarea" }]} />
          <InquiryForm title="Become a Mentor" submitLabel="Volunteer as mentor" fields={[...contactFields, { name: "affiliation", label: "Affiliation" }, { name: "expertise", label: "Areas of expertise", type: "textarea" }]} />
        </div>
      </Section>
    </>
  );
}
