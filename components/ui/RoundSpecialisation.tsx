"use client";

export default function RoundSpecialisation() {
  return (
    <section className="relative w-full bg-[#fdfdfc] overflow-hidden py-24 lg:py-48 border-y border-[var(--color-brand-line)]">
      
      {/* Background Architectural Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        {/* Center Crosshairs */}
        <div className="w-[1px] h-[150vh] bg-[var(--color-brand-graphite)] opacity-[0.04]" />
        <div className="absolute w-[150vw] h-[1px] bg-[var(--color-brand-graphite)] opacity-[0.04]" />
        
        {/* Concentric Calibration Rings */}
        <div className="absolute w-[120vw] h-[120vw] lg:w-[45vw] lg:h-[45vw] border border-[var(--color-brand-graphite)] opacity-[0.04] rounded-full" />
        <div className="absolute w-[80vw] h-[80vw] lg:w-[30vw] lg:h-[30vw] border border-[var(--color-brand-graphite)] opacity-[0.04] rounded-full" />
        <div className="absolute w-[40vw] h-[40vw] lg:w-[15vw] lg:h-[15vw] border border-[var(--color-brand-graphite)] opacity-[0.03] rounded-full border-dashed" />
        
        {/* Corner Markers */}
        <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-[var(--color-brand-graphite)] opacity-20" />
        <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-[var(--color-brand-graphite)] opacity-20" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 lg:mb-0 lg:absolute lg:top-8 lg:left-12 lg:text-left lg:max-w-sm xl:max-w-md z-20">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--color-brand-text-secondary)] mb-6 block">
            Core Competency
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-light tracking-tighter text-[var(--color-brand-graphite)] leading-[0.95] mb-8">
            The<br/>Round<br/>Brilliant.
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-brand-line)] mb-8 mx-auto lg:mx-0" />
          <p className="text-lg text-[var(--color-brand-text-secondary)] font-light leading-relaxed">
            Specializing in round diamonds across melee and calibrated sizes, with unyielding quality control built for repeat B2B requirements.
          </p>
        </div>

        {/* Centerpiece Image & Diagram */}
        <div className="relative w-full flex justify-center items-center min-h-[500px] lg:min-h-[850px]">
          
          {/* Center Image */}
          <div className="relative w-full max-w-[350px] md:max-w-[500px] lg:max-w-[650px] group cursor-crosshair">
            {/* Spinning decorative ring on hover */}
            <div className="absolute inset-[-15%] border border-[var(--color-brand-graphite)] opacity-0 group-hover:opacity-[0.08] rounded-full scale-90 group-hover:scale-100 transition-all duration-1000 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-5%] border border-[var(--color-brand-graphite)] opacity-0 group-hover:opacity-[0.05] rounded-full scale-95 group-hover:scale-100 transition-all duration-700 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* The Image (mix-blend-multiply makes the white background disappear) */}
            <img 
              src="/images/round_specialisation.jpg" 
              alt="Round Brilliant Diamond" 
              className="w-full h-auto drop-shadow-2xl mix-blend-multiply scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] relative z-10" 
            />
          </div>

          {/* Specs - Floating Nodes (Responsive: overlapping blueprint layout) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
            
            {/* Top Right */}
            <div className="absolute top-[5%] lg:top-[15%] right-0 lg:right-[5%] xl:right-[10%] bg-white/80 backdrop-blur-xl p-4 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-[1px] bg-[var(--color-brand-line)]" />
              <span className="font-mono text-[9px] lg:text-xs uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-1 lg:mb-3 block">01 / Size Range</span>
              <h4 className="text-lg md:text-2xl lg:text-3xl font-light text-[var(--color-brand-graphite)] tracking-tight leading-tight">0.01ct –<br className="lg:hidden"/> 3.00ct+</h4>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[10%] lg:bottom-[20%] right-0 lg:right-[10%] xl:right-[15%] bg-white/80 backdrop-blur-xl p-4 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-[1px] bg-[var(--color-brand-line)]" />
              <span className="font-mono text-[9px] lg:text-xs uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-1 lg:mb-3 block">02 / Colour</span>
              <h4 className="text-lg md:text-2xl lg:text-3xl font-light text-[var(--color-brand-graphite)] tracking-tight">D – K</h4>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 lg:bottom-[5%] left-0 lg:left-[10%] xl:left-[15%] bg-white/80 backdrop-blur-xl p-4 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="hidden lg:block absolute -right-12 top-1/2 w-12 h-[1px] bg-[var(--color-brand-line)]" />
              <span className="font-mono text-[9px] lg:text-xs uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-1 lg:mb-3 block">03 / Clarity</span>
              <h4 className="text-lg md:text-2xl lg:text-3xl font-light text-[var(--color-brand-graphite)] tracking-tight">IF – I1</h4>
            </div>

            {/* Center Left */}
            <div className="absolute top-[40%] lg:top-[60%] left-0 lg:left-[2%] xl:left-[6%] bg-white/80 backdrop-blur-xl p-4 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 w-[140px] md:w-[200px] lg:w-[280px] pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
              <div className="hidden lg:block absolute -right-12 top-1/2 w-12 h-[1px] bg-[var(--color-brand-line)]" />
              <span className="font-mono text-[9px] lg:text-xs uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-1 lg:mb-3 block">04 / Formats</span>
              <h4 className="text-lg md:text-2xl lg:text-2xl font-light text-[var(--color-brand-graphite)] tracking-tight leading-tight">Melee &<br className="lg:hidden"/>Calibrated</h4>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
