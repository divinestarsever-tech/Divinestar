import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
              Precision At Every Stage.
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)] max-w-2xl">
              A technology-led manufacturing operation built for consistency and repeat B2B requirements.
            </p>
          </div>
          <Placeholder className="aspect-[4/3] w-full" label="[Facility video/image pending]" />
        </div>
      </Section>

      {/* 2. FACILITY OVERVIEW */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div className="order-2 md:order-1">
            <Placeholder className="aspect-[4/3] w-full" label="[Facility image pending]" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-medium">
              [Facility location, floor area, workforce, equipment and production capability — pending client confirmation]
            </p>
          </div>
        </div>
      </Section>

      {/* 3. PROCESS NAVIGATOR */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {[
              { title: "Rough Procurement", desc: "Structured intake and preliminary sorting." },
              { title: "Planning", desc: "Mapping the optimal yield and structure." },
              { title: "Laser Cutting", desc: "Precision sectioning of the rough stone." },
              { title: "Bruting", desc: "Forming the foundational girdle shape." },
              { title: "Polishing", desc: "Faceting to exact mathematical proportions." },
              { title: "Grading & Assortment", desc: "Categorising against strict parameters." },
              { title: "Quality Control", desc: "Final verification and consistency check." },
              { title: "Packing & Dispatch", desc: "Secure preparation for international shipping." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4 text-center">
                <Placeholder className="aspect-square w-full" label="[Image pending]" />
                <h3 className="text-sm font-bold text-[var(--color-brand-graphite)] tracking-wide uppercase mt-2">{step.title}</h3>
                <p className="text-xs text-[var(--color-brand-text-secondary)] leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. TECHNOLOGY & CRAFTSMANSHIP */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[var(--fluid-gap)] w-full">
          <div className="bg-[var(--color-brand-panel)] p-8 md:p-12 border border-[var(--color-brand-line)] flex flex-col justify-center">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Technology
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              [Machinery and technology details — pending client confirmation]
            </p>
          </div>
          <div className="bg-[var(--color-brand-panel)] p-8 md:p-12 border border-[var(--color-brand-line)] flex flex-col justify-center">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Craftsmanship
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              Skilled professionals oversee every stage, combining technical training with hands-on expertise.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. QUALITY GATES */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Where Quality Is Checked
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed mb-8">
              Quality checks are built into each stage of the process, from planning through to final packing, to maintain consistency across every requirement.
            </p>
          </div>
          <Placeholder className="aspect-[16/9] w-full" label="[Diagram/Image pending]" />
        </div>
      </Section>

      {/* 6. RESOURCE EFFICIENCY */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full max-w-4xl">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Resource Efficiency
          </h2>
          <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
            [Resource efficiency and waste reduction details — pending client confirmation]
          </p>
        </div>
      </Section>

      {/* 7. GALLERY */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <Placeholder key={idx} className="aspect-square w-full" label="[Facility photo pending]" />
            ))}
          </div>
        </div>
      </Section>

      {/* 8. CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center" withFluidVertical>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="#contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
              Discuss a Repeat Requirement
            </Link>
            <Link href="#" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-base font-medium hover:text-[var(--color-brand-warm-white)] transition-colors underline underline-offset-4 w-full sm:w-auto text-center mt-4 sm:mt-0">
              Connect With Manufacturing Sales
            </Link>
          </div>
        </div>
      </Section>

    </div>
  );
}
