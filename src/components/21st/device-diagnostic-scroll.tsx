"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  FileCheck2, 
  Download, 
  RefreshCw, 
  Layers, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  Check,
  FileText
} from "lucide-react";

interface Archetype {
  id: string;
  num: string;
  title: string;
  category: string;
  rule: string;
  determinedClass: string;
  auditScore: string;
  standardsCount: number;
  gsprCount: number;
  evidenceAnchors: number;
  leadClause: string;
  decisionSteps: string[];
  rationale: string;
  citation: string;
  token: string;
}

const ARCHETYPES: Archetype[] = [
  {
    id: "neuro",
    num: "01",
    title: "Deep Brain Neurostimulator",
    category: "Implantable Active Neurological Device",
    rule: "MDR Annex VIII Rule 8 (Implantable) & Rule 9 (Active)",
    determinedClass: "Class III",
    auditScore: "98.4%",
    standardsCount: 7,
    gsprCount: 23,
    evidenceAnchors: 42,
    leadClause: "GSPR 14.2 (Implantable Battery Safety) & GSPR 18 (Radiation)",
    decisionSteps: [
      "Invasive Status: Surgically invasive into central nervous system (CNS) -> PASS",
      "Duration: Intended continuous implant duration > 30 days -> PASS",
      "Active Functionality: Supplies electrical current to neural pathways -> Rule 9 Applied",
      "Final MDR Classification: Class III (Highest Medical Device Risk Class)",
    ],
    rationale: "Dual-circuit battery isolation mitigates thermal runaway risks in subcutaneous cranial pockets.",
    citation: "DHF-042 § 3.2.1 - Central Nervous System biocompatibility and electrical isolation test reports.",
    token: "RAC-MDR-CLASS3-NEURO-042",
  },
  {
    id: "ortho-robot",
    num: "02",
    title: "Autonomous Orthopedic Robotic Drill",
    category: "Surgical Robotic System with Autonomous AI Guidance",
    rule: "MDR Annex VIII Rule 9 (Surgically Invasive Active) & Rule 11 (SaMD)",
    determinedClass: "Class III / IIb",
    auditScore: "96.1%",
    standardsCount: 9,
    gsprCount: 23,
    evidenceAnchors: 58,
    leadClause: "GSPR 17.2 (Programmable Software Risk) & IEC 62304 Class C",
    decisionSteps: [
      "Surgical Invasiveness: Directly cuts bone and adjacent joint tissue -> PASS",
      "Autonomous AI Control: Computer vision guides millimeter tool depth -> Rule 11 Tier 2",
      "Hazard Mitigation: Force feedback cutoff stops spindle under 2.5ms -> ISO 14971 ALARP",
      "Final MDR Classification: Class III (Critical Surgical Energy Transfer)",
    ],
    rationale: "Software failure could cause irreversible patient skeletal trauma; classified under IEC 62304 Class C.",
    citation: "SW-VERIF § 8.4.2 - Deterministic kinematic boundary envelope verification under single-fault conditions.",
    token: "RAC-MDR-ROBOT-ORTHO-098",
  },
  {
    id: "ecg-ai",
    num: "03",
    title: "AI-Powered Cardiac Patch (SaMD)",
    category: "Software as a Medical Device (Diagnostic Arrhythmia)",
    rule: "MDR Annex VIII Rule 11 (Diagnostic Software Decision Tier)",
    determinedClass: "Class IIb",
    auditScore: "100%",
    standardsCount: 6,
    gsprCount: 21,
    evidenceAnchors: 35,
    leadClause: "GSPR 17.1 (Algorithm Validation & Reproducibility)",
    decisionSteps: [
      "Device Type: Standalone ML inference algorithm processing continuous telemetry -> SaMD",
      "Clinical Intent: Detects life-threatening ventricular arrhythmias -> Rule 11(a) Critical Diagnosis",
      "Actionability: Alerts physician to initiate emergency intervention -> Class IIb Up-classification",
      "Final MDR Classification: Class IIb (Medical Software Diagnostic Guidance)",
    ],
    rationale: "Deterministic regression validation proves 0.00% output variation across identical patient ECG waveforms.",
    citation: "CLIN-VAL § 12.1 - Multi-center clinical evaluation report (CER) comparing AI accuracy against 5 expert cardiologists.",
    token: "RAC-MDR-SAMD-CARDIO-114",
  },
  {
    id: "ivd-oncology",
    num: "04",
    title: "Liquid Biopsy Oncology Assay",
    category: "Next-Gen Sequencing IVD Diagnostic for Circulating DNA",
    rule: "IVDR Annex VIII Rule 1 & Rule 3 (Cancer Screening & Staging)",
    determinedClass: "Class D",
    auditScore: "99.0%",
    standardsCount: 8,
    gsprCount: 20,
    evidenceAnchors: 64,
    leadClause: "GSPR 9.1 (Analytical Specificity) & ISO 20916",
    decisionSteps: [
      "In Vitro Diagnostic Intent: Detection of circulating tumor DNA (ctDNA) in human plasma -> IVDR",
      "Clinical Impact: Used for primary cancer diagnosis and treatment selection -> Rule 1 Screening",
      "Risk Severity: Incorrect result leads to inappropriate life-threatening oncology therapy -> Class D",
      "Final IVDR Classification: Class D (Highest IVD Risk Level)",
    ],
    rationale: "Analytical sensitivity benchmarked against European Reference Laboratory standards with zero false negatives.",
    citation: "IVD-PERF § 6.3 - Analytical specificity, LOD95 limit of detection, and cross-reactivity validation logs.",
    token: "RAC-IVDR-CLASSD-ONCO-220",
  },
];

export function DeviceDiagnosticScroll() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"matrix" | "logic" | "proof">("matrix");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const activeDevice = ARCHETYPES[activeIdx];

  const handleRunAudit = () => {
    setIsAuditing(true);
    setAuditComplete(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 900);
  };

  return (
    <section id="sandbox" className="py-24 sm:py-32 relative overflow-hidden bg-ink/[0.015] dark:bg-white/[0.01]">
      {/* Subtle Ambient Radial Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-400/8"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-bold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DETERMINISTIC DEVICE DIAGNOSTIC</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl text-ink">
            One Engine. Every Device Classification.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted">
            Select a medical device profile to inspect the automated Annex VIII rule path, clause cross-walk, and submission-grade audit evidence.
          </p>
        </div>

        {/* 2-Column Clean Split Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean Interactive Archetype List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-bold block mb-1 px-1">
              SELECT DEVICE ARCHETYPE
            </span>

            {ARCHETYPES.map((arch, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={arch.id}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setAuditComplete(false);
                  }}
                  className={`w-full text-left rounded-2xl p-4 sm:p-5 transition-all border relative group ${
                    isSelected
                      ? "border-emerald-500/50 bg-white shadow-lg dark:border-emerald-400/40 dark:bg-zinc-900/90"
                      : "border-slate-200/80 bg-white/70 hover:bg-white hover:border-slate-300 dark:border-white/10 dark:bg-zinc-950/60 dark:hover:bg-zinc-900/60 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-emerald-700 dark:text-emerald-400" : "text-slate-400 dark:text-zinc-500"}`}>
                        {arch.num}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {arch.title}
                      </span>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                          : "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-zinc-400"
                      }`}
                    >
                      {arch.determinedClass}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 dark:text-zinc-400 line-clamp-1">
                    {arch.category}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400 border-t border-slate-100 pt-2 dark:border-white/5">
                    <span>{arch.rule.split("(")[0]}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <span>{arch.auditScore} Readiness</span>
                      <ChevronRight className={`size-3 transition-transform ${isSelected ? "translate-x-0.5" : ""}`} />
                    </span>
                  </div>

                  {/* Left luminous accent line */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-emerald-500 dark:bg-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Flat, Modern Regulatory Dossier Canvas (7 cols) - ZERO 3D TILT */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/90">
            
            {/* Dossier Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-bold">
                    {activeDevice.category}
                  </span>
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                    {activeDevice.token}
                  </span>
                </div>
                <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">{activeDevice.title}</h3>
              </div>

              {/* Clean Action Button */}
              <button
                type="button"
                onClick={handleRunAudit}
                disabled={isAuditing}
                className="clay-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 px-5 py-2 text-xs font-bold text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 dark:from-emerald-400 dark:to-teal-300 dark:text-zinc-950"
              >
                <RefreshCw className={`size-3.5 ${isAuditing ? "animate-spin" : ""}`} />
                <span>{isAuditing ? "Evaluating..." : auditComplete ? "Audit Verified 100%" : "Re-Run Audit"}</span>
              </button>
            </div>

            {/* 4 Clean Metric Cards (Flat, High-Density) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-zinc-900/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-zinc-400 block">Risk Class</span>
                <span className="mt-1 text-xl font-black text-emerald-700 dark:text-emerald-400 block">
                  {activeDevice.determinedClass}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">Annex VIII</span>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-zinc-900/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-zinc-400 block">First-Pass Yield</span>
                <span className="mt-1 text-xl font-black text-slate-900 dark:text-white block">
                  {activeDevice.auditScore}
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">0 Major Gaps</span>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-zinc-900/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-zinc-400 block">Standards</span>
                <span className="mt-1 text-xl font-black text-slate-900 dark:text-white block">
                  {activeDevice.standardsCount} <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">Codes</span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">ISO / IEC</span>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/10 dark:bg-zinc-900/60">
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-zinc-400 block">Evidence</span>
                <span className="mt-1 text-xl font-black text-slate-900 dark:text-white block">
                  {activeDevice.evidenceAnchors} <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">Files</span>
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">100% Traceable</span>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="mt-6 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
              <div className="flex gap-2">
                {[
                  { id: "matrix", label: "Clause Cross-Walk" },
                  { id: "logic", label: "Rule Decision Tree" },
                  { id: "proof", label: "Evidence & Citation" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      activeTab === tab.id
                        ? "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300"
                        : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold hidden sm:inline">
                NOTIFIED BODY READY
              </span>
            </div>

            {/* Dynamic Content Panel with Smooth Fade */}
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {activeTab === "matrix" && (
                  <motion.div
                    key={`matrix-${activeDevice.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80 dark:bg-zinc-900/60 dark:border-white/5 text-xs sm:text-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 border-b border-slate-200/70 dark:border-white/5 gap-1">
                      <span className="font-semibold text-slate-900 dark:text-white">Applicable Classification Rules:</span>
                      <span className="font-mono text-emerald-700 dark:text-emerald-300 text-xs">{activeDevice.rule}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 border-b border-slate-200/70 dark:border-white/5 gap-1">
                      <span className="font-semibold text-slate-900 dark:text-white">Lead Technical Clause:</span>
                      <span className="font-mono text-slate-600 dark:text-zinc-400 text-xs">{activeDevice.leadClause}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 gap-1">
                      <span className="font-semibold text-slate-900 dark:text-white">Risk-Benefit Justification:</span>
                      <span className="text-xs text-slate-600 dark:text-zinc-400 max-w-sm sm:text-right">{activeDevice.rationale}</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "logic" && (
                  <motion.div
                    key={`logic-${activeDevice.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80 dark:bg-zinc-900/60 dark:border-white/5 font-mono text-xs"
                  >
                    <span className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase font-bold block mb-2">
                      ANNEX VIII DETERMINISTIC PROOF STEPS:
                    </span>
                    {activeDevice.decisionSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 py-1 text-slate-800 dark:text-zinc-300">
                        <span className="size-4 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "proof" && (
                  <motion.div
                    key={`proof-${activeDevice.id}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80 dark:bg-zinc-900/60 dark:border-white/5 text-xs"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-slate-500 dark:text-zinc-400 uppercase font-bold block mb-1">
                        PRIMARY DHF EVIDENCE CITATION:
                      </span>
                      <p className="font-mono text-emerald-900 dark:text-emerald-300 bg-slate-100 p-3 rounded-xl border border-slate-200/80 leading-relaxed dark:bg-black/40 dark:border-white/5">
                        "{activeDevice.citation}"
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200/70 dark:border-white/5 text-[11px] text-slate-500 dark:text-zinc-400">
                      <span>Cryptographic Record: #{activeDevice.token}</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        21 CFR Part 11 Validated
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Proof Assurance Strip */}
            <div className="mt-5 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 p-3.5 flex items-center justify-between text-xs dark:bg-emerald-400/[0.03] dark:border-emerald-400/20">
              <span className="flex items-center gap-2 text-slate-900 dark:text-zinc-200 font-semibold">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                Deterministic Output: Identical inputs produce identical classification rationale.
              </span>
              <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 hidden sm:inline">
                ZERO DRIFT
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
