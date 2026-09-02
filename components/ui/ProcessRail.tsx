"use client";

import { useState, useEffect, useRef } from "react";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";

interface Stage {
  title: string;
  desc: string;
  premiumDrawing: React.ReactNode;
}

const stages: Stage[] = [
  { 
    title: "Rough Procurement", 
    desc: "Structured intake and preliminary sorting of raw geological material. Assessing structural integrity before processing.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80" style={{ transform: "rotate(15deg)" }}>
        <path d="M100 20 L160 60 L140 140 L60 160 L20 80 Z" strokeDasharray="4 6" />
        <path d="M100 20 L140 140 M160 60 L60 160 M140 140 L20 80 M60 160 L100 20" opacity="0.3" />
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.1" opacity="0.2" />
        <line x1="100" y1="0" x2="100" y2="20" />
        <line x1="100" y1="180" x2="100" y2="200" />
        <line x1="0" y1="100" x2="20" y2="100" />
        <line x1="180" y1="100" x2="200" y2="100" />
      </svg>
    )
  },
  { 
    title: "Planning", 
    desc: "Mapping the optimal yield and geometric structure via advanced topographical laser scanning.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <rect x="40" y="40" width="120" height="120" strokeWidth="0.25" />
        <rect x="60" y="60" width="80" height="80" strokeWidth="0.5" />
        <rect x="80" y="80" width="40" height="40" strokeWidth="1" />
        <path d="M0 100 L200 100 M100 0 L100 200" strokeDasharray="2 8" opacity="0.5" />
        <circle cx="100" cy="100" r="15" />
        <path d="M10 10 L30 10 L10 30 Z M190 10 L170 10 L190 30 Z M10 190 L30 190 L10 170 Z M190 190 L170 190 L190 170 Z" fill="currentColor" opacity="0.5" />
      </svg>
    )
  },
  { 
    title: "Laser Cutting", 
    desc: "Precision sectioning of the rough stone with micron-level thermal accuracy to eliminate stress fractures.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <circle cx="100" cy="100" r="60" strokeDasharray="1 3" />
        <line x1="100" y1="40" x2="100" y2="160" strokeDasharray="4 4" />
        <path d="M20 180 L180 20" strokeWidth="1.5" stroke="currentColor" />
        <circle cx="140" cy="60" r="4" fill="currentColor" />
        <circle cx="60" cy="140" r="4" fill="currentColor" />
        <path d="M140 60 L200 60 M140 60 L140 0" strokeWidth="0.25" opacity="0.5" />
      </svg>
    )
  },
  { 
    title: "Bruting", 
    desc: "Forming the foundational girdle shape and establishing the maximum mathematical diameter.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <circle cx="100" cy="100" r="70" strokeWidth="1" />
        <circle cx="100" cy="100" r="75" strokeWidth="0.25" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="80" strokeWidth="0.25" />
        <line x1="30" y1="100" x2="170" y2="100" strokeWidth="0.25" />
        <line x1="100" y1="30" x2="100" y2="170" strokeWidth="0.25" />
        <path d="M30 100 A70 70 0 0 1 100 30" strokeWidth="2" />
        <path d="M170 100 A70 70 0 0 1 100 170" strokeWidth="2" />
      </svg>
    )
  },
  { 
    title: "Polishing", 
    desc: "Faceting to exact mathematical proportions to ensure ultimate internal light return and brilliance.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <polygon points="100,20 170,70 140,160 60,160 30,70" strokeWidth="1" />
        <polygon points="100,20 140,160 60,160" />
        <line x1="170" y1="70" x2="30" y2="70" />
        <line x1="100" y1="20" x2="100" y2="70" />
        <line x1="170" y1="70" x2="100" y2="100" />
        <line x1="30" y1="70" x2="100" y2="100" />
        <line x1="140" y1="160" x2="100" y2="100" />
        <line x1="60" y1="160" x2="100" y2="100" />
        <circle cx="100" cy="100" r="90" strokeWidth="0.25" opacity="0.3" />
      </svg>
    )
  },
  { 
    title: "Grading & Assortment", 
    desc: "Categorising against strict parameters using advanced optics and expert gemological assessment.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <rect x="40" y="30" width="120" height="140" strokeWidth="0.5" />
        <line x1="40" y1="60" x2="160" y2="60" strokeWidth="0.25" />
        <line x1="60" y1="80" x2="140" y2="80" />
        <line x1="60" y1="100" x2="120" y2="100" />
        <line x1="60" y1="120" x2="100" y2="120" />
        <line x1="60" y1="140" x2="140" y2="140" />
        <circle cx="140" cy="120" r="6" fill="currentColor" />
        <path d="M40 30 L40 20 L50 20 M160 30 L160 20 L150 20" strokeWidth="1" />
      </svg>
    )
  },
  { 
    title: "Quality Control", 
    desc: "Final verification and strict consistency check across all parameters before dispatch approval.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <circle cx="100" cy="100" r="50" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" strokeDasharray="1 4" />
        <line x1="50" y1="100" x2="10" y2="100" strokeWidth="0.5" />
        <line x1="150" y1="100" x2="190" y2="100" strokeWidth="0.5" />
        <line x1="100" y1="50" x2="100" y2="10" strokeWidth="0.5" />
        <line x1="100" y1="150" x2="100" y2="190" strokeWidth="0.5" />
        <path d="M60 60 L40 40 M140 140 L160 160 M60 140 L40 160 M140 60 L160 40" />
        <rect x="90" y="90" width="20" height="20" fill="currentColor" opacity="0.2" />
      </svg>
    )
  },
  { 
    title: "Packing & Dispatch", 
    desc: "Secure structural preparation and comprehensive documentation for international shipping.",
    premiumDrawing: (
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full opacity-80">
        <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" strokeWidth="1" />
        <line x1="100" y1="40" x2="100" y2="100" />
        <line x1="40" y1="70" x2="100" y2="100" />
        <line x1="160" y1="70" x2="100" y2="100" />
        <line x1="100" y1="100" x2="100" y2="160" strokeDasharray="2 2" />
        <polygon points="100,20 180,60 100,100 20,60" opacity="0.1" fill="currentColor" />
      </svg>
    )
  }
];

export function ProcessRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Optional client-side only check to avoid hydration mismatches with JS measurements
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // We observe the invisible tracking divs that scroll naturally
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    const elements = document.querySelectorAll(".process-tracker");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[var(--color-brand-graphite)] text-[var(--color-brand-white)] px-0 relative">
      
      {/* =========================================
          MOBILE VIEW (Stacked Sequence)
          Visible only below 1024px
      ========================================= */}
      <div className="lg:hidden w-full flex flex-col py-16 px-[var(--fluid-px)]">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-[1px] bg-white/30" />
          <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
            The Process
          </span>
        </div>
        
        <div className="flex flex-col gap-16">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="w-full aspect-[4/3] relative border border-white/10 bg-black">
                <Placeholder className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity" label={`[${stage.title}]`} />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-[var(--color-brand-warm-white)]">
                  {stage.premiumDrawing}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-white/40 tracking-[0.2em]">STEP 0{idx + 1}</span>
                <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                <p className="text-base text-white/70 leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* =========================================
          DESKTOP VIEW (Pinned Scroll)
          Visible only 1024px and above
      ========================================= */}
      <div className="hidden lg:block relative w-full h-[500vh]">
        {/* THE PINNED VIEW */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

          <div className="w-full max-w-[1600px] mx-auto px-[var(--fluid-px)] relative z-10 flex flex-row items-center gap-24 h-full py-24">
            
            <div className="w-[45%] flex flex-col relative h-[40vh] justify-center">
              
              <div className="flex items-center gap-4 mb-16 absolute -top-16 left-0">
                <div className="w-12 h-[1px] bg-white/30" />
                <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
                  03 / Methodology
                </span>
              </div>

              <div className="relative w-full h-full flex items-center">
                {stages.map((stage, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-12 pointer-events-none"}`}
                    >
                      <span className="text-sm font-mono text-white/40 tracking-[0.2em] mb-6">
                        STAGE 0{idx + 1}
                      </span>
                      <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
                        {stage.title}
                      </h3>
                      <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-lg font-light">
                        {stage.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-[55%] h-[70vh] relative border border-white/10 p-4 bg-[var(--color-brand-graphite)] shadow-2xl shrink-0">
              <div className="w-full h-full relative overflow-hidden bg-black">
                {stages.map((stage, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
                    >
                      <Placeholder className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity" label={`[${stage.title} facility view]`} />
                      
                      <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                         
                         <div className={`absolute bottom-0 right-0 w-[70%] aspect-square flex items-center justify-center p-12 text-[var(--color-brand-warm-white)] transition-all duration-1000 delay-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                           {stage.premiumDrawing}
                         </div>
                      </div>
                      
                      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/10" />
                      <div className="absolute left-0 right-0 top-12 h-[1px] bg-white/10" />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 
          THE INVISIBLE SCROLL TRACKERS
          8 stages * 50vh = 400vh.
          Parent is 500vh, so the last stage holds for exactly 100vh of scroll before unpinning seamlessly.
        */}
        <div className="absolute top-0 left-0 w-full flex flex-col pointer-events-none">
          {stages.map((_, idx) => (
            <div key={idx} data-index={idx} className="process-tracker w-full h-[50vh]" />
          ))}
        </div>
      </div>

    </section>
  );
}
