import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Card, BulletList, CtaBand } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/neurosparse-analytics")({
  head: () => meta("NeuroSparse Analytics", "NeuroSparse Analytics: a reproducible statistical research framework advancing innovation in biomedical and neurological research."),
  component: NeuroSparse,
});

const workflow = ["Biomedical Data Collection", "Data Integration", "Missingness Assessment", "Statistical Modeling", "Validation", "Interpretation", "Reproducible Research Outputs"];
const progress = [["Planned", "bg-secondary text-muted-foreground"], ["In Progress", "bg-accent text-accent-foreground"], ["Completed", "bg-primary text-primary-foreground"], ["Independently Validated", "bg-gold text-gold-foreground"]];

function NeuroSparse() {
  return (
    <>
      <PageHero eyebrow="Flagship initiative" title="NeuroSparse Analytics: Advancing Statistical Innovation in Biomedical Research" subtitle="A reproducible statistical research framework for addressing complex neurological and biomedical data challenges.">
        <Link to="/collaborate" className="btn btn-gold">Collaborate on research</Link>
      </PageHero>
      <Section eyebrow="The research challenge" title="Biomedical data are rich — and often incomplete" tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-muted-foreground">Modern studies combine many data types collected across time. Missing measurements, varied scales, and complex relationships make reliable analysis difficult. NeuroSparse Analytics focuses on transparent, reproducible approaches to these challenges.</p>
          <BulletList items={["Brain imaging", "Cognitive assessments", "Biological biomarkers", "Genetic measurements", "Demographic characteristics", "Longitudinal clinical outcomes"]} />
        </div>
      </Section>
      <Section eyebrow="Research workflow" title="From raw data to reproducible insight">
        <ol className="grid gap-3 md:grid-cols-7">
          {workflow.map((w, i) => (
            <li key={w} className="rounded-xl border border-border bg-card p-4 shadow-card transition hover:border-accent">
              <span className="font-display text-xs font-extrabold text-gold">STEP {i + 1}</span>
              <p className="mt-2 text-sm font-semibold text-primary">{w}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section eyebrow="Primary application" title="Alzheimer's Disease and Related Dementia Research" tone="white">
        <p className="max-w-3xl text-muted-foreground">Our initial application focuses on Alzheimer's disease and related dementias, where integrating multimodal and longitudinal data can strengthen understanding of disease progression.</p>
      </Section>
      <Section eyebrow="Resources & progress" title="Research Resources">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card title="Resource library">
            <div className="mt-3"><BulletList items={["Research papers", "Scientific presentations", "Technical reports", "Methodological documentation", "Research posters", "Computational resources", "Reproducibility materials", "Scientific tutorials"]} /></div>
            <p className="mt-4 text-xs">Resources will be published here as they are released.</p>
          </Card>
          <Card title="Research progress stages">
            <div className="mt-4 flex flex-wrap gap-2">
              {progress.map(([p, c]) => <span key={p} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${c}`}>{p}</span>)}
            </div>
          </Card>
        </div>
      </Section>
      <CtaBand title="Research Collaboration" text="Universities, laboratories, and researchers interested in validation, application, or methodological development are invited to connect.">
        <Link to="/collaborate" className="btn btn-gold">Submit a collaboration inquiry</Link>
      </CtaBand>
    </>
  );
}
