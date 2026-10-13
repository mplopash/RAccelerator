"use client";

import { metrics, audiences } from "@/lib/content";
import { TrendingUp, Layers, CheckCircle, ShieldCheck } from "lucide-react";

export function Metrics21st() {
  const statIcons = [Layers, CheckCircle, TrendingUp, ShieldCheck];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Telemetry & Quantified Performance
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Proven at Scale Across Critical Device Portfolios
          </h2>
        </div>

        {/* 4 Stat Cards in Bento Style */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={metric.label}
                className="glass-card-21 group relative rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-muted">0{idx + 1}</span>
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                    <Icon className="size-4" />
                  </div>
                </div>

                <div className="mt-6">
                  <dd className="text-4xl sm:text-5xl font-black tracking-tight text-ink bg-gradient-to-br from-ink to-emerald-800 bg-clip-text dark:from-white dark:to-emerald-300">
                    {metric.value}
                  </dd>
                  <dt className="mt-2 text-xs sm:text-sm font-semibold text-muted">
                    {metric.label}
                  </dt>
                </div>

                {/* Subtle gradient line on bottom */}
                <div className="mt-6 h-1 w-12 rounded-full bg-emerald-500/30 transition-all duration-300 group-hover:w-full group-hover:bg-emerald-500" />
              </div>
            );
          })}
        </div>

        {/* Audiences Pills Strip */}
        <div className="mt-14 rounded-2xl border border-ink/10 bg-surface/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/50">
          <p className="text-center font-mono text-xs font-semibold uppercase tracking-wider text-muted">
            Specialized Device Class Archetypes
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {audiences.map((aud) => (
              <span
                key={aud}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-surface px-4 py-1.5 text-xs font-semibold text-ink shadow-sm transition-all hover:border-emerald-500/40 hover:scale-105 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200"
              >
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {aud}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
