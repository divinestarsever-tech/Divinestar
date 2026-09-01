import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO */}
      <section className="relative w-full lg:min-h-[85vh] flex flex-col lg:flex-row border-b border-[var(--color-brand-line)]">
        
        {/* Left Dark Panel */}
        <div className="w-full lg:w-[45%] bg-[var(--color-brand-graphite)] flex flex-col justify-center relative px-[var(--fluid-px)] py-20 lg:py-24">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

          <div className="relative z-10 w-full max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/30" />
              <span className="text-xs uppercase tracking-widest font-bold text-white/50">01 // The Foundation</span>
            </div>

            <h1 className="text-[clamp(2rem,4vw,4.5rem)] font-bold uppercase tracking-tight leading-[1.05] text-white mb-6 break-words">
              Built On Precision.<br />
              <span className="text-white/40">
                Grown Through <br className="hidden sm:block" />
                Relationships.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed">
              Divine Star is a B2B round-diamond manufacturer built around consistency, technical process and long-term trade relationships.
            </p>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="w-full lg:w-[55%] h-[60vh] lg:h-auto relative bg-[var(--color-brand-panel)]">
          <Placeholder 
            className="absolute inset-0 w-full h-full object-cover" 
            label="[Facility/Building image pending]" 
          />
          
          {/* Floating 'Bridge' Card */}
          <div className="absolute -bottom-8 lg:bottom-16 left-[var(--fluid-px)] lg:-left-24 bg-[var(--color-brand-white)] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 w-[calc(100%-calc(var(--fluid-px)*2))] lg:w-[28rem] border border-[var(--color-brand-line)] flex flex-col gap-3">
             <p className="text-sm lg:text-base text-[var(--color-brand-text-secondary)] leading-relaxed">
               State-of-the-art manufacturing facilities engineered for absolute consistency at scale.
             </p>
          </div>
        </div>
      </section>

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
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight text-center lg:text-left">
            Our Journey
          </h2>
          
          {/* DESKTOP (1024px+): Horizontal Alternating Timeline */}
          <div className="hidden lg:grid grid-cols-5 w-full relative mt-16 xl:mt-24">
            {/* Continuous horizontal rail */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--color-brand-line)] -translate-y-1/2" />
            
            {[1, 2, 3, 4, 5].map((_, idx) => {
              const isAbove = idx % 2 === 0;
              return (
                <div key={idx} className="flex flex-col relative h-[280px] xl:h-[320px]">
                  {/* Top Content Area */}
                  <div className={`flex-1 flex flex-col justify-end px-4 pb-6 lg:pb-8 text-center items-center ${isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {isAbove && (
                      <>
                        <span className="block text-xl xl:text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-2">
                          [Pending]
                        </span>
                        <h3 className="text-sm xl:text-base font-medium text-[var(--color-brand-text-secondary)] leading-relaxed max-w-[200px]">
                          [Milestone — pending client confirmation]
                        </h3>
                      </>
                    )}
                  </div>

                  {/* Tick mark */}
                  <div className="relative w-full h-0 flex justify-center items-center">
                    <div className="w-[1px] h-4 bg-[var(--color-brand-graphite)] absolute -translate-y-1/2 top-0" />
                  </div>

                  {/* Bottom Content Area */}
                  <div className={`flex-1 flex flex-col justify-start px-4 pt-6 lg:pt-8 text-center items-center ${!isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {!isAbove && (
                      <>
                        <span className="block text-xl xl:text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-2">
                          [Pending]
                        </span>
                        <h3 className="text-sm xl:text-base font-medium text-[var(--color-brand-text-secondary)] leading-relaxed max-w-[200px]">
                          [Milestone — pending client confirmation]
                        </h3>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE (Below 1024px): Vertical Stacked Timeline */}
          <div className="flex flex-col lg:hidden w-full relative mt-8 pl-4 sm:pl-8">
            {/* Continuous vertical rail */}
            <div className="absolute top-2 bottom-4 left-4 sm:left-8 w-[1px] bg-[var(--color-brand-line)]" />

            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="relative pb-10 last:pb-0 pl-8 sm:pl-10">
                {/* Horizontal Tick mark */}
                <div className="absolute top-2.5 left-0 w-4 h-[1px] bg-[var(--color-brand-graphite)]" />
                
                <span className="block text-lg font-bold tracking-tight text-[var(--color-brand-graphite)] mb-1">
                  [Pending]
                </span>
                <h3 className="text-base font-medium text-[var(--color-brand-text-secondary)] leading-relaxed">
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
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
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

