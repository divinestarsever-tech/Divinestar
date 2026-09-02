import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import InteractiveGlobeGraphic from "@/components/ui/InteractiveGlobeGraphic";
import { Download } from "lucide-react";

export default function ResponsibilityPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO (Premium Interactive Geodesic Data Node) */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[var(--color-brand-panel)] overflow-hidden border-b border-[var(--color-brand-line)] group">
        
        {/* Interactive 3D Background */}
        <InteractiveGlobeGraphic />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center pointer-events-none">
          
          <div className="inline-flex items-center gap-4 mb-8 transform transition-transform duration-1000 group-hover:-translate-y-2">
            <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] transition-all duration-700 group-hover:w-16"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--color-brand-text-secondary)]">
              Global Standards
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] transition-all duration-700 group-hover:w-16"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] leading-[1.05] font-light tracking-tighter text-[var(--color-brand-graphite)] mb-8 drop-shadow-sm transition-transform duration-1000">
            Progress With Clear Accountability.
          </h1>
          
          <div className="bg-[var(--color-brand-white)]/40 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-none shadow-2xl transition-all duration-1000 group-hover:bg-[var(--color-brand-white)]/70">
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-[var(--color-brand-text-secondary)] max-w-[55ch] leading-relaxed">
              Responsible sourcing, resource efficiency and community support, backed by evidence rather than broad claims.
            </p>
          </div>

        </div>
        
        {/* Frame Corners */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-brand-graphite)] opacity-20 z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-brand-graphite)] opacity-20 z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>

      </section>

      {/* 2-5. PILLARS GRID (Cinematic Hover Rows) */}
      <section className="w-full bg-[var(--color-brand-white)] py-12 md:py-24">
        <div className="w-full max-w-[1920px] mx-auto border-t border-[var(--color-brand-line)]">
          {[
            {
              id: "I",
              title: "Responsible Sourcing",
              text: "[Sourcing policy, due diligence approach, supplier expectations — pending client confirmation and evidence]"
            },
            {
              id: "II",
              title: "Resource Efficiency",
              text: "[Energy/resource efficiency initiatives, waste reduction, verified metrics — pending client confirmation]"
            },
            {
              id: "III",
              title: "People",
              text: "[Training, workplace safety, and employee initiatives — pending HR-approved facts]"
            },
            {
              id: "IV",
              title: "Community",
              text: "[Community programmes, education, healthcare initiatives — pending client confirmation, dates and permissions]"
            }
          ].map((pillar, idx) => (
            <div key={idx} tabIndex={0} className="group relative w-full border-b border-[var(--color-brand-line)] bg-[var(--color-brand-white)] hover:bg-[var(--color-brand-panel)] active:bg-[var(--color-brand-panel)] focus:bg-[var(--color-brand-panel)] transition-colors duration-700 cursor-crosshair overflow-hidden outline-none">
              
              {/* Animated Background Mesh */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] group-active:opacity-[0.03] group-focus:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                     <pattern id={`pillar-mesh-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                     </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill={`url(#pillar-mesh-${idx})`} />
                 </svg>
              </div>

              <div className="flex flex-col lg:flex-row w-full relative z-10 px-6 md:px-12 lg:px-24 py-10 lg:py-16 items-start lg:items-center">
                
                {/* Numeral */}
                <div className="w-full lg:w-[15%] mb-4 lg:mb-0 overflow-hidden">
                  <span className="inline-block text-4xl lg:text-5xl font-light tracking-widest text-[var(--color-brand-text-secondary)] transform transition-transform duration-700 group-hover:translate-x-4 group-active:translate-x-4 group-focus:translate-x-4">
                    {pillar.id}.
                  </span>
                </div>

                {/* Title */}
                <div className="w-full lg:w-[40%] mb-4 lg:mb-0">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-[var(--color-brand-graphite)] transform transition-transform duration-700 group-hover:translate-x-4 group-active:translate-x-4 group-focus:translate-x-4">
                    {pillar.title}
                  </h2>
                </div>

                {/* Expanding Text Content */}
                <div className="w-full lg:w-[45%]">
                  <div className="grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-active:grid-rows-[1fr] lg:group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <div className="transform lg:translate-y-8 lg:group-hover:translate-y-0 lg:group-active:translate-y-0 lg:group-focus:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:opacity-0 lg:group-hover:opacity-100 lg:group-active:opacity-100 lg:group-focus:opacity-100">
                        <p className="text-lg lg:text-xl text-[var(--color-brand-graphite)] leading-relaxed font-light">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. POLICIES & DOCUMENTS (Cinematic Flex Accordion) */}
      <section className="w-full bg-[var(--color-brand-graphite)] text-white overflow-hidden pt-16 md:pt-24 pb-0">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white">
            Policies &amp; Documents
          </h2>
        </div>

        <div className="w-full h-auto md:h-[60vh] max-w-[1920px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-2 md:gap-4">
          {[1, 2, 3].map((idx) => (
            <div 
              key={idx} 
              className="group relative flex-none md:flex-1 md:hover:flex-[2.5] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] bg-neutral-900 border border-white/10 overflow-hidden cursor-crosshair rounded-none flex flex-col justify-end min-h-[300px] md:min-h-0"
            >
              {/* Animated Background Mesh */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                     <pattern id={`doc-mesh-${idx}`} width="20" height="20" patternUnits="userSpaceOnUse">
                       <circle cx="2" cy="2" r="1" fill="white" />
                     </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill={`url(#doc-mesh-${idx})`} />
                 </svg>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col h-full justify-between">
                
                {/* Top: Icon & Index */}
                <div className="flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
                  <span className="font-mono text-xs tracking-[0.3em] uppercase">DOC &mdash; 0{idx}</span>
                  <Download className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-1000" />
                </div>

                {/* Bottom: Text & Meta */}
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white transform transition-transform duration-1000 group-hover:-translate-y-2">
                    [Policy name — pending client confirmation]
                  </h3>
                  
                  {/* Meta (Revealed on Desktop Hover) */}
                  <div className="hidden md:grid md:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-1000 delay-100 border-t border-white/20 pt-6 mt-4">
                        <p className="text-[10px] md:text-xs font-mono text-[var(--color-brand-warm-white)] uppercase tracking-[0.2em]">
                          [File type] &middot; [Version/date — pending]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile always visible */}
                  <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                    <p className="text-[10px] font-mono text-[var(--color-brand-warm-white)] uppercase tracking-[0.2em]">
                      [File type] &middot; [Version/date — pending]
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Boundary Divider (Touches bottom edge) */}
        <div className="w-full mt-16 md:mt-24 relative z-20">
          <div className="w-full max-w-[1920px] mx-auto flex items-center gap-4 px-4 md:px-8 opacity-20">
            <div className="h-[1px] flex-grow bg-white"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-3 h-3 flex-shrink-0">
              <rect x="3" y="3" width="18" height="18" transform="rotate(45 12 12)" />
            </svg>
            <div className="h-[1px] flex-grow bg-white"></div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
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

