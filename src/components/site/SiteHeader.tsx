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
      <div className="bg-primary border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ul className={`${open ? "flex flex-col py-2" : "hidden md:flex"} flex-wrap items-center justify-center gap-x-1 gap-y-1 text-white/80 text-[13px] font-medium`}>
            {NAV.map((item) => {
              const isHash = item.to.includes("#");
              const base =
                "group relative inline-flex items-center rounded-full px-4 py-2.5 hover:text-white hover:bg-white/10 transition";
              const activeCls = "text-white bg-white/10 ring-1 ring-brand/40";
              return (
                <li key={item.label}>
                  {isHash ? (
                    <a href={item.to} className={base}>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to as "/"}
                      className={base}
                      activeProps={{ className: `${base} ${activeCls}` }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand to-transparent" />
      </div>
    </header>
  );
}

