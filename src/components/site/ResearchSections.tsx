import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Layout";
import { approach, evidenceRecords, researchRoadmap } from "@/lib/content";

export function Approach() {
  return <Section eyebrow="Our approach" title="From Methodological Innovation to Meaningful Impact" intro="An intended research-to-community pathway, not a statement of completed outcomes.">
    <ol className="grid gap-6 md:grid-cols-5">{approach.map(([name, description], i) => <li key={name} className="border-t-2 border-accent pt-5"><span className="font-display text-3xl font-bold text-accent/40">0{i + 1}</span><h3 className="mt-4 text-lg font-bold text-primary">{name}</h3><p className="mt-3 text-sm text-muted-foreground">{description}</p></li>)}</ol>
  </Section>;
}
export function Dissemination() {
  return <Section eyebrow="Dissemination & translation" title="Advancing Research Beyond Publication" tone="white" intro="SheSMAT aims to provide infrastructure for sharing statistical methodology research with broader research and learning communities.">
    <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">{[
      ["Research Publications & Presentations", "Verified publications, manuscripts, posters, and conference presentations, with attribution and authorized supporting materials."],
      ["Technical Resources", "Methodological explanations, tutorials, reproducible examples, approved code repositories, and technical documentation."],
      ["Educational Dissemination", "Foundational mathematics, statistics, and computational learning connected to the skills needed to understand the research."],
      ["Collaborative Research Engagement", "Pathways for methodological discussion, independent evaluation, and potential interdisciplinary collaboration."],
    ].map(([title, text]) => <div key={title} className="border-t border-border pt-5"><h3 className="text-lg font-bold text-primary">{title}</h3><p className="mt-3 text-sm text-muted-foreground">{text}</p></div>)}</div>
    <div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link to="/academy">Learning resources <ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/contact">Discuss collaboration <ArrowUpRight /></Link></Button></div>
  </Section>;
}
export function ResearchRoadmap() {
  return <Section eyebrow="Implementation pathway" title="Research Implementation Roadmap" intro="Intended phases. Dates, evidence-based status, and supporting links will be added when verified."><ol className="divide-y divide-border">{researchRoadmap.map((m, i) => <li key={m.phase} className="grid gap-3 py-6 md:grid-cols-[4rem_1fr_12rem]"><span className="text-2xl font-bold text-accent">0{i + 1}</span><div><h3 className="text-lg font-bold">{m.phase}</h3><p className="mt-2 text-sm text-muted-foreground">{m.description}</p></div><p className="text-xs text-muted-foreground">{m.status ?? "Status not yet verified"}</p></li>)}</ol></Section>;
}
export function EvidenceLibrary() {
  return <Section eyebrow="Evidence library" title="Research Progress and Scholarly Dissemination" tone="white"><p className="max-w-3xl text-muted-foreground">Verified publications, presentations, posters, technical manuscripts, research resources, and collaboration milestones will be listed with their contributors, dates, status, and official supporting sources.</p>{evidenceRecords.length === 0 ? <div className="mt-8 border-y border-border py-8"><p className="font-semibold">No approved research records published yet.</p><p className="mt-2 text-sm text-muted-foreground">Only verified, authorized records will appear here. Restricted datasets and private research materials are not published.</p></div> : <div className="mt-8 grid gap-5 md:grid-cols-2">{evidenceRecords.map(r => <article key={r.title} className="rounded-lg border border-border p-6"><p className="text-xs text-accent">{r.category} · {r.status} · {r.date}</p><h3 className="mt-3 font-bold">{r.title}</h3><p className="mt-2 text-sm">{r.contributors.join(", ")}</p><p className="mt-3 text-sm text-muted-foreground">{r.description}</p>{r.link && <a href={r.link} target="_blank" rel="noopener noreferrer" className="mt-4 block text-accent underline">Official source</a>}</article>)}</div>}</Section>;
}