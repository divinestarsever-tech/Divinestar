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
      solution: "Custom bagging configurations ranging from single-stone precision flutes to volume-calibrated bulk parcels, securely sealed with tamper-evident digital manifests.",
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
      solution: "Proprietary internal grading pipelines mapped directly to your exact SKU tolerances, allowing you to bypass secondary QC and drop our parcels straight into your manufacturing line.",
      needed: "Details of your specific requirement."
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO (Premium Cinematic Dark Mode) */}
      <section className="relative w-full bg-[var(--color-brand-graphite)] min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-between overflow-hidden">
        
        {/* Enormous Background Typography Watermark */}
        <div className="absolute top-[35%] lg:top-[30%] -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none flex justify-center z-0 select-none">
          <span className="text-[22vw] font-bold text-transparent tracking-tighter leading-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}>
            SERVICES
          </span>
        </div>

        <div className="pt-24 md:pt-32" />

        {/* Main Typography Area */}
        <div className="w-full max-w-[1920px] mx-auto px-[var(--fluid-px)] flex flex-col lg:flex-row justify-between items-start gap-12 z-10 flex-grow pb-16 lg:pb-20">
          
          {/* Left / Center: Headline */}
          <div className="w-full lg:w-7/12 pt-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/50">
                Client Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-light tracking-tight text-white mb-6 flex flex-col">
              <span className="font-bold">Services Built</span>
              <span className="font-serif italic text-white/60">Around Your</span>
              <span className="font-bold">Requirement.</span>
            </h1>
          </div>

          {/* Right: Subhead Box offset down */}
          <div className="w-full lg:w-4/12 lg:mt-32">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 lg:p-10 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/50" />
              <div className="absolute top-0 left-0 w-[1px] h-2 bg-white/50" />
              <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/50" />
              <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-white/50" />
              
              <div className="w-8 h-[1px] bg-white/30 mb-6" />
              <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
                Dedicated assortment, packing formats, export coordination and client-specific requirements - structured for repeat B2B business.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Service Index (Control Panel) */}
        <div className="w-full border-t border-white/10 bg-white/5 backdrop-blur-sm z-10">
          <div className="w-full max-w-[1920px] mx-auto px-0 lg:px-[var(--fluid-px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Dedicated Assortment",
                "Bagging & Parcel Services",
                "Export & Logistics",
                "Client-Specific Requirements"
              ].map((service, idx) => (
                <div key={idx} className="group flex flex-col justify-between p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 lg:last:border-r-0 hover:bg-white/10 transition-colors duration-500 cursor-default">
                  <span className="font-mono text-[10px] tracking-widest text-white/30 group-hover:text-white/70 transition-colors mb-8 lg:mb-16">
                    0{idx + 1}
                  </span>
                  <h3 className="font-medium text-white text-base md:text-lg tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 2. SERVICE BLOCKS (Asymmetric Architectural Grid) */}
      <section className="w-full bg-[var(--color-brand-white)] py-20 lg:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-[var(--fluid-px)]">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-[1px] bg-[var(--color-brand-line)] border-y border-[var(--color-brand-line)] min-h-[120vh]">
            
            {/* Block 01: Dedicated Assortment (3x2) */}
            <div tabIndex={0} className="group outline-none cursor-pointer relative bg-[var(--color-brand-white)] lg:col-span-3 lg:row-span-2 p-8 lg:p-12 xl:p-16 flex flex-col justify-between hover:bg-[var(--color-brand-graphite)] active:bg-[var(--color-brand-graphite)] focus:bg-[var(--color-brand-graphite)] transition-colors duration-700">
              <div className="flex justify-between items-start mb-16 lg:mb-0">
                <span className="font-mono text-xs tracking-widest text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">01</span>
                <Link href="/contact" className="hidden lg:inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">
                  Discuss <span className="text-sm transition-transform group-hover:translate-x-1 group-active:translate-x-1 group-focus:translate-x-1">&rarr;</span>
                </Link>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mt-12 lg:mt-0">
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] leading-[0.9] font-light tracking-tight text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors uppercase">
                  Dedicated<br />
                  <span className="font-bold">Assortment</span>
                </h2>
                
                <div className="w-full lg:w-[40%] flex flex-col gap-8 shrink-0">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">The Challenge</span>
                    <p className="text-sm lg:text-base font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[0].problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">Our Approach</span>
                    <p className="text-sm lg:text-base font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[0].solution}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">What We Need</span>
                    <p className="text-sm lg:text-base font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[0].needed}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 02: Bagging & Parcel (1x3) */}
            <div tabIndex={0} className="group outline-none cursor-pointer relative bg-[var(--color-brand-white)] lg:col-span-1 lg:row-span-3 p-8 lg:p-10 flex flex-col hover:bg-[var(--color-brand-graphite)] active:bg-[var(--color-brand-graphite)] focus:bg-[var(--color-brand-graphite)] transition-colors duration-700 h-full">
              <span className="font-mono text-xs tracking-widest text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors mb-16 lg:mb-24 block">02</span>
              
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[0.95] font-light tracking-tight text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors uppercase mb-16">
                Bagging <span className="font-serif italic text-opacity-80">&amp;</span><br />
                <span className="font-bold">Parcel</span><br />
                Services
              </h2>
              
              <div className="flex flex-col gap-10 mt-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">The Challenge</span>
                  <p className="text-sm lg:text-[13px] xl:text-sm font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[1].problem}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">Our Approach</span>
                  <p className="text-sm lg:text-[13px] xl:text-sm font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[1].solution}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">What We Need</span>
                  <p className="text-sm lg:text-[13px] xl:text-sm font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[1].needed}</p>
                </div>
              </div>
            </div>

            {/* Block 03: Export & Logistics (2x1) */}
            <div tabIndex={0} className="group outline-none cursor-pointer relative bg-[var(--color-brand-white)] lg:col-span-2 lg:row-span-1 p-8 lg:p-10 flex flex-col justify-between hover:bg-[var(--color-brand-graphite)] active:bg-[var(--color-brand-graphite)] focus:bg-[var(--color-brand-graphite)] transition-colors duration-700">
              <span className="font-mono text-xs tracking-widest text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors mb-12 lg:mb-0">03</span>
              
              <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
                <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-[1] font-light tracking-tight text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors uppercase w-full xl:w-1/2">
                  Export <span className="font-serif italic text-opacity-80">&amp;</span><br />
                  <span className="font-bold">Logistics</span>
                </h2>
                
                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">The Challenge</span>
                    <p className="text-xs font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[2].problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">Our Approach</span>
                    <p className="text-xs font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors">{services[2].solution}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 04: Client-Specific (1x1) */}
            <div tabIndex={0} className="group outline-none cursor-pointer relative bg-[var(--color-brand-white)] lg:col-span-1 lg:row-span-1 p-8 lg:p-8 xl:p-10 flex flex-col justify-between hover:bg-[var(--color-brand-graphite)] active:bg-[var(--color-brand-graphite)] focus:bg-[var(--color-brand-graphite)] transition-colors duration-700">
              <span className="font-mono text-xs tracking-widest text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors mb-8 lg:mb-0">04</span>
              
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl leading-[1] font-bold tracking-tight text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors uppercase">
                  Client<br />Specific
                </h2>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] group-hover:text-white/50 group-active:text-white/50 group-focus:text-white/50 transition-colors">Our Approach</span>
                    <p className="text-[11px] xl:text-xs font-light leading-relaxed text-[var(--color-brand-graphite)] group-hover:text-white group-active:text-white group-focus:text-white transition-colors line-clamp-4">{services[3].solution}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <Section id="contact" className="relative bg-[var(--color-brand-graphite)] text-center text-[var(--color-brand-white)] overflow-hidden" withFluidVertical>
        
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
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

