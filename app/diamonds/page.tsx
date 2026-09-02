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
          <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-mono">10x Magnification</span>
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
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Product Profile
          </h2>
          <div className="w-full">
            <table className="w-full border-collapse block md:table">
              <thead className="block md:table-header-group hidden md:table-row-group">
                <tr className="block md:table-row border-b-2 border-[var(--color-brand-graphite)]">
                  <th className="block md:table-cell text-left py-4 px-2 font-bold text-sm tracking-wider uppercase text-[var(--color-brand-graphite)] w-1/3">
                    Parameter
                  </th>
                  <th className="block md:table-cell text-left py-4 px-2 font-bold text-sm tracking-wider uppercase text-[var(--color-brand-graphite)] w-2/3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {matrixData.map((row, idx) => (
                  <tr key={idx} className="block md:table-row border-b border-[var(--color-brand-line)] mb-6 md:mb-0 pb-4 md:pb-0 group">
                    <td className="block md:table-cell py-2 md:py-6 px-2 align-top">
                      <span className="block md:hidden text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text-secondary)] mb-1">Parameter</span>
                      <span className="font-semibold text-[var(--color-brand-graphite)]">{row.label}</span>
                    </td>
                    <td className="block md:table-cell py-2 md:py-6 px-2 align-top">
                      <span className="block md:hidden text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text-secondary)] mb-1">Details</span>
                      <span className="text-[var(--color-brand-text-secondary)]">{row.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 3. ASSORTMENTS */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Assortment Formats
          </h2>
          <div className="w-full flex flex-col gap-4">
            {[
              "Standard Assortment",
              "Calibrated Assortment",
              "Client-Specific Assortment"
            ].map((title, idx) => (
              <details key={idx} className="group bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] w-full">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none font-semibold text-lg md:text-xl text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-panel)] transition-colors">
                  {title}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-6 md:p-8 pt-0 md:pt-0 text-[var(--color-brand-text-secondary)] leading-relaxed border-t border-[var(--color-brand-line)] mt-4 pt-6">
                  [Definition and parameters — pending client confirmation]
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

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

