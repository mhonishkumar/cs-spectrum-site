import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Lightbulb, Award, Eye, Compass, CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle } from "@/components/site/PageHero";

import hero from "@/assets/cse-hero.jpg";
import coding from "@/assets/cse-coding.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO with floating stat pills */}
      <section className="relative overflow-hidden bg-secondary">
        <img src={hero} alt="" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-primary">
          <p className="text-sm font-medium tracking-wide">
            <span className="text-primary/70">HOME</span>
            <span className="mx-2 text-primary/30">/</span>
            <span className="text-brand">DEPARTMENT OVERVIEW</span>
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl">
            Department of Computer Science &{" "}
            <span className="text-brand">Engineering</span>
          </h2>
          <p className="mt-5 max-w-2xl text-primary/80 md:text-lg">
            Building the future through innovation in Artificial Intelligence, Cybersecurity, Cloud Computing and Software Engineering.
          </p>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110 transition">
                Explore the Department <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/digital-initiatives" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:bg-muted transition">
                Digital Initiatives
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="h-1 w-full bg-brand" />
      </section>

      <main className="py-20">
        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="WHO WE ARE">About the Department</SectionTitle>
          <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
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
                ].map(({ icon: Icon, k, v }, i) => (
                  <Reveal key={k} delay={i * 100}>
                    <div className="rounded-xl border border-border bg-card p-4 h-full">
                      <Icon className="h-5 w-5 text-brand" />
                      <p className="mt-2 font-bold text-primary">{k}</p>
                      <p className="text-sm text-muted-foreground mt-1">{v}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300}>
                <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-primary/90">
                  "We chose Computer Science because we don't just want to use technology — we want to build it."
                </blockquote>
              </Reveal>
            </div>
            <Reveal direction="left" className="relative">
              <img src={coding} alt="Student coding on laptop" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-4/3" />
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-xl bg-primary text-primary-foreground border border-border p-4 shadow-xl w-52">
                <p className="text-3xl font-extrabold text-brand">15+</p>
                <p className="text-xs text-primary-foreground/80 mt-1">Years shaping computing leaders in Tamil Nadu</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mx-auto max-w-7xl px-6 py-20 mt-20 border-t border-border">
          <SectionTitle kicker="OUR NORTH STAR">Vision & Mission</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-8 hover:border-brand transition h-full">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/5 blur-3xl" />
                <div className="relative flex items-center gap-3">
                  <span className="h-11 w-11 rounded-xl bg-brand/10 text-brand grid place-items-center">
                    <Eye className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-extrabold text-primary">Vision</h3>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  To create successful engineers with technical competency and innovative ideas in the field of Computer Science and Engineering.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-8 hover:border-brand transition h-full">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/5 blur-3xl" />
                <div className="relative flex items-center gap-3">
                  <span className="h-11 w-11 rounded-xl bg-brand/10 text-brand grid place-items-center">
                    <Compass className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-extrabold text-primary">Mission</h3>
                </div>
                <ol className="mt-5 space-y-3 text-muted-foreground leading-relaxed list-none">
                  {[
                    "To achieve academic excellence through effective teaching-learning process to meet the demands of the industry.",
                    "To equip students to face the challenges in the field of Computer Science and Engineering and prepare them as responsible engineers with human values.",
                    "To enrich students with required skills for employability, entrepreneurship and pursuing higher studies.",
                    "To encourage the students to implement innovative ideas for research and development.",
                  ].map((m, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 h-6 w-6 rounded-md bg-brand text-brand-foreground grid place-items-center text-xs font-bold">{i + 1}</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PEOs & PSOs */}
        <section className="bg-secondary/60 py-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle kicker="OUTCOMES">Program Educational Objectives & Specific Outcomes</SectionTitle>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <p className="text-xs font-bold tracking-widest text-brand">PEOs</p>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">Program Educational Objectives</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Graduates of the CSE program will:</p>
                  <ul className="mt-5 space-y-4">
                    {[
                      { k: "PEO 1", v: "Apply their technical competence in computer science to solve real-world problems, with technical and people leadership." },
                      { k: "PEO 2", v: "Conduct cutting-edge research and develop solutions on problems of social relevance." },
                      { k: "PEO 3", v: "Work in a business environment, exhibiting team skills, work ethics, adaptability and lifelong learning." },
                    ].map((p, i) => (
                      <Reveal key={p.k} delay={i * 100}>
                        <li className="flex gap-4">
                          <span className="shrink-0 rounded-lg bg-primary text-primary-foreground border border-border px-3 py-1.5 text-xs font-extrabold h-fit">{p.k}</span>
                          <p className="text-muted-foreground leading-relaxed">{p.v}</p>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <p className="text-xs font-bold tracking-widest text-brand">PSOs</p>
                  <h3 className="mt-1 text-xl font-extrabold text-primary">Programme Specific Outcomes</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Graduates of B.E. CSE will have the ability to:</p>
                  <ul className="mt-5 space-y-4">
                    {[
                      { k: "PSO 1", v: "Exhibit design and programming skills to build and automate business solutions using cutting-edge technologies." },
                      { k: "PSO 2", v: "Build a strong theoretical foundation leading to excellence and excitement towards research, providing elegant solutions to complex problems." },
                      { k: "PSO 3", v: "Work effectively with various engineering fields as a team to design, build and develop system applications." },
                    ].map((p, i) => (
                      <Reveal key={p.k} delay={i * 100}>
                        <li className="flex gap-4">
                          <span className="shrink-0 rounded-lg bg-brand text-brand-foreground px-3 py-1.5 text-xs font-extrabold h-fit">{p.k}</span>
                          <p className="text-muted-foreground leading-relaxed">{p.v}</p>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Program Outcomes */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="POs">Program Outcomes — Graduate Attributes</SectionTitle>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            The twelve graduate attributes prescribed by the National Board of Accreditation that every engineering graduate of the department is trained to demonstrate.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Engineering Knowledge","Apply mathematics, science, engineering fundamentals and specialization to solve complex engineering problems."],
              ["Problem Analysis","Identify, formulate, review literature and analyze complex engineering problems using first principles."],
              ["Design / Development","Design solutions for complex problems with consideration for public health, safety, cultural, and environmental factors."],
              ["Investigation","Use research-based knowledge and methods including experiments, data analysis, and synthesis for valid conclusions."],
              ["Modern Tool Usage","Create, select and apply appropriate techniques, resources and modern IT tools with an awareness of their limitations."],
              ["Engineer & Society","Assess societal, health, safety, legal and cultural issues relevant to professional engineering practice."],
              ["Environment & Sustainability","Understand the impact of engineering solutions in societal and environmental contexts for sustainable development."],
              ["Ethics","Apply ethical principles and commit to professional ethics, responsibilities and norms of engineering practice."],
              ["Individual & Team Work","Function effectively as an individual, and as a member or leader in diverse and multidisciplinary teams."],
              ["Communication","Communicate effectively — comprehend and write reports, make presentations, and give and receive clear instructions."],
              ["Project Management & Finance","Apply engineering and management principles to manage projects in multidisciplinary environments."],
              ["Life-long Learning","Recognize the need for and engage in independent, life-long learning in the context of technological change."],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={(i % 3) * 100} scale>
                <div className="group relative rounded-2xl border border-border bg-card p-5 hover:border-brand hover:-translate-y-1 hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 h-9 w-9 rounded-lg bg-brand/10 text-brand grid place-items-center font-extrabold text-sm group-hover:bg-brand group-hover:text-brand-foreground transition">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-bold text-primary flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand" /> {title}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOD Welcome Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border mt-10">
          <SectionTitle kicker="LEADERSHIP">Welcome Message from the Head of Department</SectionTitle>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2.5fr] items-start">
            <Reveal scale className="mx-auto lg:mx-0 w-64 lg:w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border bg-card">
                <img src="/hodimg.jpeg" alt="Dr. R. Venkadesh" className="w-full h-auto object-cover aspect-[4/5]" />
              </div>
              <div className="mt-5 text-center lg:text-left">
                <p className="font-extrabold text-2xl text-primary">Dr. R . Venkadesh</p>
                <p className="text-sm font-semibold text-brand mt-1">Professor & Head of Department • B.E.,M.Tech,Ph.D.,</p>
              </div>
            </Reveal>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <Reveal delay={100}>
                <p>
                  Welcome to the Department of Computer Science and Engineering at Velammal Institute of Technology. Our department is committed to nurturing future-ready software professionals, innovators, and researchers through academic excellence, practical learning, and continuous innovation. We provide students with a strong foundation in Computer Science, Artificial Intelligence, Data Science, Cybersecurity, Cloud Computing, Full-Stack Development, and emerging technologies. With experienced faculty, modern laboratories, industry collaborations, research opportunities, and a focus on outcome-based education, we empower our students to excel in both higher studies and the global technology industry.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  We encourage every student to cultivate curiosity, creativity, ethical values, and lifelong learning, preparing them to become responsible professionals who contribute meaningfully to society and technological advancement.
                </p>
              </Reveal>
              
              <Reveal delay={300}>
                <div className="mt-10 space-y-4 pt-6 border-t border-border inline-block min-w-full lg:min-w-0">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                      <p className="font-semibold text-primary">hod.cse@velammalitech.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Phone</p>
                      <p className="font-semibold text-primary">+91 91762 27586</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
