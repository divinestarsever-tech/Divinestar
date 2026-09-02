import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import GyroscopeGraphic from "@/components/ui/GyroscopeGraphic";
import BookScrollPipeline from "@/components/ui/BookScrollPipeline";

export default function GlobalReachPage() {
  return (
    <div className="flex flex-col w-full overflow-clip">
      
      {/* 1. PAGE HERO (Premium 3D Split-Pane Layout) */}
      <section className="relative w-full min-h-[85vh] lg:h-screen flex flex-col lg:flex-row bg-[var(--color-brand-graphite)] border-b border-[var(--color-brand-line)] overflow-hidden">
        
        {/* Left Side: Massive Typography */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-full flex flex-col justify-end px-4 md:px-12 lg:px-20 pb-16 lg:pb-32 relative z-10">
          <div className="max-w-3xl">
            <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-brand-warm-white)] opacity-70 mb-8">
              Logistics &mdash; International Export
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-light tracking-tighter text-white mb-8 leading-[0.9]">
              Direct B2B Relationships,<br />Global Reach.
            </h1>
            <div className="relative pl-6 md:pl-8 border-l border-white/20">
              <p className="text-lg md:text-2xl font-light text-[var(--color-brand-warm-white)] opacity-80 max-w-xl leading-relaxed">
                Divine Star serves B2B clients across international markets with direct sales relationships and export-ready logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Frosted Glass 3D Gyroscope */}
        <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 bg-white/5 backdrop-blur-2xl">
          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gyro-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gyro-grid)" />
            </svg>
          </div>
          
          <GyroscopeGraphic />
        </div>

      </section>

      {/* 2. GLOBAL PRESENCE (Cinematic Image Accordion) */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mx-auto mb-8" />
          <h2 className="text-[length:var(--fluid-h2)] font-light tracking-tighter text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Where We Operate
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light">
            [Office locations, representative markets, and export regions — pending client confirmation]
          </p>
        </div>

        {/* Cinematic Flex Accordion */}
        <div className="flex flex-col lg:flex-row h-[900px] lg:h-[600px] w-full gap-2">
          
          {/* Panel 1: Offices */}
          <div className="relative flex-1 lg:hover:flex-[1.8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
            <img src="/images/global_offices.jpg" alt="Offices" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
              <span className="font-mono text-xs text-white/70 tracking-widest uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">01 //</span>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Office Locations</h3>
              <div className="grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700">
                <div className="overflow-hidden">
                   <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed">
                     Strategic headquarters and regional administrative centers anchoring our global footprint.
                   </p>
                </div>
              </div>
              {/* Mobile always visible text fallback */}
              <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed lg:hidden">
                Strategic headquarters and regional administrative centers.
              </p>
            </div>
          </div>

          {/* Panel 2: Markets */}
          <div className="relative flex-1 lg:hover:flex-[1.8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
            <img src="/images/global_markets.jpg" alt="Markets" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
              <span className="font-mono text-xs text-white/70 tracking-widest uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">02 //</span>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Global Markets</h3>
              <div className="grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700">
                <div className="overflow-hidden">
                   <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed">
                     Key international sectors and financial hubs driving our growth and client demand.
                   </p>
                </div>
              </div>
              {/* Mobile fallback */}
              <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed lg:hidden">
                Key international sectors and financial hubs driving growth.
              </p>
            </div>
          </div>

          {/* Panel 3: Export */}
          <div className="relative flex-1 lg:hover:flex-[1.8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
            <img src="/images/global_export.jpg" alt="Export Regions" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
              <span className="font-mono text-xs text-white/70 tracking-widest uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">03 //</span>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Export Logistics</h3>
              <div className="grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700">
                <div className="overflow-hidden">
                   <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed">
                     Direct logistics, freight, and distribution networks spanning multiple continents.
                   </p>
                </div>
              </div>
              {/* Mobile fallback */}
              <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed lg:hidden">
                Direct logistics and distribution networks spanning continents.
                </p>
              </div>
            </div>
          </div>
        </Section>

      {/* 3. HOW WE HANDLE YOUR ENQUIRY (Book Scroll Pipeline) */}
      <div className="w-full relative z-10 border-b border-white/10 bg-[var(--color-brand-graphite)]">
        <BookScrollPipeline />
      </div>

      {/* 4. SALES CONTACT ROUTING */}
      <Section className="bg-[var(--color-brand-white)] overflow-hidden" withFluidVertical>
        <div className="w-full text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mx-auto mb-8" />
          <h2 className="text-[length:var(--fluid-h2)] font-light tracking-tighter text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Direct Routing
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light">
            Dedicated infrastructure ensuring rapid response times across all timezones.
          </p>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col gap-24 md:gap-40">
          
          {/* India Sales Offset Block */}
          <div className="relative w-full flex flex-col md:flex-row items-center">
            {/* Image (Left) */}
            <div className="w-full md:w-[65%] h-[400px] md:h-[700px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="/images/sales_india_light.jpg" 
                alt="India Sales HQ" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Content (Right Overlap) */}
            <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 w-[90%] md:w-[45%] mx-auto md:mx-0 mt-[-60px] md:mt-0 bg-white/90 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/50">
              <div className="text-[var(--color-brand-graphite)]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4 text-[var(--color-brand-text-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Timezone: IST (UTC +5:30)
                </div>
                <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8">India Sales HQ</h3>
                <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mb-8" />
                <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-12">
                  [Contact details — pending client confirmation]
                </p>
                <button className="flex items-center gap-4 text-[var(--color-brand-graphite)] font-medium uppercase tracking-widest text-xs group/btn hover:text-black transition-colors">
                  Connect directly
                  <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] group-hover/btn:w-16 transition-all duration-500 ease-out" />
                </button>
              </div>
            </div>
          </div>

          {/* International Sales Offset Block */}
          <div className="relative w-full flex flex-col md:flex-row-reverse items-center">
            {/* Image (Right) */}
            <div className="w-full md:w-[65%] h-[400px] md:h-[700px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="/images/sales_international_light.jpg" 
                alt="International Trade Desk" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Content (Left Overlap) */}
            <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-20 w-[90%] md:w-[45%] mx-auto md:mx-0 mt-[-60px] md:mt-0 bg-white/90 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/50">
              <div className="text-[var(--color-brand-graphite)]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4 text-[var(--color-brand-text-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Global Trade Desk
                </div>
                <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8">International</h3>
                <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mb-8" />
                <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-12">
                  [Contact details — pending client confirmation]
                </p>
                <button className="flex items-center gap-4 text-[var(--color-brand-graphite)] font-medium uppercase tracking-widest text-xs group/btn hover:text-black transition-colors">
                  Route Enquiry
                  <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] group-hover/btn:w-16 transition-all duration-500 ease-out" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* 5. CTA */}
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
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center mt-6">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

