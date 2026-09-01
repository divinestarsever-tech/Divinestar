import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
              Built On Precision.<br />Grown Through Relationships.
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
              Divine Star is a B2B round-diamond manufacturer built around consistency, technical process and long-term trade relationships.
            </p>
          </div>
          <Placeholder className="aspect-[4/3] w-full" label="[Facility/Building image pending]" />
        </div>
      </Section>

      {/* 2. COMPANY OVERVIEW */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <p className="text-lg md:text-2xl text-[var(--color-brand-graphite)] leading-relaxed max-w-4xl font-medium">
            Divine Star manufactures and supplies natural round diamonds for jewellery manufacturers, brands and wholesalers worldwide. [Founding year and company history — pending client confirmation]
          </p>
        </div>
      </Section>

      {/* 3. TIMELINE */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Our Journey
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="flex-1 border-l-2 lg:border-l-0 lg:border-t-2 border-[var(--color-brand-line)] pl-6 lg:pl-0 lg:pt-6">
                <span className="block text-sm font-bold tracking-wider uppercase text-[var(--color-brand-text-secondary)] mb-2">
                  [Pending]
                </span>
                <h3 className="text-lg font-medium text-[var(--color-brand-graphite)]">
                  [Milestone — pending client confirmation]
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. VISION & VALUES */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <div className="mb-[var(--fluid-gap)]">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight mb-2">
              What We Stand For
            </h2>
            <p className="text-sm text-[var(--color-brand-text-secondary)] uppercase tracking-wider">
              (Draft values — pending final client approval)
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
            {[
              { title: "Precision", desc: "Disciplined process at every stage of manufacturing." },
              { title: "Integrity", desc: "Honest communication and transparent practices." },
              { title: "Partnership", desc: "Building long-term, mutually beneficial relationships." },
              { title: "Progress", desc: "Continuous improvement through process and technology." },
              { title: "Responsibility", desc: "Accountable operations and resource efficiency." },
            ].map((value, idx) => (
              <div key={idx} className="bg-[var(--color-brand-panel)] p-6 md:p-8 border border-[var(--color-brand-line)]">
                <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--color-brand-text-secondary)] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. WHAT MAKES US DIFFERENT */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight text-center">
            What Makes Divine Star Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center">
            {[
              "Round-diamond specialisation",
              "Consistency across repeat orders",
              "Direct B2B relationships",
              "Technology-supported quality control"
            ].map((point, idx) => (
              <div key={idx} className="bg-[var(--color-brand-white)] p-8 border border-[var(--color-brand-line)] flex items-center justify-center min-h-[160px]">
                <h3 className="text-lg font-medium text-[var(--color-brand-graphite)]">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. CERTIFICATIONS & MEMBERSHIPS */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Certifications & Memberships
          </h2>
          <div className="bg-[var(--color-brand-panel)] px-8 py-6 border border-[var(--color-brand-line)] w-full md:w-auto">
            <p className="text-lg font-medium text-[var(--color-brand-graphite)]">
              [Certifications and memberships — pending client confirmation]
            </p>
          </div>
        </div>
      </Section>

      {/* 7. CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center" withFluidVertical>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-white)] mb-6 leading-tight">
            Tell Us What You Need.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mt-4">
            <Link href="#contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
              Discuss Your Requirement
            </Link>
            <Link href="/manufacturing" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-base font-medium hover:text-[var(--color-brand-warm-white)] transition-colors underline underline-offset-4 w-full sm:w-auto text-center mt-4 sm:mt-0">
              Explore Manufacturing &rarr;
            </Link>
          </div>
        </div>
      </Section>

    </div>
  );
}
