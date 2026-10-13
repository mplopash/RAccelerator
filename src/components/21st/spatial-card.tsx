"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpatialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  depth?: number;
}

export function SpatialCard({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.15)",
  depth = 12,
  ...props
}: SpatialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics springs
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [depth, -depth]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-depth, depth]), springConfig);

  // Spotlight position relative to card (percentage)
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    // Normalize from -0.5 to 0.5
    mouseX.set(currentX / width - 0.5);
    mouseY.set(currentY / height - 0.5);

    setSpotlightPos({
      x: (currentX / width) * 100,
      y: (currentY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="perspective-1000 h-full w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`clay-glass group relative overflow-hidden rounded-3xl transition-shadow duration-300 ${className}`}
        {...(props as any)}
      >
        {/* Specular Radial Spotlight Glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          style={{
            background: `radial-gradient(circle 320px at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 80%)`,
          }}
        />

        {/* Inner Content with 3D Depth */}
        <div className="relative z-20 h-full w-full preserve-3d">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
