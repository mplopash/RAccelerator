import Link from "next/link";
import { Container } from "@/components/container";
import { InteractButton } from "@/components/interact";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="glass site-header sticky top-0 z-40 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <Logo className="size-8 shrink-0 text-accent" />
          <span className="text-[1.05rem] font-black tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <InteractButton
            mode="signin"
            className="btn-ghost hidden rounded-xl border border-line px-4 py-2 text-sm font-bold text-ink sm:inline-flex"
          >
            Sign In
          </InteractButton>
          <InteractButton
            mode="demo"
            className="btn-primary hidden rounded-xl bg-accent px-4 py-2 text-sm font-black text-on-accent sm:inline-flex"
          >
            Book a Demo
          </InteractButton>
        </div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-line px-3 py-2 text-sm font-bold text-ink">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="glass absolute right-0 mt-2 w-64 rounded-xl border border-line p-3 shadow-lg backdrop-blur-xl backdrop-saturate-150"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-ink"
              >
                {item.label}
              </a>
            ))}
            <InteractButton
              mode="demo"
              className="mt-2 block w-full rounded-xl bg-accent px-3 py-2 text-center text-sm font-black text-on-accent"
            >
              Book a Demo
            </InteractButton>
          </nav>
        </details>
      </Container>
    </header>
  );
}
