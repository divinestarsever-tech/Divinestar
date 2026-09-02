"use client";

import { useState } from 'react';

const storySteps = [
  {
    num: "01",
    title: "Planning",
    desc: "Advanced 3D modeling and scanning to maximize the yield and brilliance of every rough stone.",
    // Temporary high-end Unsplash glass/light textures since generator is on cooldown
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1500&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Laser Cutting",
    desc: "Micron-precision cleaving using state-of-the-art green laser technology.",
    img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1500&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Polishing",
    desc: "Master artisans bring out the stone's ultimate fire and scintillation.",
    img: "https://images.unsplash.com/photo-1573408301145-b98c4af00424?q=80&w=1500&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Grading",
    desc: "Rigorous sorting and disciplined assortment to ensure absolute consistency.",
    img: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1500&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Quality Control",
    desc: "Microscopic inspection against our unyielding brand standards.",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1500&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Packing",
    desc: "Secure, elegant packaging ready for global secure transit.",
    img: "https://images.unsplash.com/photo-1588666326116-29177a4a2fa3?q=80&w=1500&auto=format&fit=crop"
  }
];

export default function ManufacturingStoryInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[var(--color-brand-warm-white)] relative w-full pb-24 lg:pb-0">
      
      {/* Header for mobile/desktop context */}
      <div className="w-full px-6 md:px-12 xl:px-24 pt-24 lg:pt-32 pb-12 lg:pb-24">
        <h2 className="text-5xl lg:text-[7rem] font-light tracking-tighter text-[var(--color-brand-graphite)] leading-none">
          The Process.
        </h2>
        <div className="w-24 h-[1px] bg-[var(--color-brand-line)] mt-8" />
      </div>

      <div className="w-full flex flex-col lg:flex-row relative">
        
        {/* LEFT: Interactive List */}
        <div className="w-full lg:w-[55%] flex flex-col px-6 md:px-12 xl:px-24 z-10 pb-24">
          <div className="border-t border-[var(--color-brand-line)]" />
          
          {storySteps.map((step, idx) => (
            <div 
              key={idx}
              className="group relative border-b border-[var(--color-brand-line)] py-12 lg:py-16 cursor-crosshair flex flex-col lg:flex-row lg:items-center justify-between"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="flex items-start lg:items-center gap-8 lg:gap-16 z-10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:translate-x-12">
                <span className="font-mono text-sm lg:text-base text-[var(--color-brand-text-secondary)] opacity-60">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-4xl lg:text-[4.5rem] font-light tracking-tighter text-[var(--color-brand-graphite)] leading-none mb-4 lg:mb-0 transition-colors duration-500">
                    {step.title}
                  </h3>
                  {/* Mobile description (hidden on desktop to keep it clean) */}
                  <p className="lg:hidden text-[var(--color-brand-text-secondary)] text-sm mt-4 max-w-xs font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
              
              {/* Desktop abstract arrow */}
              <div className="hidden lg:flex items-center justify-center opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <svg className="w-10 h-10 text-[var(--color-brand-graphite)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Mobile Image Inline (only visible on mobile) */}
              <div className="w-full h-[300px] mt-8 lg:hidden overflow-hidden relative">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale-[30%]" />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky Image Reveal (Desktop Only) */}
        <div className="hidden lg:block w-[45%] relative z-0">
          <div className="sticky top-0 w-full h-screen p-12 xl:p-24 flex flex-col justify-center">
            
            {/* The Image Stack Container */}
            <div className="w-full h-[70vh] relative overflow-hidden shadow-2xl bg-gray-100">
              {storySteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                >
                  <div className="absolute inset-0 bg-black/5 z-10" />
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

            {/* Floating Description Box under the image */}
            <div className="absolute bottom-12 xl:bottom-24 left-4 -translate-x-1/2 w-[350px] bg-white/90 backdrop-blur-xl p-8 shadow-2xl z-20 border border-white/50">
               {storySteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 p-8 transition-all duration-700 ease-out flex flex-col justify-center ${activeIndex === idx ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}
                >
                  <span className="font-mono text-xs text-[var(--color-brand-graphite)] opacity-50 mb-3 block">PHASE {step.num}</span>
                  <p className="text-[var(--color-brand-graphite)] font-light text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
              {/* Spacer to keep the box height stable since children are absolute */}
              <div className="opacity-0 pointer-events-none">
                 <span className="font-mono text-xs mb-3 block">PHASE 00</span>
                 <p className="text-base leading-relaxed">Advanced 3D modeling and scanning to maximize the yield and brilliance of every rough stone.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
