import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { Search, Filter, X, ChevronLeft, ChevronRight, Award, FileBadge, Medal, LayoutGrid, Maximize2 } from "lucide-react";
import { FACULTY_ACHIEVEMENTS, FacultyAchievement } from "@/data/facultyAchievements";
import { STUDENT_ACHIEVEMENTS } from "@/data/studentAchievements";
import img from "@/assets/cse-careers.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Faculty Achievements — CSE Department" },
      { name: "description", content: "Celebrating the accomplishments, recognitions, awards, certifications, and professional excellence of the faculty members." },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [activeAchievementIndex, setActiveAchievementIndex] = useState<number | null>(null);
  const [activeStudentAchievementIndex, setActiveStudentAchievementIndex] = useState<number | null>(null);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nptelGlob = import.meta.glob('/public/achievements/NPTEL Certificates/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}');
  const nptelCertificates = useMemo(() => Object.keys(nptelGlob).map(p => p.replace(/^\/public/, '')), []);

  const categories = useMemo(() => ["All", ...Array.from(new Set(FACULTY_ACHIEVEMENTS.map(a => a.category)))], []);
  const years = useMemo(() => ["All", ...Array.from(new Set(FACULTY_ACHIEVEMENTS.map(a => a.year)))].sort((a, b) => b.localeCompare(a)), []);

  const filteredAchievements = useMemo(() => {
    return FACULTY_ACHIEVEMENTS.filter(a => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        a.facultyName.toLowerCase().includes(searchLower) ||
        a.title.toLowerCase().includes(searchLower) ||
        a.organization.toLowerCase().includes(searchLower);

      const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
      const matchesYear = selectedYear === "All" || a.year === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  // Modals logic
  const activeAchievement = activeAchievementIndex !== null ? filteredAchievements[activeAchievementIndex] : null;

  const closeModal = () => setActiveAchievementIndex(null);
  const nextAchievement = () => {
    if (activeAchievementIndex !== null && activeAchievementIndex < filteredAchievements.length - 1) {
      setActiveAchievementIndex(activeAchievementIndex + 1);
    }
  };
  const prevAchievement = () => {
    if (activeAchievementIndex !== null && activeAchievementIndex > 0) {
      setActiveAchievementIndex(activeAchievementIndex - 1);
    }
  };

  // Student Modals logic
  const activeStudentAchievement = activeStudentAchievementIndex !== null ? STUDENT_ACHIEVEMENTS[activeStudentAchievementIndex] : null;

  const closeStudentModal = () => setActiveStudentAchievementIndex(null);
  const nextStudentAchievement = () => {
    if (activeStudentAchievementIndex !== null && activeStudentAchievementIndex < STUDENT_ACHIEVEMENTS.length - 1) {
      setActiveStudentAchievementIndex(activeStudentAchievementIndex + 1);
    }
  };
  const prevStudentAchievement = () => {
    if (activeStudentAchievementIndex !== null && activeStudentAchievementIndex > 0) {
      setActiveStudentAchievementIndex(activeStudentAchievementIndex - 1);
    }
  };

  // Stats
  const totalAchievements = FACULTY_ACHIEVEMENTS.length;
  const totalCertifications = FACULTY_ACHIEVEMENTS.filter(a => a.category === "Certification").length;
  const totalRecognitions = FACULTY_ACHIEVEMENTS.filter(a => a.category === "Recognition").length;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      
      <PageHero
        crumb="Achievements"
        title="Faculty & Student Achievements"
        subtitle="Celebrating the accomplishments, recognitions, awards, certifications, and professional excellence of the faculty members of the Department of Computer Science and Engineering."
        bg={img}
      />

      <main className="flex-1 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Faculty Achievements
              </h2>
              <p className="text-muted-foreground max-w-4xl leading-relaxed">
                Celebrating the accomplishments, recognitions, awards, certifications, and professional excellence of the faculty members of the Department of Computer Science and Engineering.
              </p>
            </div>
          </Reveal>

          {/* Achievements Grid */}
          {filteredAchievements.length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-2xl shadow-sm">
              <Medal className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-bold text-primary">No achievements found</h3>
              <p className="text-muted-foreground mt-2">Adjust your filters to see more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement, idx) => (
                <div 
                  key={achievement.id}
                  className="group flex flex-col bg-card rounded-[18px] border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                  style={{ animationDuration: '600ms', animationDelay: `${(idx % 12) * 50}ms`, animationTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                >
                  <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer" onClick={() => setActiveAchievementIndex(idx)}>
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand shadow-sm border border-border/50">
                      {achievement.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2">{achievement.facultyName}</p>
                    <h3 className="text-lg font-bold text-primary leading-tight mb-3 line-clamp-2" title={achievement.title}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                      {achievement.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold">{achievement.organization}</span>
                        <span className="mx-2">•</span>
                        <span>{achievement.date}</span>
                      </div>
                      <button 
                        onClick={() => setActiveAchievementIndex(idx)}
                        className="text-xs font-bold text-brand hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <section className="bg-background py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Students Achievements
              </h2>
              <p className="text-muted-foreground max-w-4xl leading-relaxed">
                The Department of Computer Science and Engineering proudly recognizes the remarkable accomplishment of its students in earning Elite NPTEL Certifications. These achievements reflect strong fundamentals, consistent learning, and commitment to enhancing technical competencies beyond the regular curriculum.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-card rounded-[20px] border border-border shadow-sm p-6 sm:p-10 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                    <span className="text-2xl"></span> NPTEL Elite Certificates
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed">
                    <strong>Course:</strong> Programming in Java (12 Weeks) — <strong>Platform:</strong> NPTEL / SWAYAM — <strong>Institute:</strong> IIT Kharagpur<br/>
                    <span className="block mt-2">
                      Demonstrating exceptional academic excellence, our students secured <strong>Elite Certification</strong> with outstanding consolidated scores ranging from <strong>90% to 93%</strong>. This showcases outstanding proficiency in Java programming, object-oriented design principles, problem-solving techniques, exception handling, multithreading, and software development concepts.
                    </span>
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 bg-brand/10 text-brand px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                  {nptelCertificates.length} Certificates
                </div>
              </div>

              {/* Masonry Gallery */}
              <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {nptelCertificates.map((certPath, idx) => (
                  <Reveal key={certPath} delay={(idx % 6) * 60 + 60} duration={600}>
                    <div 
                      className="group relative rounded-xl overflow-hidden bg-muted border border-border/50 break-inside-avoid cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      onClick={() => {
                        setLightboxIndex(idx);
                        setLightboxOpen(true);
                      }}
                    >
                      <img 
                        src={certPath} 
                        alt={`NPTEL Elite Certificate ${idx + 1}`} 
                        loading="lazy"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-white/20 text-white p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-sm border border-white/30 flex items-center gap-2">
                          <Maximize2 className="h-5 w-5" />
                          <span className="text-xs font-bold px-1">View Certificate</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
                
                {nptelCertificates.length === 0 && (
                  <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
                    No certificates found in the folder.
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Featured Student Achievements Grid */}
          <Reveal delay={200}>
            <div className="mt-20">
              <div className="mb-10 border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Featured Student Achievements
                </h3>
                <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
                  Highlighting the exceptional victories of our students in national-level hackathons, state-level competitions, and prestigious technical events.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {STUDENT_ACHIEVEMENTS.map((achievement, idx) => (
                  <div 
                    key={achievement.id}
                    className="group flex flex-col bg-card rounded-[18px] border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                    style={{ animationDuration: '600ms', animationDelay: `${(idx % 12) * 50}ms`, animationTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted cursor-pointer" onClick={() => setActiveStudentAchievementIndex(idx)}>
                      <img 
                        src={achievement.image} 
                        alt={achievement.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand shadow-sm border border-border/50">
                        Achievement
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2">Student Team</p>
                      <h3 className="text-lg font-bold text-primary leading-tight mb-3 line-clamp-2" title={achievement.title}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                        {achievement.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-end pt-4 border-t border-border mt-auto">
                        <button 
                          onClick={() => setActiveStudentAchievementIndex(idx)}
                          className="text-xs font-bold text-brand hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal for Faculty Achievements */}
      {activeAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="absolute inset-0"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-4xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur-md hover:bg-background/80 text-foreground rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 p-0">
              <div className="w-full bg-muted border-b border-border p-6 flex justify-center items-center">
                <img 
                  src={activeAchievement.image} 
                  alt={activeAchievement.title}
                  className="max-h-[50vh] w-auto object-contain rounded-lg shadow-md"
                />
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-semibold">
                  <span className="bg-brand/10 text-brand px-3 py-1 rounded-full">{activeAchievement.category}</span>
                  <span className="text-muted-foreground">{activeAchievement.date}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2 leading-tight">
                  {activeAchievement.title}
                </h2>
                <p className="text-lg font-bold text-brand mb-8">{activeAchievement.facultyName}</p>
                
                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed">{activeAchievement.description}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-8 gap-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block mb-1">Awarding Organization</span>
                    <span className="font-semibold text-foreground">{activeAchievement.organization}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Navigation */}
            <div className="border-t border-border bg-secondary/30 p-4 flex items-center justify-between">
              <button
                onClick={prevAchievement}
                disabled={activeAchievementIndex === 0}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-background hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={nextAchievement}
                disabled={activeAchievementIndex === filteredAchievements.length - 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-background hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      )}

      {/* Modal for Student Achievements */}
      {activeStudentAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="absolute inset-0"
            onClick={closeStudentModal}
          />
          <div className="relative w-full max-w-4xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={closeStudentModal}
              className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur-md hover:bg-background/80 text-foreground rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 p-0">
              <div className="w-full bg-muted border-b border-border p-6 flex justify-center items-center">
                <img 
                  src={activeStudentAchievement.image} 
                  alt={activeStudentAchievement.title}
                  className="max-h-[50vh] w-auto object-contain rounded-lg shadow-md"
                />
              </div>
              
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-semibold">
                  <span className="bg-brand/10 text-brand px-3 py-1 rounded-full">Achievement</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2 leading-tight">
                  {activeStudentAchievement.title}
                </h2>
                <p className="text-lg font-bold text-brand mb-8">Student Team</p>
                
                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed whitespace-pre-wrap">{activeStudentAchievement.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Navigation */}
            <div className="border-t border-border bg-secondary/30 p-4 flex items-center justify-between">
              <button
                onClick={prevStudentAchievement}
                disabled={activeStudentAchievementIndex === 0}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-background hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={nextStudentAchievement}
                disabled={activeStudentAchievementIndex === STUDENT_ACHIEVEMENTS.length - 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-background hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      )}

      {/* Lightbox for Students Achievements */}
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={nptelCertificates} 
        initialIndex={lightboxIndex} 
      />

      <SiteFooter />
    </div>
  );
}
