import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Download } from "lucide-react";

export default function ResponsibilityPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
            Progress With Clear Accountability.
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
            Responsible sourcing, resource efficiency and community support, backed by evidence rather than broad claims.
          </p>
        </div>
      </Section>

      {/* 2-5. PILLARS GRID */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
          
          {/* 2. RESPONSIBLE SOURCING */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[length:var(--fluid-h3)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight border-b border-[var(--color-brand-line)] pb-4">
              Responsible Sourcing
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Sourcing policy, due diligence approach, supplier expectations — pending client confirmation and evidence]
            </p>
          </div>

          {/* 3. RESOURCE EFFICIENCY */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[length:var(--fluid-h3)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight border-b border-[var(--color-brand-line)] pb-4">
              Resource Efficiency
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Energy/resource efficiency initiatives, waste reduction, verified metrics — pending client confirmation]
            </p>
          </div>

          {/* 4. PEOPLE */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[length:var(--fluid-h3)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight border-b border-[var(--color-brand-line)] pb-4">
              People
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Training, workplace safety, and employee initiatives — pending HR-approved facts]
            </p>
          </div>

          {/* 5. COMMUNITY */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[length:var(--fluid-h3)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight border-b border-[var(--color-brand-line)] pb-4">
              Community
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Community programmes, education, healthcare initiatives — pending client confirmation, dates and permissions]
            </p>
          </div>

        </div>
      </Section>

      {/* 6. POLICIES & DOCUMENTS */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Policies &amp; Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] p-6 md:p-8 flex flex-col gap-6 justify-between transition-colors hover:bg-[var(--color-brand-panel)] group cursor-default">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] mb-2">
                    [Policy name — pending client confirmation]
                  </h3>
                  <p className="text-sm text-[var(--color-brand-text-secondary)] uppercase tracking-wide">
                    [File type] &middot; [Version/date — pending]
                  </p>
                </div>
                <div className="flex justify-end">
                  <Download className="w-5 h-5 text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-graphite)] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center text-[var(--color-brand-white)]" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-white)] mb-6 leading-tight">
            Tell Us What You Need.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

