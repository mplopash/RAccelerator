"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Activity, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Mail,
  Send
} from "lucide-react";
import { InteractButton } from "@/components/interact";
import { site } from "@/lib/site";

export function Footer21st() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="relative z-20 overflow-hidden border-t border-ink/10 bg-surface/90 pt-16 pb-12 transition-colors dark:border-white/10 dark:bg-zinc-950/95 font-sans">
      {/* Volumetric Ambient Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-96 w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-400/10"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Heroic Callout Card */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.08] via-surface to-teal-500/[0.05] p-8 sm:p-12 shadow-2xl backdrop-blur-2xl dark:border-emerald-400/25 dark:from-emerald-400/[0.08] dark:via-zinc-900/90 dark:to-teal-400/[0.05]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NOTIFIED BODY DEFENSE READY</span>
              </div>
              <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-ink">
                Transform Months of Regulatory Friction into Verifiable Proof
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Empower your regulatory and engineering teams with 100% deterministic reproducibility across EU MDR, IVDR, and 21 CFR Part 11.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <InteractButton
                mode="pulse"
                target="gap-panel"
                className="clay-button group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-700 to-teal-800 px-7 text-sm font-extrabold text-white dark:from-emerald-400 dark:to-teal-300 dark:text-zinc-950 shadow-lg"
              >
                <Sparkles className="size-4" />
                <span>Start Gap Assessment</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </InteractButton>

              <InteractButton
                mode="demo"
                className="clay-button inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-surface/80 px-6 text-sm font-bold text-ink backdrop-blur-md dark:border-white/15 dark:bg-zinc-900/80 hover:border-emerald-500/40"
              >
                <Activity className="size-4 text-accent" />
                <span>Book a Live Walkthrough</span>
              </InteractButton>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Ecosystem Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 border-b border-ink/10 pb-12 dark:border-white/10">
          
          {/* Col 1 & 2: Brand, Value Proposition & Regulatory Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm shadow-md dark:bg-emerald-400 dark:text-zinc-950">
                R
              </span>
              <span className="text-xl font-black tracking-tight text-ink">
                {site.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              The deterministic operating system for MedTech regulatory affairs. Translating complex device specifications into submission-grade, zero-drift technical documentation.
            </p>

            {/* Cryptographic Compliance Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Lock className="size-3" />
                21 CFR Part 11
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <ShieldCheck className="size-3" />
                ISO 13485:2016
              </span>
            </div>

            {/* Regulatory Intelligence Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-bold block mb-2">
                Executive MDCG & FDA Guidance Alerts
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="size-4" />
                  <span>Subscribed to MedTech Regulatory Digest</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted" />
                    <input
                      type="email"
                      required
                      placeholder="regulatory.lead@medtech.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-ink/10 bg-surface/80 py-2 pl-9 pr-3 text-xs text-ink placeholder:text-muted focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-white/10 dark:bg-zinc-900/80 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="clay-button inline-flex items-center gap-1.5 rounded-xl bg-ink text-background px-4 py-2 text-xs font-bold transition-transform hover:scale-105 dark:bg-white dark:text-zinc-950"
                  >
                    <span>Join</span>
                    <Send className="size-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Platform Architecture */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-emerald-400">
              Platform Architecture
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-muted">
              <li>
                <a href="#features" className="hover:text-ink dark:hover:text-white transition-colors flex items-center justify-between">
                  <span>GSPR Gap Radar (Annex I)</span>
                  <ChevronRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ink dark:hover:text-white transition-colors flex items-center justify-between">
                  <span>RAxy Deterministic Engine</span>
                  <ChevronRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ink dark:hover:text-white transition-colors flex items-center justify-between">
                  <span>21 CFR Part 11 Ledger</span>
                  <ChevronRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-ink dark:hover:text-white transition-colors flex items-center justify-between">
                  <span>Technical File Ingestion</span>
                  <ChevronRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-ink dark:hover:text-white transition-colors flex items-center justify-between">
                  <span>Spatial Device Diagnostic</span>
                  <ChevronRight className="size-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regulatory Frameworks */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-emerald-400">
              Standards & Codes
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-muted">
              <li>
                <span className="flex items-center justify-between text-ink dark:text-zinc-300 font-semibold">
                  <span>EU MDR 2017/745</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Full Annex I–XVI</span>
                </span>
              </li>
              <li>
                <span className="flex items-center justify-between text-ink dark:text-zinc-300 font-semibold">
                  <span>EU IVDR 2017/746</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Class A–D</span>
                </span>
              </li>
              <li>
                <span className="flex items-center justify-between text-ink dark:text-zinc-300 font-semibold">
                  <span>ISO 14971:2019</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">ALARP Verified</span>
                </span>
              </li>
              <li>
                <span className="flex items-center justify-between text-ink dark:text-zinc-300 font-semibold">
                  <span>IEC 62304 / 62366</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Class C SaMD</span>
                </span>
              </li>
              <li>
                <span className="flex items-center justify-between text-ink dark:text-zinc-300 font-semibold">
                  <span>FDA 21 CFR 820 QMSR</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Harmonized</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Governance */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent dark:text-emerald-400">
              Trust & Governance
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-muted">
              <li>
                <a href="#security" className="hover:text-ink dark:hover:text-white transition-colors">
                  Zero Data Retention Architecture
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-ink dark:hover:text-white transition-colors">
                  Air-Gapped & VPC Deployments
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-ink dark:hover:text-white transition-colors">
                  Cryptographic SHA-256 Ledger
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink dark:hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/architecture" className="hover:text-ink dark:hover:text-white transition-colors flex items-center gap-1">
                  <span>System Architecture</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Status Telemetry & Monumental Brand Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted">
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
              <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
              SYSTEM DETERMINISTIC // ZERO DRIFT
            </span>
            <span className="text-line">|</span>
            <span>ROOT HASH: 7F8A9E...01C</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>© 2026 {site.legalName}</span>
            <span>All Rights Reserved</span>
          </div>
        </div>

        {/* Monumental Sculptural Watermark */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none select-none mt-8 text-center font-black tracking-tighter text-ink/[0.04] dark:text-white/[0.03] text-[12vw] leading-none uppercase"
        >
          {site.name}
        </div>

      </div>
    </footer>
  );
}
