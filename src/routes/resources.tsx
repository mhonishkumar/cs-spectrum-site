import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink, ChevronDown } from "lucide-react";
import { RESOURCES, TECHS, JOURNEY } from "@/data/content";
import img from "@/assets/cse-cloud.jpg";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
});

function ResourceCard({ resource }: { resource: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = resource.icon;
  
  if (resource.links) {
    return (
      <div 
        className="group relative rounded-2xl border border-border bg-card p-6 hover:border-brand hover:shadow-md transition-all flex flex-col items-center text-center h-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-14 w-14 rounded-full bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
          <Icon className="h-6 w-6" />
        </div>
        <p className="mt-4 font-bold text-primary">{resource.title}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand font-semibold">
          View Links <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </span>
        
        {/* Dropdown Links */}
        {isOpen && (
          <div className="w-full mt-4 flex flex-col gap-2 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            {resource.links.map((link: any, idx: number) => (
              <a 
                key={idx} 
                href={link.href} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking link
                className="flex items-center justify-between text-sm p-3 rounded-lg bg-secondary/50 hover:bg-brand/10 hover:text-brand text-muted-foreground transition-colors"
              >
                <span className="font-medium">{link.label}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Normal Card
  return (
    <a href={resource.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-center text-center h-full">
      <div className="h-14 w-14 rounded-full bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-4 font-bold text-primary">{resource.title}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand font-semibold">
        Open Link <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}

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
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 100}>
                <ResourceCard resource={resource} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 mt-16 text-center">
          <Reveal>
            <div className="bg-brand/5 border border-brand/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-3">Faculty Feedback Request</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We request the teaching faculty to review the details given in this section and provide valuable suggestion for future improvement. The uploaded documents can be reproduced and developed futher.
              </p>
              <a 
                href="https://forms.gle/MbbJoFzAu6Wn6Lfp6" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground hover:brightness-110 transition shadow-sm"
              >
                Submit Feedback
              </a>
            </div>
          </Reveal>
        </section>
        <section className="bg-secondary/50 py-20 mt-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="FOUR-YEAR JOURNEY">Curriculum Progression</SectionTitle>
            <div className="mt-10 relative">
              <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-border" />
              <div className="grid gap-6 md:grid-cols-4">
                {JOURNEY.map((j, i) => (
                  <Reveal key={j.year} delay={i * 150}>
                    <div className="relative rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 transition-all duration-300 shadow-sm h-full">
                      <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-brand text-brand-foreground grid place-items-center text-sm font-extrabold shadow-md ring-4 ring-card">
                        {i + 1}
                      </div>
                      <p className="text-xs font-bold tracking-widest text-brand mt-2">{j.year.toUpperCase()}</p>
                      <h3 className="mt-1 text-lg font-bold text-primary">{j.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{j.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="INNOVATION">Emerging Technologies</SectionTitle>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHS.map(({ icon: Icon, label, desc }, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-brand hover:shadow-md transition-all h-full">
                  <div className="absolute inset-0 bg-linear-to-br from-brand/0 to-brand/5 group-hover:from-brand/10 group-hover:to-transparent transition" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-bold text-primary text-lg leading-tight">{label}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
