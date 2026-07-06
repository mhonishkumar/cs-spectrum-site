import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cpu, Shield, Cloud, Brain, Code2, Database, Boxes, Bot,
  GraduationCap, Trophy, Users, Rocket, BookOpen, Calendar,
  ArrowRight, Star, Quote, Play, FileText, Github, ExternalLink,
  Sparkles, Target, Lightbulb, Award,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero as _PageHero, SectionTitle } from "@/components/site/PageHero";
void _PageHero;

import hero from "@/assets/cse-hero.jpg";
import hackathon from "@/assets/cse-hackathon.jpg";
import coding from "@/assets/cse-coding.jpg";
import ai from "@/assets/cse-ai.jpg";
import careers from "@/assets/cse-careers.jpg";
import lab from "@/assets/cse-lab.jpg";
import cloud from "@/assets/cse-cloud.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const TECHS = [
  { icon: Brain, label: "AI & Machine Learning", desc: "Deep learning, NLP, generative AI research." },
  { icon: Database, label: "Data Science & Big Data", desc: "Analytics pipelines and Spark clusters." },
  { icon: Shield, label: "Cybersecurity", desc: "Ethical hacking, forensics, zero-trust systems." },
  { icon: Boxes, label: "Internet of Things", desc: "Edge devices, sensors, smart environments." },
  { icon: Cloud, label: "Cloud Computing", desc: "AWS, Azure, GCP hands-on labs." },
  { icon: Cpu, label: "Blockchain", desc: "Smart contracts and decentralised apps." },
  { icon: Bot, label: "Robotics & Automation", desc: "ROS, computer vision, RPA." },
  { icon: Code2, label: "Full-Stack Development", desc: "MERN, Next.js, TypeScript, cloud native." },
];

const STATS = [
  { icon: Users, k: "1,200+", v: "Active Students" },
  { icon: GraduationCap, k: "45+", v: "Expert Faculty" },
  { icon: Trophy, k: "230+", v: "Hackathon Wins" },
  { icon: Rocket, k: "98%", v: "Placement Rate" },
];

const JOURNEY = [
  { year: "Year 1", title: "Foundations", body: "C, Python, data structures, digital logic and mathematics for computing." },
  { year: "Year 2", title: "Systems & Design", body: "Operating systems, DBMS, computer networks, software engineering." },
  { year: "Year 3", title: "Specialisation", body: "AI, cybersecurity, cloud, mobile — pick your track and dive deep." },
  { year: "Year 4", title: "Capstone & Career", body: "Industry internship, capstone project, and campus placements." },
];

const FACULTY = [
  { name: "Dr. R. Karthikeyan", role: "Professor & Head", area: "Machine Learning · NLP", img: faculty2 },
  { name: "Dr. Meenakshi Iyer", role: "Associate Professor", area: "Cybersecurity · IoT", img: faculty1 },
  { name: "Prof. Anitha Suresh", role: "Assistant Professor", area: "Cloud · DevOps", img: faculty3 },
];

const TESTIMONIALS = [
  { name: "Aravind K.", role: "Software Engineer, Zoho", body: "The mix of theory and hands-on projects here gave me the confidence to crack SDE interviews." },
  { name: "Divya S.", role: "Data Scientist, Freshworks", body: "Faculty pushed us into research early. My ML paper was published before graduation." },
  { name: "Rahul V.", role: "Founder, StackForge", body: "The entrepreneurship cell helped us prototype and validate our SaaS idea in months." },
];

const EVENTS = [
  { date: "18 Jan", title: "HackVIT 2026 – 24 hr Hackathon", tag: "Flagship" },
  { date: "05 Feb", title: "AI Symposium with IIT Madras", tag: "Talk" },
  { date: "22 Feb", title: "Google Cloud Study Jam", tag: "Workshop" },
  { date: "10 Mar", title: "Capstone Demo Day", tag: "Showcase" },
];

const RESOURCES = [
  { icon: FileText, title: "Subject-Wise Notes", href: "https://drive.google.com/drive/folders/19yLKZUvIJDHQA0FTo-l0DKYttGmt-Ze1?usp=sharing" },
  { icon: Play, title: "YouTube Lecture Series", href: "https://youtu.be/dKe5pJljThc?feature=shared" },
  { icon: Github, title: "Open-source Projects", href: "#" },
  { icon: BookOpen, title: "Research Publications", href: "#" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO with floating stat pills */}
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <img src={hero} alt="" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-white">
          <p className="text-sm font-medium tracking-wide">
            <span className="text-white/80">HOME</span>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-brand">DEPARTMENT OVERVIEW</span>
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            NAAC A+ · NBA Accredited · Autonomous
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl">
            Department of Computer Science &{" "}
            <span className="bg-gradient-to-r from-brand to-white bg-clip-text text-transparent">Engineering</span>
          </h2>
          <p className="mt-5 max-w-2xl text-white/85 md:text-lg">
            Building the future through innovation in Artificial Intelligence, Cybersecurity, Cloud Computing and Software Engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110 transition">
              Explore the Department <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/digital-initiatives" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Digital Initiatives
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-black/20 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, k, v }) => (
              <div key={v} className="flex items-center gap-3 text-white">
                <div className="h-10 w-10 rounded-lg bg-brand/20 grid place-items-center">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold leading-none">{k}</p>
                  <p className="text-xs text-white/70 mt-1">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1 w-full bg-brand" />
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="WHO WE ARE">About the Department</SectionTitle>
          <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                In today's rapidly evolving digital world, Computer Science and Engineering has become one of the most dynamic and influential fields of study. From artificial intelligence and cybersecurity to cloud computing and software development, CSE empowers students to create technologies that transform industries and improve everyday life.
              </p>
              <p>
                Our curriculum combines theoretical foundations with practical experience — projects, research, internships, and industry collaborations — so graduates ship real solutions from day one.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Target, k: "Mission", v: "Empower ethical, curious technologists." },
                  { icon: Lightbulb, k: "Vision", v: "Global leaders in computing research." },
                  { icon: Award, k: "Values", v: "Curiosity · Rigor · Impact." },
                ].map(({ icon: Icon, k, v }) => (
                  <div key={k} className="rounded-xl border border-border bg-card p-4">
                    <Icon className="h-5 w-5 text-brand" />
                    <p className="mt-2 font-bold text-primary">{k}</p>
                    <p className="text-sm text-foreground/70 mt-1">{v}</p>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-primary/90">
                "We chose Computer Science because we don't just want to use technology — we want to build it."
              </blockquote>
            </div>
            <div className="relative">
              <img src={coding} alt="Student coding on laptop" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl bg-primary text-white p-4 shadow-xl w-52">
                <p className="text-3xl font-extrabold text-brand">15+</p>
                <p className="text-xs text-white/80 mt-1">Years shaping computing leaders in Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum journey */}
      <section id="pedagogy" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="FOUR-YEAR JOURNEY">Curriculum & Pedagogy</SectionTitle>
          <div className="mt-10 relative">
            <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-border" />
            <div className="grid gap-6 md:grid-cols-4">
              {JOURNEY.map((j, i) => (
                <div key={j.year} className="relative rounded-2xl border border-border bg-card p-6 hover:border-brand hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-brand text-brand-foreground grid place-items-center text-sm font-extrabold shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold tracking-widest text-brand mt-2">{j.year.toUpperCase()}</p>
                  <h3 className="mt-1 text-lg font-bold text-primary">{j.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{j.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning beyond classroom */}
      <section id="teaching" className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="STUDENT LIFE">Learning Beyond the Classroom</SectionTitle>
          <div className="mt-10 grid gap-10 md:grid-cols-2 items-center">
            <div className="relative">
              <img src={hackathon} alt="Students collaborating at a hackathon" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
              <div className="absolute -top-4 -right-4 rounded-full bg-brand text-brand-foreground px-4 py-2 text-xs font-extrabold shadow-lg rotate-3">
                HackVIT · 24h
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { t: "Coding competitions & hackathons", d: "ACM ICPC, CodeChef, HackerRank ladder." },
                { t: "Workshops & technical seminars", d: "Weekly deep-dives from industry engineers." },
                { t: "Research & innovation projects", d: "Publish with faculty in IEEE / Springer venues." },
                { t: "Open-source contributions", d: "Mentored GSoC / Hacktoberfest cohorts." },
                { t: "Industry internships", d: "Six-month residencies with FAANG & startups." },
                { t: "Student-led technical clubs", d: "AI Society, Cyber Cell, DevOps Guild." },
              ].map((item) => (
                <li key={item.t} className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 hover:border-brand hover:shadow-md transition">
                  <span className="mt-1 h-8 w-8 rounded-lg bg-brand/15 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition shrink-0">
                    <Star className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{item.t}</p>
                    <p className="text-sm text-foreground/70">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Emerging tech */}
      <section id="materials" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="INNOVATION">Emerging Technologies Shaping Tomorrow</SectionTitle>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="grid grid-cols-2 gap-4">
              {TECHS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 hover:border-brand hover:shadow-lg transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-transparent transition" />
                  <div className="relative">
                    <div className="h-11 w-11 rounded-xl bg-brand/15 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 font-bold text-primary">{label}</p>
                    <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img src={ai} alt="Neural network visualization" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
              <img src={cloud} alt="Cloud computing lab" width={1200} height={800} loading="lazy" className="hidden md:block absolute -bottom-8 -left-8 w-1/2 rounded-xl shadow-2xl border-4 border-background aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="THE PEOPLE">Meet Our Faculty</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {FACULTY.map((p) => (
              <div key={p.name} className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={p.img} alt={p.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold tracking-widest text-brand">{p.area.toUpperCase()}</p>
                    <p className="text-lg font-extrabold leading-tight">{p.name}</p>
                    <p className="text-sm text-white/80">{p.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events + Resources side-by-side */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTitle kicker="WHAT'S NEXT">Upcoming Events</SectionTitle>
            <ul className="mt-8 space-y-3">
              {EVENTS.map((e) => {
                const [day, month] = e.date.split(" ");
                return (
                  <li key={e.title} className="group flex items-center gap-5 rounded-xl border border-border bg-card p-4 hover:border-brand hover:shadow-md transition">
                    <div className="shrink-0 w-16 rounded-lg bg-primary text-white text-center py-2">
                      <p className="text-2xl font-extrabold leading-none text-brand">{day}</p>
                      <p className="text-[10px] uppercase tracking-widest mt-1">{month}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold tracking-widest text-brand">{e.tag.toUpperCase()}</p>
                      <p className="font-semibold text-primary">{e.title}</p>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground group-hover:text-brand transition" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div id="videos">
            <SectionTitle kicker="LEARN ANYTIME">Resources & Materials</SectionTitle>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {RESOURCES.map(({ icon: Icon, title, href }) => (
                <a key={title} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-5 hover:border-brand hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="h-11 w-11 rounded-xl bg-brand/15 text-brand grid place-items-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-bold text-primary">{title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand font-semibold">
                    Open <ExternalLink className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-2xl relative overflow-hidden border border-border">
              <img src={lab} alt="CSE lab" className="h-40 w-full object-cover" width={1200} height={800} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 flex items-center px-6">
                <div className="text-white">
                  <p className="text-xs font-bold tracking-widest text-brand">CAMPUS</p>
                  <p className="text-lg font-extrabold">Modern computing labs, 24/7 access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="AFTER GRADUATION">Career Opportunities</SectionTitle>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.1fr] items-center">
            <img src={careers} alt="Software engineers at work" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" />
            <div>
              <p className="text-foreground/80 leading-relaxed">
                A Computer Science and Engineering degree opens doors to diverse and rewarding career paths across industries. Skilled CSE professionals continue to be in high demand around the world.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Software Developer","Data Scientist","AI Engineer","Cybersecurity Analyst",
                  "Cloud Engineer","Full-Stack Developer","DevOps Engineer","Systems Architect",
                  "Research Scientist","Entrepreneur",
                ].map((role) => (
                  <span key={role} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-primary hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all">
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "₹28 LPA", v: "Highest package" },
                  { k: "₹7.2 LPA", v: "Average package" },
                  { k: "120+", v: "Recruiters" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="text-xl md:text-2xl font-extrabold text-brand">{s.k}</p>
                    <p className="text-xs text-foreground/70 mt-1">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="ALUMNI VOICES">Where Our Graduates Are</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="relative rounded-2xl border border-border bg-card p-6 hover:border-brand transition">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-brand fill-brand/20" />
                <blockquote className="text-foreground/85 leading-relaxed">"{t.body}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-primary grid place-items-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + HOD Contact card */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl relative overflow-hidden p-10 md:p-14" style={{ backgroundImage: "var(--gradient-hero)" }}>
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] items-center text-white">
              <div>
                <p className="text-xs font-bold tracking-widest text-brand">GET IN TOUCH</p>
                <h3 className="mt-2 text-3xl md:text-4xl font-extrabold">Head of the Department</h3>
                <p className="mt-3 text-white/85 max-w-xl">
                  Our department nurtures innovation, research, and entrepreneurship — preparing students for cutting-edge opportunities in AI, Data Science, Cybersecurity, Cloud, and Full-Stack Development.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 text-sm space-y-2">
                <p><span className="font-semibold text-brand">HOD:</span> Dr. R. Karthikeyan (Prof & Head)</p>
                <p><span className="font-semibold">Email:</span> cse@velammalitech.edu.in</p>
                <p><span className="font-semibold">Phone:</span> 044-30446300 (Extn: 132)</p>
                <p><span className="font-semibold">Mobile:</span> +91 9087556789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
