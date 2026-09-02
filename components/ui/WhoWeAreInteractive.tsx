"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function WhoWeAreInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section 
      className="relative w-full h-[85vh] min-h-[700px] max-h-[1000px] bg-[var(--color-brand-graphite)] flex items-center overflow-hidden cursor-crosshair group/section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // For mobile tap
    >
      <style dangerouslySetInnerHTML={{__html: `
        .loupe-clip {
          clip-path: circle(25vh at 50% 25%);
        }
        .loupe-ring {
          top: 25%;
          left: 50%;
        }
        @media (min-width: 1024px) {
          .loupe-clip {
            clip-path: circle(35vh at 75% 50%);
          }
          .loupe-ring {
            top: 50%;
            left: 75%;
          }
        }
        .loupe-clip-expanded {
          clip-path: circle(150% at 50% 50%);
        }
      `}} />

      {/* Background Image with Animated Circular Clip-Path */}
      <div 
        className={`absolute inset-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.25,1)] z-0 ${isHovered ? 'loupe-clip-expanded' : 'loupe-clip'}`}
      >
        {/* Darkening overlay that changes on hover */}
        <div 
          className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000" 
          style={{ opacity: isHovered ? 0.7 : 0.1 }} 
        />
        <img 
          src="/images/home_who_we_are.jpg" 
          alt="Divine Star Diamonds" 
          className="w-full h-full object-cover transition-transform duration-[3s] ease-out" 
          style={{ transform: isHovered ? 'scale(1)' : 'scale(1.15)' }} 
        />
      </div>

      {/* Decorative Ring (The Loupe outline) */}
      <div 
        className="loupe-ring absolute z-10 border border-white/30 rounded-full pointer-events-none transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.25,1)]"
        style={{
          width: isHovered ? "200vh" : "70vh",
          height: isHovered ? "200vh" : "70vh",
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0 : 1,
        }}
      />
      {/* Inner dot crosshair */}
      <div 
        className="loupe-ring absolute z-10 w-2 h-2 bg-[var(--color-brand-warm-white)] rounded-full pointer-events-none transition-all duration-500"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 0 : 0.8,
        }}
      />

      {/* Text Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col justify-end lg:justify-center h-full pb-16 lg:pb-0 pointer-events-none">
        <div className="w-full lg:w-[55%] pointer-events-auto">
          <span 
            className="font-mono text-xs uppercase tracking-[0.4em] mb-6 block text-[var(--color-brand-warm-white)] transition-all duration-700" 
            style={{ opacity: isHovered ? 1 : 0.5 }}
          >
            The House
          </span>
          <h2 
            className="text-6xl md:text-[8rem] font-light tracking-tighter text-white mb-8 leading-[0.85] transition-all duration-1000 ease-out" 
            style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)' }}
          >
            Who<br/>We Are.
          </h2>
          <div 
            className="h-[1px] bg-[var(--color-brand-warm-white)] mb-12 transition-all duration-1000" 
            style={{ width: isHovered ? '120px' : '64px' }} 
          />
          
          <p 
            className="text-2xl md:text-3xl text-white font-light mb-8 leading-relaxed max-w-lg transition-all duration-1000 delay-75" 
            style={{ opacity: isHovered ? 1 : 0.8 }}
          >
            Built on precision, consistency, and long-term relationships.
          </p>
          
          <p 
            className="text-lg text-white font-light mb-12 max-w-md leading-relaxed transition-all duration-1000 delay-150" 
            style={{ opacity: isHovered ? 0.9 : 0.4 }}
          >
            Our focus is round-diamond expertise, disciplined assortment and dependable global supply for elite jewellery manufacturers, global brands and international wholesalers.
          </p>
          
          <Link 
            href="/about" 
            className="group flex items-center gap-6 text-[var(--color-brand-warm-white)] hover:text-white transition-colors w-max"
          >
            <span className="font-medium uppercase tracking-widest text-sm">Discover Our Legacy</span>
            <span className="w-12 h-[1px] bg-[var(--color-brand-warm-white)] group-hover:w-24 transition-all duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
