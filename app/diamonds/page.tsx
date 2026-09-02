import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function DiamondsPage() {
  const matrixData = [
    { label: "Size / Carat Range", value: "[pending client confirmation]" },
    { label: "Colour Range", value: "[pending client confirmation]" },
    { label: "Clarity Range", value: "[pending client confirmation]" },
    { label: "Make / Cut Standard", value: "[pending client confirmation]" },
    { label: "Certification (certified / non-certified)", value: "[pending client confirmation]" },
    { label: "Assortment Type", value: "[pending client confirmation]" }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO - LOUPE INSPECTION */}
      <section className="relative w-full h-[85vh] lg:h-[90vh] flex flex-col justify-end bg-black overflow-hidden">
        
        {/* Full-bleed background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Placeholder isHero className="w-full h-full" label="[Macro diamond image/video pending]" />
          {/* Subtle gradient for text legibility at bottom left */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:w-2/3 pointer-events-none" />
        </div>

        {/* The Loupe Element (Desktop: Top Right, Mobile: Omitted for clarity) */}
        <div className="hidden lg:flex absolute top-32 right-[var(--fluid-px)] z-20 flex-col items-center gap-4">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-white/30 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#111] flex items-center justify-center backdrop-blur-md cursor-crosshair group">
            {/* Simulating a magnified view */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] transition-opacity duration-700 group-hover:opacity-80" />
            <div className="relative z-10 text-center">
              <span className="block text-white/50 text-[10px] tracking-[0.2em] uppercase font-mono leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                [Detail<br/>View<br/>Pending]
              </span>
            </div>
            
            {/* Loupe crosshair accent */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20 transition-all duration-700 group-hover:bg-white/40" />
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/20 transition-all duration-700 group-hover:bg-white/40" />
            
            {/* Inner rim */}
            <div className="absolute inset-2 border border-white/10 rounded-full" />
          </div>
        </div>

        {/* Text Block (Bottom Left) */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[var(--fluid-px)] pb-12 lg:pb-24 pointer-events-none">
          <div className="max-w-xl">
            {/* Tiny accent line to anchor it */}
            <div className="w-12 h-[2px] bg-[var(--color-brand-warm-white)] mb-6 opacity-80" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] font-bold tracking-tighter text-white mb-6 uppercase">
              Round Expertise.<br />Commercial Consistency.
            </h1>
            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-lg">
              Natural round diamonds, melee sizes, dedicated assortments and packing formats for professional buyers.
            </p>
          </div>
        </div>

      </section>

      {/* 2. PRODUCT MATRIX */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Product Profile
          </h2>
          
          {/* Document Card Framing */}
          <div className="w-full border border-[var(--color-brand-line)] bg-[var(--color-brand-white)] shadow-sm">
            {/* Header Bar */}
            <div className="w-full bg-[var(--color-brand-graphite)] px-6 py-3 border-b border-[var(--color-brand-line)]">
              <span className="text-[var(--color-brand-warm-white)] text-xs font-mono tracking-[0.2em] uppercase">
                Product Specification
              </span>
            </div>
            
            {/* Table Container */}
            <div className="p-6 md:p-10 lg:p-16">
              <table className="w-full border-collapse block md:table">
                <thead className="block md:table-header-group hidden md:table-row-group">
                  <tr className="block md:table-row border-b-2 border-[var(--color-brand-line)]">
                    <th className="block md:table-cell text-left pb-6 px-2 font-mono text-xs tracking-widest uppercase text-[var(--color-brand-text-secondary)] w-1/3">
                      Parameter
                    </th>
                    <th className="block md:table-cell text-left pb-6 px-2 font-mono text-xs tracking-widest uppercase text-[var(--color-brand-text-secondary)] w-2/3">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {matrixData.map((row, idx) => (
                    <tr key={idx} className="block md:table-row border-b border-[var(--color-brand-line)] last:border-b-0 mb-10 md:mb-0 pb-6 md:pb-0">
                      <td className="block md:table-cell py-2 md:py-8 px-2 align-top">
                        <span className="block md:hidden text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-2">Parameter</span>
                        <span className="font-light text-[var(--color-brand-text-secondary)] text-base md:text-lg">{row.label}</span>
                      </td>
                      <td className="block md:table-cell py-2 md:py-8 px-2 align-top">
                        <span className="block md:hidden text-[10px] font-mono uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-2">Details</span>
                        <span className="font-medium text-[var(--color-brand-graphite)] text-lg md:text-xl">{row.value}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. ASSORTMENTS */}
      <section className="w-full bg-[var(--color-brand-graphite)] py-24 lg:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-[var(--fluid-px)]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-none">
              Assortment<br />Formats
            </h2>
            <p className="text-white/50 font-mono text-xs tracking-[0.2em] uppercase max-w-xs md:text-right">
              Precision sorting protocols adapted to varied industrial and luxury requirements.
            </p>
          </div>

          {/* 3-Column Architectural Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {[
              "Standard Assortment",
              "Calibrated Assortment",
              "Client-Specific Assortment"
            ].map((title, idx) => (
              <div key={idx} className="group relative w-full h-[350px] lg:h-[450px] flex flex-col justify-between p-8 md:p-12 overflow-hidden bg-[var(--color-brand-graphite)] hover:bg-[#1a1a1a] transition-colors duration-700 cursor-default">
                
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)] transition-opacity duration-1000 pointer-events-none" />

                {/* Large watermark number */}
                <div className="absolute -bottom-8 -right-8 text-[180px] lg:text-[240px] font-bold text-white/[0.02] group-hover:text-white/[0.05] group-hover:-translate-y-4 transition-all duration-1000 pointer-events-none tracking-tighter leading-none select-none">
                  0{idx + 1}
                </div>

                {/* Number Indicator */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/30 group-hover:text-white/60 transition-colors">
                    Format 0{idx + 1}
                  </span>
                  <div className="w-12 h-[1px] bg-white/10 group-hover:bg-white/40 transition-colors duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="text-3xl lg:text-4xl font-light text-white mb-6 group-hover:text-white transition-colors">
                    {title.replace(" Assortment", "")}
                    <span className="block text-xl lg:text-2xl text-white/50 mt-1">Assortment</span>
                  </h3>
                  
                  <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/30 to-transparent transition-all duration-1000 ease-out mb-6" />
                  
                  <p className="text-base md:text-lg text-white/50 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    [Definition and parameters — pending client confirmation]
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PACKAGING */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div className="order-2 md:order-1">
            <Placeholder className="aspect-[4/3] w-full" label="[Packaging image pending]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Packing & Parcel Formats
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Bagging and pack size options — pending client confirmation]
            </p>
          </div>
        </div>
      </Section>

      {/* 5. QUALITY TERMINOLOGY */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            How We Grade
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed max-w-4xl">
            Divine Star uses structured internal grading and assortment terminology to maintain consistency across every requirement. [Detailed terminology glossary — pending client confirmation]
          </p>
        </div>
      </Section>

      {/* 6. PRIVATE PRICING NOTICE */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center text-[var(--color-brand-white)]" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-white)] mb-6 leading-tight">
            Private Prices. Professional Tools.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-warm-white)] font-light mb-10 opacity-90 max-w-2xl">
            Public pages do not display confidential trade prices. Serious buyers can discuss specific requirements directly with our sales team.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
            Send Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

