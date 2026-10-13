"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Faq21st() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-semibold text-accent dark:border-emerald-400/20 dark:text-emerald-300">
            <HelpCircle className="size-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Everything You Need to Know About RAccelerator
          </h2>
          <p className="mt-4 text-base text-muted">
            Have questions about Notified Body acceptance, QMS integrations, or device classifications?
          </p>
        </div>

        {/* 21st.dev Accordion Cards */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`glass-card-21 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-emerald-500/40 shadow-lg" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-ink">
                    {faq.question}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 dark:bg-white/5 ${
                      isOpen ? "rotate-180 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "text-muted"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-ink/5 px-5 pb-6 pt-3 text-xs sm:text-sm leading-relaxed text-muted dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
