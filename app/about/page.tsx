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
        <div className="w-full max-w-2xl">
          <div className="text-lg md:text-2xl text-[var(--color-brand-graphite)] leading-[1.8] md:leading-[1.9] font-medium mb-8">
            <span className="hidden md:block float-left text-[5rem] leading-[0.8] font-bold text-[var(--color-brand-graphite)] pr-4 pt-2">
              D
            </span>
            <span className="md:hidden">D</span>ivine Star manufactures and supplies natural round diamonds for jewellery manufacturers, brands and wholesalers worldwide.
          </div>
          <p className="text-sm md:text-base text-[var(--color-brand-text-secondary)] font-medium">
            [Founding year and company history — pending client confirmation]
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
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Sticky Headline */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-32 pt-2">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase tracking-tighter text-[var(--color-brand-graphite)] leading-[0.95] mb-8">
              What We<br className="hidden lg:block" /> Stand For
            </h2>
            <div className="w-8 h-[2px] bg-[var(--color-brand-graphite)] mb-8" />
            <p className="text-xs font-bold text-[var(--color-brand-text-secondary)] uppercase tracking-[0.2em] leading-relaxed max-w-xs">
              (Draft values — pending final client approval)
            </p>
          </div>

          {/* Right Column - Values List */}
          <div className="w-full lg:w-[65%] flex flex-col border-t border-[var(--color-brand-line)]">
            {[
              { title: "Precision", desc: "Disciplined process at every stage of manufacturing." },
              { title: "Integrity", desc: "Honest communication and transparent practices." },
              { title: "Partnership", desc: "Building long-term, mutually beneficial relationships." },
              { title: "Progress", desc: "Continuous improvement through process and technology." },
              { title: "Responsibility", desc: "Accountable operations and resource efficiency." },
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="group w-full py-10 lg:py-14 border-b border-[var(--color-brand-line)] flex flex-col sm:flex-row gap-6 sm:gap-8 items-start relative transition-colors duration-500 hover:bg-[var(--color-brand-panel)]/30 px-4 -mx-4 sm:mx-0 sm:px-0"
              >
                {/* Huge Number Marker */}
                <div className="text-3xl lg:text-4xl font-light text-[var(--color-brand-graphite)]/20 group-hover:text-[var(--color-brand-graphite)] transition-colors duration-500 sm:w-16 lg:w-24 shrink-0 pt-1 font-mono">
                  0{idx + 1}
                </div>
                
                {/* Value Content (Side-by-Side on large screens) */}
                <div className="flex-1 flex flex-col xl:flex-row xl:items-baseline gap-4 xl:gap-12 w-full">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[var(--color-brand-graphite)] xl:w-[40%] group-hover:translate-x-2 transition-transform duration-500">
                    {value.title}
                  </h3>
                  <p className="text-lg lg:text-xl font-light text-[var(--color-brand-text-secondary)] leading-relaxed xl:w-[60%] group-hover:text-[var(--color-brand-graphite)] transition-colors duration-500">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Section>

      {/* 5. WHAT MAKES US DIFFERENT */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full max-w-[1600px] mx-auto">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-16 lg:mb-24 leading-tight text-center">
            What Makes Divine Star Different
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {[
              {
                text: "Round-diamond specialisation",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 lg:w-20 lg:h-20 text-[var(--color-brand-graphite)] mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <circle cx="32" cy="32" r="28" />
                    <circle cx="32" cy="32" r="14" />
                    <polygon points="32,4 46,32 32,60 18,32" />
                    <line x1="32" y1="4" x2="32" y2="60" />
                    <line x1="4" y1="32" x2="60" y2="32" />
                  </svg>
                )
              },
              {
                text: "Consistency across repeat orders",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 lg:w-20 lg:h-20 text-[var(--color-brand-graphite)] mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <rect x="12" y="12" width="40" height="40" />
                    <rect x="20" y="20" width="24" height="24" />
                    <rect x="28" y="28" width="8" height="8" />
                    <line x1="12" y1="12" x2="52" y2="52" />
                    <line x1="52" y1="12" x2="12" y2="52" />
                  </svg>
                )
              },
              {
                text: "Direct B2B relationships",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 lg:w-20 lg:h-20 text-[var(--color-brand-graphite)] mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <circle cx="24" cy="32" r="16" />
                    <circle cx="40" cy="32" r="16" />
                    <line x1="24" y1="32" x2="40" y2="32" />
                  </svg>
                )
              },
              {
                text: "Technology-supported quality control",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 lg:w-20 lg:h-20 text-[var(--color-brand-graphite)] mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <path d="M 8 20 L 8 8 L 20 8" />
                    <path d="M 44 8 L 56 8 L 56 20" />
                    <path d="M 56 44 L 56 56 L 44 56" />
                    <path d="M 20 56 L 8 56 L 8 44" />
                    <circle cx="32" cy="32" r="12" />
                    <line x1="32" y1="16" x2="32" y2="48" />
                    <line x1="16" y1="32" x2="48" y2="32" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center p-8 lg:p-12 bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Accent Top Border (Animates on hover) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[var(--color-brand-graphite)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                
                {item.icon}
                
                <h3 className="text-xl font-medium tracking-tight text-[var(--color-brand-graphite)] leading-snug">
                  {item.text}
                </h3>
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

        <div className="relative z-10 w-full flex flex-col items-center">
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

