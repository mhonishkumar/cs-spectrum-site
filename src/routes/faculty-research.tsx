import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, ExternalLink, Calendar, FileText } from "lucide-react";
import { FACULTY_RESEARCH } from "@/data/content";
import img from "@/assets/cse-ai.jpg";

export const Route = createFileRoute("/faculty-research")({
  head: () => ({
    meta: [
      { title: "Faculty Research — CSE Department, Velammal Institute of Technology" },
      { name: "description", content: "Explore the latest research publications, journals, and conference papers from our faculty." },
    ],
  }),
  component: FacultyResearch,
});

function FacultyResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        crumb="Research"
        title="Faculty Research"
        subtitle="Exploring new frontiers in Computer Science. Discover the latest journals, conference papers, and patents published by our esteemed faculty members."
        bg={img}
      />

      <main className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle kicker="PUBLICATIONS">Research & Journals</SectionTitle>
          </Reveal>
          
          <div className="mt-12 space-y-16">
            {FACULTY_RESEARCH.map((faculty, i) => (
              <Reveal key={faculty.facultyName} delay={i * 100} slideUp>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Faculty Profile Sidebar */}
                  <div className="lg:w-1/3 shrink-0">
                    <div className="sticky top-24 flex items-center lg:items-start lg:flex-col gap-4 p-6 rounded-2xl bg-secondary/40 border border-border">
                      <img 
                        src={faculty.avatar} 
                        alt={faculty.facultyName} 
                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full object-cover shadow-sm ring-4 ring-background"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-primary">{faculty.facultyName}</h2>
                        <p className="text-sm font-medium text-brand mt-1">{faculty.role}</p>
                        <div className="mt-4 hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          <span>{faculty.papers.length} Publications</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Papers List */}
                  <div className="lg:w-2/3 flex flex-col gap-4">
                    {faculty.papers.map((paper, j) => (
                      <div 
                        key={j} 
                        className="group flex flex-col sm:flex-row gap-4 p-6 rounded-xl border border-border bg-card hover:border-brand hover:shadow-md transition-all relative overflow-hidden"
                      >
                        {/* Type badge on the left for desktop, top for mobile */}
                        <div className="shrink-0 flex items-start">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase ${
                            paper.type === 'Journal' 
                              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' 
                              : paper.type === 'Conference'
                              ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          }`}>
                            <FileText className="h-3 w-3" />
                            {paper.type}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors leading-snug pr-8">
                            {paper.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground/90 font-medium">
                            {paper.journal}
                          </p>
                          <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {paper.date}
                            </span>
                            <a 
                              href={paper.link}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 text-brand hover:underline"
                            >
                              View Paper <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
