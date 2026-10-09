"use client";

import dynamic from "next/dynamic";

const MercuryScene = dynamic(
  () => import("@/components/mercury-scene").then((mod) => mod.MercuryScene),
  { ssr: false },
);

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <MercuryScene />
    </div>
  );
}
