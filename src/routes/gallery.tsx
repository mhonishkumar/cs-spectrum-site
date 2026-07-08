import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle, PageHero } from "@/components/site/PageHero";
import { Lightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import lab from "@/assets/cse-lab.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

interface Album {
  name: string;
  cover: string;
  images: string[];
}

// Use Vite's glob to dynamically discover all images in the public gallery folder.
// We only need the keys (paths) because public files are served directly at root.
const glob = import.meta.glob('/public/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}');
const paths = Object.keys(glob);

const albumsMap = new Map<string, Album>();

paths.forEach((path) => {
  // path: /public/gallery/Album Name/filename.jpg
  const parts = path.split('/');
  if (parts.length < 5) return;
  
  const albumName = parts[3];
  const filename = parts[4];
  const url = path.replace('/public', ''); // Convert to public URL (e.g. /gallery/Album Name/filename.jpg)
  
  if (!albumsMap.has(albumName)) {
    albumsMap.set(albumName, { name: albumName, cover: '', images: [] });
  }
  
  const album = albumsMap.get(albumName)!;
  album.images.push(url);
  
  // Set cover if filename starts with 'cover.' (case insensitive)
  if (filename.toLowerCase().startsWith('cover.')) {
    album.cover = url;
  }
});

// Convert to array and ensure every album has a cover
const albums = Array.from(albumsMap.values())
  .map(album => ({
    ...album,
    cover: album.cover || album.images[0] // Fallback to first image if no cover found
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeAlbumImages, setActiveAlbumImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[]) => {
    setActiveAlbumImages(images);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <PageHero
        crumb="Gallery"
        title="Life @ CSE"
        subtitle="Explore our campus, laboratories, events, and the vibrant student community."
        bg={lab}
      />

      <main className="py-24 mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionTitle kicker="MOMENTS">Event Gallery</SectionTitle>
        </Reveal>
        
        {/* CSS-based Masonry Grid */}
        <div className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {albums.map((album, index) => (
            <Reveal key={album.name} delay={(index % 4) * 80} duration={600}>
              <div 
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm break-inside-avoid cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                onClick={() => openLightbox(album.images)}
              >
                {/* Image */}
                <div className="relative overflow-hidden w-full bg-muted">
                  <img 
                    src={album.cover} 
                    alt={album.name}
                    className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/20 text-white p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                {/* Caption / Album Info */}
                <div className="p-5 bg-card">
                  <h3 className="font-bold text-primary group-hover:text-brand transition-colors leading-tight">
                    {album.name}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mt-2">
                    {album.images.length} {album.images.length === 1 ? 'Photo' : 'Photos'}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          
          {albums.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              No gallery images found in the public/gallery folder.
            </div>
          )}
        </div>
      </main>

      <SiteFooter />

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        images={activeAlbumImages} 
        initialIndex={lightboxIndex} 
      />
    </div>
  );
}
