import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Clock, ArrowRight } from "lucide-react";
import img1 from "@/assets/cse-ai.jpg";
import img2 from "@/assets/cse-cloud.jpg";
import img3 from "@/assets/cse-coding.jpg";
import img4 from "@/assets/cse-lab.jpg";
import img5 from "@/assets/cse-hackathon.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

export const Route = createFileRoute("/faculty-blog")({
  head: () => ({
    meta: [
      { title: "Faculty Blog — CSE Department, Velammal Institute of Technology" },
      { name: "description", content: "Essays, tutorials and research notes written by the CSE faculty of Velammal Institute of Technology." },
      { property: "og:title", content: "Faculty Blog — CSE Department" },
      { property: "og:description", content: "Read essays and research notes from our CSE faculty." },
    ],
  }),
  component: FacultyBlog,
});

const POSTS = [
  {
    tag: "Machine Learning",
    title: "Why transformer models are quietly rewriting curriculum design",
    excerpt: "The rapid shift from CNNs to attention-based architectures means our syllabus must move faster than the textbook cycle. Here is how we adapt each semester.",
    author: "Dr. R. Karthikeyan",
    avatar: faculty2,
    date: "12 Jan 2026",
    read: "6 min read",
    img: img1,
  },
  {
    tag: "Cybersecurity",
    title: "Teaching zero-trust: rethinking the intro networking lab",
    excerpt: "Perimeters are dead. We redesigned our second-year networking lab around identity, encryption and continuous verification from day one.",
    author: "Dr. Meenakshi Iyer",
    avatar: faculty1,
    date: "04 Jan 2026",
    read: "8 min read",
    img: img2,
  },
  {
    tag: "Pedagogy",
    title: "From lectures to livecoding: a semester of active learning",
    excerpt: "Six months of replacing slide decks with livecoding and pair programming. What worked, what didn't, and what the students actually retained.",
    author: "Prof. Anitha Suresh",
    avatar: faculty3,
    date: "28 Dec 2025",
    read: "5 min read",
    img: img3,
  },
  {
    tag: "Research",
    title: "A student-built federated learning pipeline for medical imaging",
    excerpt: "Two undergrads, one GPU cluster, and a paper that made it to a top-tier workshop. A walkthrough of the project and the mentorship model.",
    author: "Dr. R. Karthikeyan",
    avatar: faculty2,
    date: "15 Dec 2025",
    read: "10 min read",
    img: img4,
  },
  {
    tag: "Career",
    title: "What we look for in a modern software engineering intern",
    excerpt: "Notes from 30 industry mentors on the skills, mindsets and portfolio pieces that turn a CSE student into an offer letter.",
    author: "Prof. Anitha Suresh",
    avatar: faculty3,
    date: "02 Dec 2025",
    read: "7 min read",
    img: img5,
  },
];

function FacultyBlog() {
  const [feature, ...rest] = POSTS;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero
        crumb="Faculty Blog"
        title="Faculty Blog"
        subtitle="Long-form essays, tutorials and research notes from the CSE faculty — written for students, alumni and the wider computing community."
        bg={img1}
      />

      {/* Featured */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="FEATURED">Editor's Pick</SectionTitle>
          <article className="mt-10 grid gap-10 md:grid-cols-2 items-center group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img src={feature.img} alt="" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition duration-500" width={1200} height={800} loading="lazy" />
              <span className="absolute top-4 left-4 rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-bold">{feature.tag}</span>
            </div>
            <div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <img src={feature.avatar} alt={feature.author} className="h-8 w-8 rounded-full object-cover" width={64} height={64} loading="lazy" />
                {feature.author} · {feature.date}
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {feature.read}</span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary leading-tight">{feature.title}</h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">{feature.excerpt}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
                Read the essay <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle kicker="LATEST POSTS">All Essays</SectionTitle>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:border-brand hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="relative overflow-hidden aspect-video">
                  <img src={p.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" width={1200} height={800} loading="lazy" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 text-primary px-2.5 py-1 text-[10px] font-bold tracking-widest">{p.tag.toUpperCase()}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border text-xs text-muted-foreground">
                    <img src={p.avatar} alt={p.author} className="h-7 w-7 rounded-full object-cover" width={64} height={64} loading="lazy" />
                    <span className="font-medium text-foreground/80">{p.author}</span>
                    <span className="ml-auto inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
