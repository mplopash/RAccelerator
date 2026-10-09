import Link from "next/link";
import { Container } from "@/components/container";
import { InteractButton } from "@/components/interact";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-bar sticky top-0 z-40 px-5 md:px-8">
      <Container className="flex h-16 items-center justify-between gap-6 !px-0">
        <Link href="/" className="brand-link flex items-center gap-2.5">
          <Logo className="brand-mark size-8 shrink-0" />
          <span className="text-[1.05rem] font-black tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <InteractButton
            mode="signin"
            className="signin-btn btn-ghost hidden rounded-full border px-4 py-2 text-sm font-bold sm:inline-flex"
          >
            Sign In
          </InteractButton>
          <InteractButton
            mode="demo"
            className="btn-mint hidden rounded-full px-4 py-2 text-sm font-black sm:inline-flex"
          >
            Book a Demo
          </InteractButton>
        </div>
        <details className="relative lg:hidden">
          <summary className="menu-toggle cursor-pointer list-none rounded-full border px-3 py-2 text-sm font-bold">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="site-menu absolute right-0 mt-2 w-64 rounded-2xl border p-3 shadow-lg backdrop-blur-xl"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="menu-link block rounded-lg px-3 py-2 text-sm"
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
