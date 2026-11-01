import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandAssets } from "@/lib/brand";
type NavItem = { to: "/" | "/about" | "/neurograph" | "/research" | "/research/alzheimers" | "/academy" | "/community" | "/partnerships" | "/get-involved" | "/contact"; label: string };
const all: NavItem[] = [
  { to: "/", label: "Home" }, { to: "/about", label: "About Us" },
  { to: "/neurograph", label: "Our Flagship Endeavor" }, { to: "/research", label: "Research Dissemination" },
  { to: "/academy", label: "Learning Academy" }, { to: "/community", label: "Community Impact" },
  { to: "/partnerships", label: "Partnerships" }, { to: "/get-involved", label: "Get Involved" }, { to: "/contact", label: "Contact" },
];
export function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/" aria-label="SheSMAT Foundation home" className="shrink-0">
    {brandAssets.foundationLogo ? <img src={brandAssets.foundationLogo} alt="SheSMAT Foundation" width={180} height={60} className="h-12 w-44 object-contain" /> : <span className="leading-tight"><span className={`block font-display text-xl font-extrabold ${light ? "text-primary-foreground" : "text-primary"}`}>SheSMAT</span><span className={`block text-xs font-semibold ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Foundation</span></span>}
  </Link>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur"><div className="container-site flex h-20 items-center justify-between gap-5"><Logo /><nav aria-label="Main navigation" className="hidden flex-wrap justify-end gap-x-5 gap-y-2 xl:flex">{all.map(n => <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-xs font-semibold text-muted-foreground transition hover:text-accent [&.active]:text-accent">{n.label}</Link>)}</nav><Button variant="outline" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="xl:hidden">{open ? <X /> : <Menu />}</Button></div>{open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-card xl:hidden"><div className="container-site grid max-h-[75dvh] grid-cols-1 gap-1 overflow-y-auto py-4 sm:grid-cols-2">{all.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary">{n.label}</Link>)}</div></nav>}</header>;
}

export function Footer() {
  return <footer className="bg-primary text-primary-foreground"><div className="container-site grid gap-10 py-14 md:grid-cols-4"><div><Logo light /><p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">Supporting dissemination and responsible scaling of NeuroGraph Sparse Analytics, principally applied to Alzheimer's research.</p></div>{[{ title: "Explore", items: all.slice(1,5) }, { title: "Connect", items: all.slice(5) }, { title: "Research", items: [{ to: "/neurograph" as const, label: "NeuroGraph Sparse Analytics" }, { to: "/research/alzheimers" as const, label: "Alzheimer's Research Focus" }, { to: "/research" as const, label: "Research Resources" }] }].map(g => <div key={g.title}><h3 className="text-sm font-bold text-gold">{g.title}</h3><ul className="mt-5 space-y-3 text-sm">{g.items.map(n => <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-gold">{n.label}</Link></li>)}</ul></div>)}</div><div className="border-t border-primary-foreground/15"><div className="container-site flex flex-wrap justify-between gap-3 py-6 text-xs text-primary-foreground/70"><p>© 2026 SheSMAT Foundation. All rights reserved.</p><Link to="/privacy">Privacy Policy</Link></div></div></footer>;
}

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <div className="container-site relative py-16 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-4xl font-extrabold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, intro, children, tone = "default", id }: { eyebrow?: string; title?: string; intro?: string; children?: ReactNode; tone?: "default" | "white"; id?: string }) {
  return (
    <section id={id} className={tone === "white" ? "bg-card py-20" : "py-20"}>
      <div className="container-site">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ title, children, tag }: { title: string; children?: ReactNode; tag?: string }) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-accent/40">
      {tag && <span className="mb-3 inline-block rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-accent">{tag}</span>}
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      {children && <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return <section className="bg-primary py-16 text-primary-foreground"><div className="container-site"><h2 className="max-w-3xl text-3xl font-extrabold">{title}</h2><p className="mt-4 max-w-2xl text-primary-foreground/75">{text}</p><div className="mt-8 flex flex-wrap gap-3">{children}</div></div></section>;
}
