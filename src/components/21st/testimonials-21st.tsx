"use client";

import { quotes } from "@/lib/content";
import { Quote, Star, Building2, ArrowRight } from "lucide-react";
import { InteractButton } from "@/components/interact";

export function Testimonials21st() {
  return (
    <section id="trust" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Peer Validation // Customer Voice
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Trusted by Leaders in High-Risk MedTech
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {quotes.map((q, idx) => (
            <div
              key={q.role}
              className="glass-card-21 relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <Quote className="size-6 opacity-30" />
                </div>

                <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-ink">
                  “{q.quote}”
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-ink/10 dark:border-white/10 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/15 font-bold text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-300">
                  {q.role.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">{q.role}</h4>
                  <p className="text-xs text-muted flex items-center gap-1">
                    <Building2 className="size-3" />
                    {q.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study Hero Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-emerald-900 via-teal-950 to-zinc-950 p-8 text-white shadow-2xl sm:p-10 lg:p-12 dark:border-white/15">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                CASE STUDY // STAGE 2 AUDIT SUCCESS
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Class IIb Cardiac Device Manufacturer Achieves 60% Faster NB Submission
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                A cardiac sensor startup cut their technical file assembly from 9 months to under 4 months. The automated GSPR assessment resolved two major clinical evidence gaps before their Notified Body review.
              </p>
            </div>

            <div className="flex sm:shrink-0">
              <InteractButton
                mode="note"
                label="Read Case Study"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-bold text-zinc-950 shadow-lg transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="size-4" />
              </InteractButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
