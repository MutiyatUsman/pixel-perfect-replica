import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Layout";
import { meta } from "@/lib/meta";
export const Route = createFileRoute("/mentorship")({ head: () => meta("Research Learning & Guidance", "Learning pathways supporting statistical research and technical capacity building at SheSMAT Foundation."), component: Mentorship });
function Mentorship() { return <><PageHero eyebrow="Technical capacity building" title="Learning pathways for emerging researchers" subtitle="Foundational education supports engagement with NeuroGraph Sparse Analytics and complex biomedical data." /><Section tone="white"><p className="text-muted-foreground">No formal mentorship program is currently announced. Learners and educators can explore published educational resources or discuss potential research learning opportunities.</p><div className="mt-6 flex flex-wrap gap-4"><Button asChild><Link to="/academy">Explore Learning Academy</Link></Button><Button asChild variant="outline"><Link to="/contact">Connect with SheSMAT</Link></Button></div></Section></>; }
