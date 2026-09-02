import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import InteractiveDiamondGraphic from "@/components/ui/InteractiveDiamondGraphic";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO (Intricate Technical Dashboard) */}
      <section className="w-full min-h-[75vh] md:min-h-[80vh] lg:min-h-[90vh] bg-[var(--color-brand-white)] p-4 md:p-6 lg:p-8 flex flex-col">
        <div className="w-full flex-grow max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[1px] bg-[var(--color-brand-line)] border-[1px] border-[var(--color-brand-line)] shadow-2xl">
          
          {/* Block 01: The Core Title (Dark Mode) */}
          <div className="relative bg-[var(--color-brand-graphite)] text-white md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden group min-h-[40vh] md:min-h-0">
            
            {/* Highly complex diagonal mesh background */}
            <div className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none transition-transform duration-1000 group-hover:scale-105">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="diagonal-mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect x="0" y="0" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-mesh)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 mb-6 lg:mb-10 flex items-center">
                <span className="w-8 h-[1px] bg-white/30 mr-4"></span>
                The Executive Board
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight uppercase leading-[1.1]">
                Our Leadership.
              </h1>
            </div>
          </div>

          {/* Block 02: Interactive 3D Diamond Graphic */}
          <InteractiveDiamondGraphic />

          {/* Block 03: The Subhead (Warm Mode) */}
          <div className="relative bg-[var(--color-brand-warm-white)] md:col-span-2 p-8 md:p-12 lg:p-16 flex items-center group min-h-[35vh] md:min-h-0">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-[var(--color-brand-graphite)] leading-[1.7] lg:leading-[1.8] max-w-lg relative z-10">
              The team responsible for Divine Star&apos;s manufacturing quality, client relationships and global operations.
            </p>
            
            {/* Subtle framing corner accents */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 w-4 h-4 border-t border-l border-[var(--color-brand-graphite)] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 w-4 h-4 border-b border-r border-[var(--color-brand-graphite)] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>

          {/* Block 04: Architectural Grid Texture (Panel Mode) */}
          <div className="relative bg-[var(--color-brand-panel)] md:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-end overflow-hidden group min-h-[35vh] md:min-h-0">
            
            {/* Blueprint Grid Texture completely filling the space */}
            <div className="absolute inset-0 opacity-[0.06] transition-opacity duration-700 group-hover:opacity-15">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="blueprint-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="20" height="20" fill="none" stroke="var(--color-brand-graphite)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#blueprint-grid)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start w-full mb-12">
                 <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase text-[var(--color-brand-text-secondary)]">Data Matrix</span>
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-[var(--color-brand-text-secondary)]">
                   <rect x="3" y="3" width="18" height="18" />
                   <path d="M3 12L21 12" />
                   <path d="M12 3L12 21" />
                 </svg>
              </div>
              
              <div className="flex justify-between items-end w-full">
                 <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase text-[var(--color-brand-text-secondary)]">Global Operations</span>
                 <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase text-[var(--color-brand-text-secondary)]">EST. 2024</span>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* 2. LEADERSHIP DIRECTORY (Premium Cinematic Cards) */}
      <section className="w-full bg-[var(--color-brand-graphite)] pt-[var(--fluid-py)] pb-0">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="group relative w-full aspect-[3/4] overflow-hidden cursor-crosshair bg-neutral-900 shadow-2xl">
                
                {/* Full-Bleed Portrait Background */}
                <div className="absolute inset-0 w-full h-full">
                  <Placeholder className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" label={`[Portrait 0${idx}]`} />
                </div>

                {/* Always-on subtle gradient to ensure text readability even before hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

                {/* Index Marker */}
                <div className="absolute top-6 left-6 z-10 overflow-hidden">
                  <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 transform transition-transform duration-700 group-hover:-translate-y-[200%] opacity-100 group-hover:opacity-0">
                    0{idx}
                  </span>
                </div>

                {/* Premium Glass Reveal Panel at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-6 lg:p-8 flex flex-col transform transition-all duration-700 group-hover:bg-black/70 group-hover:border-white/20">
                  
                  {/* Name & Title (Always Visible) */}
                  <div className="flex flex-col">
                    <h2 className="text-2xl lg:text-3xl font-light tracking-tighter uppercase text-white mb-2 drop-shadow-md">
                      [Name Pending]
                    </h2>
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--color-brand-warm-white)]/80">
                      [Title &mdash; pending]
                    </p>
                  </div>

                  {/* Expandable Bio & Link (Revealed on Hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <div className="pt-6 flex flex-col gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                        <p className="text-xs lg:text-sm text-white/80 leading-relaxed font-light">
                          [Bio &mdash; pending client confirmation. Final bio will be 80-140 words focused on expertise and functional responsibility.]
                        </p>
                        <Link href="#" className="inline-flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.2em] text-white hover:text-[var(--color-brand-warm-white)] border border-white/20 px-5 py-3 transition-colors hover:bg-white/10 w-max">
                          LinkedIn Profile
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-3 h-3">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Section Boundary Divider (Touches bottom edge) */}
        <div className="w-full mt-[var(--fluid-py)] relative z-20">
          <div className="w-full max-w-[1920px] mx-auto flex items-center gap-4 px-4 md:px-8 opacity-20">
            <div className="h-[1px] flex-grow bg-white"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-3 h-3 flex-shrink-0">
              <rect x="3" y="3" width="18" height="18" transform="rotate(45 12 12)" />
            </svg>
            <div className="h-[1px] flex-grow bg-white"></div>
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
          <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center mt-6">
            Discuss Your Requirement
          </Link>
        </div>
      </Section>

    </div>
  );
}

