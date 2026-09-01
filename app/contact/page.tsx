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
      
      {/* 1. PAGE HERO */}
      <Section className="bg-[var(--color-brand-panel)]" withFluidVertical>
        <div className="w-full flex flex-col justify-center max-w-4xl">
          <h1 className="text-[length:var(--fluid-h1)] leading-tight font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6 uppercase">
            Let's Discuss Your Requirement.
          </h1>
          <p className="text-xl md:text-2xl font-light text-[var(--color-brand-text-secondary)]">
            Share your requirement and our sales team will respond directly.
          </p>
        </div>
      </Section>

      {/* 2. ENQUIRY FORM & 3. CONTACT INFO */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ENQUIRY FORM (Takes up more space on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-8">
              Enquiry Form
            </h2>
            
            {formStatus && (
              <div className="mb-8 p-4 bg-[var(--color-brand-warm-white)] border border-[var(--color-brand-line)] text-[var(--color-brand-graphite)] font-medium">
                {formStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              
              {/* Full name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-bold text-[var(--color-brand-graphite)]">Full name *</label>
                <input required type="text" id="fullName" name="fullName" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Company name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="text-sm font-bold text-[var(--color-brand-graphite)]">Company name *</label>
                <input required type="text" id="companyName" name="companyName" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Work email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-brand-graphite)]">Work email *</label>
                <input required type="email" id="email" name="email" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-[var(--color-brand-graphite)]">Phone / WhatsApp *</label>
                <input required type="text" id="phone" name="phone" placeholder="Include country code" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400" />
              </div>

              {/* Country / market */}
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-sm font-bold text-[var(--color-brand-graphite)]">Country / market *</label>
                <input required type="text" id="country" name="country" placeholder="e.g. United States" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400" />
              </div>

              {/* Business type */}
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

              {/* Requirement type */}
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

              {/* Size/carat range */}
              <div className="flex flex-col gap-2">
                <label htmlFor="carat" className="text-sm font-bold text-[var(--color-brand-graphite)]">Size/carat range (optional)</label>
                <input type="text" id="carat" name="carat" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Colour range */}
              <div className="flex flex-col gap-2">
                <label htmlFor="colour" className="text-sm font-bold text-[var(--color-brand-graphite)]">Colour range (optional)</label>
                <input type="text" id="colour" name="colour" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Clarity range */}
              <div className="flex flex-col gap-2">
                <label htmlFor="clarity" className="text-sm font-bold text-[var(--color-brand-graphite)]">Clarity range (optional)</label>
                <input type="text" id="clarity" name="clarity" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Approx. quantity */}
              <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="text-sm font-bold text-[var(--color-brand-graphite)]">Approx. quantity (optional)</label>
                <input type="text" id="quantity" name="quantity" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Certification preference */}
              <div className="flex flex-col gap-2">
                <label htmlFor="cert" className="text-sm font-bold text-[var(--color-brand-graphite)]">Certification preference (optional)</label>
                <input type="text" id="cert" name="cert" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors" />
              </div>

              {/* Message - Full width */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <div className="flex justify-between items-end">
                  <label htmlFor="message" className="text-sm font-bold text-[var(--color-brand-graphite)]">Message *</label>
                  <span className="text-xs text-[var(--color-brand-text-secondary)]">minimum 20 characters</span>
                </div>
                <textarea required minLength={20} id="message" name="message" rows={5} className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-y"></textarea>
              </div>

              {/* Requirement file upload - Full width */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="file" className="text-sm font-bold text-[var(--color-brand-graphite)]">Requirement file upload (optional)</label>
                <input type="file" id="file" name="file" accept=".pdf,.xlsx,.csv,.jpg" className="border border-[var(--color-brand-line)] px-4 py-3 bg-[var(--color-brand-white)] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-[var(--color-brand-panel)] file:text-[var(--color-brand-graphite)] hover:file:bg-[var(--color-brand-line)]" />
              </div>

              {/* Privacy consent - Full width */}
              <div className="flex items-start gap-3 md:col-span-2 mt-2">
                <div className="flex items-center h-5">
                  <input required id="privacy" name="privacy" type="checkbox" className="w-4 h-4 border border-[var(--color-brand-line)] rounded-none bg-[var(--color-brand-white)] accent-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" />
                </div>
                <label htmlFor="privacy" className="text-sm text-[var(--color-brand-text-secondary)] leading-tight">
                  I agree to the <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link> *
                </label>
              </div>

              {/* Marketing consent - Full width */}
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="flex items-center h-5">
                  <input id="marketing" name="marketing" type="checkbox" className="w-4 h-4 border border-[var(--color-brand-line)] rounded-none bg-[var(--color-brand-white)] accent-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" />
                </div>
                <label htmlFor="marketing" className="text-sm text-[var(--color-brand-text-secondary)] leading-tight">
                  I'd like to receive occasional company updates (optional)
                </label>
              </div>

              {/* Submit Button - Full width */}
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center bg-[var(--color-brand-graphite)] text-[var(--color-brand-white)] px-8 py-4 text-base font-medium hover:bg-black transition-colors rounded-none">
                  Send Requirement
                </button>
              </div>

            </form>
          </div>

          {/* CONTACT INFO / OFFICES */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-10">
            <div className="bg-[var(--color-brand-panel)] border border-[var(--color-brand-line)] p-8">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] mb-4 uppercase tracking-wide">
                    Offices
                  </h3>
                  <div className="text-base text-[var(--color-brand-text-secondary)] leading-relaxed whitespace-pre-line">
                    [Addresses â€” pending client confirmation]
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] mb-4 uppercase tracking-wide">
                    Direct Contact
                  </h3>
                  <div className="text-base text-[var(--color-brand-text-secondary)] leading-relaxed whitespace-pre-line">
                    [Phone, email, WhatsApp â€” pending client confirmation]
                  </div>
                </div>
              </div>
            </div>
            <Placeholder className="w-full aspect-[4/3]" label="[Map Image pending]" />
          </div>

        </div>
      </Section>

    </div>
  );
}

