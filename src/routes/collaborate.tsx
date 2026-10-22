import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, BulletList } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/collaborate")({
  head: () => meta("Collaborate", "Partner with SheSMAT Foundation on research methodology, validation, training, and outreach."),
  component: Collaborate,
});

function Collaborate() {
  return (
    <>
      <PageHero eyebrow="Scientific collaboration" title="Collaborate With SheSMAT Foundation" />
      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          <div><p className="eyebrow">We work with</p><div className="mt-4"><BulletList items={["Universities", "Research laboratories", "Biomedical researchers", "Statisticians", "Data scientists", "Educators", "Community organizations", "Scientific nonprofits", "Industry research teams"]} /></div></div>
          <div><p className="eyebrow">Collaboration areas</p><div className="mt-4"><BulletList items={["Research methodology development", "Statistical validation", "Joint training programs", "Community outreach partnerships", "Open science resources"]} /></div></div>
        </div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <InquiryForm title="Collaboration inquiry" submitLabel="Submit inquiry" fields={[...contactFields, { name: "org", label: "Institution / organization" }, { name: "area", label: "Area of interest", type: "select", options: ["Research methodology", "Statistical validation", "Training", "Outreach", "Other"] }, { name: "message", label: "Proposal summary", type: "textarea" }]} />
        </div>
      </Section>
    </>
  );
}
