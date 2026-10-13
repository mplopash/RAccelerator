"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { getLenis } from "@/lib/lenis-bridge";

const SECTIONS = [
  { id: "top", label: "Overview" },
  { id: "features", label: "Studio OS" },
  { id: "sandbox", label: "Diagnostic" },
  { id: "comparison", label: "Benchmark" },
  { id: "metrics", label: "Metrics" },
  { id: "security", label: "Ledger" },
  { id: "faq", label: "FAQ" },
];

export function ScrollInteractionHud() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)) : 0;
          setScrollProgress(progress);
          setIsVisible(currentScroll > 180);

          // Detect active section
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.45) {
                setActiveSection(SECTIONS[i].label);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Circumference for 32px radius ring: 2 * PI * 14 = 87.96
  const strokeDashoffset = 88 - (88 * scrollProgress) / 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden md:block"
        >
          <motion.button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 py-1.5 pr-4 pl-2 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl dark:border-white/10 dark:bg-zinc-900/90 dark:hover:border-emerald-400/40"
            title="Scroll to top"
          >
            {/* Circular Progress Ring */}
            <div className="relative flex size-8 items-center justify-center">
              <svg className="size-8 -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  className="stroke-slate-200 dark:stroke-white/10"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  className="stroke-emerald-600 transition-all duration-150 ease-out dark:stroke-emerald-400"
                  strokeWidth="2.5"
                  strokeDasharray="88"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <ArrowUp className="absolute size-3.5 text-slate-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-emerald-600 dark:text-zinc-200 dark:group-hover:text-emerald-400" />
            </div>

            {/* Dynamic Section Indicator with Smooth Text Swap */}
            <div className="flex flex-col text-left">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                {isHovered ? "TOP" : `${Math.round(scrollProgress)}%`}
              </span>
              <span className="text-xs font-bold text-slate-900 transition-colors dark:text-white">
                {isHovered ? "Return to Top" : activeSection}
              </span>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
