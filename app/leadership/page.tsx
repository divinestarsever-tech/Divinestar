"use client";

import { useRef, useEffect } from "react";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";
import InteractiveDiamondGraphic from "@/components/ui/InteractiveDiamondGraphic";

const leadersData = [
  { name: "Nayan Golakiya", title: "Director - rough diamond management", bio: "Nayan Golakiya is one of the founding directors of Divine Star and plays a key role in the company’s rough diamond management and sourcing strategy. With a strong understanding of diamond planning, yield, quality and procurement, he helps ensure that every stage of production begins with the right raw material. His disciplined approach to sourcing and inventory management supports Divine Star’s ability to maintain consistency, efficiency and dependable supply. Over the years, his contribution has helped strengthen the company’s manufacturing foundation and build long-term relationships across the diamond value chain." },
  { name: "Kirti Ghori", title: "Director - rough diamond management", bio: "Kirti Ghori is a founding director of Divine Star and oversees key aspects of rough diamond management and operational planning. His expertise lies in evaluating rough diamonds, maintaining sourcing discipline and supporting efficient production planning across the organisation. With a strong focus on quality, consistency and responsible business practices, he contributes to the company’s ability to meet demanding manufacturing standards. His practical industry knowledge and long-term approach have played an important role in strengthening Divine Star’s position as a dependable melee diamond manufacturer serving clients across domestic and international markets." },
  { name: "Dharmesh Gabani", title: "Director facility", bio: "Dharmesh Gabani is a founding director of Divine Star and leads the company’s manufacturing facilities and production environment. He focuses on building efficient processes, maintaining infrastructure standards and supporting the teams responsible for precision diamond manufacturing. Under his direction, the company continues to strengthen its production capabilities through technology, organised workflows and a strong focus on quality control. His emphasis on operational discipline, workplace efficiency and continuous improvement helps Divine Star maintain consistent output while supporting the scale and reliability expected by its global clients." },
  { name: "Bharat Ghori", title: "Director management", bio: "Bharat Ghori is a founding director of Divine Star and plays a central role in overall management, operations and organisational development. His focus is on building strong systems, improving coordination between departments and ensuring that the company’s growth remains structured and sustainable. With a long-term approach to leadership, he helps align manufacturing, people, processes and business strategy around common objectives. His contribution has been instrumental in developing Divine Star into a professionally managed organisation built on consistency, accountability and trust, while supporting its continued expansion across international markets." },
  { name: "Ramesh Mandani", title: "Director Sales", bio: "Ramesh Mandani is a founding director of Divine Star and leads the company’s sales, client relationships and business development initiatives. With a strong understanding of customer requirements and global diamond markets, he focuses on building long-term partnerships based on trust, consistency and dependable service. His role includes strengthening existing relationships, developing new markets and ensuring close coordination between customer needs and manufacturing capabilities. His relationship-driven approach has supported Divine Star’s international growth and helped establish the company as a reliable partner for clients across markets including Hong Kong, Dubai, Belgium and beyond." }
];

export default function LeadershipPage() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const container = containerRef.current;
      const track = trackRef.current;
      
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container (0 to 1)
      let progress = -top / (height - windowHeight);
      progress = Math.max(0, Math.min(1, progress));
      
      // Translate the horizontal track based on progress
      const maxTranslateX = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * maxTranslateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="flex flex-col w-full">
      
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

      {/* 2. LEADERSHIP DIRECTORY (Horizontal Scroll-Jack Gallery) */}
      <section ref={containerRef} className="relative w-full h-[500vh] bg-[var(--color-brand-graphite)] border-t border-[var(--color-brand-line)]">
        
        {/* Sticky viewport */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-black">
          
          {/* Horizontal Track */}
          <div ref={trackRef} className="flex h-full will-change-transform">
            
            {leadersData.map((leader, idx) => (
              <div key={idx} className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-4 md:p-12 lg:p-24 relative overflow-hidden group">
                
                {/* Background Image / Portrait */}
                <div className="absolute inset-0 w-full h-full">
                  <Placeholder className="w-full h-full object-cover grayscale opacity-40 transition-opacity duration-1000 group-hover:opacity-60" label={`[Portrait 0${idx + 1}]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-graphite)] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                  
                  <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-8">
                    <span className="font-mono text-xs tracking-[0.5em] text-[var(--color-brand-warm-white)] uppercase mb-6 flex items-center">
                       0{idx + 1}
                       <span className="w-16 h-[1px] bg-[var(--color-brand-warm-white)] ml-4 opacity-50"></span>
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white uppercase tracking-tighter mb-4 leading-none drop-shadow-lg">
                      {leader.name}
                    </h2>
                    <h3 className="text-sm lg:text-base font-mono uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)] mb-8">
                      {leader.title}
                    </h3>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col px-4 md:px-8">
                    <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 lg:p-12">
                      <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-[1.8] font-light mb-10">
                        {leader.bio}
                      </p>
                      <Link href="#" className="inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-warm-white)] border border-white/20 px-8 py-5 transition-all duration-300 w-max">
                        LinkedIn Profile
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-4 h-4">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            ))}

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




