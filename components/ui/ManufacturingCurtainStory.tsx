"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const steps = [
  { num: "01", title: "Planning", desc: "Advanced 3D modeling and scanning to maximize the yield and brilliance of every rough stone.", img: "/images/process/planning.jpg" },
  { num: "02", title: "Laser Cutting", desc: "Micron-precision cleaving using state-of-the-art green laser technology.", img: "/images/process/lasercutting.jpg" },
  { num: "03", title: "Polishing", desc: "Master artisans bring out the stone's ultimate fire and scintillation.", img: "/images/process/polishing.jpg" },
  { num: "04", title: "Grading", desc: "Rigorous sorting and disciplined assortment to ensure absolute consistency.", img: "/images/process/grading.jpg" },
  { num: "05", title: "Quality Control", desc: "Microscopic inspection against our unyielding brand standards.", img: "/images/process/quality.jpg" },
  { num: "06", title: "Packing", desc: "Secure, elegant packaging ready for global secure transit.", img: "/images/process/packing.jpg" }
];

export default function ManufacturingCurtainStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If we haven't reached the section yet
      if (top > 0) {
        setActiveIndex(0);
        return;
      }
      
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      // If we scrolled past the section
      if (scrolled >= scrollableDistance) {
        setActiveIndex(steps.length - 1);
        return;
      }
      
      // Calculate progress (0 to 1)
      const progress = scrolled / scrollableDistance;
      const index = Math.floor(progress * steps.length);
      setActiveIndex(Math.min(index, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="bg-white w-full h-[400vh] relative">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="w-full mb-8 text-center shrink-0">
          <h2 className="text-5xl md:text-[5rem] font-light tracking-tighter text-[var(--color-brand-graphite)] leading-none">
            The Art of Creation.
          </h2>
        </div>

        {/* The Curtain (Full Bleed - No padding) */}
        <div className="w-full h-[75vh] min-h-[500px] flex flex-col lg:flex-row overflow-hidden bg-black">
          
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`relative h-full overflow-hidden transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${isActive ? 'flex-[6] lg:flex-[8]' : 'flex-[1.5] lg:flex-1'} flex flex-col lg:block`}
              >
                {/* Image */}
                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-40'}`}>
                  <img src={step.img} alt={step.title} className={`w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'scale-105' : 'scale-100 object-center'}`} />
                </div>
                
                {/* Dark Gradient Overlay to fix readability without washing out the image */}
                <div className="absolute inset-0 bg-black/20 z-0 transition-opacity duration-700" style={{ opacity: isActive ? 0 : 1 }} />
                <div 
                  className={`absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-700 ease-out z-10 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                />

                {/* Collapsed State Text */}
                <div 
                  className={`absolute inset-0 flex flex-row lg:flex-col items-center justify-between lg:justify-end p-6 lg:pb-12 transition-opacity duration-300 z-20 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}
                >
                  <span className="hidden lg:block text-white font-light text-2xl xl:text-3xl mb-8 tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {step.title}
                  </span>
                  <span className="block lg:hidden text-white font-light text-xl tracking-wide">
                    {step.title}
                  </span>
                  <span className="text-white font-mono text-sm opacity-50 block">
                    {step.num}
                  </span>
                </div>

                {/* Expanded State Text */}
                <div 
                  className={`absolute inset-x-0 bottom-0 p-8 lg:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end z-30 ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-12 pointer-events-none'}`}
                >
                  <div className="max-w-2xl">
                    <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/60 mb-4 block">
                      Phase {step.num}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-tight text-white mb-4 lg:mb-6 leading-tight drop-shadow-lg">
                      {step.title}
                    </h3>
                    <p className="hidden md:block text-base lg:text-xl text-white/90 font-light leading-relaxed mb-10 drop-shadow-md">
                      {step.desc}
                    </p>
                    {/* Only show the CTA on the final step so it acts as a conclusion */}
                    {idx === steps.length - 1 && (
                      <Link href="/manufacturing" className="group/btn inline-flex items-center gap-6 text-white hover:text-white/80 transition-colors">
                        <span className="font-medium uppercase tracking-widest text-xs">Explore Process</span>
                        <span className="w-12 h-[1px] bg-white group-hover/btn:w-24 transition-all duration-500 ease-out" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Divider Line */}
                <div className="absolute right-0 bottom-0 left-0 lg:left-auto lg:top-0 w-full lg:w-[1px] h-[1px] lg:h-full bg-white/20 z-40" />
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
