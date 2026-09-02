"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import Link from "next/link";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("This form isn't connected yet â€” real submission will be added in a later phase.");
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. PAGE HERO (Premium Interactive Spotlight) */}
      <section 
        className="relative w-full h-[60vh] md:h-[75vh] flex flex-col justify-end bg-[var(--color-brand-graphite)] overflow-hidden cursor-crosshair border-b border-[var(--color-brand-line)] group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-[0.15]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-mesh)" className="text-white" />
          </svg>
        </div>

        {/* Cursor Spotlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 md:group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 60%)`
          }}
        />

        {/* Ambient Gradient (Mobile fallback & base) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 relative z-10 pb-16 md:pb-24">
          <div className="max-w-5xl text-left">
            <div className="overflow-hidden mb-4">
              <span className="block text-[10px] md:text-xs font-mono text-[var(--color-brand-warm-white)] uppercase tracking-[0.3em] mb-4 md:mb-6 opacity-70 transform transition-transform duration-1000 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                Initiate Dialogue &mdash; 01
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter text-white mb-2 leading-[0.9] transform transition-transform duration-1000 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0">
                Let's Discuss Your Requirement.
              </h1>
            </div>
            <div className="overflow-hidden mt-6 md:mt-12">
              <p className="text-lg md:text-2xl font-light text-[var(--color-brand-warm-white)] opacity-80 border-l border-white/20 pl-6 py-2 transform transition-transform duration-1000 delay-100 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0">
                Share your requirement and our sales team will respond directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENQUIRY FORM & 3. CONTACT INFO */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
                      {/* ENQUIRY FORM (Takes up more space on desktop) */}
            <div className="lg:col-span-7 xl:col-span-8">
              
              {formStatus && (
                <div className="mb-8 p-4 bg-[var(--color-brand-warm-white)] border border-[var(--color-brand-line)] text-[var(--color-brand-graphite)] font-medium">
                  {formStatus}
                </div>
              )}

              <div className="bg-[var(--color-brand-white)] border border-[var(--color-brand-line)] flex flex-col">
                <div className="bg-[var(--color-brand-panel)] border-b border-[var(--color-brand-line)] px-6 py-4 flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-graphite)]">
                    Enquiry Form
                  </h3>
                </div>
                
                <div className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    
                    {/* SECTION 1: Your Details */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-6">
                        Your Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="fullName" className="text-sm font-bold text-[var(--color-brand-graphite)]">Full name *</label>
                          <input required type="text" id="fullName" name="fullName" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="companyName" className="text-sm font-bold text-[var(--color-brand-graphite)]">Company name *</label>
                          <input required type="text" id="companyName" name="companyName" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-bold text-[var(--color-brand-graphite)]">Work email *</label>
                          <input required type="email" id="email" name="email" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-sm font-bold text-[var(--color-brand-graphite)]">Phone / WhatsApp *</label>
                          <input required type="text" id="phone" name="phone" placeholder="Include country code" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="country" className="text-sm font-bold text-[var(--color-brand-graphite)]">Country / market *</label>
                          <input required type="text" id="country" name="country" placeholder="e.g. United States" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="businessType" className="text-sm font-bold text-[var(--color-brand-graphite)]">Business type *</label>
                          <select required id="businessType" name="businessType" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors appearance-none">
                            <option value="">Select...</option>
                            <option value="Manufacturer">Manufacturer</option>
                            <option value="Brand-Retailer">Brand-Retailer</option>
                            <option value="Wholesaler-Trader">Wholesaler-Trader</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-[var(--color-brand-line)] mb-8"></div>

                    {/* SECTION 2: Your Requirement */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-6">
                        Your Requirement
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="reqType" className="text-sm font-bold text-[var(--color-brand-graphite)]">Requirement type *</label>
                          <select required id="reqType" name="reqType" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors appearance-none">
                            <option value="">Select...</option>
                            <option value="Round diamonds">Round diamonds</option>
                            <option value="Assortment service">Assortment service</option>
                            <option value="Export enquiry">Export enquiry</option>
                            <option value="General">General</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="carat" className="text-sm font-bold text-[var(--color-brand-graphite)]">Size/carat range (optional)</label>
                          <input type="text" id="carat" name="carat" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="colour" className="text-sm font-bold text-[var(--color-brand-graphite)]">Colour range (optional)</label>
                          <input type="text" id="colour" name="colour" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="clarity" className="text-sm font-bold text-[var(--color-brand-graphite)]">Clarity range (optional)</label>
                          <input type="text" id="clarity" name="clarity" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="quantity" className="text-sm font-bold text-[var(--color-brand-graphite)]">Approx. quantity (optional)</label>
                          <input type="text" id="quantity" name="quantity" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="cert" className="text-sm font-bold text-[var(--color-brand-graphite)]">Certification preference (optional)</label>
                          <input type="text" id="cert" name="cert" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                          <div className="flex justify-between items-end">
                            <label htmlFor="message" className="text-sm font-bold text-[var(--color-brand-graphite)]">Message *</label>
                            <span className="text-xs text-[var(--color-brand-text-secondary)]">minimum 20 characters</span>
                          </div>
                          <textarea required minLength={20} id="message" name="message" rows={5} className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-y"></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-[var(--color-brand-line)] mb-8"></div>

                    {/* SECTION 3: Attachments & Consent */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand-text-secondary)] mb-6">
                        Attachments &amp; Consent
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                        <div className="flex flex-col gap-2 md:col-span-2">
                          <label htmlFor="file" className="text-sm font-bold text-[var(--color-brand-graphite)]">Requirement file upload (optional)</label>
                          <input type="file" id="file" name="file" accept=".pdf,.xlsx,.csv,.jpg" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-[var(--color-brand-panel)] file:text-[var(--color-brand-graphite)] hover:file:bg-[var(--color-brand-line)]" />
                        </div>
                        <div className="flex items-start gap-3 md:col-span-2 mt-2">
                          <div className="flex items-center h-5">
                            <input required id="privacy" name="privacy" type="checkbox" className="w-4 h-4 border border-[var(--color-brand-line)] rounded-none bg-[var(--color-brand-white)] accent-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" />
                          </div>
                          <label htmlFor="privacy" className="text-sm text-[var(--color-brand-text-secondary)] leading-tight">
                            I agree to the <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link> *
                          </label>
                        </div>
                        <div className="flex items-start gap-3 md:col-span-2">
                          <div className="flex items-center h-5">
                            <input id="marketing" name="marketing" type="checkbox" className="w-4 h-4 border border-[var(--color-brand-line)] rounded-none bg-[var(--color-brand-white)] accent-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" />
                          </div>
                          <label htmlFor="marketing" className="text-sm text-[var(--color-brand-text-secondary)] leading-tight">
                            I'd like to receive occasional company updates (optional)
                          </label>
                        </div>
                        <div className="md:col-span-2 mt-4">
                          <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center bg-[var(--color-brand-graphite)] text-[var(--color-brand-white)] px-8 py-4 text-base font-medium hover:bg-black transition-colors rounded-none">
                            Send Requirement
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* CONTACT INFO / OFFICES (Premium Cinematic Variant) */}
            <div className="lg:col-span-5 xl:col-span-4 h-full">
              <div className="relative h-full bg-[var(--color-brand-graphite)] border border-[var(--color-brand-line)] overflow-hidden group">
                
                {/* Abstract animated background */}
                <div className="absolute inset-0 pointer-events-none opacity-20 md:group-hover:opacity-40 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="mix-blend-overlay">
                    <defs>
                      <pattern id="contact-info-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-info-grid)" />
                  </svg>
                </div>

                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-12">
                    
                    {/* Offices */}
                    <div className="flex flex-col transform transition-transform duration-1000 md:group-hover:-translate-y-2">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-warm-white)] opacity-60 mb-6 flex items-center gap-4">
                        <span className="w-6 h-px bg-white/40"></span>
                        Global Offices
                      </h3>
                      <div className="text-lg md:text-xl text-white font-light leading-relaxed whitespace-pre-line">
                        [Addresses — pending client confirmation]
                      </div>
                    </div>
                    
                    {/* Direct Contact */}
                    <div className="flex flex-col transform transition-transform duration-1000 delay-100 md:group-hover:-translate-y-2">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-warm-white)] opacity-60 mb-6 flex items-center gap-4">
                        <span className="w-6 h-px bg-white/40"></span>
                        Direct Contact
                      </h3>
                      <div className="text-lg md:text-xl text-white font-light leading-relaxed whitespace-pre-line">
                        [Phone, email, WhatsApp — pending client confirmation]
                      </div>
                    </div>

                  </div>

                  {/* High-Tech Map Placeholder */}
                  <div className="mt-16 md:mt-24 relative w-full aspect-[4/3] border border-white/10 bg-white/5 overflow-hidden group/map cursor-crosshair transform transition-transform duration-1000 delay-200 md:group-hover:-translate-y-2">
                    {/* Map scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />
                    
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                      {/* Radar Ping Node */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-white/20 absolute animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        </div>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover/map:text-white transition-colors duration-500">
                        Interactive Map Asset Pending
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </Section>

    </div>
  );
}

