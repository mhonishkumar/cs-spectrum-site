import { Facebook, Instagram, Youtube, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <>
      <div className="h-1 w-full bg-brand" />
      <footer className="bg-primary text-white/85 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />

        {/* Newsletter */}
        <div className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay in the loop</h3>
              <p className="text-sm text-white/70 mt-1">Get monthly updates on research, events and student wins.</p>
            </div>
            <form className="flex w-full md:w-auto items-center gap-2">
              <input
                type="email"
                required
                placeholder="you@velammalitech.edu.in"
                className="w-full md:w-80 rounded-md bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
              />
              <button className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:brightness-110 transition">
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
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
                <a key={i} href="#" className="h-9 w-9 rounded-full border border-white/25 grid place-items-center hover:border-brand hover:text-brand hover:-translate-y-0.5 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Academic Portals</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Department Overview","Syllabus & Notes Repository","Video Lecture Library","Pedagogy & Curriculum","Digital Initiatives"].map((l) => (
                <li key={l}><a href="#" className="hover:text-brand transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Research & Faculty</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Capstone Projects & Prototypes","Faculty Outside Interaction","Faculty Research Blogs","Innovative Teaching & Learning","Emerging Technologies"].map((l) => (
                <li key={l}><a href="#" className="hover:text-brand transition">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/10">
          <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/60 text-center">
            © 2026 Department of Computer Science & Engineering, Velammal Institute of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
