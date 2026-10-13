"use client";

import { Shield, CheckCircle, FileCheck, Award, Lock, Database } from "lucide-react";

const STANDARDS_LIST = [
  {
    name: "EU MDR 2017/745",
    desc: "Annex I GSPR Compliance",
    icon: Shield,
    badge: "Medical Devices",
  },
  {
    name: "EU IVDR 2017/746",
    desc: "Annex I GSPR Mapping",
    icon: FileCheck,
    badge: "In Vitro Diagnostics",
  },
  {
    name: "ISO 14971:2019",
    desc: "Risk Management File",
    icon: Award,
    badge: "Risk Standard",
  },
  {
    name: "ISO 13485:2016",
    desc: "Quality Management System",
    icon: CheckCircle,
    badge: "QMS",
  },
  {
    name: "IEC 62304:2015",
    desc: "Medical Device Software Lifecycle",
    icon: Database,
    badge: "SaMD & SiMD",
  },
  {
    name: "21 CFR Part 11",
    desc: "Electronic Records & Signatures",
    icon: Lock,
    badge: "FDA Standard",
  },
  {
    name: "ISO/IEC 27001",
    desc: "Information Security Controls",
    icon: Shield,
    badge: "Data Protection",
  },
];

export function StandardsMarquee21st() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-ink/[0.02] py-8 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 pb-5 text-center md:px-8">
        <p className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-muted">
          Validated Against Global Regulatory & Quality Frameworks
        </p>
      </div>

      {/* Marquee Container with fade edge masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex gap-4 py-2">
          {/* First loop */}
          {STANDARDS_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`m1-${idx}`}
                className="group relative flex w-72 shrink-0 items-center gap-3.5 rounded-2xl border border-ink/10 bg-surface/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-emerald-400/30"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-400/15 dark:text-emerald-300">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-xs font-bold text-ink">{item.name}</p>
                    <span className="rounded bg-ink/5 px-1.5 py-0.5 text-[9px] font-mono font-medium text-muted dark:bg-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="truncate text-[11px] text-muted">{item.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Duplicate loop for infinite seamless scrolling */}
          {STANDARDS_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`m2-${idx}`}
                className="group relative flex w-72 shrink-0 items-center gap-3.5 rounded-2xl border border-ink/10 bg-surface/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-emerald-400/30"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-400/15 dark:text-emerald-300">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-xs font-bold text-ink">{item.name}</p>
                    <span className="rounded bg-ink/5 px-1.5 py-0.5 text-[9px] font-mono font-medium text-muted dark:bg-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="truncate text-[11px] text-muted">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
