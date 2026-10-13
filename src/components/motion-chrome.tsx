"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { setLenis } from "@/lib/lenis-bridge";
import "lenis/dist/lenis.css";

let pageReady = false;
const pageWaiters: Array<() => void> = [];

export function MotionReady() {
  useEffect(() => {
    pageReady = true;
    const queued = pageWaiters.splice(0);
    for (const wake of queued) wake();
    return () => {
      pageReady = false;
    };
  }, []);
  return null;
}

export function MotionChrome() {
  const indexRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.documentElement;
    let disposed = false;
    let unbind = () => {};
    let lenis: Lenis | null = null;

    let frame = 0;
    let paintFrame = 0;
    const arm = () => {
      frame = requestAnimationFrame(() => {
        if (disposed) return;

        const hero = document.querySelector<HTMLElement>(".hero-field");
        const dial = document.querySelector<HTMLElement>(".dossier-dial");

        const paint = (scroll: number, limit: number) => {
          const progress = limit > 0 ? scroll / limit : 0;
          const value = String(Math.min(8, Math.round(progress * 7) + 1)).padStart(
            3,
            "0",
          );
          if (indexRef.current) indexRef.current.textContent = value;
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
          }
          if (reduce) return;
          if (hero) {
            const shift = Math.min(scroll, 520) * 0.16;
            hero.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
          }
          if (dial) {
            dial.style.transform = `translate(-50%, -50%) rotate(${(progress * 320).toFixed(2)}deg)`;
          }
        };

        lenis = new Lenis({
          autoRaf: true,
          lerp: reduce ? 1 : 0.075,
          wheelMultiplier: 0.85,
          touchMultiplier: 1,
          syncTouch: !reduce,
          syncTouchLerp: 0.08,
          anchors: { offset: -76 },
          stopInertiaOnNavigate: true,
          respectReducedMotion: true,
        });
        setLenis(lenis);
        const schedulePaint = (scroll: number, limit: number) => {
          cancelAnimationFrame(paintFrame);
          paintFrame = requestAnimationFrame(() => {
            if (!disposed) paint(scroll, limit);
          });
        };
        schedulePaint(lenis.scroll, lenis.limit);
        unbind = lenis.on("scroll", (instance) => {
          schedulePaint(instance.scroll, instance.limit);
        });
      });
    };

    if (pageReady) arm();
    else pageWaiters.push(arm);

    return () => {
      disposed = true;
      const waiting = pageWaiters.indexOf(arm);
      if (waiting >= 0) pageWaiters.splice(waiting, 1);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(paintFrame);
      unbind();
      lenis?.destroy();
      setLenis(null);
      root.classList.remove("has-cursor");
      root.classList.remove("is-motion");
      document
        .querySelector<HTMLElement>(".hero-field")
        ?.style.removeProperty("transform");
      document
        .querySelector<HTMLElement>(".dossier-dial")
        ?.style.removeProperty("transform");
    };
  }, []);

  return (
    <>
      <div ref={barRef} className="scroll-progress" aria-hidden="true" />
      <p className="pointer-events-none fixed right-5 bottom-5 z-40 text-xs font-black tracking-[0.22em] text-muted">
        <span ref={indexRef}>001</span>
        <span className="text-line"> / 008</span>
      </p>
    </>
  );
}
