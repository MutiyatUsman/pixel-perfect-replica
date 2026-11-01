import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { InquiryForm, contactFields } from "@/components/site/InquiryForm";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/events")({
  head: () => meta("Events", "Potential research seminars and technical learning events supporting NeuroGraph Sparse Analytics."),
  component: Events,
});

const types = ["Workshops", "Research seminars", "Webinars", "Training sessions", "Outreach events", "Mentorship sessions"];

function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title="Learn and connect with our community" subtitle="No events are currently announced. Future activities would support statistical methodology education and research dissemination." />
      <Section eyebrow="Event formats" title="Potential event formats" tone="white">
        <div className="flex flex-wrap gap-3">
          {types.map((t) => <span key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary">{t}</span>)}
        </div>
        <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">No events scheduled yet — check back soon.</div>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <InquiryForm title="Event registration & updates" submitLabel="Notify me" fields={[...contactFields, { name: "type", label: "Event type of interest", type: "select", options: types }]} />
        </div>
      </Section>
    </>
  );
}
