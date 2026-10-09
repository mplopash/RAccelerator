import Link from "next/link";
import { routes, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/70 backdrop-blur-md">
      <div className="flex items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.28em] text-ink uppercase"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <p className="hidden font-mono text-[11px] tracking-[0.22em] text-muted uppercase sm:block">
          Study
        </p>
      </div>
    </header>
  );
}
