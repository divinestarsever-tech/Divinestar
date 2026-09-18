"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Diamonds", href: "/diamonds" },
    { name: "Services", href: "/services" },
    { name: "Responsibility", href: "/responsibility" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Section as="header" className="sticky top-0 z-40 border-b border-[var(--color-brand-line)] bg-[var(--color-brand-white)] py-0">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-brand-graphite)] font-sans">
              Divine Star
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--color-brand-graphite)] hover:text-[var(--color-brand-text-secondary)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none bg-[var(--color-brand-graphite)] px-5 py-2 text-sm font-medium text-[var(--color-brand-white)] hover:bg-black transition-colors"
            >
              Discuss Your Requirement
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-warm-white)] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6 pointer-events-none" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Section>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-[60] w-[75vw] sm:w-[50vw] md:w-[33vw] bg-[var(--color-brand-white)] lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-end px-[var(--fluid-px)] border-b border-[var(--color-brand-line)] shrink-0">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-warm-white)] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            onClick={closeMenu}
          >
            <span className="sr-only">Close menu</span>
            <X className="block h-6 w-6 pointer-events-none" aria-hidden="true" />
          </button>
        </div>
        <div className="px-6 py-8 space-y-8 flex flex-col flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-xl font-medium text-[var(--color-brand-graphite)] hover:text-[var(--color-brand-text-secondary)] transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-[var(--color-brand-line)] mt-auto">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-none bg-[var(--color-brand-graphite)] px-5 py-4 text-sm font-medium text-[var(--color-brand-white)] hover:bg-black transition-colors"
              onClick={closeMenu}
            >
              Discuss Your Requirement
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
