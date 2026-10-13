"use client";

import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { InteractButton } from "@/components/interact";

export function Cta21st() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-28 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950 via-teal-950 to-zinc-950 p-8 text-white shadow-2xl sm:p-14 lg:p-20 dark:border-emerald-400/30">
        {/* Radiant Ambient Mesh Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="size-3.5" />
            <span>Accelerate Your Technical Documentation</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Ready to Shorten Notified Body Review by Months?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Turn your existing PDFs, DOCX files, and spreadsheets into a verified, 21 CFR Part 11 compliant MDR/IVDR technical file today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <InteractButton
              mode="pulse"
              target="gap-panel"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-8 text-sm font-black text-zinc-950 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Start Gap Assessment</span>
              <ArrowRight className="size-4" />
            </InteractButton>

            <InteractButton
              mode="demo"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 active:scale-95"
            >
              <span>Book a Live Walkthrough</span>
            </InteractButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-400" />
              SOC 2 Type II Audited
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-400" />
              EU Data Residency
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-400" />
              Zero Hallucination Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
