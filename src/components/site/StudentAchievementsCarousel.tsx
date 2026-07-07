import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Trophy, Code, Medal, BookOpen, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { STUDENT_ACHIEVEMENTS } from "@/data/studentAchievements";

// Helper for the category badge
function getCategoryBadge(title: string) {
  const t = title.toLowerCase();
  if (t.includes("nptel")) return { text: "NPTEL Elite", icon: <BookOpen className="w-3 h-3" />, color: "bg-blue-100 text-blue-700 border-blue-200" };
  if (t.includes("hackathon")) return { text: "Hackathon", icon: <Trophy className="w-3 h-3" />, color: "bg-purple-100 text-purple-700 border-purple-200" };
  if (t.includes("cod") || t.includes("tech")) return { text: "Coding Contest", icon: <Code className="w-3 h-3" />, color: "bg-emerald-100 text-emerald-700 border-emerald-200" };
  return { text: "Achievement", icon: <Medal className="w-3 h-3" />, color: "bg-brand/10 text-brand border-brand/20" };
}

export function StudentAchievementsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!STUDENT_ACHIEVEMENTS || STUDENT_ACHIEVEMENTS.length === 0) return null;

  return (
    <section className="bg-secondary/40 py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Student Achievements
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Celebrating the outstanding accomplishments, certifications, competitions, and academic excellence of our students.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Link 
              to="/achievements" 
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground hover:brightness-110 transition shadow-sm whitespace-nowrap group"
            >
              View All Achievements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={200}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex -ml-4 touch-pan-y">
                {STUDENT_ACHIEVEMENTS.map((achievement) => {
                  const badge = getCategoryBadge(achievement.title);
                  
                  return (
                    <div 
                      key={achievement.id}
                      className="min-w-0 flex-none pl-4 w-full md:w-1/2 lg:w-1/3"
                    >
                      <Link 
                        to="/achievements"
                        hash={`student-${achievement.id}`}
                        className="group block relative h-full bg-card rounded-[20px] border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 cursor-pointer overflow-hidden"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 shadow-sm bg-white text-gray-900 border-white/20">
                            {badge.icon}
                            {badge.text}
                          </div>
                          
                          {/* Content overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5 drop-shadow-md">
                              Student Team
                            </p>
                            <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2 drop-shadow-lg text-white">
                              {achievement.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? "w-6 bg-brand" : "w-2 bg-border hover:bg-brand/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  className="p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:bg-secondary transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:bg-secondary transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
