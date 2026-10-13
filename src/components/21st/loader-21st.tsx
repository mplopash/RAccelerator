"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Activity, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const LOADING_STEPS = [
  "INITIALIZING REGULATORY ENGINE...",
  "CONNECTING ISO 13485 & 14971 MATRICES...",
  "VERIFYING EU MDR 2017/745 ANNEX VIII RULES...",
  "ATTACHING 21 CFR PART 11 AUDIT ANCHORS...",
  "SYSTEM AUDIT-READY // DETERMINISTIC CORE ONLINE",
];

export function Loader21st() {
  const [progress, setProgress] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem("rac_loader_shown");
    if (hasLoaded) {
      setIsDone(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem("rac_loader_shown", "true");
          }, 450);
          return 100;
        }

        // Stepped progress increments
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const capped = Math.min(next, 100);

        // Update step text based on progress
        const step = Math.min(
          Math.floor((capped / 100) * LOADING_STEPS.length),
          LOADING_STEPS.length - 1
        );
        setCurrentStepIdx(step);

        return capped;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink text-background p-6"
        >
          {/* Subtle Ambient Background Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center max-w-md text-center">
            {/* MedTech Shield Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex size-16 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 shadow-xl shadow-emerald-500/10 mb-6"
            >
              <ShieldCheck className="size-8" />
            </motion.div>

            {/* Brand Title */}
            <h2 className="text-2xl font-black tracking-tight text-white">
              {site.name}
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-emerald-400/80">
              Regulatory Acceleration Core
            </p>

            {/* Numeric Counter with Tabular Font */}
            <div className="mt-8 flex items-baseline gap-1">
              <span className="font-mono text-5xl sm:text-6xl font-black text-white tracking-tighter">
                {progress}
              </span>
              <span className="font-mono text-2xl font-bold text-emerald-400">%</span>
            </div>

            {/* Minimalist High-Precision Progress Bar */}
            <div className="mt-6 h-1.5 w-64 sm:w-80 overflow-hidden rounded-full bg-white/10 p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Live Step Status Label */}
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted truncate max-w-full">
              {LOADING_STEPS[currentStepIdx]}
            </p>

            {/* Skip Option */}
            <button
              type="button"
              onClick={() => {
                setIsDone(true);
                sessionStorage.setItem("rac_loader_shown", "true");
              }}
              className="mt-8 font-mono text-[10px] text-muted/60 hover:text-white uppercase tracking-widest underline decoration-white/20 transition-colors"
            >
              Skip Loading ➔
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
