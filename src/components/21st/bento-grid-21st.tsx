"use client";

import { useState } from "react";
import { 
  FileSearch, 
  Bot, 
  FileCheck2, 
  Workflow, 
  FileSpreadsheet, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Sparkles,
  ArrowUpRight,
  Clock,
  Coins,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  FileText
} from "lucide-react";
import { SpatialCard } from "@/components/21st/spatial-card";
import { gapRows, rules } from "@/lib/content";

export function BentoGrid21st() {
  const [activeGspr, setActiveGspr] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState<"ra" | "rnd" | "exec">("ra");
  const [activeFileTab, setActiveFileTab] = useState<"pdf" | "docx" | "xlsx">("pdf");

  const audienceContent = {
    ra: {
      title: "Regulatory Affairs Detailed Ledger",
      desc: "Full standard clause citations, MDCG guidance mappings, Annex VIII rule trees, and submission-ready XML/PDF export.",
      tags: ["Notified Body Ready", "Clause Citations", "GSPR Cross-Walk"],
      level: "Deep Technical Audit",
    },
    rnd: {
      title: "R&D Engineering Gap Remediation",
      desc: "Actionable engineering tasks, testing protocol checklists (IEC 62304 / ISO 14971), and design control documentation links.",
      tags: ["Design Controls", "Verification & Validation", "Risk Mitigations"],
      level: "Actionable Task Board",
    },
    exec: {
      title: "Executive & C-Suite Risk Summary",
      desc: "High-level submission readiness score, estimated time to market, resource requirement forecast, and audit risk index.",
      tags: ["Readiness Score: 94%", "Time Saved: 9 Weeks", "Zero Critical NB Risks"],
      level: "Portfolio Dashboard",
    },
  };

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Core Architecture // Spatial Bento System
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-ink">
            Engineered Exclusively for MedTech Regulatory Rigor
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Move away from disconnected spreadsheets and hallucinating generic LLMs. RAccelerator brings deterministic intelligence to every phase of your technical file.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: GSPR Gap Health Check (Span 2) */}
          <div className="md:col-span-2">
            <SpatialCard depth={8} className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                      <FileSearch className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">GSPR Health Check & Gap Radar</h3>
                      <p className="text-xs text-muted">Automated gap evaluation against EU MDR & IVDR Annex I</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-xs font-bold text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300">
                    23/23 Mapped
                  </span>
                </div>

                {/* Interactive Gap Inspector */}
                <div className="mt-6 rounded-2xl border border-ink/10 bg-surface/70 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                  <div className="flex items-center justify-between pb-3 border-b border-ink/10 dark:border-white/10 text-xs">
                    <span className="font-mono text-muted uppercase font-bold">Interactive Clause Inspector</span>
                    <span className="text-muted">Click row to inspect remediation</span>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    {gapRows.map((row, idx) => (
                      <button
                        key={row.name}
                        type="button"
                        onClick={() => setActiveGspr(idx)}
                        className={`w-full text-left rounded-xl p-3 transition-all ${
                          activeGspr === idx
                            ? "border border-emerald-500/40 bg-emerald-50/80 dark:bg-emerald-950/40 dark:border-emerald-400/40"
                            : "border border-transparent bg-ink/[0.02] hover:bg-ink/[0.04] dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                          <span className="text-ink truncate">{row.name}</span>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
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

                        {/* Progress Track */}
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              row.status === "Compliant"
                                ? "bg-emerald-500"
                                : row.status === "Partial"
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: row.width }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Remediation estimate footer for active GSPR */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface px-3 py-2 text-xs border border-ink/5 dark:bg-zinc-800/80 dark:border-white/5">
                    <div className="flex items-center gap-2 text-muted">
                      <Clock className="size-3.5 text-accent" />
                      <span>Estimated Remediation: <strong className="text-ink">1–2 Weeks</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                      <Coins className="size-3.5 text-accent" />
                      <span>Budget Impact: <strong className="text-ink">Minimal (Internal SOP)</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </SpatialCard>
          </div>

          {/* Card 2: RAxy Classification Chatbot (Span 1) */}
          <div>
            <SpatialCard depth={8} className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                  <Bot className="size-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">RAxy Chatbot Guide</h3>
                <p className="mt-1 text-xs text-muted">
                  Step-by-step Annex VIII classification wizard with complete determination reasoning.
                </p>

                {/* Chat Simulation Bubble */}
                <div className="mt-6 space-y-3 rounded-2xl border border-ink/10 bg-surface/70 p-4 text-xs dark:border-white/10 dark:bg-zinc-900/60">
                  <div className="flex gap-2.5">
                    <div className="size-6 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                      RA
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-ink/5 p-3 dark:bg-white/5">
                      <p className="font-semibold text-ink">
                        Does the device incorporate medicinal substance or biological tissue?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none bg-emerald-700 text-white p-3 dark:bg-emerald-600">
                      <p className="font-semibold">No. Active sensor with diagnostic wireless telemetry.</p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-[11px] text-emerald-800 dark:text-emerald-300">
                    <strong className="block">Result: Rule 9 & 10 Triggered</strong>
                    Classification Level: Class IIb / Class III
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-ink/10 dark:border-white/10 flex items-center justify-between text-xs text-muted">
                <span>Annex VIII Accuracy</span>
                <strong className="text-emerald-700 dark:text-emerald-400 font-mono">99.8% Deterministic</strong>
              </div>
            </SpatialCard>
          </div>

          {/* Card 3: 21 CFR Part 11 Audit Trail (Span 1) */}
          <div>
            <SpatialCard depth={8} className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">21 CFR Part 11 Audit Trail</h3>
                <p className="mt-1 text-xs text-muted">
                  Cryptographically anchored records, digital signatures, and tamper-proof determination logs.
                </p>

                <div className="mt-6 rounded-2xl border border-ink/10 bg-surface/70 p-4 font-mono text-[11px] dark:border-white/10 dark:bg-zinc-900/60">
                  <div className="space-y-2 text-muted">
                    <div className="flex justify-between border-b border-ink/5 pb-1.5 dark:border-white/5">
                      <span>LOG_ENTRY</span>
                      <span className="text-emerald-600 dark:text-emerald-400">#820-A491</span>
                    </div>
                    <div className="flex justify-between border-b border-ink/5 pb-1.5 dark:border-white/5">
                      <span>SIGNER</span>
                      <span className="text-ink">VP Reg Affairs</span>
                    </div>
                    <div className="flex justify-between border-b border-ink/5 pb-1.5 dark:border-white/5">
                      <span>HASH_VERIFY</span>
                      <span className="text-emerald-600 dark:text-emerald-400">OK [SHA-256]</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TIMESTAMP</span>
                      <span className="text-ink">UTC ISO 8601</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                Guaranteed audit safety for Notified Body Stage 2
              </p>
            </SpatialCard>
          </div>

          {/* Card 4: Multi-Format Technical File Review (Span 2) */}
          <div className="md:col-span-2">
            <SpatialCard depth={8} className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-teal-400/20 dark:text-teal-300">
                      <FileSpreadsheet className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">Document Review & Ingestion Engine</h3>
                      <p className="text-xs text-muted">
                        Reads PDFs, DOCX technical files, and XLSX matrices — mapping content directly under applicable GSPRs.
                      </p>
                    </div>
                  </div>

                  {/* Format selector */}
                  <div className="flex rounded-lg bg-ink/5 p-1 dark:bg-white/5">
                    {(["pdf", "docx", "xlsx"] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setActiveFileTab(fmt)}
                        className={`rounded px-2.5 py-0.5 text-xs font-mono font-bold uppercase transition-all ${
                          activeFileTab === fmt
                            ? "bg-surface text-ink shadow-sm dark:bg-zinc-800 dark:text-emerald-300"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        .{fmt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ingestion visual block */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-ink/10 bg-surface/80 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Clinical Evaluation
                    </div>
                    <p className="mt-1 text-[11px] text-muted">Annex XIV compliant CER extraction</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-300 font-mono">
                      <span>Parsed 142 pgs</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-surface/80 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Risk Management File
                    </div>
                    <p className="mt-1 text-[11px] text-muted">ISO 14971 clause cross-mapping</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-300 font-mono">
                      <span>88 Hazards</span>
                      <span>Verified</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-surface/80 p-4 dark:border-white/10 dark:bg-zinc-900/60">
                    <div className="flex items-center gap-2 text-xs font-bold text-ink">
                      <FileText className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Software Architecture
                    </div>
                    <p className="mt-1 text-[11px] text-muted">IEC 62304 Class B/C tracing</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-300 font-mono">
                      <span>19 Software Units</span>
                      <span>Mapped</span>
                    </div>
                  </div>
                </div>
              </div>
            </SpatialCard>
          </div>

          {/* Card 5: Audience-Tailored Transparent Reporting (Span 3) */}
          <div className="md:col-span-3">
            <SpatialCard depth={6} className="p-6 md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    Multi-Stakeholder Transparency
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-ink">Audience-Adaptive Reporting</h3>
                  <p className="text-xs sm:text-sm text-muted">
                    One technical file, three perspectives. Tailors evidence granularity to who is reading.
                  </p>
                </div>

                {/* Persona Switcher Tabs with Claymorphism */}
                <div className="flex items-center gap-1.5 rounded-xl bg-ink/5 p-1.5 dark:bg-white/5">
                  <button
                    type="button"
                    onClick={() => setSelectedAudience("ra")}
                    className={`clay-button rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                      selectedAudience === "ra"
                        ? "bg-surface text-ink shadow-sm dark:bg-zinc-800 dark:text-emerald-300"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    RA Professional
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAudience("rnd")}
                    className={`clay-button rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                      selectedAudience === "rnd"
                        ? "bg-surface text-ink shadow-sm dark:bg-zinc-800 dark:text-emerald-300"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    R&D Engineer
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAudience("exec")}
                    className={`clay-button rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                      selectedAudience === "exec"
                        ? "bg-surface text-ink shadow-sm dark:bg-zinc-800 dark:text-emerald-300"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    C-Suite / Board
                  </button>
                </div>
              </div>

              {/* Dynamic Card Display */}
              <div className="mt-6 rounded-2xl border border-ink/10 bg-surface/80 p-5 dark:border-white/10 dark:bg-zinc-900/60">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300">
                      Mode: {audienceContent[selectedAudience].level}
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-ink">
                      {audienceContent[selectedAudience].title}
                    </h4>
                    <p className="mt-1 text-sm text-muted">
                      {audienceContent[selectedAudience].desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                    {audienceContent[selectedAudience].tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-300"
                      >
                        <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpatialCard>
          </div>
        </div>
      </div>
    </section>
  );
}
