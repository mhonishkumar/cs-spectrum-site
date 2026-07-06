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
    <section className="relative overflow-hidden bg-background border-b hairline">
      {bg && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
        />
      )}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-9">
          <p className="eyebrow flex items-center gap-2">
            HOME
            <ChevronRight className="h-3 w-3 text-brand" />
            <span className="text-brand">{crumb}</span>
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-primary">
            {title}
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:border-l hairline lg:pl-8">
          <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  kicker,
}: {
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div className="pb-6 border-b hairline flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div className="min-w-0">
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.02] text-primary tracking-tight">
          {children}
        </h2>
      </div>
      <span className="font-display italic text-brand text-2xl md:text-3xl shrink-0">
        §
      </span>
    </div>
  );
}
