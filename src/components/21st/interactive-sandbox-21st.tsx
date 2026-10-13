"use client";

import { useState } from "react";
import { 
  Cpu, 
  Activity, 
  FileCheck2, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Download, 
  RefreshCw, 
  FileCode,
  Scan,
  Compass
} from "lucide-react";
import { SpatialCard } from "@/components/21st/spatial-card";

const DEVICE_ARCHETYPES = [
  {
    id: "neuro",
    title: "Deep Brain Neurostimulator",
    category: "Implantable Active Neurological Device",
    rule: "MDR Annex VIII Rule 8 (Implantable) & Rule 9 (Active)",
    determinedClass: "Class III",
    auditScore: "98.4%",
    standardsCount: 7,
    gsprCount: 23,
    evidenceAnchors: 42,
    leadClause: "GSPR 14.2 (Implantable Battery Safety) & GSPR 18 (Radiation)",
  },
  {
    id: "ortho-robot",
    title: "Autonomous Orthopedic Robotic Drill",
    category: "Surgical Robotic System with AI Control",
    rule: "MDR Annex VIII Rule 9 (Surgically Invasive Active) & Rule 11",
    determinedClass: "Class III / IIb",
    auditScore: "96.1%",
    standardsCount: 9,
    gsprCount: 23,
    evidenceAnchors: 58,
    leadClause: "GSPR 17.2 (Programmable Software Risk) & IEC 62304 Class C",
  },
  {
    id: "ecg-ai",
    title: "AI-Powered Cardiac Patch (SaMD)",
    category: "Software as a Medical Device (Vital Diagnostic)",
    rule: "MDR Annex VIII Rule 11 (Diagnostic Software Decision)",
    determinedClass: "Class IIb",
    auditScore: "100%",
    standardsCount: 6,
    gsprCount: 21,
    evidenceAnchors: 35,
    leadClause: "GSPR 17.1 (Algorithm Validation & Reproducibility)",
  },
  {
    id: "ivd-oncology",
    title: "Liquid Biopsy Oncology Assay",
    category: "Next-Gen Sequencing IVD Diagnostic",
    rule: "IVDR Annex VIII Rule 1 & Rule 3 (Cancer Screening)",
    determinedClass: "Class D (Highest IVDR Risk)",
    auditScore: "99.0%",
    standardsCount: 8,
    gsprCount: 20,
    evidenceAnchors: 64,
    leadClause: "GSPR 9.1 (Analytical Specificity) & ISO 20916",
  },
];

export function InteractiveSandbox21st() {
  const [selectedId, setSelectedId] = useState("neuro");
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<"matrix" | "tree" | "cert">("matrix");
  const [scanComplete, setScanComplete] = useState(true);

  const currentDevice = DEVICE_ARCHETYPES.find((d) => d.id === selectedId)!;

  const handleRunAudit = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1200);
  };

  return (
    <section id="sandbox" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient Spatial Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-400/10"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
            <Scan className="size-3.5 animate-spin" />
            <span>Spatial Regulatory Sandbox</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-ink">
            Interactive MedTech Device Diagnostic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Select a high-risk medical device architecture below and execute a real-time spatial gap determination audit.
          </p>
        </div>

        {/* Device Archetype Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {DEVICE_ARCHETYPES.map((dev) => (
            <button
              key={dev.id}
              type="button"
              onClick={() => setSelectedId(dev.id)}
              className={`clay-button rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
                selectedId === dev.id
                  ? "bg-emerald-700 text-white dark:bg-emerald-400 dark:text-zinc-950 scale-105"
                  : "bg-surface/80 text-ink dark:bg-zinc-900/80 dark:text-zinc-300 hover:border-emerald-500/40"
              }`}
            >
              {dev.title}
            </button>
          ))}
        </div>

        {/* Spatial Card Sandbox Stage */}
        <div className="mt-10 mx-auto max-w-5xl">
          <SpatialCard depth={8} className="p-6 sm:p-10">
            {/* Animated Laser Scanning Beam */}
            {isScanning && (
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-scan-laser z-30"
              />
            )}

            {/* Sandbox Header */}
            <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  {currentDevice.category}
                </span>
                <h3 className="mt-1 text-2xl font-black text-ink">{currentDevice.title}</h3>
              </div>

              {/* Action Button with Claymorphic Tactile Spring */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleRunAudit}
                  disabled={isScanning}
                  className="clay-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white dark:from-emerald-400 dark:to-teal-300 dark:text-zinc-950"
                >
                  <RefreshCw className={`size-4 ${isScanning ? "animate-spin" : ""}`} />
                  <span>{isScanning ? "Scanning Standards..." : "Re-Run Spatial Audit"}</span>
                </button>
              </div>
            </div>

            {/* Diagnostic Matrix Telemetry Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-ink/10 bg-surface/70 p-4 dark:border-white/10 dark:bg-zinc-900/70">
                <span className="text-[11px] font-mono uppercase text-muted">Risk Classification</span>
                <p className="mt-1.5 text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-400">
                  {currentDevice.determinedClass}
                </p>
                <span className="text-[11px] text-muted block mt-1">MDR Annex VIII</span>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-surface/70 p-4 dark:border-white/10 dark:bg-zinc-900/70">
                <span className="text-[11px] font-mono uppercase text-muted">Audit Readiness</span>
                <p className="mt-1.5 text-xl sm:text-2xl font-black text-ink">
                  {currentDevice.auditScore}
                </p>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-1">Zero Major Gaps</span>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-surface/70 p-4 dark:border-white/10 dark:bg-zinc-900/70">
                <span className="text-[11px] font-mono uppercase text-muted">Applicable Standards</span>
                <p className="mt-1.5 text-xl sm:text-2xl font-black text-ink">
                  {currentDevice.standardsCount} <span className="text-xs font-normal text-muted">Frameworks</span>
                </p>
                <span className="text-[11px] text-muted block mt-1">ISO / IEC / MDR</span>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-surface/70 p-4 dark:border-white/10 dark:bg-zinc-900/70">
                <span className="text-[11px] font-mono uppercase text-muted">Evidence Anchors</span>
                <p className="mt-1.5 text-xl sm:text-2xl font-black text-ink">
                  {currentDevice.evidenceAnchors} <span className="text-xs font-normal text-muted">Anchors</span>
                </p>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block mt-1">Traceable 100%</span>
              </div>
            </div>

            {/* Interactive View Tabs */}
            <div className="mt-8 flex items-center justify-between border-b border-ink/10 pb-3 dark:border-white/10">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("matrix")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "matrix"
                      ? "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Clause Cross-Walk
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("tree")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "tree"
                      ? "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Rule Decision Path
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cert")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    activeTab === "cert"
                      ? "bg-emerald-500/15 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  Verification Certificate
                </button>
              </div>

              <span className="hidden font-mono text-[11px] text-muted sm:inline-block">
                STATUS: AUDIT-READY
              </span>
            </div>

            {/* Tab Content Display */}
            <div className="mt-5 rounded-2xl bg-surface/60 p-5 border border-ink/5 dark:bg-zinc-900/60 dark:border-white/5">
              {activeTab === "matrix" && (
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-ink/5 dark:border-white/5">
                    <span className="font-semibold text-ink">Applicable Rules:</span>
                    <span className="font-mono text-emerald-700 dark:text-emerald-300">{currentDevice.rule}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-ink/5 dark:border-white/5">
                    <span className="font-semibold text-ink">Lead Technical Clause:</span>
                    <span className="font-mono text-muted">{currentDevice.leadClause}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-semibold text-ink">Notified Body Audit Risk:</span>
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3.5" /> Negligible (Deterministic Rationale Attached)
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "tree" && (
                <div className="space-y-3 font-mono text-xs text-muted">
                  <p className="text-ink font-bold">ANNEX VIII DECISION PATH:</p>
                  <div className="rounded-xl bg-ink/[0.03] p-3 dark:bg-white/[0.03] space-y-1.5">
                    <p className="text-emerald-700 dark:text-emerald-300">1. INVASIVE STATUS ➔ Surgically invasive into central circulatory / nervous system [YES]</p>
                    <p className="text-emerald-700 dark:text-emerald-300">2. DURATION ➔ Long-term (&gt;30 days implantable) [YES]</p>
                    <p className="text-emerald-700 dark:text-emerald-300">3. ACTIVE POWER ➔ Supplies energy via implantable source [YES]</p>
                    <p className="text-ink font-bold pt-1 border-t border-ink/5 dark:border-white/5">
                      FINAL DETERMINATION: {currentDevice.determinedClass} via Rule 8/9/11
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "cert" && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                  <div className="space-y-1 text-xs">
                    <p className="font-bold text-ink">Deterministic Technical File Token: #RAC-2026-MED-{currentDevice.id.toUpperCase()}</p>
                    <p className="text-muted">Issued under 21 CFR Part 11 Electronic Compliance Framework</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Simulation: Downloaded RAccelerator Audit Ledger")}
                    className="clay-button inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-300"
                  >
                    <Download className="size-3.5" />
                    <span>Download Audit Summary (PDF)</span>
                  </button>
                </div>
              )}
            </div>
          </SpatialCard>
        </div>
      </div>
    </section>
  );
}
