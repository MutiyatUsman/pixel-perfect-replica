import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us", "The story, mission, vision, values, leadership, and governance of SheSMAT Foundation."),
  component: About,
});

const values = [
  ["Scientific Integrity", "Promote rigorous, transparent, and reproducible research."],
  ["Accessibility", "Expand access to scientific knowledge and educational opportunities."],
  ["Innovation", "Support the development and responsible use of advanced analytical methodologies."],
  ["Collaboration", "Connect researchers, educators, institutions, and communities."],
  ["Empowerment", "Equip individuals with practical knowledge and technical skills."],
  ["Community Impact", "Translate research and education into meaningful opportunities."],
] as const;

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="An organization built to connect science and community" subtitle="SheSMAT Foundation is a North Carolina nonprofit corporation with educational and scientific purposes." />
      <Section eyebrow="Our story" title="From a research framework to a community platform" tone="white">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          SheSMAT Foundation was incorporated on January 6, 2026, to advance, scale, and disseminate NeuroSparse Analytics — and to ensure its benefits reach beyond the lab through training, mentorship, collaboration, and outreach.
        </p>
      </Section>
      <Section eyebrow="Mission & vision">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-xl font-bold text-primary">Our Mission</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>To advance scientific research, statistical innovation, education, and community empowerment by supporting the development, validation, and dissemination of reproducible analytical frameworks for complex biomedical data.</p>
              <p>Through our flagship initiative, NeuroSparse Analytics, SheSMAT Foundation seeks to expand access to scientific knowledge, provide practical training and mentorship, foster interdisciplinary research collaboration, and strengthen community engagement through educational programs and outreach initiatives.</p>
              <p>Our mission is to bridge the gap between scientific innovation and community impact by equipping researchers, students, professionals, and underserved communities with the knowledge, skills, resources, and opportunities needed to participate in and benefit from advances in biomedical research and data-driven science.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-navy-gradient p-8 text-primary-foreground">
            <h3 className="text-xl font-bold text-gold">Our Vision</h3>
            <p className="mt-4 font-display text-2xl font-bold leading-snug">
              To build an inclusive and sustainable scientific community where research innovation, practical training, mentorship, and community outreach work together to advance biomedical discovery, strengthen research capacity, and expand access to scientific opportunities.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Our values" title="What guides our work" tone="white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}
        </div>
      </Section>
      <Section eyebrow="Leadership & governance" title="Our Leadership">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Mutiyat Adeola Usman" tag="Founder & Incorporator">Founder of SheSMAT Foundation and the NeuroSparse Analytics initiative.</Card>
          <Card title="Governance" tag="Board of Directors">SheSMAT Foundation is governed as a North Carolina nonprofit corporation. Board and advisory council profiles will be published as appointments are confirmed.</Card>
        </div>
      </Section>
      <Section eyebrow="Timeline" title="Organizational Timeline" tone="white">
        <ol className="relative max-w-2xl space-y-8 border-l-2 border-border pl-8">
          {[["January 6, 2026", "SheSMAT Foundation incorporated in North Carolina."], ["2026", "Launch of NeuroSparse Analytics as flagship initiative."], ["Upcoming", "SheSMAT Training Academy and community outreach programs open."]].map(([d, t]) => (
            <li key={d} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-card bg-gold" />
              <p className="text-xs font-bold uppercase tracking-wider text-accent">{d}</p>
              <p className="mt-1 text-foreground">{t}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
