"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // "idle" | "in" | "covered" | "out"
  const [phase, setPhase] = useState<"idle" | "in" | "covered" | "out">("idle");
  const [targetUrl, setTargetUrl] = useState("");

  // 1. Intercept internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      const a = (e.target as Element).closest("a");
      if (!a || !a.href) return;

      const href = a.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const url = new URL(a.href);
      if (url.origin !== window.location.origin) return;

      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      setTargetUrl(url.href);
      setPhase("in");
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  // 2. Handle "in" animation completion -> push route
  useEffect(() => {
    if (phase === "in") {
      const timer = setTimeout(() => {
        setPhase("covered");
        router.push(targetUrl, { scroll: true });
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [phase, targetUrl, router]);

  // 3. Failsafe for slow networks (7 seconds)
  useEffect(() => {
    if (phase === "covered") {
      const failsafe = setTimeout(() => {
        setPhase("out");
      }, 7000);
      return () => clearTimeout(failsafe);
    }
  }, [phase]);

  // 4. Handle navigation completion -> animate "out"
  useEffect(() => {
    if (phase === "covered") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("out");
        });
      });
    }
  }, [pathname, searchParams, phase]);

  // 5. Handle "out" animation completion -> idle
  useEffect(() => {
    if (phase === "out") {
      const timer = setTimeout(() => {
        setPhase("idle");
        setTargetUrl("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const bars = Array.from({ length: 5 });

  return (
    <div
      className={`fixed inset-0 z-[9999] flex ${
        phase === "idle" ? "pointer-events-none" : "pointer-events-auto"
      }`}
      aria-hidden="true"
    >
      {bars.map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-[var(--color-brand-graphite)]"
          style={{
            transformOrigin: phase === "out" ? "top" : "bottom",
            transform: phase === "in" || phase === "covered" ? "scaleY(1)" : "scaleY(0)",
            transition: `transform ${phase === "out" ? "0.58s" : "0.55s"} cubic-bezier(0.76, 0, 0.24, 1) ${
              i * 0.04
            }s`,
          }}
        />
      ))}
    </div>
  );
}
