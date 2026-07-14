import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Cloud, Cpu, Monitor, ServerCog, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import cloudImg from "@/assets/cse-cloud.jpg";
import labImg from "@/assets/cse-lab.jpg";
import aiImg from "@/assets/cse-ai.jpg";

export const Route = createFileRoute("/digital-initiatives")({
  head: () => ({
    meta: [
      { title: "Digital Initiatives — CSE Department, Velammal Institute of Technology" },
      { name: "description", content: "Virtual programming labs, remote cloud environments, and e-learning platforms used by the CSE department." },
      { property: "og:title", content: "Digital Initiatives — CSE Department" },
      { property: "og:description", content: "Cloud-native learning infrastructure, virtual labs and open e-learning platforms." },
    ],
  }),
  component: DigitalInitiatives,
});

const PLATFORMS = [
  { title: "SWAYAM MOOCs", desc: "National platform for open online courses in computing and engineering.", href: "https://swayam.gov.in", img: labImg },
  { title: "Diksha Portal", desc: "Nationwide e-learning platform for schools, colleges and educators.", href: "https://diksha.gov.in", img: aiImg },
  { title: "National Digital Library", desc: "Millions of learning resources for CSE students and researchers.", href: "https://ndl.iitkgp.ac.in", img: cloudImg },
];

const INFRA = [
  { icon: Cloud, title: "Cloud Compute Cluster", desc: "AWS + GCP credits, GPU nodes and Kubernetes labs for every student." },
  { icon: Cpu, title: "Virtual Programming Labs", desc: "Browser-based IDEs with auto-graded assignments — code from anywhere." },
  { icon: Monitor, title: "Remote CAD & Simulation", desc: "Xilinx Vivado, MATLAB and NS-3 accessible over secure remote desktops." },
  { icon: ServerCog, title: "Private DevOps Cloud", desc: "GitLab, Jenkins and Docker registry for capstone teams." },
];

function DigitalInitiatives() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        crumb="Digital Initiatives"
        title="Digital Initiatives & E-Learning Infrastructure"
        subtitle="State-of-the-art virtual programming labs, remote cloud environments and open e-learning platforms — accessible to every CSE student, 24/7."
        bg={aiImg}
      />

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="INFRASTRUCTURE">Departmental Digital Platforms & Virtual Infrastructure</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INFRA.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-xl bg-brand/15 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-bold text-primary">{title}</p>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="OPEN LEARNING">National E-Learning Portals</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLATFORMS.map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" width={1200} height={800} loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-bold text-primary flex items-center gap-2">
                    {p.title}
                    <ExternalLink className="h-4 w-4 text-brand" />
                  </p>
                  <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <SectionTitle kicker="ANY DEVICE. ANY TIME.">Learn From Anywhere</SectionTitle>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Every enrolled student receives a unified cloud identity — a single login to virtual labs, lecture archives, GPU compute, and departmental Git repos. Sync from your phone in the morning, keep coding on a desktop at night.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: GraduationCap, t: "1,200+ students onboarded across 4 years" },
                { icon: BookOpen, t: "800+ recorded lectures with searchable transcripts" },
                { icon: Cloud, t: "24/7 remote access to labs and compute" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-8 w-8 rounded-lg bg-brand/15 text-brand grid place-items-center"><Icon className="h-4 w-4" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <img src={cloudImg} alt="Cloud data center" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-4/3" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
