"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileCode, 
  Cpu, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  FileCheck,
  Activity,
  Layers,
  ArrowRight
} from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  sub: string;
  icon: any;
  status: string;
  details: string;
  metric: string;
  x: number;
  y: number;
}

const NODES: NodeData[] = [
  {
    id: "doc",
    label: "Technical File Ingestion",
    sub: "PDF / DOCX / XLSX",
    icon: FileCode,
    status: "Parsed",
    details: "142 pages of technical documentation, clinical evaluations, and risk files ingested and indexed.",
    metric: "100% Parsed",
    x: 10,
    y: 50,
  },
  {
    id: "annex",
    label: "Annex VIII Rules Engine",
    sub: "MDR Rules 1–22",
    icon: Cpu,
    status: "Deterministic",
    details: "Evaluated across 22 classification rules. Rule 8 (Implantable) and Rule 9 (Active) confirmed.",
    metric: "Rule 8 & 9 Match",
    x: 35,
    y: 25,
  },
  {
    id: "gspr",
    label: "GSPR Clause Mapping",
    sub: "Annex I Validation",
    icon: Layers,
    status: "23/23 Mapped",
    details: "All 23 applicable General Safety and Performance Requirements anchored to evidence.",
    metric: "Zero Gap Major",
    x: 62,
    y: 25,
  },
  {
    id: "risk",
    label: "ISO 14971 Risk Ledger",
    sub: "Risk vs Benefit",
    icon: Activity,
    status: "Traceable",
    details: "Complete hazard matrix cross-walked to risk controls and residual risk acceptability.",
    metric: "88 Hazards Verified",
    x: 35,
    y: 75,
  },
  {
    id: "audit",
    label: "21 CFR 11 NB Dossier",
    sub: "Notified Body Ready",
    icon: ShieldCheck,
    status: "Certified",
    details: "Cryptographically signed submission package with SHA-256 evidence hashes and full audit trail.",
    metric: "Audit-Ready Pass",
    x: 90,
    y: 50,
  },
];

export function NeuralGraphHero() {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[1]);

  return (
    <div className="relative w-full rounded-3xl border border-ink/10 bg-surface/80 p-5 sm:p-7 md:p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/80 shadow-2xl">
      {/* Top Console Status Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-ink/10 pb-4 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-xs font-bold text-muted ml-2">
            NEURAL REGULATORY TOPOLOGY // LIVE TRACE MATRIX
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
            SYSTEM DETERMINISTIC // ZERO HALLUCINATION
          </span>
        </div>
      </div>

      {/* SVG Interactive Node Graph */}
      <div className="relative mt-6 h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-ink/[0.02] dark:bg-white/[0.02] border border-ink/5 dark:border-white/5">
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          {/* Doc -> Annex */}
          <path d="M 10 50 Q 22 25, 35 25" fill="none" stroke="url(#curve-gradient)" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          {/* Doc -> Risk */}
          <path d="M 10 50 Q 22 75, 35 75" fill="none" stroke="url(#curve-gradient)" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          {/* Annex -> GSPR */}
          <path d="M 35 25 L 62 25" fill="none" stroke="url(#curve-gradient)" strokeWidth="1" />
          {/* Risk -> Audit */}
          <path d="M 35 75 Q 65 75, 90 50" fill="none" stroke="url(#curve-gradient)" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          {/* GSPR -> Audit */}
          <path d="M 62 25 Q 78 25, 90 50" fill="none" stroke="url(#curve-gradient)" strokeWidth="1" />
        </svg>

        {/* Nodes Positioning */}
        {NODES.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center focus:outline-none transition-transform duration-200 ${
                isSelected ? "scale-110 z-20" : "scale-95 hover:scale-105 z-10"
              }`}
            >
              <div
                className={`flex size-11 sm:size-12 items-center justify-center rounded-2xl border transition-all shadow-lg ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30 dark:bg-emerald-400 dark:text-zinc-950"
                    : "bg-surface/90 text-muted border-ink/15 hover:border-emerald-500/40 dark:bg-zinc-900/90 dark:border-white/15 dark:hover:border-emerald-400/40"
                }`}
              >
                <Icon className="size-5" />
              </div>
              <span className="mt-1.5 hidden sm:block font-mono text-[10px] font-bold text-ink whitespace-nowrap bg-surface/90 dark:bg-zinc-900/90 px-2 py-0.5 rounded-full border border-ink/5 dark:border-white/5">
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Readout */}
      <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4.5 dark:border-emerald-400/20 dark:bg-emerald-400/[0.03]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold">
              <CheckCircle2 className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm sm:text-base font-bold text-ink">{activeNode.label}</h4>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                  {activeNode.status}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted max-w-xl">{activeNode.details}</p>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="font-mono text-xs uppercase text-muted block">Output Metric</span>
            <span className="font-mono text-sm sm:text-base font-black text-emerald-700 dark:text-emerald-400">
              {activeNode.metric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
