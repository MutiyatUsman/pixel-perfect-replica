import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partners, type Partner } from "@/lib/content";
import { brandAssets } from "@/lib/brand";
import { useCms } from "@/components/site/useCms";
import type { CmsPartner } from "@/lib/cms";
export function PartnerLogo({ name, src }: { name: string; src?: string | undefined }) {
  return src ? <img src={src} alt={`${name} logo`} loading="lazy" width={240} height={80} className="h-20 max-w-full object-contain object-center" /> : <p className="flex min-h-20 items-center font-display text-2xl font-extrabold text-primary">{name}</p>;
}
export function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const logo = partner.logo ?? (index === 0 ? brandAssets.doctorAiLogo : brandAssets.greenAgritecLogo);
  return <article className="flex flex-col rounded-lg border border-border bg-card p-7"><div className={`flex min-h-28 items-center justify-center rounded-md p-4 ${index === 0 ? "bg-[#082b4c]" : "bg-white"}`}><PartnerLogo name={partner.name} src={logo} /></div><p className="mt-4 text-xs font-semibold text-accent">{partner.status}</p><h3 className="mt-3 text-lg font-bold">{partner.focus}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>{index === 0 ? <><p className="mt-4 text-sm">Featured: Foundation of Math & Statistics for AI; Machine Learning & Types.</p><Button asChild variant="outline" className="mt-6 self-start"><Link to="/academy">Explore learning resources <ArrowUpRight /></Link></Button></> : <Button asChild variant="outline" className="mt-6 self-start"><Link to="/community">Explore the proposed focus <ArrowUpRight /></Link></Button>}</article>;
}
export function PartnerGrid() { const cms = useCms<CmsPartner>("partner"); return <div className="grid gap-6 md:grid-cols-2">{partners.map((p, i) => <PartnerCard key={p.name} partner={p} index={i} />)}{cms.items.filter(p => !partners.some(existing => existing.name.toLowerCase() === p.name.toLowerCase())).map(p => <article key={p._id} className="flex flex-col rounded-lg border border-border bg-card p-7"><div className="flex min-h-28 items-center justify-center rounded-md bg-white p-4"><PartnerLogo name={p.name} src={p.logoUrl}/></div><p className="mt-4 text-xs font-semibold text-accent">{p.status}</p><h3 className="mt-3 text-lg font-bold">{p.focus || p.name}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>{p.website?.startsWith("https://") && <a href={p.website} target="_blank" rel="noopener noreferrer" className="mt-6 font-semibold text-accent hover:underline">Visit partner website ↗</a>}</article>)}</div>; }