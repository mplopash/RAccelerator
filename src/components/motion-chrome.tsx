"use client";

import Lenis from "lenis";
import { useEffect } from "react";
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
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.documentElement;
    let disposed = false;
    let unbind = () => {};
    let lenis: Lenis | null = null;

    let frame = 0;
    const arm = () => {
      frame = requestAnimationFrame(() => {
        if (disposed) return;

        // Butter-smooth Lenis Configuration
        lenis = new Lenis({
          autoRaf: true,
          lerp: reduce ? 1 : 0.08,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.15,
          smoothWheel: true,
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          anchors: { offset: -80 },
          stopInertiaOnNavigate: true,
          respectReducedMotion: true,
        });

        setLenis(lenis);

        unbind = lenis.on("scroll", () => {
          // Lenis active scroll hook
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
      unbind();
      lenis?.destroy();
      setLenis(null);
      root.classList.remove("has-cursor");
      root.classList.remove("is-motion");
    };
  }, []);

  return null;
}
