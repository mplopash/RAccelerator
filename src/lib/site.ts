function resolveSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raccelerator.ai";

  try {
    return new URL(configured).origin;
  } catch {
    return "https://www.raccelerator.ai";
  }
}

export const site = {
  name: "RAccelerator",
  legalName: "RAccelerator LLC",
  title: "RAccelerator — GSPR RAC-Agent",
  description:
    "RAccelerator turns regulatory requirements into device-specific workflows and remediation plans, accelerating compliance, creating traceable and reproducible technical documentation without sacrificing quality, control and auditability.",
  url: resolveSiteUrl(),
  productUrl: "https://www.raccelerator.ai",
} as const;

export const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#why", label: "Why RAccelerator" },
  { href: "/#security", label: "Security" },
  { href: "/#faq", label: "FAQ" },
] as const;
