import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. HERO */}
      <Section className="relative min-h-[90vh] flex flex-col justify-center" withFluidVertical>
        <Placeholder isHero label="[Hero video pending]" />
        <div className="relative z-10 w-full text-[var(--color-brand-white)]">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight mb-6 uppercase max-w-4xl">
            ROUND DIAMONDS. ENGINEERED FOR CONSISTENCY.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl text-[var(--color-brand-warm-white)]">
            Precision manufacturing, disciplined assortment and dependable B2B supply for jewellery manufacturers and trade partners.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
              Discuss Your Requirement
            </Link>
            <Link href="/manufacturing" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-base font-medium hover:text-[var(--color-brand-warm-white)] transition-colors underline underline-offset-4">
              Explore Manufacturing &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* 2. VERIFIED PROOF STRIP */}
      <Section className="bg-[var(--color-brand-graphite)] text-[var(--color-brand-white)] py-8 border-b border-[var(--color-brand-line)]/20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 w-full">
          <span className="text-sm md:text-base font-medium tracking-wide uppercase text-center w-full md:w-auto">Round Diamond Focus</span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-line)]/50"></span>
          <span className="text-sm md:text-base font-medium tracking-wide uppercase text-center w-full md:w-auto">Dedicated Assortment</span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-line)]/50"></span>
          <span className="text-sm md:text-base font-medium tracking-wide uppercase text-center w-full md:w-auto">Export Support</span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-line)]/50"></span>
          <span className="text-sm md:text-base font-medium tracking-wide uppercase text-center w-full md:w-auto">Direct B2B Relationships</span>
        </div>
      </Section>

      {/* 3. WHO WE ARE */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div>
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">Who We Are</h2>
            <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed mb-8">
              Divine Star is a B2B diamond manufacturer built around precision, consistency and long-term trade relationships. Our focus is round-diamond expertise, disciplined assortment and dependable global supply for jewellery manufacturers, brands and wholesalers.
            </p>
            <Link href="/about" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
              Learn About Us &rarr;
            </Link>
          </div>
          <Placeholder className="aspect-[4/3] w-full" label="[Image pending]" />
        </div>
      </Section>

      {/* 4. MANUFACTURING STORY */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] text-center leading-tight">
            Manufacturing Story
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
            {[
              "Planning", "Laser Cutting", "Polishing", "Grading & Assortment", "Quality Control", "Packing"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <Placeholder className="aspect-square w-full" label="[Image pending]" />
                <span className="text-sm font-semibold text-[var(--color-brand-graphite)] tracking-wide uppercase text-center">{step}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/manufacturing" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
              Explore Manufacturing &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. ROUND DIAMOND SPECIALISATION */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[var(--fluid-gap)] w-full">
          <div className="lg:col-span-2">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Built Around Round-Diamond Expertise
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              Divine Star specialises in round diamonds across melee and calibrated sizes, with assortment and quality control built for repeat B2B requirements.
            </p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              "Size Range", "Colour Range", "Clarity Range", "Assortment Formats"
            ].map((title, idx) => (
              <div key={idx} className="bg-[var(--color-brand-panel)] p-6 md:p-8 border border-[var(--color-brand-line)] flex flex-col justify-center min-h-[140px] md:min-h-[160px]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-graphite)] mb-2">{title}</h3>
                <p className="text-[var(--color-brand-text-secondary)]">[pending confirmation]</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. QUALITY & ASSORTMENT */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] items-center w-full">
          <div className="order-2 md:order-1">
            <Placeholder className="aspect-[4/3] w-full" label="[Image pending]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Consistency, Verified at Every Stage
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              Every parcel is reviewed under microscope and loupe grading to maintain consistent colour, clarity and make within agreed parameters.
            </p>
          </div>
        </div>
      </Section>

      {/* 7. CLIENT SERVICES */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Client Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Dedicated Assortment", desc: "Consistent colour and clarity matching to your specified parameters." },
              { title: "Bagging & Parcel Services", desc: "Packing formats structured around your operational needs." },
              { title: "Export & Logistics", desc: "Documentation and delivery coordination for international requirements." },
              { title: "Client-Specific Requirements", desc: "Custom sorting and coding available on request." }
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] border-b border-[var(--color-brand-line)] pb-4">{service.title}</h3>
                <p className="text-[var(--color-brand-text-secondary)] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
            View All Services &rarr;
          </Link>
        </div>
      </Section>

      {/* 8. GLOBAL SERVICE */}
      <Section className="bg-[var(--color-brand-panel)] text-center" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Direct B2B Relationships, Global Reach
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed mb-8 max-w-4xl">
            Divine Star serves B2B clients across international markets with direct sales relationships and export-ready logistics.
          </p>
          <div className="bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] px-6 py-4 w-full md:w-auto">
            <p className="text-sm font-medium text-[var(--color-brand-graphite)]">
              [Verified markets and office locations â€” pending client confirmation]
            </p>
          </div>
        </div>
      </Section>

      {/* 9. RESPONSIBILITY */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="text-center w-full flex flex-col items-center">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Progress With Clear Accountability
          </h2>
          <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed mb-8 max-w-3xl">
            Responsible sourcing and resource efficiency are part of how Divine Star operates. Detailed policies and documentation are available on request.
          </p>
          <Link href="/responsibility" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
            Learn More &rarr;
          </Link>
        </div>
      </Section>

      {/* 10. LEADERSHIP TEASER */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-[var(--fluid-gap)] mb-12">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex flex-col gap-6 text-center">
                <Placeholder className="aspect-[3/4] w-full" label="[Image pending]" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-graphite)]">[Leadership name â€” pending client confirmation]</h3>
                  <p className="text-sm text-[var(--color-brand-text-secondary)] uppercase tracking-widest mt-1">[Title â€” pending confirmation]</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/leadership" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
              Meet Our Leadership &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* 11. TRUST / CLIENT VOICE */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] text-center leading-tight">
            How We Work With Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="p-8 border border-[var(--color-brand-line)]/50 bg-[var(--color-brand-panel)]/50 flex items-center justify-center min-h-[140px]">
              <p className="text-lg font-medium text-[var(--color-brand-graphite)]">"Clear communication from first enquiry to delivery."</p>
            </div>
            <div className="p-8 border border-[var(--color-brand-line)]/50 bg-[var(--color-brand-panel)]/50 flex items-center justify-center min-h-[140px]">
              <p className="text-lg font-medium text-[var(--color-brand-graphite)]">"Consistent quality across repeat orders."</p>
            </div>
            <div className="p-8 border border-[var(--color-brand-line)]/50 bg-[var(--color-brand-panel)]/50 flex items-center justify-center min-h-[140px]">
              <p className="text-lg font-medium text-[var(--color-brand-graphite)]">"Structured documentation for every shipment."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 12. FINAL CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-white)] mb-6 leading-tight">
            Tell Us What You Need.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-warm-white)] font-light mb-10 opacity-90 max-w-2xl">
            Start a conversation about your requirement, assortment needs, or export enquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
              Discuss Your Requirement
            </Link>
            <Link href="#" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-base font-medium hover:text-[var(--color-brand-warm-white)] transition-colors underline underline-offset-4 w-full sm:w-auto text-center mt-4 sm:mt-0">
              Connect With Sales
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}


