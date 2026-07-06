import { Facebook, Instagram, Youtube } from "lucide-react";

const ACADEMIC = [
  { label: "Department Overview", href: "/about" },
  { label: "Syllabus & Notes Repository", href: "/resources" },
  { label: "Video Lecture Library", href: "/resources" },
  { label: "Pedagogy & Curriculum", href: "/resources" },
  { label: "Digital Initiatives", href: "/digital-initiatives" },
];

const RESEARCH = [
  { label: "Capstone Projects & Prototypes", href: "/achievements" },
  { label: "Faculty Outside Interaction", href: "/faculty" },
  { label: "Faculty Research Blogs", href: "/faculty-blog" },
  { label: "Innovative Teaching & Learning", href: "/about" },
  { label: "Emerging Technologies", href: "/resources" },
];

export function SiteFooter() {
  return (
    <footer className="bg-card border-t hairline pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Newsletter — editorial masthead */}
        <div className="md:col-span-5">
          <p className="eyebrow">Volume 26 · Dispatch</p>
          <h4 className="mt-4 font-display italic text-4xl md:text-5xl text-primary leading-[1.05]">
            Join the Pulse.
          </h4>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Monthly deep-dives on departmental research, faculty appointments,
            capstone showcases and upcoming technical symposiums — straight to
            your inbox.
          </p>
          <form className="mt-8 flex items-center border-b hairline pb-2 focus-within:border-brand transition-colors">
            <input
              type="email"
              required
              placeholder="your.name@velammalitech.edu.in"
              className="bg-transparent w-full text-sm outline-none placeholder:text-muted-foreground/60 placeholder:italic text-primary"
            />
            <button
              type="submit"
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand hover:text-primary transition-colors"
            >
              Subscribe →
            </button>
          </form>
          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center border hairline hover:text-brand hover:border-brand transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Academic Portals */}
        <div className="md:col-span-3 md:pl-8 md:border-l hairline">
          <h5 className="eyebrow">Academic Portals</h5>
          <ul className="mt-8 space-y-4 text-sm font-medium">
            {ACADEMIC.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-foreground/85 hover:text-brand transition-colors inline-flex items-baseline gap-2"
                >
                  <span className="font-display italic text-brand/60 text-[13px]">·</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Research & Faculty */}
        <div className="md:col-span-4 md:pl-8 md:border-l hairline">
          <h5 className="eyebrow">Research & Faculty</h5>
          <ul className="mt-8 space-y-4 text-sm font-medium">
            {RESEARCH.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-foreground/85 hover:text-brand transition-colors inline-flex items-baseline gap-2"
                >
                  <span className="font-display italic text-brand/60 text-[13px]">·</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-xs text-muted-foreground leading-relaxed">
            <p className="text-primary font-medium">Dr. R. Venkadesh · HOD</p>
            <p className="mt-1">hod.cse@velammalitech.edu.in</p>
            <p>+91 90875 56789 · 044-30446300 (Extn 132)</p>
          </div>
        </div>
      </div>

      {/* Base rule */}
      <div className="mx-auto max-w-7xl px-6 mt-20 pt-8 border-t hairline flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          © 2026 · Velammal Institute of Technology · Department of CSE
        </span>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <a href="#" className="hover:text-brand">Privacy</a>
          <a href="#" className="hover:text-brand">Accessibility</a>
          <a href="#" className="hover:text-brand">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
