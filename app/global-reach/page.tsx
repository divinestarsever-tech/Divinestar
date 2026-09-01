import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function GlobalReachPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
            Direct B2B Relationships,<br />Global Reach.
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
            Divine Star serves B2B clients across international markets with direct sales relationships and export-ready logistics.
          </p>
        </div>
      </Section>

      {/* 2. GLOBAL PRESENCE */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Where We Operate
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed max-w-2xl">
              [Office locations, representative markets, and export regions — pending client confirmation]
            </p>
          </div>
          <Placeholder className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full" label="[Map/Image pending]" />
        </div>
      </Section>

      {/* 3. HOW WE HANDLE YOUR ENQUIRY */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight text-center">
            From Enquiry to Delivery
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              "Requirement Submitted",
              "Review & Assortment Check",
              "Commercial Terms Discussed",
              "Shipment Coordination"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4 text-center">
                <Placeholder className="aspect-square w-full" label="[Image pending]" />
                <h3 className="text-sm font-bold text-[var(--color-brand-graphite)] tracking-wide uppercase mt-2">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. SALES CONTACT ROUTING */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] w-full">
          <div className="bg-[var(--color-brand-panel)] p-8 md:p-12 border border-[var(--color-brand-line)]">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6">
              India Sales
            </h3>
            <div className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Contact details — pending client confirmation]
            </div>
          </div>
          <div className="bg-[var(--color-brand-panel)] p-8 md:p-12 border border-[var(--color-brand-line)]">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6">
              International Sales
            </h3>
            <div className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Contact details — pending client confirmation]
            </div>
          </div>
        </div>
      </Section>

      {/* 5. CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center text-[var(--color-brand-white)]" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-white)] mb-6 leading-tight">
            Tell Us What You Need.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center mt-6">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

