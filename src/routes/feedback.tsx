import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Quote, Star } from "lucide-react";
import { FACULTY_FEEDBACK } from "@/data/content";

export const Route = createFileRoute("/feedback")({
  component: FacultyFeedbackPage,
});

const getInitials = (name: string) => {
  const cleanName = name.replace(/^(Dr\.|Prof\.)\s*/i, '');
  return cleanName.charAt(0).toUpperCase();
};

function FacultyFeedbackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Feedback"
        title="Feedback"
        subtitle="Hear what our faculty members have to say about the Department of Computer Science and Engineering and its commitment to academic excellence, innovation, and student development."
      />

      <main className="py-24">
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {FACULTY_FEEDBACK.map((feedback, i) => (
              <Reveal key={feedback.name} delay={i * 100} duration={650}>
                <figure className="group relative rounded-[20px] border border-border bg-card p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 ease-out h-full flex flex-col overflow-hidden">
                  {/* Decorative background quote */}
                  <Quote className="absolute -bottom-6 -right-6 h-40 w-40 text-brand/5 transform -rotate-12 transition-transform duration-300 group-hover:scale-105" strokeWidth={1} />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Feedback Body */}
                  <blockquote className="text-foreground/80 leading-relaxed text-base flex-1 relative z-10">
                    "{feedback.body}"
                  </blockquote>
                  
                  {/* Profile Section */}
                  <figcaption className="mt-8 pt-6 border-t border-border/60 flex items-center gap-4 relative z-10 bg-card">
                    <div className="h-14 w-14 rounded-full bg-brand/10 border border-brand/20 grid place-items-center text-brand font-bold text-xl shrink-0 group-hover:bg-brand group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-300 shadow-sm">
                      {getInitials(feedback.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary group-hover:text-brand transition-colors duration-300">{feedback.name}</p>
                      <p className="text-sm font-medium text-muted-foreground mt-0.5">{feedback.role}</p>
                      {feedback.department && <p className="text-xs text-muted-foreground/70 mt-0.5">{feedback.department}</p>}
                      {feedback.college && <p className="text-xs text-muted-foreground/70 mt-0.5">{feedback.college}</p>}
                      {feedback.email && <p className="text-xs text-brand/70 mt-0.5"><a href={`mailto:${feedback.email}`}>{feedback.email}</a></p>}
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
