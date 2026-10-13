"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ChevronRight,
  Zap,
  Layers,
  FileCheck2
} from "lucide-react";
import { InteractButton } from "@/components/interact";
import { ContainerScroll } from "@/components/21st/container-scroll-animation";
import { RegulatoryStudioHero } from "@/components/21st/regulatory-studio-hero";
import { site } from "@/lib/site";

export function Hero21st() {
  return (
    <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 md:pt-10">
      {/* Ambient Volumetric Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[580px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-transparent blur-[140px] dark:from-emerald-400/15 dark:via-teal-300/10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[600px] rounded-full bg-gradient-to-bl from-teal-500/15 via-emerald-600/10 to-transparent blur-[120px]"
      />

      {/* Container Scroll with 3D Perspective Unfold */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            {/* Shimmer Announcement Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-900/5 px-4.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-emerald-600/40 hover:bg-emerald-900/10 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300 dark:hover:border-emerald-300/50"
            >
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wide">Awwwards-Caliber MedTech Intelligence</span>
              <span className="mx-1 h-3 w-px bg-emerald-600/30 dark:bg-emerald-400/30" />
              <span className="flex items-center gap-1 font-mono text-[11px] opacity-90">
                EU MDR 2017/745 & IVDR
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.div>

            {/* Main Sculptural Headline */}
            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] text-ink">
              The Deterministic OS for{" "}
              <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-teal-200 dark:to-emerald-400">
                MedTech Regulations
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg md:text-xl leading-relaxed">
              {site.description} Turns regulatory requirements into device-specific workflows, verified rule traces, and submission-grade technical documentation.
            </p>

            {/* Interactive Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <InteractButton
                mode="pulse"
                target="gap-panel"
                className="clay-button group relative inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-700 to-teal-800 px-7 text-sm font-extrabold text-white dark:from-emerald-400 dark:to-teal-300 dark:text-zinc-950"
              >
                <Sparkles className="size-4 transition-transform group-hover:rotate-12" />
                <span>Start Gap Assessment</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </InteractButton>

              <InteractButton
                mode="demo"
                className="clay-button inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-surface/80 px-6 text-sm font-bold text-ink backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/80 dark:hover:border-emerald-400/40"
              >
                <Activity className="size-4 text-accent" />
                <span>Book a Live Walkthrough</span>
              </InteractButton>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                100% Deterministic Reproducibility
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                21 CFR Part 11 Audit Trail
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                Zero Hallucinations
              </span>
            </div>
          </div>
        }
      >
        {/* Interactive MedTech Regulatory Studio Cockpit */}
        <RegulatoryStudioHero />
      </ContainerScroll>
    </section>
  );
}
