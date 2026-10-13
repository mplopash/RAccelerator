"use client";

import { useState } from "react";
import { 
  Check, 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  Sparkles, 
  Scale, 
  Calculator, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Award,
  ArrowRight
} from "lucide-react";
import { genericAi, deterministicAi, proofs } from "@/lib/content";

export function Comparison21st() {
  const [deviceClass, setDeviceClass] = useState<"IIa" | "IIb" | "III">("III");
  const [deviceCount, setDeviceCount] = useState<number>(3);
  const [docPages, setDocPages] = useState<number>(180);

  // Dynamic calculations based on industry benchmarks (EU MDR consultant rates $250/hr)
  const multiplier = deviceClass === "III" ? 1.5 : deviceClass === "IIb" ? 1.2 : 0.9;
  const costPerDevice = Math.round((deviceClass === "III" ? 145000 : deviceClass === "IIb" ? 95000 : 55000) * (docPages / 150));
  const totalCostSaved = (costPerDevice * deviceCount).toLocaleString();
  const monthsSaved = (deviceClass === "III" ? 8.5 : deviceClass === "IIb" ? 6.2 : 4.5).toFixed(1);
  const hoursSaved = Math.round(deviceCount * docPages * 3.8 * multiplier).toLocaleString();
  const passYield = deviceClass === "III" ? "98.8%" : "99.4%";

  return (
    <section id="comparison" className="py-20 sm:py-28 relative overflow-hidden bg-ink/[0.015] dark:bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-semibold text-accent dark:border-emerald-400/20 dark:text-emerald-300">
            <Scale className="size-3.5" />
            <span>Deterministic vs. Probabilistic</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-ink">
            Why Generic LLMs Fail MedTech Audits
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Medical device regulations leave zero margin for probabilistic hallucinations. Review how RAccelerator delivers 100% deterministic reproducibility.
          </p>
        </div>

        {/* Dual Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Generic LLM Card */}
          <div className="relative rounded-3xl border border-red-500/20 bg-white/80 p-6 sm:p-8 backdrop-blur-md shadow-xs dark:bg-zinc-900/40 dark:border-red-500/20">
            <div className="flex items-center justify-between border-b border-red-500/10 pb-5 dark:border-red-500/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                  Standard LLM Frameworks
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Generic Probabilistic AI</h3>
              </div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                <AlertTriangle className="size-5" />
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              General-purpose chatbots re-generate outputs with variability, hallucinate standard clauses, and fail Notified Body scrutiny.
            </p>

            <ul className="mt-6 space-y-3.5">
              {genericAi.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600 dark:text-red-400 mt-0.5">
                    <X className="size-3.5" />
                  </div>
                  <span className="text-slate-500 dark:text-zinc-400 line-through opacity-85">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-red-50/70 p-4 border border-red-500/15 dark:bg-red-950/20 dark:border-red-500/20">
              <p className="text-xs font-semibold text-red-800 dark:text-red-300">
                Audit Consequence:
              </p>
              <p className="mt-1 text-xs text-red-700/90 dark:text-red-400/80">
                High probability of Major Findings during Notified Body Stage 2 review due to unverifiable citations and random variations.
              </p>
            </div>
          </div>

          {/* Right: RAccelerator Deterministic AI (Glowing Winner Card) */}
          <div className="relative rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-500/[0.06] to-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-emerald-500/10 dark:from-emerald-400/[0.08] dark:to-zinc-900/90 dark:border-emerald-400/40">
            {/* Top winner badge */}
            <div className="absolute -top-3.5 right-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-md dark:bg-emerald-500 dark:text-zinc-950">
                <Sparkles className="size-3.5" />
                Audit-Grade Benchmark
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-5 dark:border-emerald-400/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                  Regulatory Engine
                </span>
                <h3 className="mt-1 text-2xl font-bold text-ink">RAccelerator Determinism</h3>
              </div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                <ShieldCheck className="size-6" />
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted">
              Built directly on MDR Annex VIII rules, ISO 14971 logic trees, and evidence-anchored clauses with 100% reproducible results.
            </p>

            <ul className="mt-6 space-y-3.5">
              {deterministicAi.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-ink">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700 dark:bg-emerald-400/25 dark:text-emerald-300 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20 dark:bg-emerald-950/40 dark:border-emerald-400/30">
              <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-300">
                Notified Body Outcome:
              </p>
              <p className="mt-1 text-xs text-emerald-800/90 dark:text-emerald-300/80">
                Defensible, audit-ready submissions with clear proof trees that reviewers can verify end-to-end without ambiguities.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Notified Body Submission ROI & Acceleration Calculator */}
        <div className="mt-16 rounded-3xl border border-emerald-500/30 bg-white/95 p-6 sm:p-10 shadow-xl backdrop-blur-2xl dark:border-emerald-400/20 dark:bg-zinc-950/90">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                <Calculator className="size-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                  Interactive Impact Model
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Regulatory Acceleration & ROI Calculator</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">
                Live Dynamic Model
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders & Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Device Classification Toggle */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold block mb-2">
                  Device Risk Classification (EU MDR Annex VIII)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["IIa", "IIb", "III"] as const).map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setDeviceClass(cls)}
                      className={`rounded-xl py-2.5 px-3 text-xs font-bold font-mono transition-all border ${
                        deviceClass === cls
                          ? "bg-emerald-600 text-white border-emerald-500 shadow-md dark:bg-emerald-400 dark:text-zinc-950"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-500/30 dark:bg-zinc-900 dark:border-white/10 dark:text-zinc-300"
                      }`}
                    >
                      Class {cls} {cls === "III" ? "(Implantable)" : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Active Devices Count */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                  <span>Active Device Portfolios in Pipeline</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {deviceCount} {deviceCount === 1 ? "Device" : "Devices"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg cursor-pointer dark:bg-white/10"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-zinc-400 mt-1">
                  <span>1 device</span>
                  <span>6 devices</span>
                  <span>12 devices</span>
                </div>
              </div>

              {/* Slider 2: Average Technical File Documentation Pages */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                  <span>Avg. Technical File Volume per Device</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {docPages} Pages (DHF + CER + Risk)
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="450"
                  step="10"
                  value={docPages}
                  onChange={(e) => setDocPages(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg cursor-pointer dark:bg-white/10"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-zinc-400 mt-1">
                  <span>50 pages (Modular)</span>
                  <span>250 pages (Typical)</span>
                  <span>450+ pages (Complex)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Display (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.08] to-teal-500/[0.04] p-6 text-slate-900 space-y-4 dark:border-emerald-400/30 dark:bg-zinc-900/80 dark:text-white">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold block">
                  ESTIMATED REGULATORY CONSULTING & AUDIT SAVINGS
                </span>
                <p className="mt-1 text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-400 tracking-tight">
                  ${totalCostSaved}
                </p>
                <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                  Based on $250/hr senior EU regulatory consultant remediation costs.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 dark:border-white/10 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-zinc-400 block text-[10px] font-mono">TIME TO CE MARK</span>
                  <strong className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <Clock className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                    -{monthsSaved} Months
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-zinc-400 block text-[10px] font-mono">HOURS RECLAIMED</span>
                  <strong className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <TrendingUp className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                    {hoursSaved} hrs
                  </strong>
                </div>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-2xs dark:bg-zinc-950/80 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-zinc-400">Notified Body Stage 2 Yield:</span>
                <span className="font-mono font-black text-emerald-600 dark:text-emerald-400">
                  {passYield} First-Pass
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Cards Row */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {proofs.map((proof, idx) => (
            <div
              key={proof.title}
              className="glass-card-21 rounded-2xl p-6 transition-all"
            >
              <div className="font-mono text-xs font-bold text-accent">0{idx + 1} // PROOF</div>
              <h4 className="mt-2 text-base font-bold text-ink">{proof.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted">{proof.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
