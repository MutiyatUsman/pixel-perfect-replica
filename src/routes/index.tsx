import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/research-network.jpg";
import { Button } from "@/components/ui/button";
import { Section, CtaBand } from "@/components/site/Layout";
import { Approach, Dissemination } from "@/components/site/ResearchSections";
import { PartnerGrid } from "@/components/site/Partners";
import { mission, missionDetails, missionAction, vision } from "@/lib/content";
export const Route = createFileRoute("/")({ head: () => ({ meta: [
  { title: "SheSMAT Foundation | NeuroGraph Sparse Analytics & Alzheimer's Research" },
  { name: "description", content: "SheSMAT Foundation supports the dissemination and responsible translation of NeuroGraph Sparse Analytics, advancing statistical methodology research for complex biomedical data with Alzheimer's disease as its principal initial application." },
  { property: "og:title", content: "SheSMAT Foundation | NeuroGraph Sparse Analytics & Alzheimer's Research" },
  { property: "og:description", content: "Statistical methodology research, Alzheimer's disease, technical education, and responsible research-to-community collaboration." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Home });
function Home() { return <>
<section className="relative overflow-hidden bg-primary"><img src={hero} alt="Connected statistical data networks and a neurological research visualization" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover object-right" /><div className="absolute inset-0 bg-hero-overlay" /><div className="container-site relative py-16 text-primary-foreground md:py-20"><p className="text-xs font-bold uppercase text-gold">SheSMAT Foundation · Established January 2026</p><h1 className="mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight md:text-5xl">Advancing Statistical Innovation for Alzheimer's Research and Beyond</h1><p className="mt-5 max-w-2xl text-lg font-semibold text-gold">NeuroGraph Sparse Analytics — From Statistical Research to Real-World Impact</p><p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85">SheSMAT Foundation advances the dissemination and responsible translation of NeuroGraph Sparse Analytics, a statistical research framework addressing complex, interconnected, and incomplete biomedical data. With Alzheimer's disease as its principal initial application, we connect methodological innovation with interdisciplinary collaboration, technical education, and community engagement.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="h-auto whitespace-normal bg-gold py-3 text-gold-foreground hover:bg-gold/90"><Link to="/research">Explore Our Research <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg" className="h-auto whitespace-normal border-primary-foreground/40 bg-transparent py-3 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/research/alzheimers">Our Alzheimer's Research Focus <ArrowUpRight /></Link></Button></div></div></section>
<Section eyebrow="Our purpose" title="Statistical research. Shared knowledge. Responsible impact." tone="white"><div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]"><div><h3 className="text-xl font-bold text-primary">Our Mission</h3><div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground"><p>{mission}</p><p>{missionDetails}</p><p>{missionAction}</p></div></div><div className="border-l-2 border-gold pl-7"><h3 className="text-xl font-bold text-primary">Our Vision</h3><p className="mt-5 text-base leading-relaxed text-muted-foreground">{vision}</p></div></div></Section>
<Approach /><Dissemination />
<Section eyebrow="Research, education & community" title="Research, Education & Community Collaborations"><PartnerGrid /></Section>
<CtaBand title="Help Advance Research Dissemination and Responsible Innovation" text="Connect around methodological discussion, technical learning, interdisciplinary evaluation, and responsible research engagement."><Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90"><Link to="/get-involved">Get Involved <ArrowUpRight /></Link></Button></CtaBand>
</>; }
