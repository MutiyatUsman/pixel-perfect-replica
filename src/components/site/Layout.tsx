import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

type NavItem = { to: string; label: string };
const primary: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/neurosparse-analytics", label: "NeuroSparse Analytics" },
];
const groups: { label: string; items: NavItem[] }[] = [
  {
    label: "Programs",
    items: [
      { to: "/research", label: "Research & Innovation" },
      { to: "/academy", label: "Training Academy" },
      { to: "/outreach", label: "Community Outreach" },
      { to: "/mentorship", label: "Mentorship" },
    ],
  },
  {
    label: "Engage",
    items: [
      { to: "/events", label: "Events" },
      { to: "/collaborate", label: "Collaborate" },
      { to: "/impact", label: "Impact" },
      { to: "/get-involved", label: "Get Involved" },
      { to: "/contact", label: "Contact" },
    ],
  },
];
const all = [...primary, ...groups.flatMap((g) => g.items)];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-gradient font-display text-sm font-extrabold text-primary-foreground">
        S<span className="text-gold">·</span>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-extrabold text-primary">SheSMAT</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Foundation</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {primary.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary [&.active]:text-primary">
              {n.label}
            </Link>
          ))}
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary group-focus-within:text-primary">
                {g.label} ▾
              </button>
              <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-card transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {g.items.map((i) => (
                  <Link key={i.to} to={i.to} className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent">
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/get-involved" className="btn btn-primary !py-2">Join Our Community</Link>
        </div>
        <button className="btn btn-outline !px-3 !py-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <div className="container-site grid grid-cols-2 gap-1 py-4">
            {all.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-extrabold">SheSMAT Foundation</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
            A North Carolina nonprofit corporation, incorporated January 6, 2026, with educational and scientific purposes. Home of NeuroSparse Analytics.
          </p>
          <Link to="/get-involved" className="btn btn-gold mt-6">Join Our Community</Link>
        </div>
        {groups.map((g) => (
          <div key={g.label}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{g.label}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {g.items.map((i) => (
                <li key={i.to}><Link to={i.to} className="text-primary-foreground/75 hover:text-primary-foreground">{i.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© 2026 SheSMAT Foundation. All rights reserved.</p>
          <p>Federal tax-exempt status has not been represented on this site.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-primary-foreground/10" />
      <div className="pointer-events-none absolute -right-8 top-12 h-64 w-64 rounded-full border border-gold/30" />
      <div className="container-site relative py-20 md:py-28">
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
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-accent/40">
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
  return (
    <section className="py-20">
      <div className="container-site">
        <div className="rounded-3xl bg-navy-gradient p-10 text-primary-foreground md:p-14">
          <h2 className="max-w-2xl text-3xl font-extrabold">{title}</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
        </div>
      </div>
    </section>
  );
}
