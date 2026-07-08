import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { Search, Filter, ExternalLink, LayoutGrid, List, ChevronLeft, ChevronRight, BookOpen, Award } from "lucide-react";
import img from "@/assets/cse-ai.jpg";
import { PUBLICATIONS } from "@/data/publications";
import { PATENTS } from "@/data/patents";

export const Route = createFileRoute("/faculty-research")({
  head: () => ({
    meta: [
      { title: "Faculty Research & Patents — CSE Department" },
      { name: "description", content: "Explore the scholarly publications, patents, and research contributions by the faculty members of the Department of Computer Science and Engineering." },
    ],
  }),
  component: FacultyResearch,
});

const ITEMS_PER_PAGE = 12;

function FacultyResearch() {
  // Publications State
  const [pubSearchQuery, setPubSearchQuery] = useState("");
  const [pubSelectedYear, setPubSelectedYear] = useState("All");
  const [pubViewMode, setPubViewMode] = useState<"grid" | "table">("grid");
  const [pubCurrentPage, setPubCurrentPage] = useState(1);

  // Patents State
  const [patSearchQuery, setPatSearchQuery] = useState("");
  const [patSelectedStatus, setPatSelectedStatus] = useState("All");
  const [patViewMode, setPatViewMode] = useState<"grid" | "table">("grid");
  const [patCurrentPage, setPatCurrentPage] = useState(1);

  // Publications Logic
  const pubUniqueYears = useMemo(() => {
    const years = new Set(PUBLICATIONS.map(p => p.year));
    return ["All", ...Array.from(years)].sort((a, b) => (b > a ? 1 : -1));
  }, []);

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter(pub => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(pubSearchQuery.toLowerCase()) ||
        pub.facultyName.toLowerCase().includes(pubSearchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(pubSearchQuery.toLowerCase());
        
      const matchesYear = pubSelectedYear === "All" || pub.year === pubSelectedYear;
      return matchesSearch && matchesYear;
    });
  }, [pubSearchQuery, pubSelectedYear]);

  const pubTotalPages = Math.ceil(filteredPublications.length / ITEMS_PER_PAGE);
  const currentPubData = useMemo(() => {
    const start = (pubCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredPublications.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPublications, pubCurrentPage]);

  useMemo(() => setPubCurrentPage(1), [pubSearchQuery, pubSelectedYear]);

  // Patents Logic
  const patUniqueStatuses = useMemo(() => {
    const statuses = new Set(PATENTS.map(p => p.status).filter(Boolean));
    return ["All", ...Array.from(statuses)];
  }, []);

  const filteredPatents = useMemo(() => {
    return PATENTS.filter(pat => {
      const matchesSearch = 
        pat.title.toLowerCase().includes(patSearchQuery.toLowerCase()) ||
        pat.facultyName.toLowerCase().includes(patSearchQuery.toLowerCase()) ||
        pat.patentNumber.toLowerCase().includes(patSearchQuery.toLowerCase());
        
      const matchesStatus = patSelectedStatus === "All" || pat.status === patSelectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [patSearchQuery, patSelectedStatus]);

  const patTotalPages = Math.ceil(filteredPatents.length / ITEMS_PER_PAGE);
  const currentPatData = useMemo(() => {
    const start = (patCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredPatents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPatents, patCurrentPage]);

  useMemo(() => setPatCurrentPage(1), [patSearchQuery, patSelectedStatus]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      
      <PageHero
        crumb="Research & Patents"
        title="Faculty Research & Patents"
        subtitle="Explore the scholarly publications, patents, innovations, and intellectual property contributions of the faculty members of the Department of Computer Science and Engineering."
        bg={img}
      />

      <main className="flex-1 bg-secondary/30 py-16 space-y-24">
        
        {/* =========================================
            SECTION 1: JOURNAL PUBLICATIONS
            ========================================= */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-primary flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-brand" />
              Journal Publications
            </h2>
            <p className="text-muted-foreground mt-2 font-medium">Browse recent scholarly articles and journals published by our faculty.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border shadow-sm mb-8">
            <div className="flex-1 w-full md:w-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search Publications by Title, Faculty, or Journal..." 
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow text-sm"
                value={pubSearchQuery}
                onChange={(e) => setPubSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex w-full md:w-auto items-center gap-4">
              <div className="relative flex-1 md:flex-none">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select 
                  className="w-full md:w-48 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow appearance-none text-sm font-medium"
                  value={pubSelectedYear}
                  onChange={(e) => setPubSelectedYear(e.target.value)}
                >
                  {pubUniqueYears.map(year => (
                    <option key={year} value={year}>{year === "All" ? "All Years" : year}</option>
                  ))}
                </select>
              </div>
              
              <div className="hidden md:flex bg-secondary rounded-lg p-1 border border-border">
                <button 
                  onClick={() => setPubViewMode("grid")}
                  className={`p-1.5 rounded-md transition-all ${pubViewMode === "grid" ? "bg-background shadow-sm text-brand" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Grid View"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setPubViewMode("table")}
                  className={`p-1.5 rounded-md transition-all ${pubViewMode === "table" ? "bg-background shadow-sm text-brand" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Table View"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between text-sm font-medium text-muted-foreground">
            <p>Showing <span className="text-primary font-bold">{filteredPublications.length}</span> publications</p>
          </div>

          {filteredPublications.length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-2xl">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-bold text-primary">No publications found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search query or year filter.</p>
            </div>
          ) : (
            <>
              {(pubViewMode === "grid" || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPubData.map((pub, idx) => (
                    <div 
                      key={idx}
                      className="group flex flex-col justify-between bg-card rounded-[16px] border border-border p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                      style={{ animationDuration: '600ms', animationDelay: `${idx * 100}ms`, animationTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand/10 text-brand">
                            {pub.year}
                          </span>
                          <span className="text-xs font-semibold text-muted-foreground">
                            {pub.issn || "ISSN N/A"}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-primary leading-tight mb-2 group-hover:text-brand transition-colors line-clamp-3">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-foreground/80 font-medium mb-4 line-clamp-2">
                          {pub.journal}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-sm font-semibold text-muted-foreground line-clamp-1 pr-2">
                          {pub.facultyName}
                        </span>
                        {pub.link && (
                          <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-bold text-foreground hover:bg-brand hover:text-brand-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground"
                          >
                            Visit <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {pubViewMode === "table" && (
                <div className="hidden md:block overflow-x-auto rounded-[16px] border border-border shadow-sm bg-card">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                        <th className="px-6 py-4 font-bold">Faculty</th>
                        <th className="px-6 py-4 font-bold">Paper Title</th>
                        <th className="px-6 py-4 font-bold">Journal</th>
                        <th className="px-6 py-4 font-bold w-32">ISSN</th>
                        <th className="px-6 py-4 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {currentPubData.map((pub, idx) => (
                        <tr 
                          key={idx} 
                          className="group hover:bg-secondary/30 transition-colors duration-200 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                          style={{ animationDuration: '400ms', animationDelay: `${idx * 50}ms` }}
                        >
                          <td className="px-6 py-5 align-top">
                            <span className="font-semibold text-sm text-primary whitespace-nowrap">{pub.facultyName}</span>
                            <div className="text-[10px] font-bold text-brand mt-1">{pub.year}</div>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <p className="text-sm font-bold text-primary group-hover:text-brand transition-colors leading-relaxed">
                              {pub.title}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <p className="text-sm font-medium text-muted-foreground line-clamp-2 leading-relaxed">
                              {pub.journal}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <span className="inline-flex items-center px-2 py-1 rounded bg-secondary text-xs font-semibold text-muted-foreground whitespace-nowrap">
                              {pub.issn || "N/A"}
                            </span>
                          </td>
                          <td className="px-6 py-5 align-top text-right">
                            {pub.link && (
                              <a 
                                href={pub.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-bold text-foreground hover:bg-brand hover:border-brand hover:text-brand-foreground transition-colors whitespace-nowrap"
                              >
                                Visit <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {pubTotalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPubCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={pubCurrentPage === 1}
                className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1 px-4">
                {Array.from({ length: pubTotalPages }).map((_, i) => {
                  const page = i + 1;
                  if (page === 1 || page === pubTotalPages || (page >= pubCurrentPage - 1 && page <= pubCurrentPage + 1)) {
                    return (
                      <button
                        key={page}
                        onClick={() => setPubCurrentPage(page)}
                        className={`h-10 w-10 rounded-lg text-sm font-bold transition-colors ${pubCurrentPage === page ? 'bg-brand text-brand-foreground shadow-md' : 'bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                      >
                        {page}
                      </button>
                    );
                  }
                  if (page === 2 && pubCurrentPage > 3) return <span key={page} className="px-1 text-muted-foreground">...</span>;
                  if (page === pubTotalPages - 1 && pubCurrentPage < pubTotalPages - 2) return <span key={page} className="px-1 text-muted-foreground">...</span>;
                  return null;
                })}
              </div>
              <button
                onClick={() => setPubCurrentPage(prev => Math.min(prev + 1, pubTotalPages))}
                disabled={pubCurrentPage === pubTotalPages}
                className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </section>

        {/* =========================================
            SECTION 2: RESEARCH PATENTS
            ========================================= */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="mb-10 pt-10 border-t border-border">
            <h2 className="text-3xl font-extrabold text-primary flex items-center gap-3">
              <Award className="h-8 w-8 text-brand" />
              Research Patents
            </h2>
            <p className="text-muted-foreground mt-2 font-medium">Explore the patents, innovations, and intellectual property contributions.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border shadow-sm mb-8">
            <div className="flex-1 w-full md:w-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search Patents by Title, Faculty, or Number..." 
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow text-sm"
                value={patSearchQuery}
                onChange={(e) => setPatSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex w-full md:w-auto items-center gap-4">
              <div className="relative flex-1 md:flex-none">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select 
                  className="w-full md:w-48 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-shadow appearance-none text-sm font-medium"
                  value={patSelectedStatus}
                  onChange={(e) => setPatSelectedStatus(e.target.value)}
                >
                  {patUniqueStatuses.map(status => (
                    <option key={status} value={status}>{status === "All" ? "All Statuses" : status}</option>
                  ))}
                </select>
              </div>
              
              <div className="hidden md:flex bg-secondary rounded-lg p-1 border border-border">
                <button 
                  onClick={() => setPatViewMode("grid")}
                  className={`p-1.5 rounded-md transition-all ${patViewMode === "grid" ? "bg-background shadow-sm text-brand" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Grid View"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setPatViewMode("table")}
                  className={`p-1.5 rounded-md transition-all ${patViewMode === "table" ? "bg-background shadow-sm text-brand" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Table View"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between text-sm font-medium text-muted-foreground">
            <p>Showing <span className="text-primary font-bold">{filteredPatents.length}</span> patents</p>
          </div>

          {filteredPatents.length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-2xl">
              <Award className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-bold text-primary">No patents found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search query or status filter.</p>
            </div>
          ) : (
            <>
              {(patViewMode === "grid" || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPatData.map((pat, idx) => (
                    <div 
                      key={idx}
                      className="group flex flex-col justify-between bg-card rounded-[16px] border border-border p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                      style={{ animationDuration: '600ms', animationDelay: `${idx * 100}ms`, animationTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${pat.status.toLowerCase().includes('grant') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-brand/10 text-brand'}`}>
                            {pat.status}
                          </span>
                          <span className="text-xs font-semibold text-muted-foreground">
                            {pat.date || "Date N/A"}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-primary leading-tight mb-2 group-hover:text-brand transition-colors line-clamp-3">
                          {pat.title}
                        </h3>
                        <p className="text-sm text-foreground/80 font-medium mb-1 line-clamp-1">
                          App: <span className="font-mono text-muted-foreground">{pat.patentNumber}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                          {pat.office}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-sm font-semibold text-muted-foreground line-clamp-1 pr-2">
                          {pat.facultyName}
                        </span>
                        {pat.link && (
                          <a 
                            href={pat.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-bold text-foreground hover:bg-brand hover:text-brand-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground"
                          >
                            View <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {patViewMode === "table" && (
                <div className="hidden md:block overflow-x-auto rounded-[16px] border border-border shadow-sm bg-card">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                        <th className="px-6 py-4 font-bold">Faculty</th>
                        <th className="px-6 py-4 font-bold">Patent Title</th>
                        <th className="px-6 py-4 font-bold">App Number</th>
                        <th className="px-6 py-4 font-bold w-32">Status / Date</th>
                        <th className="px-6 py-4 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {currentPatData.map((pat, idx) => (
                        <tr 
                          key={idx} 
                          className="group hover:bg-secondary/30 transition-colors duration-200 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                          style={{ animationDuration: '400ms', animationDelay: `${idx * 50}ms` }}
                        >
                          <td className="px-6 py-5 align-top">
                            <span className="font-semibold text-sm text-primary whitespace-nowrap">{pat.facultyName}</span>
                            <div className="text-[10px] font-bold text-muted-foreground mt-1">{pat.office}</div>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <p className="text-sm font-bold text-primary group-hover:text-brand transition-colors leading-relaxed">
                              {pat.title}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                              {pat.patentNumber}
                            </p>
                          </td>
                          <td className="px-6 py-5 align-top">
                            <div className="flex flex-col items-start gap-1">
                              <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold whitespace-nowrap ${pat.status.toLowerCase().includes('grant') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-brand/10 text-brand'}`}>
                                {pat.status || "Unknown"}
                              </span>
                              <span className="text-xs text-muted-foreground font-semibold">{pat.date}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 align-top text-right">
                            {pat.link ? (
                              <a 
                                href={pat.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-bold text-foreground hover:bg-brand hover:border-brand hover:text-brand-foreground transition-colors whitespace-nowrap"
                              >
                                View Patent <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="text-xs font-medium text-muted-foreground/50">N/A</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {patTotalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPatCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={patCurrentPage === 1}
                className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1 px-4">
                {Array.from({ length: patTotalPages }).map((_, i) => {
                  const page = i + 1;
                  if (page === 1 || page === patTotalPages || (page >= patCurrentPage - 1 && page <= patCurrentPage + 1)) {
                    return (
                      <button
                        key={page}
                        onClick={() => setPatCurrentPage(page)}
                        className={`h-10 w-10 rounded-lg text-sm font-bold transition-colors ${patCurrentPage === page ? 'bg-brand text-brand-foreground shadow-md' : 'bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                      >
                        {page}
                      </button>
                    );
                  }
                  if (page === 2 && patCurrentPage > 3) return <span key={page} className="px-1 text-muted-foreground">...</span>;
                  if (page === patTotalPages - 1 && patCurrentPage < patTotalPages - 2) return <span key={page} className="px-1 text-muted-foreground">...</span>;
                  return null;
                })}
              </div>
              <button
                onClick={() => setPatCurrentPage(prev => Math.min(prev + 1, patTotalPages))}
                disabled={patCurrentPage === patTotalPages}
                className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
