"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { setLenis } from "@/lib/lenis-bridge";
import "lenis/dist/lenis.css";

export function MotionChrome() {
  const indexRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const [cursorOn, setCursorOn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const root = document.documentElement;

    if (fine && !reduce) {
      setCursorOn(true);
      root.classList.add("has-cursor");
    }

    const hero = document.querySelector<HTMLElement>(".hero-field");

    const paint = (scroll: number, limit: number) => {
      const progress = limit > 0 ? scroll / limit : 0;
      const value = String(Math.min(8, Math.round(progress * 7) + 1)).padStart(
        3,
        "0",
      );
      if (indexRef.current) indexRef.current.textContent = value;
      root.style.setProperty("--scroll", progress.toFixed(4));
      if (hero && !reduce) {
        const shift = Math.min(scroll, 520) * 0.16;
        hero.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
      }
    };

    const lenis = new Lenis({
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
    paint(lenis.scroll, lenis.limit);
    const unbind = lenis.on("scroll", (instance) => {
      paint(instance.scroll, instance.limit);
    });

    return () => {
      unbind();
      lenis.destroy();
      setLenis(null);
      root.classList.remove("has-cursor");
      root.style.removeProperty("--scroll");
      if (hero) hero.style.removeProperty("transform");
    };
  }, []);

  useEffect(() => {
    if (!cursorOn) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const draw = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const setHot = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element) || !ring) return;
      ring.dataset.hot = target.closest("a, button") ? "true" : "false";
    };

    frame = requestAnimationFrame(draw);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", setHot);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", setHot);
    };
  }, [cursorOn]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <p className="pointer-events-none fixed right-5 bottom-5 z-40 text-xs font-black tracking-[0.22em] text-muted">
        <span ref={indexRef}>001</span>
        <span className="text-line"> / 008</span>
      </p>
      {cursorOn ? (
        <>
          <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
          <span
            ref={ringRef}
            className="cursor-ring"
            data-hot="false"
            aria-hidden="true"
          />
        </>
      ) : null}
    </>
  );
}
