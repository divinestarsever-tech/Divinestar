import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import WhoWeAreInteractive from "@/components/ui/WhoWeAreInteractive";
import ManufacturingCurtainStory from "@/components/ui/ManufacturingCurtainStory";
import RoundSpecialisation from "@/components/ui/RoundSpecialisation";
import QualityAssortmentInteractive from "@/components/ui/QualityAssortmentInteractive";
import ClientServicesStack from "@/components/ui/ClientServicesStack";
import GlobalReachInteractive from "@/components/ui/GlobalReachInteractive";
import ResponsibilityAccordion from "@/components/ui/ResponsibilityAccordion";
import LeadershipTeaser from "@/components/ui/LeadershipTeaser";
import ClientVoiceInteractive from "@/components/ui/ClientVoiceInteractive";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO WITH CINEMATIC VIDEO BACKGROUND */}
      <Section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden" withFluidVertical>
        
        {/* The Cinematic Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[var(--color-brand-graphite)]">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            {/* The user will drop their final video into the public folder as hero-video.mp4 */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text remains perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full text-[var(--color-brand-white)] max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6 uppercase max-w-4xl leading-[1.1]">
            ROUND DIAMONDS. <br />
            <span className="font-bold">ENGINEERED FOR CONSISTENCY.</span>
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl text-[var(--color-brand-warm-white)]/90 leading-relaxed">
            Precision manufacturing, disciplined assortment and dependable B2B supply for the world's finest jewellery manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
              Discuss Your Requirement
            </Link>
            <Link href="/manufacturing" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-sm uppercase tracking-widest font-bold hover:text-gray-300 transition-colors underline underline-offset-8 w-full sm:w-auto text-center">
              Explore Manufacturing &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* 2. VERIFIED PROOF STRIP */}
      <Section className="bg-[var(--color-brand-graphite)] border-b border-[var(--color-brand-line)]/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <div className="py-6 px-4 flex items-center justify-center text-center border-b lg:border-b-0 border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Round Diamond Focus</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Dedicated Assortment</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center border-r border-[var(--color-brand-line)]/20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Export Support</span>
          </div>
          <div className="py-6 px-4 flex items-center justify-center text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-brand-text-secondary)]">Direct B2B Relationships</span>
          </div>
        </div>
      </Section>

      {/* 3. WHO WE ARE */}
      <WhoWeAreInteractive />

      {/* 4. MANUFACTURING STORY */}
      <ManufacturingCurtainStory />

      {/* 5. ROUND DIAMOND SPECIALISATION */}
      <RoundSpecialisation />

      {/* 6. QUALITY & ASSORTMENT */}
      <QualityAssortmentInteractive />

      {/* 7. CLIENT SERVICES */}
      <ClientServicesStack />

      {/* 8. GLOBAL SERVICE */}
      <GlobalReachInteractive />

      {/* 9. RESPONSIBILITY */}
      <ResponsibilityAccordion />

      {/* 10. LEADERSHIP TEASER */}
      <LeadershipTeaser />

      {/* 11. TRUST / CLIENT VOICE */}
      <ClientVoiceInteractive />

      {/* 12. FINAL CTA */}
      <Section id="contact" className="relative bg-[var(--color-brand-graphite)] text-center overflow-hidden" withFluidVertical>
        
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
          <p className="text-lg md:text-xl text-[var(--color-brand-warm-white)] font-light mb-10 opacity-90 max-w-2xl">
            Start a conversation about your requirement, assortment needs, or export enquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--color-brand-white)] text-[var(--color-brand-graphite)] px-8 py-4 text-base font-medium hover:bg-[var(--color-brand-panel)] transition-colors rounded-none w-full sm:w-auto text-center">
              Discuss Your Requirement
            </Link>
            <Link href="#" className="inline-flex items-center justify-center text-[var(--color-brand-white)] text-base font-medium hover:text-[var(--color-brand-warm-white)] transition-colors underline underline-offset-4 w-full sm:w-auto text-center mt-4 sm:mt-0">
              Connect With Sales
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}


