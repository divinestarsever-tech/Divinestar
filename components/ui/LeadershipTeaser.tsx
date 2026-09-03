"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const leaders = [
  {
    title: "Chief Executive Officer",
    name: "Client Name A",
    desc: "Guiding the strategic vision and global expansion of Divine Star's manufacturing ecosystem.",
    delay: "mt-0"
  },
  {
    title: "Chief Operations Officer",
    name: "Client Name B",
    desc: "Overseeing precision manufacturing, supply chain logistics, and rough diamond sourcing.",
    delay: "mt-8 md:mt-16"
  },
  {
    title: "Head of Global Sales",
    name: "Client Name C",
    desc: "Fostering elite partnerships with luxury jewelry houses and global trade networks.",
    delay: "mt-16 md:mt-32"
  },
  {
    title: "Chief Financial Officer",
    name: "Client Name D",
    desc: "Ensuring sustainable growth, transparent trade, and financial integrity across global markets.",
    delay: "mt-24 md:mt-48"
  }
];

export default function LeadershipTeaser() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a] py-32 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        
        {/* Left Typography Block */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:sticky lg:top-40 pt-10 px-6 lg:pl-16">
           <span className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-600 font-bold mb-6">
              <span className="w-8 h-[1px] bg-emerald-600" />
              The Visionaries
           </span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[1.1] mb-8">
              Architects of <br/><span className="font-serif italic text-emerald-500">Precision.</span>
           </h2>
           <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light mb-10 max-w-sm">
              Meet the leadership team driving Divine Star's commitment to flawless execution and global luxury trade.
           </p>
           
           <Link href="/leadership" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-white hover:text-emerald-400 transition-colors w-fit">
              <div className="w-10 h-10 rounded-full border border-zinc-700 group-hover:border-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/10">
                 <ArrowRight className="w-4 h-4" />
              </div>
              Full Bios
           </Link>
        </div>

        {/* Right Staggered Grid (Horizontal Scroll on Mobile) */}
        <div className="lg:col-span-8 flex flex-row overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-4 lg:gap-6 justify-start md:justify-end pb-12 lg:pb-0 px-6 lg:px-0 lg:pr-12 hide-scrollbar">
          {leaders.map((leader, idx) => {
            const isHovered = hovered === idx;
            
            return (
              <div 
                key={idx} 
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(isHovered ? null : idx)}
                className={`group relative aspect-[3/4] w-[75vw] sm:w-[60vw] md:w-auto flex-shrink-0 snap-center md:flex-1 overflow-hidden bg-zinc-900/50 border border-zinc-800 flex flex-col justify-end p-6 md:p-8 hover:border-zinc-600 transition-colors duration-700 cursor-pointer ${leader.delay}`}
              >
                
                {/* Abstract Placeholder Background */}
                <div className={`absolute inset-0 z-0 bg-gradient-to-t transition-colors duration-700 ${isHovered ? 'from-black via-zinc-900/40 to-transparent scale-105' : 'from-black via-zinc-900/80 to-transparent'}`} />
                
                {/* CSS Noise / Grain Texture */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 mix-blend-overlay ${isHovered ? 'opacity-40' : 'opacity-20'}`}>
                   <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] opacity-20" />
                </div>

                {/* Text Content */}
                <div className={`relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? 'translate-y-0' : 'translate-y-8'}`}>
                  <span className={`block font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500 mb-3 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    {leader.title}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-4 drop-shadow-lg">
                    {leader.name}
                  </h3>
                  <div className={`h-[1px] bg-emerald-800/50 transition-all duration-700 ease-out mb-4 ${isHovered ? 'w-full' : 'w-0'}`} />
                  <p className={`text-xs md:text-sm text-zinc-300 font-light leading-relaxed transition-opacity duration-700 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    {leader.desc}
                  </p>
                </div>
                
                {/* Corner Accents */}
                <div className={`absolute top-4 left-4 w-2 h-2 border-t border-l transition-colors duration-500 ${isHovered ? 'border-emerald-600' : 'border-zinc-700'}`} />
                <div className={`absolute top-4 right-4 w-2 h-2 border-t border-r transition-colors duration-500 ${isHovered ? 'border-emerald-600' : 'border-zinc-700'}`} />
                
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
