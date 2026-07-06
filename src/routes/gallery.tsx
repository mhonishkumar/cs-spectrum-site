import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";

import hero from "@/assets/cse-hero.jpg";
import hackathon from "@/assets/cse-hackathon.jpg";
import coding from "@/assets/cse-coding.jpg";
import ai from "@/assets/cse-ai.jpg";
import careers from "@/assets/cse-careers.jpg";
import lab from "@/assets/cse-lab.jpg";
import cloud from "@/assets/cse-cloud.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const IMAGES = [
  { src: hero, alt: "Department overview" },
  { src: hackathon, alt: "Students at a hackathon" },
  { src: coding, alt: "Student coding in the lab" },
  { src: ai, alt: "AI visualization" },
  { src: careers, alt: "Software engineers at work" },
  { src: lab, alt: "Modern computing lab" },
  { src: cloud, alt: "Cloud computing infrastructure" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Gallery"
        title="Life at CSE"
        subtitle="Explore our campus, laboratories, events, and the vibrant student community."
        bg={lab}
      />

      <main className="py-20 mx-auto max-w-7xl px-6">
        <SectionTitle kicker="MOMENTS">Photo Gallery</SectionTitle>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map((img, index) => (
            <Reveal key={index} delay={index * 100} scale>
              <div className="group relative rounded-2xl overflow-hidden bg-muted aspect-square h-full">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{img.alt}</p>
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
