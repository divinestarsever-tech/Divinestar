"use client";

import { useState } from "react";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Ethical Sourcing",
    desc: "Rigorous provenance tracking and Kimberley Process compliance for every rough diamond entering our global pipeline. We guarantee conflict-free origins.",
    img: "/images/macro_diamond.jpg"
  },
  {
    num: "02",
    title: "Resource Efficiency",
    desc: "Optimizing energy consumption and minimizing waste across our global manufacturing facilities to reduce our environmental footprint.",
    img: "/images/macro_silver.jpg"
  },
  {
    num: "03",
    title: "Transparent Trade",
    desc: "Unwavering commitment to anti-money laundering policies and comprehensive B2B audit trails for total financial integrity.",
    img: "/images/macro_glass.jpg"
  },
  {
    num: "04",
    title: "Community Impact",
    desc: "Investing in the technical skill, safety, and wellbeing of our global workforce through continuous development and fair labor practices.",
    img: "/images/macro_rays.jpg"
  }
];

export default function ResponsibilityAccordion() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col items-center border-y border-[var(--color-brand-line)] relative">
      
      <style>{`
        @keyframes ghostPan {
          0% { transform: scale(1.1) translate(0%, 0%); }
          50% { transform: scale(1.15) translate(-2%, 2%); }
          100% { transform: scale(1.1) translate(0%, 0%); }
        }
        .animate-ghost {
          animation: ghostPan 25s ease-in-out infinite;
        }
      `}</style>

      {/* Header Block */}
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
        <div className="max-w-3xl">
           <span className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold mb-6">
              <span className="w-8 h-[1px] bg-emerald-800" />
              Corporate Responsibility
           </span>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-[var(--color-brand-graphite)] leading-[0.9]">
              Progress With <br/><span className="font-semibold text-emerald-900">Clear Accountability.</span>
           </h2>
        </div>
        <div className="md:max-w-sm flex flex-col items-start md:items-end text-left md:text-right">
           <p className="text-sm md:text-base text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-6">
              Responsible sourcing and resource efficiency are foundational to how Divine Star operates. Detailed documentation is available upon request.
           </p>
           <Link href="/responsibility" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-graphite)] hover:text-emerald-700 transition-colors border-b border-[var(--color-brand-graphite)] hover:border-emerald-700 pb-1">
              Read Our Policy <span className="text-lg">&rarr;</span>
           </Link>
        </div>
      </div>

      {/* Interactive Typography Accordion */}
      <div className="w-full h-auto md:h-[60vh] min-h-[500px] flex flex-col md:flex-row border-y border-[var(--color-brand-line)] relative z-10">
        {pillars.map((pillar, idx) => {
          const isHovered = hovered === idx;
          const isAnyHovered = hovered !== null;
          
          // Width classes for desktop: expand hovered, shrink others, equal if none hovered
          const desktopWidth = isHovered 
            ? 'md:w-[55%]' 
            : isAnyHovered 
              ? 'md:w-[15%]' 
              : 'md:w-[25%]';

          return (
            <div 
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(isHovered ? null : idx)}
              className={`relative overflow-hidden bg-[#fafafa] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col cursor-pointer hover:shadow-2xl hover:z-10 border-b md:border-b-0 md:border-r border-[var(--color-brand-line)] last:border-b-0 last:md:border-r-0 ${desktopWidth} w-full ${isHovered ? 'h-[220px]' : 'h-[100px]'} md:h-full group`}
            >
              {/* Ghost Image Background */}
              <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                <img 
                   src={pillar.img} 
                   alt={pillar.title}
                   className="w-full h-full object-cover opacity-100 mix-blend-multiply animate-ghost"
                   style={{ animationDelay: `${idx * -5}s` }}
                />
              </div>

              {/* Inner Padding Container */}
              <div className="relative z-10 p-5 md:p-8 flex flex-row md:flex-col justify-between h-full w-full">
                 
                 {/* Top / Left: Number */}
                 <div className="flex flex-col justify-between">
                    <span className={`font-mono text-2xl md:text-4xl font-light transition-colors duration-500 ${isHovered ? 'text-emerald-800' : 'text-[var(--color-brand-line)]'}`}>
                       {pillar.num}
                    </span>
                 </div>

                 {/* Bottom / Right: Title & Desc */}
                 <div className="flex flex-col justify-end items-end md:items-start text-right md:text-left h-full">
                    <h3 className={`text-xl md:text-3xl font-light tracking-tight text-[var(--color-brand-graphite)] transition-all duration-500 whitespace-nowrap md:whitespace-normal`}>
                       {pillar.title}
                    </h3>
                    
                    {/* Expandable Description (Now visible on mobile too) */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out origin-left ${
                       isHovered ? 'max-h-40 opacity-100 mt-2 md:mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}>
                       <p className="text-sm text-[var(--color-brand-text-secondary)] font-light leading-relaxed max-w-sm drop-shadow-md text-left md:text-left">
                          {pillar.desc}
                       </p>
                    </div>
                 </div>

              </div>
              
              {/* Progress Bar Effect on Hover */}
              <div className={`absolute bottom-0 left-0 h-1 bg-emerald-800 transition-all duration-1000 ease-out z-20 ${
                 isHovered ? 'w-full' : 'w-0'
              }`} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
