import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import img from "@/assets/cse-careers.jpg";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Achievements"
        title="Our Achievements"
        subtitle="A track record of excellence in placements, hackathons, and industry recognitions."
        bg={img}
      />

      <main className="py-20">
        <section className="mx-auto max-w-7xl px-6 py-20 mt-20 border-t border-border">
          <SectionTitle kicker="ALUMNI VOICES">What Our Graduates Say</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="relative rounded-2xl border border-border bg-card p-8 hover:border-brand transition shadow-sm h-full flex flex-col">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-brand/20" />
                  <blockquote className="text-foreground/80 leading-relaxed relative z-10 text-sm flex-1">"{t.body}"</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary grid place-items-center text-primary-foreground font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
