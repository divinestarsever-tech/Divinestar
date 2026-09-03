"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const statements = [
  { 
    num: "01", 
    title: "Uncompromising Clarity",
    text: "Clear, transparent communication from your very first enquiry through to the final secured delivery." 
  },
  { 
    num: "02", 
    title: "Unwavering Consistency",
    text: "Meticulous calibration ensures the exact same cut, clarity, and brilliance across every repeat order." 
  },
  { 
    num: "03", 
    title: "Total Accountability",
    text: "Comprehensive, structured documentation and Kimberley Process compliance guaranteed for every single shipment." 
  }
];

export default function TrustManifesto() {
  return (
    <section className="w-full bg-[#f4f4f0] py-24 md:py-40 relative">
      <div className="w-full max-w-[90%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        
        {/* Left: Sticky Section Identity */}
        <div className="lg:w-[45%] shrink-0 pb-12 lg:pb-0 h-full">
          <div className="lg:sticky lg:top-40">
             <span className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold mb-6">
                <span className="w-8 h-[1px] bg-emerald-800" />
                The Client Experience
             </span>
             <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-[var(--color-brand-graphite)] leading-[0.9] mb-8">
                How We Work <br/>
                <span className="font-serif italic text-emerald-900">With You.</span>
             </h2>
             <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-sm mb-12">
                We believe that trust is engineered through predictable, flawless execution. This is our promise to every trade partner.
             </p>
             <Link href="/contact" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-brand-graphite)] hover:text-emerald-700 transition-colors w-fit">
                <div className="w-12 h-12 rounded-full border border-gray-300 group-hover:border-emerald-700 flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-50">
                   <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
                Partner With Us
             </Link>
          </div>
        </div>

        {/* Right: The Stacking Manifesto Cards */}
        <div className="flex-1 flex flex-col w-full relative pb-[10vh]">
          {statements.map((item, idx) => (
            <div 
              key={idx} 
              className="sticky w-full min-h-[45vh] flex flex-col justify-between bg-white border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-3xl p-10 md:p-16 mb-24 last:mb-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              style={{ 
                 top: `calc(15vh + ${idx * 40}px)`,
                 zIndex: 10 + idx
              }}
            >
              <div className="flex justify-between items-start mb-16">
                 {/* Decorative Top Line */}
                 <div className="w-12 h-[1px] bg-emerald-800/30 mt-4" />
                 <span className="text-7xl md:text-8xl font-light text-gray-100 font-serif leading-none">
                   {item.num}
                 </span>
              </div>
              
              <div>
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--color-brand-graphite)] mb-6">
                   {item.title}
                 </h3>
                 <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                   {item.text}
                 </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
