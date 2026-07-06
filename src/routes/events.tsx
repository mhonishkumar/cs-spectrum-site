import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { Calendar } from "lucide-react";
import { EVENTS } from "@/data/content";
import img from "@/assets/cse-hackathon.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Events"
        title="Upcoming & Past Events"
        subtitle="Stay updated with hackathons, symposiums, guest lectures, and workshops organized by the department."
        bg={img}
      />

      <main className="py-20 mx-auto max-w-4xl px-6">
        <SectionTitle kicker="CALENDAR">All Upcoming Events</SectionTitle>
        <div className="mt-10 space-y-4">
          {EVENTS.map((e) => {
            const [day, month] = e.date.split(" ");
            return (
              <div key={e.title} className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-2xl border border-border bg-card p-6 hover:border-brand hover:shadow-md transition">
                <div className="shrink-0 w-24 rounded-xl bg-muted text-primary border border-border text-center py-4">
                  <p className="text-4xl font-extrabold leading-none text-brand">{day}</p>
                  <p className="text-xs uppercase tracking-widest mt-2 font-semibold">{month}</p>
                </div>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-bold tracking-widest mb-3">
                    {e.tag.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{e.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Join us for an exciting opportunity to learn, network, and showcase your skills. Open to all CSE students.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <Calendar className="h-8 w-8 text-muted-foreground group-hover:text-brand transition" />
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
