import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  withFluidVertical?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  as: Component = "section",
  withFluidVertical = false,
}: SectionProps) {
  const verticalPadding = withFluidVertical ? "py-[var(--fluid-py)]" : "";

  return (
    <Component id={id} className={`px-[var(--fluid-px)] w-full ${verticalPadding} ${className}`}>
      {children}
    </Component>
  );
}
