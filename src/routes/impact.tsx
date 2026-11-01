import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { ResearchRoadmap, EvidenceLibrary } from "@/components/site/ResearchSections";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/impact")({ head: () => meta("Research Progress & Impact", "Evidence-based reporting and the intended research-to-community pathway for NeuroGraph Sparse Analytics."), component: Impact });
function Impact() { return <><PageHero eyebrow="Research progress & impact" title="Evidence before outcomes" subtitle="Verified research records and responsibly stated objectives — without invented results, milestones, or impact figures." /><ResearchRoadmap /><EvidenceLibrary /></>; }
