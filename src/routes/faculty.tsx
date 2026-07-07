import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Search, Filter, User } from "lucide-react";
import { FACULTY } from "@/data/faculty";
import img from "@/assets/cse-ai.jpg";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Directory — CSE Department" },
      { name: "description", content: "Meet the experienced educators, researchers, and professionals guiding our students towards excellence." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("All");

  const uniqueDesignations = useMemo(() => {
    const designations = new Set(FACULTY.map(f => f.designation));
    return ["All", ...Array.from(designations)];
  }, []);

  const filteredFaculty = useMemo(() => {
    return FACULTY.filter(faculty => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        faculty.name.toLowerCase().includes(searchLower) ||
        faculty.designation.toLowerCase().includes(searchLower) ||
        faculty.qualification.toLowerCase().includes(searchLower);

      const matchesDesignation = selectedDesignation === "All" || faculty.designation === selectedDesignation;

      return matchesSearch && matchesDesignation;
    });
  }, [searchQuery, selectedDesignation]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <PageHero
        crumb="The People"
        title="Meet Our Faculty"
        subtitle="Our faculty consists of experienced educators, researchers, and industry professionals dedicated to guiding students toward excellence."
        bg={img}
      />

      <main className="flex-1 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border shadow-sm mb-12">
            <div className="flex-1 w-full md:w-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search faculty by name, designation..." 
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex w-full md:w-auto items-center gap-4">
              <div className="relative flex-1 md:flex-none">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select 
                  className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow appearance-none text-sm font-medium"
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                >
                  {uniqueDesignations.map(designation => (
                    <option key={designation} value={designation}>{designation === "All" ? "All Designations" : designation}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between text-sm font-medium text-muted-foreground">
            <p>Showing <span className="text-primary font-bold">{filteredFaculty.length}</span> faculty members</p>
          </div>

          {filteredFaculty.length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-2xl">
              <User className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-bold text-primary">No faculty members found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((member, idx) => (
                <div 
                  key={member.name}
                  className="group relative flex flex-col items-center text-center bg-card rounded-[18px] border border-border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                  style={{ animationDuration: '600ms', animationDelay: `${(idx % 12) * 50}ms`, animationTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                >
                  {/* Photo */}
                  <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-secondary/50 shadow-inner group-hover:border-brand/20 transition-colors">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-250"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                        <User className="w-12 h-12 opacity-50" />
                      </div>
                    )}
                  </div>
                  
                  {/* Details */}
                  <h3 className="text-lg font-extrabold text-primary mb-1 group-hover:text-brand transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-brand mb-1">
                    {member.designation}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground">
                    {member.qualification}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
