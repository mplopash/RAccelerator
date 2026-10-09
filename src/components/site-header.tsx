import Link from "next/link";
import { routes, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <span className="grid size-8 place-items-center bg-ink text-background">
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              <path
                d="M2.5 4.5 6 8l-3.5 3.5M8 4.5 11.5 8 8 11.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
