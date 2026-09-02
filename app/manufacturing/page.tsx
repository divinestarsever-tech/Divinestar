import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
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
      <Section className="bg-[var(--color-brand-warm-white)]" withFluidVertical>
        <div className="w-full">
          <h2 className="text-[length:var(--fluid-h2)] font-bold tracking-tight text-[var(--color-brand-graphite)] mb-[var(--fluid-gap)] leading-tight text-center">
            The Process
          </h2>
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

