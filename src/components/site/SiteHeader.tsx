import { Link } from "@tanstack/react-router";
import { Mail, Facebook, Instagram, Youtube, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/cse-logo.png";

const NAV: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Digital Initiatives", to: "/digital-initiatives" },
  { label: "Faculty Blog", to: "/faculty-blog" },
  { label: "Innovative Teaching", to: "/#teaching" },
  { label: "Instruction Materials", to: "/#materials" },
  { label: "Pedagogy", to: "/#pedagogy" },
  { label: "Lecture Videos", to: "/#videos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Brand bar */}
      <div className="bg-white/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6 flex-wrap">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand/20 blur-lg group-hover:blur-xl transition-all" />
              <img src={logo} alt="VIT logo" width={56} height={56} className="relative h-14 w-14" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.22em] text-primary/70">
                VELAMMAL INSTITUTE OF TECHNOLOGY
              </p>
              <h1 className="text-base md:text-xl font-extrabold text-primary leading-tight uppercase">
                Department of Computer Science<br className="hidden md:block" /> & Engineering
              </h1>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {[
              { label: "Contact", icon: Mail },
              { label: "Facebook", icon: Facebook },
              { label: "Instagram", icon: Instagram },
              { label: "YouTube", icon: Youtube },
            ].map(({ label, icon: Icon }) => (
              <a key={label} href="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3.5 py-2 text-sm font-medium text-primary hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all">
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </nav>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-primary">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Nav strip */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <ul className={`${open ? "flex flex-col" : "hidden md:flex"} items-stretch gap-1 overflow-x-auto text-white/85 text-sm font-medium`}>
            {NAV.map((item) => {
              const isHash = item.to.includes("#");
              const inner = (isActive: boolean) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`pointer-events-none absolute left-4 right-4 -bottom-px h-[3px] rounded-t bg-brand transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </>
              );
              return (
                <li key={item.label} className="shrink-0">
                  {isHash ? (
                    <a href={item.to} className="group relative inline-flex items-center px-5 py-4 hover:text-white transition">
                      {inner(false)}
                    </a>
                  ) : (
                    <Link
                      to={item.to as "/"}
                      className="group relative inline-flex items-center px-5 py-4 hover:text-white transition"
                      activeProps={{ className: "text-white" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {({ isActive }) => inner(isActive)}
                    </Link>
                  )}
                </li>
              );
            })}
            <li className="ml-auto hidden md:flex items-center pl-2">
              <button className="h-8 w-8 rounded-full border border-white/30 text-white/80 grid place-items-center hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
