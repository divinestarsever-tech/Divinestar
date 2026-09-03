"use client";

export default function ClientVoiceInteractive() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[80vh] bg-[#fcfcfc]">
      
      {/* Left Side: Edge-to-Edge Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <img 
          src="/images/global_markets.jpg" 
          alt="Global Partnership and Trust" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle luxury overlay */}
        <div className="absolute inset-0 bg-emerald-900/5 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Right Side: Text content with internal padding */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 xl:p-32">
        <div className="max-w-xl w-full flex flex-col justify-center">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-emerald-800" />
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-brand-graphite)] font-bold">
              Trust & Global Partnership
            </h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-brand-graphite)] leading-[1.2] tracking-tight mb-10">
            The Industry Benchmark for Unwavering Reliability.
          </h3>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            For over three decades, Divine Star has been the silent backbone for the world's most prestigious maisons. Our commitment to precision calibration, absolute predictability, and flawless execution has forged lifelong partnerships across continents. We don't just supply diamonds; we supply peace of mind to the leading names in high jewelry.
          </p>
          
        </div>
      </div>

    </section>
  );
}
