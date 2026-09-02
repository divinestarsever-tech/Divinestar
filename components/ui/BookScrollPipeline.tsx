"use client";

import { useEffect, useRef, useState } from 'react';

const steps = [
  { title: "Requirement Submitted", img: "/images/step_enquiry.jpg", desc: "Initial specs, cut parameters, and volume data securely documented and verified against our encrypted international database." },
  { title: "Review & Assortment", img: "/images/step_review.jpg", desc: "Expert gemological assessment and global inventory matching. Strict quality controls are executed prior to final sealing." },
  { title: "Commercial Terms", img: "/images/step_commercial.jpg", desc: "Pricing, legal, and international compliance frameworks verified. Digital and physical contracts are executed with utmost discretion." },
  { title: "Shipment Coordination", img: "/images/step_shipment.jpg", desc: "Armored logistics and secure customs handover at destination. End-to-end tracking guarantees perfect delivery." }
];

export default function BookScrollPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative h-[400vh]" ref={containerRef}>
      
      {/* Sticky viewport container */}
      <div className="sticky top-[80px] lg:top-[100px] w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-100px)] flex flex-col lg:flex-row items-center overflow-hidden bg-[var(--color-brand-graphite)]">
        
        {/* LEFT SIDE: Static Text Container */}
        <div className="w-full lg:w-[40%] h-auto lg:h-full p-8 lg:p-16 relative z-20 flex flex-col justify-center bg-[var(--color-brand-graphite)] lg:bg-transparent shadow-[20px_0_50px_rgba(0,0,0,0.5)] lg:shadow-none">
          <span className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-brand-warm-white)] opacity-50 mb-6">
            Workflow & Logistics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-white mb-6 leading-tight">
            From Enquiry<br />to Delivery
          </h2>
          <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-8 max-w-sm">
            Our seamless, highly-secured B2B pipeline ensures complete precision. Scroll to trace the logistics flow.
          </p>
          
          {/* Timeline Indicators */}
          <div className="hidden lg:flex flex-col gap-4 border-l border-white/10 pl-6 ml-2">
            {steps.map((step, idx) => {
              const windowSize = 1 / steps.length;
              const isActive = scrollProgress >= idx * windowSize && scrollProgress <= (idx + 1) * windowSize;
              const isPast = scrollProgress > (idx + 1) * windowSize;
              const isFullyActive = isActive || isPast || (idx === 0 && scrollProgress === 0);
              
              return (
                <div 
                  key={idx} 
                  className={`transition-colors duration-700 font-mono text-xs uppercase tracking-widest ${isFullyActive ? 'text-white' : 'text-white/30'}`}
                >
                  0{idx + 1} // {step.title}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: The Slides */}
        <div className="w-full lg:w-[60%] flex-1 lg:h-full relative overflow-hidden bg-black lg:border-l border-white/10 z-10">
          {steps.map((step, idx) => {
            const windowSize = 1 / (steps.length - 1);
            
            let translateX = 0;
            if (idx === 0) {
              translateX = 0;
            } else {
              const startProgress = (idx - 1) * windowSize;
              const endProgress = idx * windowSize;
              
              if (scrollProgress <= startProgress) {
                translateX = -100;
              } else if (scrollProgress >= endProgress) {
                translateX = 0;
              } else {
                const localProgress = (scrollProgress - startProgress) / (endProgress - startProgress);
                translateX = -100 + (localProgress * 100);
              }
            }
            
            // "auto color images when its comes when comes up"
            const isFullyIn = translateX === 0;

            return (
              <div 
                key={idx} 
                className="absolute inset-0 w-full h-full flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.9)] bg-[var(--color-brand-panel)]"
                style={{ 
                  transform: `translateX(${translateX}%)`,
                  zIndex: 10 + idx,
                }}
              >
                
                {/* Image Section (Full Bleed) */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  <div className={`absolute inset-0 transition-colors duration-700 z-10 pointer-events-none ${isFullyIn ? 'bg-black/10' : 'bg-black/70'}`} />
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1.5s] ${isFullyIn ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-60 scale-100'}`} 
                  />
                  {/* Heavy dark gradient at the bottom so text is perfectly readable */}
                  <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                  {/* Glowing Edge Line */}
                  <div className={`absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[var(--color-brand-warm-white)] to-transparent transition-opacity duration-700 z-20 ${isFullyIn ? 'opacity-50' : 'opacity-0'}`} />
                </div>

                {/* Content Section Overlay */}
                <div className="relative h-full w-full p-6 md:p-16 flex flex-col justify-end z-30">
                  <div className={`absolute top-6 md:top-8 right-6 md:right-8 font-mono text-[5rem] md:text-[8rem] leading-none font-bold pointer-events-none transition-colors duration-700 ${isFullyIn ? 'text-white/[0.2]' : 'text-white/[0.02]'}`}>
                    0{idx + 1}
                  </div>
                  
                  <span className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-4 transition-colors duration-700 ${isFullyIn ? 'text-white' : 'text-white/40'}`}>
                    <span className={`w-8 h-[1px] transition-colors duration-700 ${isFullyIn ? 'bg-[var(--color-brand-warm-white)]' : 'bg-white/20'}`} />
                    Phase 0{idx + 1}
                  </span>
                  <h3 className={`text-2xl md:text-5xl font-light mb-4 md:mb-6 leading-tight transition-colors duration-700 drop-shadow-lg ${isFullyIn ? 'text-[var(--color-brand-warm-white)]' : 'text-white/60'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-lg text-white/80 leading-relaxed font-light max-w-xl drop-shadow-md">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
