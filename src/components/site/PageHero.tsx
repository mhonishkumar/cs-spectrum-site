import { ChevronRight } from "lucide-react";

export function PageHero({
  crumb,
  title,
  subtitle,
  bg,
}: {
  crumb: string;
  title: string;
  subtitle: string;
  bg?: string;
}) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
      {bg && (
        <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
      )}
      {/* decorative grid */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 text-white">
        <p className="text-sm font-medium tracking-wide flex items-center gap-1">
          <span className="text-white/80">HOME</span>
          <ChevronRight className="h-4 w-4 text-white/40" />
          <span className="text-brand uppercase">{crumb}</span>
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] max-w-4xl animate-fade-in">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-white/85 md:text-lg">{subtitle}</p>
      </div>
      <div className="h-1 w-full bg-brand" />
    </section>
  );
}

export function SectionTitle({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <div className="pb-4 border-b border-border">
      {kicker && <p className="text-xs font-bold tracking-[0.22em] text-brand mb-2">{kicker}</p>}
      <div className="flex items-center gap-3">
        <span className="inline-block h-7 w-1.5 rounded-sm bg-brand" />
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{children}</h2>
      </div>
    </div>
  );
}
