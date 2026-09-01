"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Diamonds", href: "/diamonds" },
    { name: "Services", href: "#" },
    { name: "Responsibility", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <Section as="header" className="sticky top-0 z-50 border-b border-[var(--color-brand-line)] bg-[var(--color-brand-white)] py-0">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-brand-graphite)] font-sans">
              Divine Star
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-8">
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
          <div className="hidden md:flex md:items-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-none bg-[var(--color-brand-graphite)] px-5 py-2 text-sm font-medium text-[var(--color-brand-white)] hover:bg-black transition-colors"
            >
              Discuss Your Requirement
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-warm-white)] hover:text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6 pointer-events-none" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Section>

      {/* Mobile Menu (Full Screen) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--color-brand-white)] md:hidden flex flex-col overflow-y-auto">
          <div className="flex h-16 items-center justify-between px-[var(--fluid-px)] border-b border-[var(--color-brand-line)] shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight text-[var(--color-brand-graphite)] font-sans"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Divine Star
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-graphite)] hover:bg-[var(--color-brand-warm-white)] hover:text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="block h-6 w-6 pointer-events-none" aria-hidden="true" />
            </button>
          </div>
          <div className="px-[var(--fluid-px)] py-6 space-y-6 flex flex-col flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-[var(--color-brand-graphite)] hover:text-[var(--color-brand-text-secondary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-[var(--color-brand-line)]">
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-none bg-[var(--color-brand-graphite)] px-5 py-3 text-base font-medium text-[var(--color-brand-white)] hover:bg-black transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
