"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Layers, 
  Scan, 
  Scale, 
  Shield, 
  HelpCircle, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { InteractButton } from "@/components/interact";
import { ThemeToggle } from "@/components/theme-toggle";

const DOCK_ITEMS = [
  { label: "Hero", href: "#top", icon: Home },
  { label: "Bento Grid", href: "#features", icon: Layers },
  { label: "3D Sandbox", href: "#sandbox", icon: Scan },
  { label: "Deterministic AI", href: "#why", icon: Scale },
  { label: "Security", href: "#security", icon: Shield },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
];

export function FloatingDock21st() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pointer-events-auto">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="clay-glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-ink shadow-2xl backdrop-blur-2xl hover:scale-105 transition-all dark:text-white"
          >
            <Sparkles className="size-3.5 text-accent" />
            <span>Navigation Hub</span>
            <ChevronUp className="size-3.5 text-muted" />
          </motion.button>
        ) : (
          <motion.nav
            key="expanded"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-2xl backdrop-blur-2xl border border-ink/10 bg-surface/80 dark:border-white/15 dark:bg-zinc-950/80"
          >
            {DOCK_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredIdx === idx;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative flex size-10 items-center justify-center rounded-full text-muted transition-all duration-200 hover:text-ink dark:hover:text-white"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                      y: isHovered ? -3 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="flex items-center justify-center"
                  >
                    <Icon className="size-5" />
                  </motion.div>

                  {/* Tooltip on hover */}
                  <span className="pointer-events-none absolute -top-9 scale-0 rounded-lg bg-ink px-2.5 py-1 text-[10px] font-bold text-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800 dark:text-emerald-300">
                    {item.label}
                  </span>
                </a>
              );
            })}

            <div className="h-5 w-px bg-ink/15 dark:bg-white/15 mx-1" />

            {/* Quick Assessment Pulse Trigger */}
            <InteractButton
              mode="pulse"
              target="gap-panel"
              className="clay-button flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 px-3.5 py-1.5 text-xs font-bold text-white dark:from-emerald-400 dark:to-teal-300 dark:text-zinc-950"
            >
              <Sparkles className="size-3.5" />
              <span className="hidden sm:inline">Assess</span>
            </InteractButton>

            <ThemeToggle />

            {/* Minimize handle */}
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              title="Minimize navigation"
              className="flex size-7 items-center justify-center rounded-full text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors ml-1"
            >
              <ChevronDown className="size-3.5" />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
