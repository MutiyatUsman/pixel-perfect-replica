import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/impact")({
  head: () => meta("Impact", "How SheSMAT Foundation measures and reports research, training, and community impact."),
  component: Impact,
});

const metrics = ["Outreach events", "Participating organizations", "Attendees", "Volunteer hours", "Training participants", "Resources distributed"];

function Impact() {
  return (
    <>
      <PageHero eyebrow="Impact" title="Measuring what matters" subtitle="We are a newly established foundation. Verified impact figures will be reported here as programs launch — we will never publish estimated or invented numbers." />
      <Section eyebrow="What we will track" title="Impact indicators" tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m} className="rounded-2xl border border-border bg-background p-6">
              <p className="font-display text-4xl font-extrabold text-accent/40">—</p>
              <p className="mt-2 font-semibold text-primary">{m}</p>
              <p className="text-xs text-muted-foreground">Reporting begins with program launch</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
