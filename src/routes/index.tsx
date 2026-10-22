import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Section, Card, CtaBand } from "@/components/site/Layout";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () => meta("Advancing Research. Empowering Communities.", "SheSMAT Foundation connects scientific innovation with education, training, mentorship, and community outreach through NeuroSparse Analytics."),
  component: Home,
});

const pillars = [
  ["Research & Innovation", "Developing, validating, and disseminating reproducible analytical frameworks through NeuroSparse Analytics."],
  ["Training & Capacity Building", "Practical courses and workshops in statistics, programming, data science, and biomedical analytics."],
  ["Community Outreach", "STEM education, data literacy, and public research awareness for communities and schools."],
  ["Mentorship & Professional Development", "Guidance for students, early-career researchers, and emerging STEM professionals."],
  ["Scientific Collaboration", "Partnerships with universities, laboratories, educators, and community organizations."],
  ["Open Science & Knowledge Sharing", "Accessible resources, documentation, and reproducibility materials for all."],
];

const workflow = ["Data Collection", "Integration", "Missingness Assessment", "Statistical Modeling", "Validation", "Interpretation", "Reproducible Outputs"];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Research workspace with statistical plots and journals" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-site relative py-28 text-primary-foreground md:py-40">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">SheSMAT Foundation · Est. 2026</p>
          <h1 className="mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Advancing Research. Empowering Communities. Expanding Opportunities.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            A nonprofit platform bridging scientific innovation and community impact — through research, training, mentorship, and outreach powered by NeuroSparse Analytics.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" className="btn btn-gold">Explore Our Mission</Link>
            <Link to="/get-involved" className="btn btn-outline-light">Join Our Community</Link>
            <Link to="/neurosparse-analytics" className="btn btn-outline-light">Discover NeuroSparse Analytics</Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Who we are" title="Where Scientific Innovation Meets Community Impact" tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            SheSMAT Foundation is a North Carolina nonprofit corporation with educational and scientific purposes. We are not simply a research website — we are an organization connecting reproducible science with education, practical training, mentorship, interdisciplinary collaboration, and community outreach.
          </p>
          <blockquote className="border-l-4 border-gold pl-6 text-foreground">
            <p className="font-display text-xl font-bold leading-snug text-primary">
              "To bridge the gap between scientific innovation and community impact."
            </p>
            <Link to="/about" className="mt-4 inline-block text-sm font-semibold text-accent">Read our full mission →</Link>
          </blockquote>
        </div>
      </Section>

      <Section eyebrow="Our six pillars" title="A foundation built for lasting impact">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([t, d], i) => (
            <Card key={t} title={t} tag={`0${i + 1}`}>{d}</Card>
          ))}
        </div>
      </Section>

      <section className="bg-navy-gradient py-20 text-primary-foreground">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Featured scientific initiative</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Introducing NeuroSparse Analytics</h2>
            <p className="mt-5 text-primary-foreground/75">
              A reproducible statistical research framework for complex neurological and biomedical data — integrating imaging, cognitive, biomarker, and clinical information even when data are incomplete.
            </p>
            <Link to="/neurosparse-analytics" className="btn btn-gold mt-8">Learn about the initiative</Link>
          </div>
          <ol className="grid gap-2">
            {workflow.map((w, i) => (
              <li key={w} className="flex items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-3 transition hover:border-gold/50">
                <span className="font-display text-sm font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{w}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section eyebrow="Training & outreach" title="Learning, Growing, and Creating Impact Together" tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="SheSMAT Training Academy">Courses from introductory statistics to biomedical research analytics.
            <Link to="/academy" className="mt-4 block font-semibold text-accent">Explore Training →</Link></Card>
          <Card title="Community Outreach">STEM education, data literacy, and research awareness programs.
            <Link to="/outreach" className="mt-4 block font-semibold text-accent">Community Outreach Programs →</Link></Card>
          <Card title="Events & Workshops">Seminars, webinars, and hands-on workshops for every level.
            <Link to="/events" className="mt-4 block font-semibold text-accent">Register for an Event →</Link></Card>
        </div>
      </Section>

      <CtaBand title="Be Part of a Community Advancing Knowledge" text="Join as a member, volunteer, mentor, or collaborator and help translate research into opportunity.">
        <Link to="/get-involved" className="btn btn-gold">Join Our Community</Link>
        <Link to="/academy" className="btn btn-outline-light">Explore Our Programs</Link>
      </CtaBand>
    </>
  );
}
