import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/outreach")({ head: () => meta("Community Outreach", "Research awareness and technical capacity building supporting the dissemination of NeuroGraph Sparse Analytics."), component: Outreach });
function Outreach() { return <><PageHero eyebrow="Community outreach" title="Research awareness and shared analytical knowledge" subtitle="Connecting statistical methodology and Alzheimer's research with learners and community organizations." /><Section tone="white"><p className="max-w-3xl text-muted-foreground">SheSMAT's intended outreach supports research awareness, technical capacity building, and responsible community collaboration. No clinical services or formal funded outreach programs are represented.</p><Button asChild className="mt-6"><Link to="/community">Explore community engagement</Link></Button></Section></>; }
