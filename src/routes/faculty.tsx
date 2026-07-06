import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FACULTY } from "@/data/content";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="py-20 mx-auto max-w-7xl px-6">
        <SectionTitle kicker="THE PEOPLE">Meet Our Faculty</SectionTitle>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Our faculty consists of experienced educators, researchers, and industry professionals dedicated to guiding students toward excellence.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FACULTY.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={p.img} alt={p.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold tracking-widest text-brand">{p.area.toUpperCase()}</p>
                    <p className="text-lg font-extrabold leading-tight">{p.name}</p>
                    <p className="text-sm text-white/80">{p.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
