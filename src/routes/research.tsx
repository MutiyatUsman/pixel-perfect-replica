import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/research")({
  head: () => meta("Research & Innovation", "Statistical methodology, biomedical data analytics, and reproducible research at SheSMAT Foundation."),
  component: Research,
});

const areas = ["Statistical methodology", "Biomedical data analytics", "Reproducible research", "Scientific validation", "Research documentation", "Interdisciplinary scientific collaboration", "Responsible analytical innovation"];

function Research() {
  return (
    <>
      <PageHero eyebrow="Research & innovation" title="Rigorous, transparent, reproducible science" subtitle="Our research program centers on NeuroSparse Analytics and the methods that make biomedical findings trustworthy." />
      <Section eyebrow="Focus areas" title="Where we work" tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => <Card key={a} title={a} />)}
        </div>
      </Section>
      <Section eyebrow="Projects" title="Research projects">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">In Progress</span>
              <h3 className="mt-4 text-2xl font-bold text-primary">NeuroSparse Analytics</h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">Developing and validating a reproducible statistical framework for multimodal, incomplete biomedical data, with a primary application in Alzheimer's disease and related dementias.</p>
              <p className="mt-4 text-sm text-foreground"><strong>Lead researcher:</strong> Mutiyat Adeola Usman</p>
            </div>
            <Link to="/neurosparse-analytics" className="btn btn-primary">View project</Link>
          </div>
          <div className="mt-6 grid gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:grid-cols-3">
            <p><strong className="text-foreground">Publications:</strong> To be listed upon release.</p>
            <p><strong className="text-foreground">Supporting documents:</strong> Forthcoming.</p>
            <p><strong className="text-foreground">Collaboration:</strong> <Link to="/collaborate" className="text-accent">Open to partners →</Link></p>
          </div>
        </div>
      </Section>
    </>
  );
}
