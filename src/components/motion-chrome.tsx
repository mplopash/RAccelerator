"use client";

import { useEffect, useRef, useState } from "react";

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

    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const value = String(Math.min(8, Math.round(progress * 7) + 1)).padStart(
        3,
        "0",
      );
      if (indexRef.current) indexRef.current.textContent = value;

      const pin = document.querySelector<HTMLElement>(".pin");
      if (!pin || reduce) {
        root.style.removeProperty("--pin-progress");
        return;
      }
      const distance = pin.offsetHeight - window.innerHeight;
      const passed = Math.min(
        Math.max(-pin.getBoundingClientRect().top, 0),
        Math.max(distance, 0),
      );
      root.style.setProperty(
        "--pin-progress",
        distance > 0 ? (passed / distance).toFixed(4) : "0",
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      root.classList.remove("has-cursor");
      root.style.removeProperty("--pin-progress");
      window.removeEventListener("scroll", onScroll);
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
      <p className="pointer-events-none fixed right-5 bottom-5 z-40 font-mono text-xs tracking-[0.22em] text-muted">
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
