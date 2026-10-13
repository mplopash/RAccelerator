"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lagging spring physics for the outer halo ring
  const springConfig = { damping: 26, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor-interactive], .clay-button, .interactive'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on touch screens
  if (isTouch) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Outer Fluid Trailing Halo Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : isPressed ? 24 : 32,
          height: isHovered ? 48 : isPressed ? 24 : 32,
          borderColor: isHovered ? "rgba(52, 211, 153, 0.9)" : "rgba(16, 185, 129, 0.45)",
          backgroundColor: isHovered ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.04)",
          backdropFilter: isHovered ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ type: "spring", damping: 22, stiffness: 350 }}
        className="fixed rounded-full border shadow-[0_0_15px_rgba(16,185,129,0.2)]"
      />

      {/* Inner Precision Focal Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPressed ? 0.7 : isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? "#34d399" : "#10b981",
        }}
        transition={{ duration: 0.15 }}
        className="fixed size-2 rounded-full shadow-[0_0_10px_#10b981]"
      />
    </div>
  );
}
