import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Dissemination, ResearchRoadmap, EvidenceLibrary } from "@/components/site/ResearchSections";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/neurosparse-analytics")({ head: () => meta("NeuroGraph Sparse Analytics", "Research dissemination, intended implementation roadmap, and approved evidence for NeuroGraph Sparse Analytics."), component: NeuroGraph });
function NeuroGraph() { return <><PageHero eyebrow="Statistical methodology endeavor" title="NeuroGraph Sparse Analytics" subtitle="Investigating high-dimensional, graph-structured, and blockwise-incomplete biomedical data, with Alzheimer's disease as the principal initial application." /><Dissemination /><ResearchRoadmap /><EvidenceLibrary /></>; }
