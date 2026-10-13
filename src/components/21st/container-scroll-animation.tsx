"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.98] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.8], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[62rem] sm:h-[75rem] md:h-[84rem] items-center justify-center p-2 sm:p-6 md:p-12"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        className="relative w-full py-10 md:py-16"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl xl:max-w-7xl rounded-[28px] sm:rounded-[36px] border border-ink/10 bg-surface/90 p-2 sm:p-3 shadow-2xl backdrop-blur-2xl transition-shadow md:p-4 dark:border-white/10 dark:bg-zinc-950/90"
    >
      <div className="h-full w-full overflow-hidden rounded-[20px] sm:rounded-[28px] border border-ink/10 bg-surface dark:border-white/10 dark:bg-zinc-900/90">
        {children}
      </div>
    </motion.div>
  );
}
