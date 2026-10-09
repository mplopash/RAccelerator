function resolveSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  try {
    return new URL(configured).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const site = {
  name: "RAccelerator",
  description:
    "A performance-first Next.js, React, and Tailwind foundation with server rendering, Cache Components, and Turbopack.",
  url: resolveSiteUrl(),
} as const;

export const routes = [
  { href: "/", label: "Overview" },
  { href: "/architecture", label: "Architecture" },
] as const;
