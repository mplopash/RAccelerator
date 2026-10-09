"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready || reduce !== false) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
