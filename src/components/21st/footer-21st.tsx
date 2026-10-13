"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Lock, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe2, 
  Clock, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers
} from "lucide-react";
import { getLenis } from "@/lib/lenis-bridge";
import { site } from "@/lib/site";

const REGULATORY_NODES = [
  { name: "EU EUDAMED Gateway", status: "Active", latency: "14ms", standard: "MDR 2017/745" },
  { name: "FDA CDRH ESG Portal", status: "Active", latency: "22ms", standard: "21 CFR Part 11" },
  { name: "Notified Body Hub (0123/0050)", status: "Verified", latency: "18ms", standard: "Annex IX / XI" },
  { name: "ISO Cryptographic Ledger", status: "Synced", latency: "9ms", standard: "ISO 13485:2016" },
];

const TERMINAL_COMMANDS = [
  {
    cmd: "racc audit --class=III --standard=MDR",
    result: "✓ Annex VIII Rule 8 evaluated. 23 GSPRs validated. 0 drift detected. Cryptographic proof locked.",
    token: "0x8F92...B41E"
  },
  {
    cmd: "racc verify --ledger=21CFR11",
    result: "✓ PKI digital signatures verified. Audit trail immutable. SHA-256 manifest confirmed.",
    token: "0x3A71...C902"
  },
  {
    cmd: "racc crosswalk --iso14971 --samd",
    result: "✓ Risk-benefit ALARP balance achieved. IEC 62304 Class C traceability matrix linked.",
    token: "0xDF44...8E10"
  }
];

export function Footer21st() {
  const [activeCmdIdx, setActiveCmdIdx] = useState(0);
  const [copiedToken, setCopiedToken] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateUtc = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateUtc();
    const interval = setInterval(updateUtc, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeCmd = TERMINAL_COMMANDS[activeCmdIdx];

  return (
    <footer className="relative z-20 border-t border-slate-200/90 bg-white/70 pt-16 pb-12 backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-zinc-950/90 font-sans">
      {/* Volumetric Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[480px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px] dark:from-emerald-400/10 dark:via-teal-400/5"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* TOP SECTION: Interactive MedTech Command Station */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Panel: Live Regulatory Nodes & Global Telemetry (7 cols) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-zinc-900/60">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-400">
                    <Activity className="size-4.5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Live Regulatory Gateway Telemetry
                    </h3>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                      Zero-drift deterministic node network
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-xs font-semibold text-emerald-800 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ALL SYSTEMS VERIFIED</span>
                </div>
              </div>

              {/* Live Gateways Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {REGULATORY_NODES.map((node) => (
                  <div
                    key={node.name}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-200 hover:border-emerald-500/40 hover:bg-white dark:border-white/5 dark:bg-zinc-800/40 dark:hover:border-emerald-400/30 dark:hover:bg-zinc-800/70"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                        {node.name}
                      </span>
                      <span className="shrink-0 rounded bg-emerald-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">
                        {node.latency}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-zinc-400">
                      <span>{node.standard}</span>
                      <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="size-3" />
                        {node.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Global Agency Coverage Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-4 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Globe2 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Primary Gateways: Brussels • Washington • Bern • Tokyo</span>
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-zinc-300">
                <Clock className="size-3.5 text-slate-400" />
                <span>{currentTime || "UTC LIVE"}</span>
              </span>
            </div>
          </div>

          {/* Right Panel: Interactive Deterministic CLI Sandbox (5 cols) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-slate-900 p-6 text-white shadow-xl sm:p-8 lg:col-span-5 dark:border-white/10 dark:bg-zinc-950">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-500/80" />
                    <span className="size-2.5 rounded-full bg-amber-500/80" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-zinc-400 pl-2">
                    racc-cli // v2.6.4
                  </span>
                </div>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  DETERMINISTIC
                </span>
              </div>

              {/* Command Selection Tabs */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {TERMINAL_COMMANDS.map((item, idx) => (
                  <button
                    key={item.cmd}
                    type="button"
                    onClick={() => setActiveCmdIdx(idx)}
                    className={`rounded-lg px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
                      activeCmdIdx === idx
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200 border border-transparent"
                    }`}
                  >
                    Cmd {idx + 1}
                  </button>
                ))}
              </div>

              {/* Terminal Screen with Smooth Transitions */}
              <div className="mt-4 rounded-xl bg-black/60 p-4 font-mono text-xs backdrop-blur-md border border-white/5 min-h-[140px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-zinc-600 select-none">$</span>
                    <span className="font-bold">{activeCmd.cmd}</span>
                  </div>
                  <p className="mt-2.5 text-zinc-300 text-[11px] leading-relaxed">
                    {activeCmd.result}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-zinc-500">
                  <span>TOKEN: {activeCmd.token}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(activeCmd.token)}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {copiedToken ? <Check className="size-3" /> : <Copy className="size-3" />}
                    <span>{copiedToken ? "Copied" : "Copy Hash"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
              <span className="text-zinc-400">Want interactive technical access?</span>
              <a
                href="#sandbox"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Launch Studio</span>
                <ChevronRight className="size-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: Structured Architectural Pathways */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-slate-200/80 pt-12 md:grid-cols-4 lg:grid-cols-4 dark:border-white/10">
          
          {/* Col 1: Platform Capabilities */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform Modules
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-zinc-400">
              <li>
                <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>GSPR Clause Radar (Annex I)</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>RAxy Deterministic Rules 1–22</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>21 CFR Part 11 Audit Ledger</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Device Archetype Diagnostic</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Regulatory Directives */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Standard Mappings
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-zinc-400">
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-800 dark:text-zinc-200">EU MDR 2017/745</span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Class I–III</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-800 dark:text-zinc-200">EU IVDR 2017/746</span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Class A–D</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-800 dark:text-zinc-200">ISO 14971:2019</span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">ALARP Matrix</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-medium text-slate-800 dark:text-zinc-200">IEC 62304:2015</span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">SaMD & SiMD</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Security */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Institutional Trust
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-zinc-400">
              <li>
                <a href="#security" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Zero Data Retention Security
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Air-Gapped & VPC Deployments
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Cryptographic SHA-256 Ledger
                </a>
              </li>
              <li>
                <a href="/architecture" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Architecture Specification</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Launch & Brand Seal */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-sm shadow-md dark:bg-emerald-400 dark:text-zinc-950">
                  R
                </span>
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                  {site.name}
                </span>
              </div>
              <p className="mt-2.5 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                The deterministic OS turning MedTech regulatory chaos into audit-ready mathematical certainty.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 group flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors"
            >
              <span>Back to Top</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-slate-100 group-hover:bg-emerald-500/20 group-hover:text-emerald-600 dark:bg-zinc-800 transition-colors">
                ↑
              </span>
            </button>
          </div>

        </div>

        {/* BOTTOM SECTION: Cryptographic Stamp & Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-200/80 pt-8 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:text-zinc-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
              <span className="size-2 rounded-full bg-emerald-500" />
              SECURE LEDGER ACTIVE
            </span>
            <span>•</span>
            <span>ROOT PROTOCOL: 0x8F92...B41E</span>
            <span>•</span>
            <span>21 CFR PART 11 COMPLIANT</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 {site.legalName}</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
