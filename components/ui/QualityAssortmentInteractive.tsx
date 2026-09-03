"use client";

import { useState, useRef, useEffect } from 'react';

export default function QualityAssortmentInteractive() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default to center on mount for mobile or before hover
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: rect.width / 2, y: rect.height / 2 });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle native touch events to prevent page scrolling while inspecting
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouch = (e: TouchEvent) => {
      // Prevent page scrolling
      e.preventDefault();
      
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      });
      setIsHovering(true);
    };

    const handleTouchEnd = () => {
      setIsHovering(false);
    };

    // passive: false allows us to call e.preventDefault()
    el.addEventListener('touchmove', handleTouch, { passive: false });
    el.addEventListener('touchstart', handleTouch, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      el.removeEventListener('touchmove', handleTouch);
      el.removeEventListener('touchstart', handleTouch);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen bg-[var(--color-brand-graphite)] overflow-hidden cursor-crosshair border-y border-[var(--color-brand-line)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
       {/* Background (Blurred & Dimmed) */}
       <div className="absolute inset-0 pointer-events-none">
          <img 
            src="/images/home_quality_wide.jpg" 
            className="w-full h-full object-cover opacity-30 blur-md grayscale-[50%]" 
            alt="Diamonds Background"
          />
       </div>
       
       {/* Text Block - Sits beneath the loupe */}
       <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-6">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 block">
            Quality & Assortment
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-light text-white mb-6 lg:mb-10 tracking-tighter drop-shadow-2xl leading-none">
             Consistency,<br/>Verified.
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-white/70 max-w-2xl font-light leading-relaxed drop-shadow-md">
             Every parcel is meticulously reviewed under microscope and loupe grading to maintain consistent colour, clarity and make within absolute parameters.
          </p>
       </div>

       {/* The Sharp HD Image (Masked by Loupe) */}
       <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ease-out"
          style={{
             opacity: isHovering ? 1 : 0,
             clipPath: `circle(clamp(100px, 15vw, 250px) at ${mousePos.x}px ${mousePos.y}px)`,
             WebkitClipPath: `circle(clamp(100px, 15vw, 250px) at ${mousePos.x}px ${mousePos.y}px)`
          }}
       >
          {/* True Optical Magnification: Scales directly from the cursor position */}
          <img 
            src="/images/home_quality_wide.jpg" 
            className="w-full h-full object-cover" 
            alt="Diamonds Sharp HD"
            style={{
               transform: 'scale(1.03)',
               transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
            }}
          />
          
          {/* Internal Loupe Edge Shadow (pushed to the very edge for 100% clear center) */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
               background: `radial-gradient(circle clamp(100px, 15vw, 250px) at ${mousePos.x}px ${mousePos.y}px, transparent 90%, rgba(0,0,0,0.5) 100%)`
            }}
          />
       </div>

       {/* The Physical Loupe Ring (Tracks Mouse) */}
       <div 
          className="absolute z-30 pointer-events-none rounded-full border-[1.5px] border-white/60 transition-opacity duration-500 ease-out flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{
             width: 'calc(clamp(100px, 15vw, 250px) * 2)',
             height: 'calc(clamp(100px, 15vw, 250px) * 2)',
             transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`,
             opacity: isHovering ? 1 : 0,
          }}
       >
          {/* Technical Reticles (Crosshairs) */}
          <div className="w-[1px] h-6 md:h-12 bg-white/50 absolute top-0" />
          <div className="w-[1px] h-6 md:h-12 bg-white/50 absolute bottom-0" />
          <div className="w-6 md:w-12 h-[1px] bg-white/50 absolute left-0" />
          <div className="w-6 md:w-12 h-[1px] bg-white/50 absolute right-0" />
          <div className="w-2 h-2 rounded-full border border-white/80 absolute shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
       </div>

       {/* Instructional UI (Fades out on hover) */}
       <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-500 z-10 pointer-events-none"
          style={{ opacity: isHovering ? 0 : 1 }}
       >
          <div className="w-8 h-12 border border-white/30 rounded-full flex justify-center p-2">
             <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
            Drag to Inspect
          </span>
       </div>
    </section>
  )
}
