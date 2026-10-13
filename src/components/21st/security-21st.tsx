"use client";

import { security } from "@/lib/content";
import { Shield, Lock, FileKey, Server, Users, KeyRound } from "lucide-react";

export function Security21st() {
  const securityIcons = [Shield, Server, FileKey, Lock, KeyRound, Users];

  return (
    <section id="security" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Institutional Trust & Security
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Enterprise-Grade Protection for Proprietary IP
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Regulatory documentation represents your most sensitive medical intellectual property. We enforce banking-grade controls across every data pipeline.
          </p>
        </div>

        {/* Security Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((sec, idx) => {
            const Icon = securityIcons[idx % securityIcons.length];
            return (
              <div
                key={sec.title}
                className="glass-card-21 group relative rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-400/15 dark:text-emerald-300">
                  <Icon className="size-5" />
                </div>
                <h4 className="mt-4 text-base font-bold text-ink">{sec.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">{sec.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
