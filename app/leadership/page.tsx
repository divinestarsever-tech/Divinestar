import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
            Our Leadership.
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
            The team responsible for Divine Star&apos;s manufacturing quality, client relationships and global operations.
          </p>
        </div>
      </Section>

      {/* 2. LEADERSHIP GRID */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--fluid-gap)]">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <Placeholder className="aspect-[3/4] w-full" label="[Portrait pending]" />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold tracking-tight text-[var(--color-brand-graphite)]">
                    [Name &mdash; pending client confirmation]
                  </h2>
                  <p className="text-sm font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-wide mt-1 mb-4">
                    [Title &mdash; pending confirmation]
                  </p>
                  <p className="text-base text-[var(--color-brand-text-secondary)] leading-relaxed mb-4">
                    [Bio &mdash; pending client confirmation. Final bio will be 80-140 words focused on expertise and functional responsibility.]
                  </p>
                  <Link href="#" className="text-sm text-[var(--color-brand-graphite)] hover:text-[var(--color-brand-text-secondary)] underline underline-offset-4 transition-colors">
                    [LinkedIn &mdash; pending leader approval]
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. CTA */}
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

