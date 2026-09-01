import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
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
      <Section className="bg-[var(--color-brand-graphite)] border-b border-[var(--color-brand-line)]/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <div className="py-6 px-4 flex items-center justify-center text-center border-b lg:border-b-0 border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Round Diamond Focus</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Dedicated Assortment</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Export Support</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Direct B2B Relationships</span>
          </div>
        </div>
      </Section>

      {/* 3. WHO WE ARE */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="flex flex-col lg:flex-row lg:items-start w-full">
          
          {/* MOBILE IMAGE */}
          <div className="lg:hidden self-stretch w-auto -mx-[var(--fluid-px)] mb-[var(--fluid-gap)] shrink-0">
            <Placeholder className="aspect-[4/3] w-full" label="[Image pending]" />
          </div>

          {/* TEXT (45%) */}
          <div className="w-full lg:w-[45%] pr-0 lg:pr-12 xl:pr-16 z-10 shrink-0">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">Who We Are</h2>
            <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed mb-8">
              Divine Star is a B2B diamond manufacturer built around precision, consistency and long-term trade relationships. Our focus is round-diamond expertise, disciplined assortment and dependable global supply for jewellery manufacturers, brands and wholesalers.
            </p>
            <Link href="/about" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
              Learn About Us &rarr;
            </Link>
          </div>

          {/* DESKTOP IMAGE (55%) */}
          <div 
            className="hidden lg:block shrink-0 lg:mt-12 h-[540px]" 
            style={{ 
              width: "calc(55% + var(--fluid-px))", 
              marginRight: "calc(var(--fluid-px) * -1)" 
            }}
          >
            <Placeholder className="h-full w-full object-cover" label="[Image pending]" />
          </div>

        </div>
      </Section>

      {/* 4. MANUFACTURING STORY */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] text-center leading-tight">
            Manufacturing Story
          </h2>
          <div className="relative flex flex-col lg:flex-row w-full gap-8 lg:gap-4 mb-[var(--fluid-gap)] lg:pt-8 lg:pb-8">
            <div id="manufacturing-line" className="absolute left-[11px] lg:left-0 top-0 bottom-0 lg:top-[50%] lg:bottom-auto w-[1px] lg:w-full h-auto lg:h-[1px] bg-[var(--color-brand-line)] z-0" />
            
            {[
              "Planning", "Laser Cutting", "Polishing", "Grading & Assortment", "Quality Control", "Packing"
            ].map((step, idx) => {
              const isOdd = (idx + 1) % 2 !== 0; // 1, 3, 5
              const number = `0${idx + 1}`;
              
              return (
                <div key={idx} className="relative flex flex-row lg:flex-col items-center lg:items-stretch lg:justify-center w-full lg:w-1/6 gap-6 lg:gap-0 z-10">
                  
                  {/* Mobile Marker */}
                  <div className="flex lg:hidden flex-col items-center justify-center shrink-0 w-6">
                    <span className="text-xs font-mono text-[var(--color-brand-text-secondary)] mb-1">{number}</span>
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-graphite)] ring-4 ring-[var(--color-brand-warm-white)]" />
                  </div>

                  {/* Desktop Dot */}
                  <div className="hidden lg:flex absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center shrink-0 z-20">
                    <span className="absolute bottom-full mb-2 text-xs font-mono text-[var(--color-brand-text-secondary)] bg-[var(--color-brand-warm-white)] px-1">{number}</span>
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-graphite)] ring-4 ring-[var(--color-brand-warm-white)]" />
                  </div>

                  {/* Content translated, dot stays fixed */}
                  <div className={`flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none ${isOdd ? 'lg:-translate-y-6' : 'lg:translate-y-6'}`}>
                    <Placeholder className={`w-full ${isOdd ? 'aspect-[3/4]' : 'aspect-square'}`} label="[Image pending]" />
                    <span className="step-caption text-sm font-semibold text-[var(--color-brand-graphite)] tracking-wide uppercase text-left lg:text-center px-1 break-words">{step}</span>
                  </div>
                  
                </div>
              );
            })}
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
        <div className="flex flex-col lg:flex-row w-full justify-between gap-12 lg:gap-8">
          
          {/* TEXT CONTENT (~40%) */}
          <div className="w-full lg:w-[40%] shrink-0">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Built Around Round-Diamond Expertise
            </h2>
            <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed">
              Divine Star specialises in round diamonds across melee and calibrated sizes, with assortment and quality control built for repeat B2B requirements.
            </p>
          </div>
          
          {/* DATA READOUT (~55-60%) */}
          <div id="data-readout-col" className="w-full lg:w-[55%] shrink-0 flex flex-col">
            {[
              "Size Range", "Colour Range", "Clarity Range", "Assortment Formats"
            ].map((title, idx) => (
              <div key={idx} className={`flex flex-col justify-center py-6 border-b border-[var(--color-brand-line)] ${idx === 0 ? 'border-t lg:border-t-0' : ''}`}>
                <span className="text-sm text-[var(--color-brand-text-secondary)] mb-2">{title}</span>
                <span className="text-2xl md:text-3xl font-light text-[var(--color-brand-graphite)] tracking-tight">[pending confirmation]</span>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* 6. QUALITY & ASSORTMENT */}
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="flex flex-col items-center w-full">
          
          {/* TEXT */}
          <div className="w-full max-w-3xl text-center mb-[var(--fluid-gap)]">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
              Consistency, Verified at Every Stage
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed max-w-[65ch] mx-auto">
              Every parcel is reviewed under microscope and loupe grading to maintain consistent colour, clarity and make within agreed parameters.
            </p>
          </div>
          
          {/* PANORAMIC IMAGE */}
          <div id="panoramic-container" className="relative w-full aspect-[21/9]">
            {/* Viewfinder reticles */}
            <div className="absolute top-4 left-4 w-4 md:w-8 h-4 md:h-8 border-t border-l border-[var(--color-brand-text-secondary)]/30 pointer-events-none z-10" />
            <div className="absolute top-4 right-4 w-4 md:w-8 h-4 md:h-8 border-t border-r border-[var(--color-brand-text-secondary)]/30 pointer-events-none z-10" />
            <div className="absolute bottom-4 left-4 w-4 md:w-8 h-4 md:h-8 border-b border-l border-[var(--color-brand-text-secondary)]/30 pointer-events-none z-10" />
            <div className="absolute bottom-4 right-4 w-4 md:w-8 h-4 md:h-8 border-b border-r border-[var(--color-brand-text-secondary)]/30 pointer-events-none z-10" />

            <Placeholder className="h-full border-none" label="[Grading/inspection image pending]" />
          </div>

        </div>
      </Section>

      {/* 7. CLIENT SERVICES */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight">
            Client Services
          </h2>
          <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 mb-12">
            
            {/* FLAGSHIP BLOCK (~55-60%) */}
            <div id="flagship-block" className="w-full lg:w-[55%] flex flex-col justify-center bg-[var(--color-brand-warm-white)] p-8 md:p-12 lg:p-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-brand-graphite)] mb-6 leading-tight">
                Dedicated Assortment
              </h3>
              <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed">
                Consistent colour and clarity matching to your specified parameters.
              </p>
            </div>

            {/* COMPACT STACK (~40-45%) */}
            <div id="compact-stack" className="w-full flex-1 flex flex-col justify-center gap-12 lg:py-8">
              {[
                { title: "Bagging & Parcel Services", desc: "Packing formats structured around your operational needs." },
                { title: "Export & Logistics", desc: "Documentation and delivery coordination for international requirements." },
                { title: "Client-Specific Requirements", desc: "Custom sorting and coding available on request." }
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-brand-graphite)]">{service.title}</h3>
                  <p className="text-sm md:text-base text-[var(--color-brand-text-secondary)] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
          <Link href="/services" className="inline-flex font-medium text-[var(--color-brand-graphite)] underline underline-offset-4 hover:text-[var(--color-brand-text-secondary)] transition-colors">
            View All Services &rarr;
          </Link>
        </div>
      </Section>

      {/* 8. GLOBAL SERVICE */}
      <Section className="relative bg-[var(--color-brand-panel)] overflow-hidden" withFluidVertical>
        {/* Background Network Graphic */}
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none text-[var(--color-brand-graphite)]" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M150 200 L280 140 L420 250 L600 160 L780 280 L950 180 L1100 220" />
            <path d="M280 140 L350 80 L600 160" />
            <path d="M420 250 L500 350 L780 280" />
            <path d="M780 280 L880 340 L1100 220" />
            <path d="M600 160 L750 90 L950 180" />
            <path d="M150 200 L200 300 L420 250" />
            <path d="M950 180 L1020 120 L1100 220" />
            
            <circle cx="150" cy="200" r="3" fill="currentColor" />
            <circle cx="200" cy="300" r="2" fill="currentColor" />
            <circle cx="280" cy="140" r="4" fill="currentColor" />
            <circle cx="350" cy="80" r="2.5" fill="currentColor" />
            <circle cx="420" cy="250" r="5" fill="currentColor" />
            <circle cx="500" cy="350" r="2" fill="currentColor" />
            <circle cx="600" cy="160" r="4.5" fill="currentColor" />
            <circle cx="750" cy="90" r="3" fill="currentColor" />
            <circle cx="780" cy="280" r="5" fill="currentColor" />
            <circle cx="880" cy="340" r="2.5" fill="currentColor" />
            <circle cx="950" cy="180" r="4" fill="currentColor" />
            <circle cx="1020" cy="120" r="2" fill="currentColor" />
            <circle cx="1100" cy="220" r="3.5" fill="currentColor" />
          </g>
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start w-full max-w-4xl">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Direct B2B Relationships, Global Reach
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed mb-8 max-w-3xl">
            Divine Star serves B2B clients across international markets with direct sales relationships and export-ready logistics.
          </p>
          <div className="border border-[var(--color-brand-line)] px-6 py-4 w-full md:w-auto">
            <p className="text-sm font-medium text-[var(--color-brand-graphite)]">
              [Verified markets and office locations — pending client confirmation]
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full">
          
          {/* Left: Section Identity */}
          <div className="lg:w-1/3 shrink-0">
            <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] leading-tight sticky top-32">
              How We Work With Clients
            </h2>
          </div>

          {/* Right: The Manifesto / Statements */}
          <div className="flex-1 flex flex-col w-full mt-4 lg:mt-0">
            {[
              { num: "01", text: "Clear communication from first enquiry to delivery." },
              { num: "02", text: "Consistent quality across repeat orders." },
              { num: "03", text: "Structured documentation for every shipment." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-10 lg:py-16 border-b border-[var(--color-brand-line)] first:pt-0">
                <span className="text-sm md:text-base font-medium text-[var(--color-brand-text-secondary)] tracking-widest shrink-0 sm:pt-3">
                  {item.num}
                </span>
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-brand-graphite)] leading-[1.3] tracking-tight max-w-3xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* 12. FINAL CTA */}
      <Section id="contact" className="relative bg-[var(--color-brand-graphite)] text-center overflow-hidden" withFluidVertical>
        
        {/* Background Facet Graphic */}
        <svg viewBox="0 0 600 600" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -bottom-24 -right-24 w-[400px] md:w-[700px] h-[400px] md:h-[700px] text-[var(--color-brand-white)] opacity-[0.08] pointer-events-none z-0" aria-hidden="true">
          <path d="M300 0 L600 300 L300 600 L0 300 Z" />
          <path d="M150 150 L450 150 L450 450 L150 450 Z" />
          <path d="M300 0 L450 150" />
          <path d="M600 300 L450 450" />
          <path d="M300 600 L150 450" />
          <path d="M0 300 L150 150" />
          <path d="M300 0 L300 150" />
          <path d="M600 300 L450 300" />
          <path d="M300 600 L300 450" />
          <path d="M0 300 L150 300" />
          <path d="M150 150 L300 300 L450 150" />
          <path d="M450 450 L300 300 L150 450" />
        </svg>

        <div className="relative z-10 flex flex-col items-center w-full">
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


