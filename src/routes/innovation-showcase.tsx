import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { INNOVATION_PROJECTS, type ProjectVideo } from "@/data/innovationShowcase";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Search, Github, FileText, Users, User, Calendar, BookOpen } from "lucide-react";

import aiImg from "@/assets/cse-ai.jpg"; // Using this as the tech-themed background

const getYoutubeId = (urlOrId: string) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : urlOrId;
};

export const Route = createFileRoute("/innovation-showcase")({
  head: () => ({
    meta: [
      { title: "Innovation Showcase — CSE Department" },
      {
        name: "description",
        content: "Explore innovative projects developed by our students and faculty through interactive demonstration videos showcasing creativity, research, and technical excellence.",
      },
    ],
  }),
  component: InnovationShowcase,
});

function InnovationShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectVideo | null>(null);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return INNOVATION_PROJECTS.filter((project) => {
      // Text search: matches title, student names
      const query = searchQuery.toLowerCase();
      return project.title.toLowerCase().includes(query) ||
             project.students.some((s) => s.toLowerCase().includes(query));
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHero
        crumb="Innovation Showcase"
        title="Innovation Showcase"
        subtitle="Explore innovative projects developed by our students and faculty through interactive demonstration videos showcasing creativity, research, and technical excellence."
        bg={aiImg}
      />

      <main className="py-20 mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionTitle kicker="DISCOVER">Projects & Research</SectionTitle>
        </Reveal>

        {/* Search Section */}
        <div className="mt-10 mb-12 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title or student..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100} duration={600}>
              <div className="group h-full flex flex-col bg-card rounded-[18px] border border-border shadow-sm overflow-hidden transition-all duration-250 hover:-translate-y-1.5 hover:shadow-xl">
                {/* 16:9 YouTube Embed */}
                <div className="relative w-full pt-[56.25%] bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${getYoutubeId(project.videoId)}?rel=0`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-brand transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Users className="h-4 w-4 text-brand" />
                      <span className="truncate">{project.students.join(", ")}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 gap-2" 
                    variant="outline"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground bg-secondary/30 rounded-2xl border border-border">
            <Search className="h-10 w-10 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium text-foreground">No projects found</p>
            <p className="mt-1">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>

      <SiteFooter />

      {/* Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
            <div className="relative w-full pt-[56.25%] bg-black rounded-t-lg overflow-hidden shrink-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/${getYoutubeId(selectedProject.videoId)}?rel=0&autoplay=1`}
                title={selectedProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base mt-4 text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {selectedProject.description}
                </DialogDescription>
              </div>

              <div className="grid gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2 mb-4">
                      <Users className="h-5 w-5 text-brand" />
                      Team
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center bg-secondary/50 p-3 rounded-lg">
                        <span className="text-muted-foreground font-medium">Students</span>
                        <span className="font-medium text-right">{selectedProject.students.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
