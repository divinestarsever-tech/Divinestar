import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ProcessRail } from "@/components/ui/ProcessRail";
import { ManufacturingGallery } from "@/components/ui/ManufacturingGallery";

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* 1. PAGE HERO */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex flex-col">
        {/* Top 75-80% - Full-bleed Image Layer */}
        <div className="w-full flex-1 relative min-h-[45vh] md:min-h-[60vh]">
          <Placeholder className="absolute inset-0 w-full h-full object-cover" label="[Facility video/image pending]" />
        </div>
        
        {/* Premium Engineered Lower-Third Bar */}
        <div className="w-full bg-[var(--color-brand-graphite)] relative shrink-0 border-t border-white/10">
          
          {/* Subtle Engineered Grid Background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />

          <div className="w-full max-w-[1600px] mx-auto relative z-10 flex flex-col lg:flex-row lg:items-end justify-between px-[var(--fluid-px)] py-12 lg:py-16 gap-10 lg:gap-16">
            
            {/* Left: Headline Area */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6 lg:mb-10">
                <span className="w-12 h-[1px] bg-white/30" />
                <span className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">
                  Manufacturing & Technology
                </span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] font-bold tracking-tighter text-[var(--color-brand-white)] uppercase">
                Precision At <br className="hidden lg:block" />
                <span className="text-white/40">Every Stage.</span>
              </h1>
            </div>

            {/* Right: Subhead Area */}
            <div className="lg:w-[45%] xl:w-[40%] flex flex-col gap-8 lg:border-l border-white/10 lg:pl-12 lg:pb-2">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-relaxed max-w-xl">
                A technology-led manufacturing operation built for consistency and repeat B2B requirements.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. FACILITY OVERVIEW */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full max-w-[1600px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-end">
            
            {/* Architectural Framed Image (Cols 1-9) */}
            <div className="lg:col-start-1 lg:col-end-10 relative">
               {/* Decorative Precision Brackets */}
               <div className="hidden lg:block absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[var(--color-brand-graphite)]/20" />
               <div className="hidden lg:block absolute -top-4 -right-4 w-8 h-8 border-t border-r border-[var(--color-brand-graphite)]/20" />
               <div className="hidden lg:block absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-[var(--color-brand-graphite)]/20" />
               
               <div className="p-3 md:p-5 bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] shadow-sm relative z-0">
                 <Placeholder className="aspect-[16/9] w-full" label="[Facility image pending]" />
               </div>
            </div>

            {/* Overlapping Spec Card (Cols 8-13) */}
            <div className="lg:col-start-8 lg:col-end-13 relative z-10 lg:-mb-12">
               <div className="bg-[var(--color-brand-graphite)] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col gap-6">
                 
                 <div className="flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-white/30" />
                   <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-mono">
                     Facility Specs
                   </span>
                 </div>

                 <p className="text-lg md:text-xl text-[var(--color-brand-white)] leading-relaxed font-light">
                   [Facility location, floor area, workforce, equipment and production capability — pending client confirmation]
                 </p>

               </div>
            </div>

          </div>
          
        </div>
      </Section>

      {/* 3. PROCESS NAVIGATOR */}
      <ProcessRail />

      {/* 4. TECHNOLOGY & CRAFTSMANSHIP - LIGHT EDITORIAL COLUMNS */}
      <section className="w-full bg-[var(--color-brand-white)] py-16 lg:py-40">
        <div className="w-full max-w-[1600px] mx-auto px-[var(--fluid-px)]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* COLUMN 1: TECHNOLOGY */}
            <div className="w-full lg:w-1/2 flex flex-col group cursor-pointer outline-none" tabIndex={0}>
              <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-8 lg:mb-12 relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[var(--color-brand-graphite)]/5 bg-[var(--color-brand-graphite)] rounded-sm">
                <img src="/images/manufacturing/tech_laser.jpg" alt="Technology" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-105 group-active:scale-105 group-focus:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-active:mix-blend-normal group-focus:mix-blend-normal group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100" />
              </div>
              
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[var(--color-brand-graphite)]/30 transition-all duration-700 group-hover:w-16 group-active:w-16 group-focus:w-16 group-hover:bg-[var(--color-brand-graphite)] group-active:bg-[var(--color-brand-graphite)] group-focus:bg-[var(--color-brand-graphite)]" />
                  <span className="text-xs font-mono text-[var(--color-brand-graphite)]/50 tracking-[0.3em] uppercase">
                    01 / Precision
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--color-brand-graphite)] transition-transform duration-700">
                  Technology
                </h2>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-active:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light pt-4 lg:pt-6">
                      [Machinery and technology details - pending client confirmation]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: CRAFTSMANSHIP */}
            <div className="w-full lg:w-1/2 flex flex-col group cursor-pointer lg:mt-32 outline-none" tabIndex={0}>
              <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-8 lg:mb-12 relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[var(--color-brand-graphite)]/5 bg-[var(--color-brand-graphite)] rounded-sm">
                <img src="/images/manufacturing/craft_hands.jpg" alt="Craftsmanship" className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-105 group-active:scale-105 group-focus:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-active:mix-blend-normal group-focus:mix-blend-normal group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100" />
              </div>
              
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-[var(--color-brand-graphite)]/30 transition-all duration-700 group-hover:w-16 group-active:w-16 group-focus:w-16 group-hover:bg-[var(--color-brand-graphite)] group-active:bg-[var(--color-brand-graphite)] group-focus:bg-[var(--color-brand-graphite)]" />
                  <span className="text-xs font-mono text-[var(--color-brand-graphite)]/50 tracking-[0.3em] uppercase">
                    02 / Heritage
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--color-brand-graphite)] transition-transform duration-700">
                  Craftsmanship
                </h2>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-active:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light pt-4 lg:pt-6">
                      Skilled professionals oversee every stage, combining technical training with hands-on expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. QUALITY GATES - LUXURY EDITORIAL OVERLAP */}
      <Section className="bg-[var(--color-brand-graphite)] relative overflow-hidden" withFluidVertical>
        {/* Massive Background Typography Texture */}
        <div className="absolute -left-[5%] top-[5%] text-[20vw] font-black text-white/[0.015] leading-none pointer-events-none select-none tracking-tighter mix-blend-overlay">
          INSPECTION
        </div>
        <div className="absolute -right-[5%] bottom-[5%] text-[20vw] font-black text-white/[0.015] leading-none pointer-events-none select-none tracking-tighter mix-blend-overlay">
          ASSURANCE
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-[var(--fluid-px)] relative z-10 flex flex-col pt-8 lg:pt-24 pb-8 lg:pb-24">
          
          {/* IMAGE BLOCK (Right-aligned, massive) */}
          <div className="peer w-full lg:w-[85%] lg:ml-auto relative z-10 outline-none cursor-pointer" tabIndex={0}>
            <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[16/9] shadow-[0_30px_100px_rgba(0,0,0,0.6)] bg-black relative border border-white/5 group overflow-hidden">
              
              {/* Actual Image */}
              <img src="/images/manufacturing/quality_inspection.jpg" alt="Diamond Quality Inspection" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105 group-active:scale-105 group-focus:scale-105" />
              
              {/* The Target Mark (Exactly as specified: + with circle) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="relative text-white/40 mix-blend-screen drop-shadow-lg">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-16 h-16 md:w-20 md:h-20">
                    <circle cx="50" cy="50" r="10" />
                    <line x1="50" y1="0" x2="50" y2="40" />
                    <line x1="50" y1="60" x2="50" y2="100" />
                    <line x1="0" y1="50" x2="40" y2="50" />
                    <line x1="60" y1="50" x2="100" y2="50" />
                  </svg>
                </div>
              </div>

              {/* Gradient to darken the left edge where the text box overlaps on desktop */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Architectural Grid Accents */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-12 h-12 md:w-24 md:h-24 border-b border-r border-white/10" />
          </div>

          {/* TEXT BLOCK (Interactive Bottom-Left Card) */}
          <div className="w-[90%] md:w-[80%] lg:w-[35%] mx-auto lg:mx-0 lg:absolute lg:bottom-16 lg:left-[var(--fluid-px)] relative z-20 -mt-24 md:-mt-32 lg:mt-0 origin-bottom-left transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] peer-hover:scale-75 peer-active:scale-75 peer-focus:scale-75 peer-hover:lg:-translate-x-8 peer-active:lg:-translate-x-8 peer-focus:lg:-translate-x-8 peer-hover:translate-y-8 peer-active:translate-y-8 peer-focus:translate-y-8 peer-hover:opacity-40 peer-active:opacity-40 peer-focus:opacity-40">
            <div className="bg-[var(--color-brand-warm-white)] p-6 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5)] border-l-2 border-[var(--color-brand-graphite)] transition-shadow duration-1000 peer-hover:shadow-none peer-active:shadow-none peer-focus:shadow-none">
              <div className="w-12 h-[2px] bg-[var(--color-brand-graphite)] mb-6 md:mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--color-brand-graphite)] mb-4 md:mb-8 leading-[1.05]">
                Where Quality<br />Is Checked
              </h2>
              <p className="text-base md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light">
                Quality checks are built into each stage of the process, from planning through to final packing, to maintain consistency across every requirement.
              </p>
            </div>
          </div>

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
      <section className="w-full bg-[var(--color-brand-graphite)]">
        <ManufacturingGallery />
      </section>

      {/* 8. CTA */}
      <Section id="contact" className="bg-[var(--color-brand-graphite)] text-center" withFluidVertical>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
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

