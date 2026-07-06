import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Calendar, ExternalLink } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle } from "@/components/site/PageHero";

import hero from "@/assets/cse-hero.jpg";
import { STATS, EVENTS } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO with floating stat pills */}
      <section className="relative overflow-hidden bg-secondary">
        <img src={hero} alt="" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-primary">
          <p className="text-sm font-medium tracking-wide">
            <span className="text-primary/70">HOME</span>
            <span className="mx-2 text-primary/30">/</span>
            <span className="text-brand">DEPARTMENT OVERVIEW</span>
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur border border-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            NAAC A+ · NBA Accredited · Autonomous
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl">
            Department of Computer Science &{" "}
            <span className="text-brand">Engineering</span>
          </h2>
          <p className="mt-5 max-w-2xl text-primary/80 md:text-lg">
            Building the future through innovation in Artificial Intelligence, Cybersecurity, Cloud Computing and Software Engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110 transition">
              Explore the Department <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/digital-initiatives" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:bg-muted transition">
              Digital Initiatives
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border bg-card/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, k, v }) => (
              <div key={v} className="flex items-center gap-3 text-primary">
                <div className="h-10 w-10 rounded-lg bg-brand/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold leading-none">{k}</p>
                  <p className="text-xs text-muted-foreground mt-1">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1 w-full bg-brand" />
      </section>

      {/* Quick Access Highlights */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle kicker="WHAT'S NEXT">Upcoming Events</SectionTitle>
            <ul className="mt-8 space-y-3">
              {EVENTS.slice(0,3).map((e) => {
                const [day, month] = e.date.split(" ");
                return (
                  <li key={e.title} className="group flex items-center gap-5 rounded-xl border border-border bg-card p-4 hover:border-brand hover:shadow-sm transition">
                    <div className="shrink-0 w-16 rounded-lg bg-muted text-primary border border-border text-center py-2">
                      <p className="text-2xl font-extrabold leading-none text-brand">{day}</p>
                      <p className="text-[10px] uppercase tracking-widest mt-1">{month}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold tracking-widest text-brand">{e.tag.toUpperCase()}</p>
                      <p className="font-semibold text-primary">{e.title}</p>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground group-hover:text-brand transition" />
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <Link to="/events" className="text-sm font-semibold text-brand hover:underline">View all events &rarr;</Link>
            </div>
          </div>
          <div>
            <SectionTitle kicker="READ">Latest from Faculty</SectionTitle>
            <div className="mt-8 space-y-4">
              <div className="group rounded-2xl border border-border bg-card p-5 hover:border-brand hover:shadow-sm transition-all">
                <p className="text-xs font-bold tracking-widest text-brand">RESEARCH</p>
                <p className="mt-2 font-bold text-primary text-lg">Advancements in LLMs for Healthcare</p>
                <p className="mt-2 text-sm text-muted-foreground">Dr. R. Karthikeyan discusses how local models are revolutionizing edge AI in medical devices.</p>
                <Link to="/faculty-blog" className="mt-4 inline-flex items-center gap-1 text-xs text-brand font-semibold hover:underline">
                  Read Article <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              <div className="group rounded-2xl border border-border bg-card p-5 hover:border-brand hover:shadow-sm transition-all">
                <p className="text-xs font-bold tracking-widest text-brand">OPINION</p>
                <p className="mt-2 font-bold text-primary text-lg">The Future of Zero-Trust Networks</p>
                <p className="mt-2 text-sm text-muted-foreground">Why perimeter security is no longer enough in the age of distributed cloud computing.</p>
                <Link to="/faculty-blog" className="mt-4 inline-flex items-center gap-1 text-xs text-brand font-semibold hover:underline">
                  Read Article <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
