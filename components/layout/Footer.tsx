import Link from "next/link";
import { Section } from "@/components/layout/Section";

export function Footer() {
  return (
    <Section as="footer" className="bg-[var(--color-brand-panel)] border-t border-[var(--color-brand-line)] pb-8 pt-16">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 w-full">
          
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-[var(--color-brand-graphite)] font-sans">
              Divine Star
            </h3>
            <p className="text-sm text-[var(--color-brand-text-secondary)] leading-relaxed max-w-xs">
              [Company tagline — pending client copy]
            </p>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--color-brand-graphite)] uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-brand-text-secondary)]">
              <li>
                <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  Diamonds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  Client Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Responsibility */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--color-brand-graphite)] uppercase tracking-wider">
              Responsibility
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-brand-text-secondary)]">
              <li>
                <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  Responsibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[var(--color-brand-graphite)] uppercase tracking-wider">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-[var(--color-brand-text-secondary)]">
              <p>[Address — pending client confirmation]</p>
              <p>
                <a href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  [Phone — pending client confirmation]
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                  [Email — pending client confirmation]
                </a>
              </p>
            </address>
            <div className="pt-4 flex flex-col space-y-3 text-sm text-[var(--color-brand-text-secondary)]">
              <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[var(--color-brand-graphite)] transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-[var(--color-brand-line)] pt-8 flex items-center justify-between">
          <p className="text-xs text-[var(--color-brand-text-secondary)]">
            © 2026 Divine Star. All rights reserved.
          </p>
        </div>
      </div>
    </Section>
  );
}
