import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Dedicated Assortment",
      problem: "Need consistent colour/clarity matching across repeat orders.",
      solution: "Assortment maintained to your specified parameters.",
      needed: "Your target colour, clarity and carat range."
    },
    {
      title: "Bagging & Parcel Services",
      problem: "Need packing formats that match your operational workflow.",
      solution: "[Pack size options — pending client confirmation]",
      needed: "Your preferred pack sizes and formats."
    },
    {
      title: "Export & Logistics",
      problem: "Need documentation and delivery coordination for international shipments.",
      solution: "Export documentation and delivery coordination handled directly.",
      needed: "Destination country and shipment requirements."
    },
    {
      title: "Client-Specific Requirements",
      problem: "Need custom sorting or coding for your specific workflow.",
      solution: "[Custom sorting/coding options — pending client confirmation]",
      needed: "Details of your specific requirement."
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
            Services Built Around Your Requirement.
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
            Dedicated assortment, packing formats, export coordination and client-specific requirements — structured for repeat B2B business.
          </p>
        </div>
      </Section>

      {/* 2. SERVICE BLOCKS */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--fluid-gap)]">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[var(--color-brand-warm-white)] border border-[var(--color-brand-line)] p-8 md:p-12 flex flex-col h-full">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-8 border-b border-[var(--color-brand-line)] pb-4">
                  {service.title}
                </h2>
                <div className="flex flex-col gap-6 flex-grow mb-8">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-graphite)] mb-1">Problem</span>
                    <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">{service.problem}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-graphite)] mb-1">Solution</span>
                    <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">{service.solution}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-graphite)] mb-1">Needed</span>
                    <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">{service.needed}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/contact" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
                    Discuss This Service &rarr;
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
          <p className="text-lg md:text-xl text-[var(--color-brand-warm-white)] font-light mb-10 opacity-90 max-w-2xl">
            Start a conversation about your requirement, assortment needs, or export enquiry.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

