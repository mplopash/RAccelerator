"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Cpu, 
  Layers, 
  Lock, 
  Search, 
  Terminal, 
  Play, 
  Sparkles, 
  ChevronRight, 
  Check, 
  AlertCircle,
  FileCheck2,
  Download,
  Share2,
  ExternalLink,
  Flame,
  Activity,
  Compass
} from "lucide-react";

interface ClauseItem {
  id: string;
  clause: string;
  title: string;
  evidenceCount: number;
  status: "Compliant" | "Verified" | "Audited";
  confidence: number;
  dhfSource: string;
  rulePath: string;
  rationale: string;
  auditNote: string;
  sha256: string;
}

const CLAUSES: ClauseItem[] = [
  {
    id: "gspr-1",
    clause: "GSPR 1",
    title: "General Safety & Performance",
    evidenceCount: 14,
    status: "Compliant",
    confidence: 99.8,
    dhfSource: "DHF-012 § 2.1 (p. 18) - Inherent device safety under single-fault conditions",
    rulePath: "MDR Annex I Chapter I (General Requirements) -> Risk-Benefit ratio positive",
    rationale: "Clinical benefit substantiated by multi-center RCT; all residual risks reduced to ALARP level.",
    auditNote: "Notified Body Stage 1 & 2 review ready. Zero major non-conformities.",
    sha256: "8f4e2c91a0b387df5e12...7c41",
  },
  {
    id: "gspr-4",
    clause: "GSPR 4",
    title: "Risk Reduction & Inherent Safety",
    evidenceCount: 22,
    status: "Verified",
    confidence: 100,
    dhfSource: "ISO-14971-Matrix § 4.3 (p. 64) - Triple redundant safety interlock",
    rulePath: "ISO 14971:2019 Table E.1 cross-walked against EU MDR Annex I § 4",
    rationale: "Inherent safety by design implemented prior to protective alarms and IFU labeling.",
    auditNote: "Full hazard traceability verified against design verification test logs.",
    sha256: "e3b0c44298fc1c149afb...9fb9",
  },
  {
    id: "gspr-14.2",
    clause: "GSPR 14.2",
    title: "Active Implantable Energy Safety",
    evidenceCount: 18,
    status: "Compliant",
    confidence: 99.4,
    dhfSource: "DHF-409 § 4.3.1 (p. 48) - Galvanic isolation & dual battery cutoff circuits",
    rulePath: "Annex VIII Rule 8 (Implantable >30d) ∧ Rule 9 (Active energy supply) => Class III",
    rationale: "Battery isolation prevents thermal runaway and tissue necrosis in implant pocket.",
    auditNote: "TÜV SÜD active medical device checklist benchmark fully satisfied.",
    sha256: "7f8a9e10c432ba9801ef...b201",
  },
  {
    id: "gspr-17.1",
    clause: "GSPR 17.1",
    title: "Programmable Systems & AI Logic",
    evidenceCount: 31,
    status: "Audited",
    confidence: 100,
    dhfSource: "SW-ARCH-IEC62304 § 5.2 (p. 112) - Deterministic state machine architecture",
    rulePath: "IEC 62304 Class C Software Life Cycle + MDCG 2019-11 Guidance",
    rationale: "Zero probabilistic hallucinations; deterministic regression testing yields 100% repeatability.",
    auditNote: "Deterministic verification certificate generated under 21 CFR Part 11.",
    sha256: "4a2f89c00119e782bcde...510a",
  },
  {
    id: "gspr-21",
    clause: "GSPR 21",
    title: "Device Labeling & Usability (IFU)",
    evidenceCount: 12,
    status: "Compliant",
    confidence: 98.9,
    dhfSource: "HF-SUM-62366 § 3.1 (p. 34) - Summative usability evaluation with 15 clinical users",
    rulePath: "IEC 62366-1:2015 Usability Engineering Process compliant",
    rationale: "Critical user tasks tested with zero use errors leading to unacceptable patient risk.",
    auditNote: "Labeling symbols conform to ISO 15223-1:2021. UDI-DI verified on EUDAMED sandbox.",
    sha256: "91e0bc87421fd408ae91...338c",
  },
];

export function RegulatoryStudioHero() {
  const [selectedClause, setSelectedClause] = useState<ClauseItem>(CLAUSES[2]); // Default GSPR 14.2
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFileTab, setActiveFileTab] = useState("dhf-409");

  const filteredClauses = CLAUSES.filter(
    (c) =>
      c.clause.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSimulateAudit = () => {
    setIsAuditing(true);
    setAuditProgress(0);
    const interval = setInterval(() => {
      setAuditProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAuditing(false);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-zinc-950/95 text-white shadow-2xl backdrop-blur-3xl font-sans selection:bg-emerald-500 selection:text-black">
      {/* Subtle Ambient Studio Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-1/4 h-80 w-96 rounded-full bg-emerald-500/10 blur-[100px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-96 rounded-full bg-teal-500/10 blur-[100px]"
      />

      {/* Top Application Frame Header */}
      <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between bg-zinc-900/60 backdrop-blur-md">
        {/* Window Controls & Breadcrumbs */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-red-500/80 shadow-sm" />
            <span className="size-3 rounded-full bg-amber-500/80 shadow-sm" />
            <span className="size-3 rounded-full bg-emerald-500/80 shadow-sm" />
          </div>
          <span className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-zinc-400">RAccelerator OS</span>
            <span className="text-zinc-600">/</span>
            <span className="rounded bg-white/5 px-2 py-0.5 font-semibold text-emerald-400 border border-white/10">
              CardioPatch-X7
            </span>
            <span className="hidden md:inline text-zinc-600">/</span>
            <span className="hidden md:inline text-zinc-400">EU MDR Annex II Technical File</span>
          </div>
        </div>

        {/* Telemetry Status & Actions */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DETERMINISTIC ENGINE // 0.00% DRIFT</span>
          </div>

          <button
            type="button"
            onClick={handleSimulateAudit}
            disabled={isAuditing}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-3.5 py-1 text-xs font-bold text-zinc-950 shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <Play className={`size-3 ${isAuditing ? "animate-spin" : ""}`} />
            <span>{isAuditing ? `Simulating ${auditProgress}%` : "Run Audit Stress-Test"}</span>
          </button>
        </div>
      </div>

      {/* Main 3-Column Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        
        {/* COLUMN 1: Workspace Navigator & Ingested Document Hub (3 cols) */}
        <div className="lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-zinc-950/40">
          <div>
            {/* Device Dossier Header */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                  ACTIVE DEVICE DOSSIER
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  Class III
                </span>
              </div>
              <h3 className="mt-1.5 text-sm font-bold text-white">CardioPatch-X7 Sensor</h3>
              <p className="mt-0.5 text-[11px] text-zinc-400 leading-tight">
                Active Implantable Subcutaneous Cardiac Monitoring Device
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-mono text-zinc-400">
                <span>MDR Rule 8 & 9</span>
                <span className="text-emerald-400 font-bold">TÜV SÜD Ready</span>
              </div>
            </div>

            {/* Ingested Documents List */}
            <div className="mt-5">
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  INGESTED TECHNICAL FILES
                </span>
                <span className="text-[10px] font-mono text-emerald-400">4 / 4 Verified</span>
              </div>

              <div className="mt-2 space-y-1.5">
                {[
                  {
                    id: "dhf-409",
                    name: "DHF-409-HazardMatrix.pdf",
                    pages: "142 pages",
                    status: "Parsed",
                    active: activeFileTab === "dhf-409",
                  },
                  {
                    id: "cer-v4",
                    name: "CER-ClinicalEvaluation-v4.docx",
                    pages: "98 pages",
                    status: "Parsed",
                    active: activeFileTab === "cer-v4",
                  },
                  {
                    id: "sw-iec",
                    name: "SW-Architecture-IEC62304.pdf",
                    pages: "112 pages",
                    status: "Class C",
                    active: activeFileTab === "sw-iec",
                  },
                  {
                    id: "iso-risk",
                    name: "ISO-14971-RiskBenefit.xlsx",
                    pages: "88 hazards",
                    status: "ALARP",
                    active: activeFileTab === "iso-risk",
                  },
                ].map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveFileTab(doc.id)}
                    className={`w-full text-left flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-all border ${
                      doc.active
                        ? "bg-emerald-500/10 border-emerald-500/40 text-white shadow-sm"
                        : "bg-white/[0.02] border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileText className={`size-3.5 shrink-0 ${doc.active ? "text-emerald-400" : "text-zinc-500"}`} />
                      <span className="truncate font-mono text-[11px]">{doc.name}</span>
                    </div>
                    <span className="text-[10px] font-mono shrink-0 ml-2 text-zinc-500">{doc.pages}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Standard Compliance Hierarchy */}
            <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-[11px] space-y-2">
              <span className="font-mono text-[10px] uppercase text-zinc-400 font-bold block">
                COMPLIANCE ANCHORS
              </span>
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">ISO 14971:2019 Risk</span>
                <span className="font-mono text-emerald-400 font-bold">100% Validated</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">ISO 13485:2016 QMS</span>
                <span className="font-mono text-emerald-400 font-bold">Synchronized</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">IEC 62304 Software</span>
                <span className="font-mono text-emerald-400 font-bold">Class C Zero-Drift</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3 text-emerald-400" />
              21 CFR Part 11
            </span>
            <span className="font-mono text-emerald-400">SHA-256 Valid</span>
          </div>
        </div>

        {/* COLUMN 2: Live GSPR Traceability Matrix (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            {/* Search and Clause Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Layers className="size-4 text-emerald-400" />
                  Annex I GSPR Traceability Matrix
                </h4>
                <p className="text-[11px] text-zinc-400">Select any clause to inspect evidence citation</p>
              </div>

              {/* Live Search Input */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter GSPRs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-36 rounded-lg border border-white/10 bg-white/5 py-1 pl-7 pr-2.5 text-xs text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Interactive Clause Rows */}
            <div className="mt-3 space-y-2">
              {filteredClauses.map((item) => {
                const isSelected = selectedClause.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedClause(item)}
                    className={`w-full text-left rounded-2xl p-3 transition-all border group relative ${
                      isSelected
                        ? "bg-emerald-500/[0.08] border-emerald-500/50 shadow-md shadow-emerald-500/5"
                        : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                            isSelected
                              ? "bg-emerald-400 text-zinc-950"
                              : "bg-white/10 text-zinc-300 group-hover:bg-white/20"
                          }`}
                        >
                          {item.clause}
                        </span>
                        <span className="text-xs font-bold text-white truncate max-w-[180px] sm:max-w-[220px]">
                          {item.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 flex items-center gap-1">
                          <Check className="size-2.5" />
                          {item.status}
                        </span>
                        <ChevronRight className={`size-3.5 transition-transform ${isSelected ? "text-emerald-400 translate-x-0.5" : "text-zinc-600"}`} />
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span className="truncate max-w-[240px] font-mono text-[10px]">
                        {item.dhfSource.split("-")[0]}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                        {item.confidence}% Match
                      </span>
                    </div>

                    {/* Active Indicator Strip */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Matrix Footnote / Telemetry Bar */}
          <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/5 p-3 flex items-center justify-between text-[11px] text-zinc-400">
            <span>Evaluated across 23 Annex I Clauses</span>
            <span className="font-mono font-bold text-emerald-400">0 Major Non-Conformities</span>
          </div>
        </div>

        {/* COLUMN 3: Live AI Auditor Terminal & Proof Inspector (4 cols) */}
        <div className="lg:col-span-4 p-4 sm:p-5 flex flex-col justify-between bg-zinc-950/60">
          <div>
            {/* Inspector Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="size-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Live Inspector & Proof</h4>
              </div>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/20">
                21 CFR 11 SIGNED
              </span>
            </div>

            {/* Active Clause Inspection Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClause.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-3 space-y-3.5"
              >
                {/* Clause Badge and Title */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-400/20 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300">
                      {selectedClause.clause}
                    </span>
                    <h5 className="text-sm font-bold text-white">{selectedClause.title}</h5>
                  </div>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    {selectedClause.rationale}
                  </p>
                </div>

                {/* Evidence Citation Snippet */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">
                    PRIMARY EVIDENCE CITATION
                  </span>
                  <p className="mt-1 font-mono text-[11px] text-emerald-300 leading-relaxed bg-black/40 p-2 rounded-lg border border-white/5">
                    "{selectedClause.dhfSource}"
                  </p>
                </div>

                {/* Rule Engine Derivation Path */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">
                    DETERMINISTIC RULE PATH
                  </span>
                  <p className="mt-1 font-mono text-[11px] text-zinc-200">
                    {selectedClause.rulePath}
                  </p>
                </div>

                {/* Audit Readiness Assessment */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-3 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <CheckCircle2 className="size-3.5" />
                    <span>Notified Body Verification Benchmark</span>
                  </div>
                  <p className="mt-1 text-[11px] text-zinc-300">
                    {selectedClause.auditNote}
                  </p>
                </div>

                {/* Cryptographic Proof Hash */}
                <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-mono text-zinc-400">
                  <span>SHA-256 HASH:</span>
                  <span className="text-emerald-400 font-bold">{selectedClause.sha256}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Real-time Streaming Simulation Feed */}
          <div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-2.5 font-mono text-[10px] text-zinc-400 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE RAC-AGENT TELEMETRY STREAM</span>
            </div>
            <p className="truncate text-zinc-300">[14:28:01] Ingested DHF-409 §4.3.1 - 142 claims mapped</p>
            <p className="truncate text-emerald-300">[14:28:02] Cross-walk verified: ISO 14971 Table E.1 matched</p>
            <p className="truncate text-zinc-400">[14:28:03] Cryptographic seal generated // 21 CFR 11 Pass</p>
          </div>
        </div>
      </div>
    </div>
  );
}
