import React from "react";

interface PlaceholderProps {
  label?: string;
  className?: string;
  isHero?: boolean;
}

export function Placeholder({ label = "[Image pending]", className = "", isHero = false }: PlaceholderProps) {
  if (isHero) {
    return (
      <div className={`absolute inset-0 z-0 bg-gradient-to-br from-[#222222] to-[#151515] flex items-center justify-center ${className}`}>
        <span className="text-white/40 text-sm tracking-widest uppercase">{label}</span>
      </div>
    );
  }

  return (
    <div className={`w-full bg-[var(--color-brand-panel)] flex flex-col items-center justify-center border border-[var(--color-brand-line)]/50 ${className}`}>
      <span className="text-[var(--color-brand-text-secondary)] text-sm tracking-wide uppercase px-4 text-center">
        {label}
      </span>
    </div>
  );
}
