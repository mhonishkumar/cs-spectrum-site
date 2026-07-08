import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";
import img from "@/assets/cse-lab.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      {/* Mini Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={img} alt="Department Lab" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-primary-foreground px-6">
          <p className="text-sm font-bold tracking-widest text-brand mb-2">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
        </div>
      </div>

      <main className="py-20 mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-lg flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold text-primary">Head of the Department</h2>
                <p className="text-lg text-primary/80 font-medium mt-1">Dr. R. Venkadesh (Prof & Head)</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our department nurtures innovation, research, and entrepreneurship — preparing students for cutting-edge opportunities in AI, Data Science, Cybersecurity, Cloud, and Full-Stack Development.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-primary">
                  <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">hod.cse@velammalitech.edu.in</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">+91 91762 27586</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="font-medium leading-tight">Velammal Institute of Technology<br/>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-sm flex flex-col relative group">
               <iframe 
                 src="https://maps.google.com/maps?q=Velammal+Institute+of+Technology,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 className="flex-1 w-full h-full border-0"
                 allowFullScreen={false}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Velammal Institute of Technology Location"
               />
               <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <a 
                   href="https://maps.app.goo.gl/KCoHi3nVhnBFZKvg7" 
                   target="_blank" 
                   rel="noreferrer"
                   className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lg hover:brightness-110 transition flex items-center gap-2"
                 >
                   <MapPin className="h-4 w-4" /> Open in Maps
                 </a>
               </div>
            </div>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
