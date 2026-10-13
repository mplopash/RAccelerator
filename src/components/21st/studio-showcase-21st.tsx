"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileSearch, 
  Bot, 
  ShieldCheck, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle,
  Clock, 
  Coins, 
  FileText,
  Lock,
  ArrowRight,
  Database,
  Sparkles
} from "lucide-react";
import { gapRows } from "@/lib/content";

const STUDIO_MODULES = [
  {
    id: "radar",
    num: "01",
    title: "GSPR Gap Radar",
    subtitle: "Annex I Compliance & Remediation Meter",
    icon: FileSearch,
  },
  {
    id: "raxy",
    num: "02",
    title: "Deterministic Engine",
    subtitle: "Annex VIII Rules 1–22 Logic Evaluator",
    icon: Bot,
  },
  {
    id: "audit",
    num: "03",
    title: "21 CFR 11 Ledger",
    subtitle: "Cryptographic Evidence & Signature Hash",
    icon: ShieldCheck,
  },
  {
    id: "ingest",
    num: "04",
    title: "Document Ingestion",
    subtitle: "Automated PDF, DOCX & XLSX Indexer",
    icon: FileSpreadsheet,
  },
];

export function StudioShowcase21st() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeGspr, setActiveGspr] = useState(0);
  const [activeFileFmt, setActiveFileFmt] = useState<"pdf" | "docx" | "xlsx">("pdf");

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Flagship Studio // Interactive MedTech OS
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl text-ink">
            One Unified Operating System for Global Device Submissions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Eliminate disconnected spreadsheets and hallucinating chatbots. Explore the 4 deterministic modules powering audit-ready regulatory acceleration.
          </p>
        </div>

        {/* Studio Navigation Pills (Awwwards Style Tab Strip) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {STUDIO_MODULES.map((mod, idx) => {
            const Icon = mod.icon;
            const isSelected = activeModule === idx;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveModule(idx)}
                className={`relative flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-ink text-background shadow-xl dark:bg-white dark:text-zinc-950 scale-105 z-10"
                    : "bg-surface/80 text-muted hover:text-ink border border-ink/10 dark:bg-zinc-900/80 dark:border-white/10 dark:hover:text-white"
                }`}
              >
                <span className="font-mono text-[11px] opacity-60">{mod.num}</span>
                <Icon className="size-4 text-accent" />
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Master Studio Viewport */}
        <div className="mt-10 mx-auto max-w-5xl rounded-3xl border border-ink/10 bg-surface/80 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/80">
          <AnimatePresence mode="wait">
            {/* Module 1: GSPR Gap Radar */}
            {activeModule === 0 && (
              <motion.div
                key="module-radar"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/10 pb-5 dark:border-white/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      Module 01 // Gap Assessment
                    </span>
                    <h3 className="text-2xl font-bold text-ink">EU MDR & IVDR Annex I Clause Radar</h3>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>23/23 GSPRs Evaluated</span>
                  </div>
                </div>

                {/* Clauses Interactive Breakdown */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {gapRows.map((row, idx) => (
                    <button
                      key={row.name}
                      type="button"
                      onClick={() => setActiveGspr(idx)}
                      className={`text-left rounded-2xl p-4 transition-all border ${
                        activeGspr === idx
                          ? "border-emerald-500/50 bg-emerald-50/70 dark:bg-emerald-950/40 dark:border-emerald-400/50 shadow-md"
                          : "border-ink/5 bg-ink/[0.02] hover:bg-ink/[0.04] dark:border-white/5 dark:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-ink">
                        <span className="truncate">{row.name}</span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${
                            row.status === "Compliant"
                              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300"
                              : row.status === "Partial"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                          }`}
                        >
                          {row.status === "Compliant" && <CheckCircle2 className="size-3" />}
                          {row.status === "Partial" && <AlertTriangle className="size-3" />}
                          {row.status === "Gap" && <AlertCircle className="size-3" />}
                          {row.status}
                        </span>
                      </div>

                      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            row.status === "Compliant" ? "bg-emerald-500" : row.status === "Partial" ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: row.width }}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-ink/[0.03] p-4 border border-ink/5 dark:bg-white/[0.03] dark:border-white/5 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-accent" />
                    <span>Estimated Remediation Time: <strong className="text-ink">1–2 Weeks</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins className="size-4 text-accent" />
                    <span>Estimated Cost Impact: <strong className="text-ink">Minimal (Internal SOP)</strong></span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Module 2: RAxy Deterministic Engine */}
            {activeModule === 1 && (
              <motion.div
                key="module-raxy"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/10 pb-5 dark:border-white/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      Module 02 // Logic Tree
                    </span>
                    <h3 className="text-2xl font-bold text-ink">Deterministic Annex VIII Classification</h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    Accuracy: 100% Mathematical
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3 rounded-2xl border border-ink/10 bg-surface/70 p-5 text-xs dark:border-white/10 dark:bg-zinc-900/60">
                    <div className="flex gap-2.5">
                      <div className="size-6 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                        RA
                      </div>
                      <div className="rounded-2xl rounded-tl-none bg-ink/5 p-3 dark:bg-white/5">
                        <p className="font-semibold text-ink">
                          Is the device surgically invasive into the central circulatory or nervous system?
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-tr-none bg-emerald-700 text-white p-3 dark:bg-emerald-600">
                        <p className="font-semibold">Yes, long-term implantable active sensor (&gt;30 days).</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-[11px] text-emerald-900 dark:text-emerald-300">
                      <strong className="block">DETERMINATION VERIFIED // RULE 8 & 9</strong>
                      <span>Assigned Class: Class III (Highest Medical Device Risk Class)</span>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-ink/10 bg-surface p-3.5 dark:border-white/10 dark:bg-zinc-900">
                      <span className="text-muted block text-[10px]">MDCG 2021-24 GUIDANCE</span>
                      <span className="text-ink font-bold">Rule 8 Paragraph 3 Applied</span>
                    </div>
                    <div className="rounded-xl border border-ink/10 bg-surface p-3.5 dark:border-white/10 dark:bg-zinc-900">
                      <span className="text-muted block text-[10px]">NOTIFIED BODY EVIDENCE</span>
                      <span className="text-ink font-bold">14 Rule Anchors Attached</span>
                    </div>
                    <div className="rounded-xl border border-ink/10 bg-surface p-3.5 dark:border-white/10 dark:bg-zinc-900">
                      <span className="text-muted block text-[10px]">ZERO VARIATION GUARANTEE</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">Identical Input = Identical Output</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Module 3: 21 CFR Part 11 Ledger */}
            {activeModule === 2 && (
              <motion.div
                key="module-audit"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/10 pb-5 dark:border-white/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      Module 03 // Audit Integrity
                    </span>
                    <h3 className="text-2xl font-bold text-ink">21 CFR Part 11 Tamper-Evident Ledger</h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    SHA-256 Validated
                  </span>
                </div>

                <div className="rounded-2xl border border-ink/10 bg-surface/70 p-5 font-mono text-xs dark:border-white/10 dark:bg-zinc-900/60 space-y-3">
                  <div className="flex justify-between border-b border-ink/5 pb-2 dark:border-white/5">
                    <span className="text-muted">RECORD_ID</span>
                    <span className="text-ink font-bold">RAC-2026-MED-3891</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/5 pb-2 dark:border-white/5">
                    <span className="text-muted">SIGNER_AUTHORITY</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">VP Regulatory Affairs (MFA Verified)</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/5 pb-2 dark:border-white/5">
                    <span className="text-muted">BLOCKCHAIN_PROOF_HASH</span>
                    <span className="text-emerald-600 dark:text-emerald-400 truncate max-w-xs">e3b0c44298fc1c149afbf4c8996fb92427...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">NOTIFIED_BODY_STATUS</span>
                    <span className="text-ink font-bold">STAGE 2 SUBMISSION PASS</span>
                  </div>
                </div>

                <p className="text-xs text-muted">
                  Every determination leaves a permanent cryptographic audit trail adhering to FDA 21 CFR Part 11 and EU MDR Article 10 quality requirements.
                </p>
              </motion.div>
            )}

            {/* Module 4: Document Ingestion */}
            {activeModule === 3 && (
              <motion.div
                key="module-ingest"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/10 pb-5 dark:border-white/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      Module 04 // Ingestion Engine
                    </span>
                    <h3 className="text-2xl font-bold text-ink">Multi-Format Technical File Parsing</h3>
                  </div>

                  <div className="flex rounded-lg bg-ink/5 p-1 dark:bg-white/5">
                    {(["pdf", "docx", "xlsx"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setActiveFileFmt(fmt)}
                        className={`rounded px-3 py-1 text-xs font-mono font-bold uppercase transition-all ${
                          activeFileFmt === fmt
                            ? "bg-surface text-ink shadow-sm dark:bg-zinc-800 dark:text-emerald-300"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        .{fmt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-ink/10 bg-surface p-4 dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Clinical Evaluation
                    </div>
                    <p className="mt-1 text-[11px] text-muted">Annex XIV compliant CER extraction</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                      <span>142 Pages</span>
                      <span>Parsed 100%</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-surface p-4 dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Risk Management File
                    </div>
                    <p className="mt-1 text-[11px] text-muted">ISO 14971 clause cross-mapping</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                      <span>88 Hazards</span>
                      <span>Mapped</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-surface p-4 dark:border-white/10 dark:bg-zinc-900">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Software Architecture
                    </div>
                    <p className="mt-1 text-[11px] text-muted">IEC 62304 Class B/C tracing</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                      <span>19 Software Units</span>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
