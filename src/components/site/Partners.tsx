import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partners, type Partner } from "@/lib/content";
import { brandAssets } from "@/lib/brand";
export function PartnerLogo({ name, src }: { name: string; src?: string }) {
  return src ? <img src={src} alt={`${name} logo`} loading="lazy" width={240} height={80} className="h-20 max-w-full object-contain object-left" /> : <p className="flex min-h-20 items-center font-display text-2xl font-extrabold text-primary">{name}</p>;
}
export function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const logo = partner.logo ?? (index === 0 ? brandAssets.doctorAiLogo : brandAssets.greenAgritecLogo);
  return <article className="flex flex-col rounded-lg border border-border bg-card p-7"><PartnerLogo name={partner.name} src={logo} /><p className="mt-4 text-xs font-semibold text-accent">{partner.status}</p><h3 className="mt-3 text-lg font-bold">{partner.focus}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>{index === 0 ? <><p className="mt-4 text-sm">Featured: Foundation of Math & Statistics for AI; Machine Learning & Types.</p><Button asChild variant="outline" className="mt-6 self-start"><Link to="/academy">Explore learning resources <ArrowUpRight /></Link></Button></> : <Button asChild variant="outline" className="mt-6 self-start"><Link to="/community">Explore the proposed focus <ArrowUpRight /></Link></Button>}</article>;
}
export function PartnerGrid() { return <div className="grid gap-6 md:grid-cols-2">{partners.map((p, i) => <PartnerCard key={p.name} partner={p} index={i} />)}</div>; }