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
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
              Round Expertise.<br />Commercial Consistency.
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)] max-w-2xl">
              Natural round diamonds, melee sizes, dedicated assortments and packing formats for professional buyers.
            </p>
          </div>
          <Placeholder className="aspect-[4/3] w-full" label="[Macro diamond image/video pending]" />
        </div>
      </Section>

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
          <Link href="#contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
            Send Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}
