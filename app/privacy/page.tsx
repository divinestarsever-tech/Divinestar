import { Section } from "@/components/layout/Section";

export default function PrivacyPolicyPage() {
  const sections = [
    "Introduction",
    "Information We Collect",
    "How We Use Information",
    "Cookies",
    "Data Sharing",
    "Your Rights",
    "Contact"
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl flex flex-col gap-12">
            <div>
              <h1 className="text-[length:var(--fluid-h1)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm font-semibold text-[var(--color-brand-text-secondary)] uppercase tracking-widest">
                [Last updated — pending legal review]
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              {sections.map((heading, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)]">
                    {heading}
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
                    [Pending legal review — do not publish without final approved policy text.]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
