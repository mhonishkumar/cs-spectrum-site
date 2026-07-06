import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { ExternalLink } from "lucide-react";
import { RESOURCES, TECHS, JOURNEY } from "@/data/content";
import img from "@/assets/cse-cloud.jpg";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Resources"
        title="Student Resources"
        subtitle="Access lecture notes, video series, and explore the curriculum and emerging technologies."
        bg={img}
      />

      <main className="py-20">
        <section className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="LEARN ANYTIME">Study Materials</SectionTitle>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESOURCES.map(({ icon: Icon, title, href }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-bold text-primary">{title}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand font-semibold">
                  Open Link <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-secondary/50 py-20 mt-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="FOUR-YEAR JOURNEY">Curriculum Progression</SectionTitle>
            <div className="mt-10 relative">
              <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-border" />
              <div className="grid gap-6 md:grid-cols-4">
                {JOURNEY.map((j, i) => (
                  <div key={j.year} className="relative rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 transition-all duration-300 shadow-sm">
                    <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-brand text-brand-foreground grid place-items-center text-sm font-extrabold shadow-md ring-4 ring-card">
                      {i + 1}
                    </div>
                    <p className="text-xs font-bold tracking-widest text-brand mt-2">{j.year.toUpperCase()}</p>
                    <h3 className="mt-1 text-lg font-bold text-primary">{j.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{j.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="INNOVATION">Emerging Technologies</SectionTitle>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-brand hover:shadow-md transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/5 group-hover:from-brand/10 group-hover:to-transparent transition" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 font-bold text-primary text-lg leading-tight">{label}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
