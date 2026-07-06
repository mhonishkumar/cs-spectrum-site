import { createFileRoute } from "@tanstack/react-router";
import { Mail, Facebook, Instagram, Youtube, ChevronRight, Cpu, Shield, Cloud, Brain, Code2, Database, Boxes, Bot } from "lucide-react";

import logo from "@/assets/cse-logo.png";
import hero from "@/assets/cse-hero.jpg";
import hackathon from "@/assets/cse-hackathon.jpg";
import coding from "@/assets/cse-coding.jpg";
import ai from "@/assets/cse-ai.jpg";
import careers from "@/assets/cse-careers.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = ["Home", "Digital Initiatives", "Faculty Blog", "Innovative Teaching & Learning", "Instruction Materials", "Pedagogy", "Lecture Videos"];

const TECHS = [
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Database, label: "Data Science & Big Data" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Boxes, label: "Internet of Things" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Cpu, label: "Blockchain Technology" },
  { icon: Bot, label: "Robotics & Automation" },
  { icon: Code2, label: "Full-Stack Development" },
];

const CAREERS = [
  "Software Developer", "Data Scientist", "AI Engineer", "Cybersecurity Analyst",
  "Cloud Engineer", "Full-Stack Developer", "DevOps Engineer", "Systems Architect",
  "Research Scientist", "Entrepreneur",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 pb-4 border-b border-border">
      <span className="inline-block h-7 w-1.5 rounded-sm bg-brand" />
      <h2 className="text-2xl md:text-3xl font-bold text-primary">{children}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top brand bar */}
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <img src={logo} alt="VIT logo" width={64} height={64} className="h-16 w-16" />
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-primary/70">
                VELAMMAL INSTITUTE OF TECHNOLOGY
              </p>
              <h1 className="text-lg md:text-2xl font-extrabold text-primary leading-tight uppercase">
                Department of Computer Science<br className="hidden md:block" /> & Engineering
              </h1>
            </div>
          </div>
          <nav className="flex items-center gap-2 flex-wrap">
            {[
              { label: "Contact", icon: Mail },
              { label: "Facebook", icon: Facebook },
              { label: "Instagram", icon: Instagram },
              { label: "YouTube", icon: Youtube },
            ].map(({ label, icon: Icon }) => (
              <a key={label} href="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3.5 py-2 text-sm font-medium text-primary hover:border-brand hover:text-brand transition-colors">
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Nav strip */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="flex items-stretch gap-2 overflow-x-auto text-white/85 text-sm font-medium">
            {NAV.map((item, i) => (
              <li key={item} className="shrink-0">
                <a href="#" className={`relative inline-flex items-center px-5 py-4 hover:text-white transition ${i === 0 ? "text-white" : ""}`}>
                  {item}
                  {i === 0 && <span className="absolute left-4 right-4 -bottom-px h-[3px] bg-brand rounded-t" />}
                </a>
              </li>
            ))}
            <li className="ml-auto flex items-center pl-2">
              <button className="h-8 w-8 rounded-full border border-white/30 text-white/80 grid place-items-center hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <img src={hero} alt="" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 text-white">
          <p className="text-sm font-medium tracking-wide">
            <span className="text-white/80">HOME</span>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-brand">DEPARTMENT OVERVIEW</span>
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            Department of Computer Science & Engineering
          </h2>
          <p className="mt-4 max-w-2xl text-white/85 md:text-lg">
            Building the future through innovation in Artificial Intelligence, Cybersecurity, Cloud Computing and Software Engineering.
          </p>
        </div>
        <div className="h-1 w-full bg-brand" />
      </section>

      {/* About */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle>About the Department</SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                In today's rapidly evolving digital world, Computer Science and Engineering has become one of the most dynamic and influential fields of study. From artificial intelligence and cybersecurity to cloud computing and software development, CSE empowers students to create technologies that transform industries and improve everyday life.
              </p>
              <p>
                Our CSE curriculum is designed to combine theoretical knowledge with practical experience, enabling students to develop real-world solutions through projects, research, internships, and industry collaborations.
              </p>
              <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-primary/90">
                "We chose Computer Science because we don't just want to use technology — we want to build it."
              </blockquote>
            </div>
            <img src={coding} alt="Student coding on laptop" width={1200} height={800} loading="lazy" className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Learning beyond classroom */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle>Learning Beyond the Classroom</SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-2 items-center">
            <img src={hackathon} alt="Students collaborating at a hackathon" width={1200} height={800} loading="lazy" className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]" />
            <ul className="space-y-3">
              {[
                "Coding competitions and hackathons",
                "Technical workshops and seminars",
                "Research and innovation projects",
                "Open-source software contributions",
                "Industry internships",
                "Student-led technical clubs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Emerging technologies */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle>Emerging Technologies Shaping Tomorrow</SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {TECHS.map(({ icon: Icon, label }) => (
                <div key={label} className="group rounded-xl border border-border bg-card p-5 hover:border-brand hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-lg bg-brand/15 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-semibold text-primary">{label}</p>
                </div>
              ))}
            </div>
            <img src={ai} alt="Neural network visualization" width={1200} height={800} loading="lazy" className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle>Career Opportunities</SectionTitle>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.1fr] items-center">
            <img src={careers} alt="Software engineers at work" width={1200} height={800} loading="lazy" className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]" />
            <div>
              <p className="text-foreground/80 leading-relaxed">
                A Computer Science and Engineering degree opens doors to diverse and rewarding career paths across industries. Skilled CSE professionals continue to be in high demand around the world.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CAREERS.map((role) => (
                  <span key={role} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-primary hover:border-brand hover:text-brand transition">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Contact card */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle>Head of the Department</SectionTitle>
          <div className="mt-8 rounded-2xl bg-card border border-border shadow-sm p-8 md:p-10">
            <p className="text-foreground/80 leading-relaxed max-w-4xl">
              Our department nurtures innovation, research, and entrepreneurship — preparing students for cutting-edge opportunities in AI, Data Science, Cybersecurity, Cloud, and Full-Stack Development.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <p><span className="font-semibold text-brand">HOD:</span> Dr. R. Karthikeyan (Prof & Head)</p>
              <p><span className="font-semibold text-primary">Email:</span> cse@velammalitech.edu.in</p>
              <p><span className="font-semibold text-primary">Phone:</span> 044-30446300 (Extn: 132) / +91 9087556789</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 w-full bg-brand" />

      {/* Footer */}
      <footer className="bg-primary text-white/85">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">Velammal Institute of Technology</h3>
            <p className="mt-4 font-semibold text-white">Department of Computer Science & Engineering</p>
            <p className="mt-1 text-sm">Velammal Knowledge Park, Chennai – Kolkata Highway, Panchetti, Thiruvallur District, Tamil Nadu – 601204</p>
            <div className="my-5 h-px bg-white/15" />
            <p className="text-sm"><span className="text-brand font-semibold">HOD Contact:</span> Dr. R. Karthikeyan (Prof & Head)</p>
            <p className="text-sm mt-1"><span className="font-semibold">Email:</span> cse@velammalitech.edu.in</p>
            <p className="text-sm mt-1"><span className="font-semibold">Phone:</span> 044-30446300 (Extn: 132) / +91 9087556789</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-semibold text-white">Follow Us:</span>
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-8 w-8 rounded-full border border-white/25 grid place-items-center hover:border-brand hover:text-brand">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Academic Portals</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Department Overview","Syllabus & Notes Repository","Video Lecture Library","Pedagogy & Curriculum","Digital Initiatives"].map((l) => (
                <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Research & Faculty</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Capstone Projects & Prototypes","Faculty Outside Interaction","Faculty Research Blogs","Innovative Teaching & Learning","Emerging Technologies"].map((l) => (
                <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/60 text-center">
            © 2026 Department of Computer Science & Engineering, Velammal Institute of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
