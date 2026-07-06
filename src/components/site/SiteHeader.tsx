import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import vitLogo from "@/assets/vit-logo.jpg.asset.json";


const NAV: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Department", to: "/#about" },
  { label: "Vision & Mission", to: "/#vision-mission" },
  { label: "Pedagogy", to: "/#pedagogy" },
  { label: "Emerging Tech", to: "/#materials" },
  { label: "Digital Initiatives", to: "/digital-initiatives" },
  { label: "Faculty Blog", to: "/faculty-blog" },
];

const UTIL = [
  { label: "Contact", href: "#" },
  { label: "Directory", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Editorial masthead */}
      <header className="border-b hairline bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-end justify-between gap-6">
          <Link to="/" className="group min-w-0 flex items-center gap-4">
            <img
              src={vitLogo.url}
              alt="Velammal Institute of Technology logo"
              className="h-14 w-14 md:h-16 md:w-16 object-contain shrink-0 rounded-sm bg-white p-1 border hairline"
            />
            <div className="min-w-0">
              <p className="eyebrow text-brand">Velammal Institute of Technology</p>
              <h1 className="mt-1 font-display text-4xl md:text-5xl leading-none tracking-tight text-primary">
                CSE<span className="italic text-brand">.</span>
                <span className="ml-3 hidden md:inline text-2xl md:text-3xl text-muted-foreground/80">
                  / Computer Science & Engineering
                </span>
              </h1>
            </div>
          </Link>

            {UTIL.map((u) => (
              <a key={u.label} href={u.href} className="hover:text-brand transition-colors">
                {u.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 border hairline text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Sticky nav — hairline underline with electric-indigo hover */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b hairline">
        <div className="mx-auto max-w-7xl px-6">
          <ul
            className={`${
              open ? "flex flex-col py-3" : "hidden md:flex"
            } flex-wrap gap-x-8 gap-y-2 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-foreground/85`}
          >
            {NAV.map((item, i) => {
              const isHash = item.to.includes("#");
              const base =
                "group inline-flex items-baseline gap-2 border-b border-transparent hover:border-brand hover:text-brand pb-1 transition-colors";
              const active = "text-brand border-brand";
              const number = (
                <span className="font-display italic text-brand/70 text-[13px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              );
              return (
                <li key={item.label}>
                  {isHash ? (
                    <a href={item.to} className={base}>
                      {number}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to as "/"}
                      className={base}
                      activeProps={{ className: `${base} ${active}` }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {number}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
