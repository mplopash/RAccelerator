import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <Logo className="size-8 shrink-0" />
          <span className="text-[1.05rem] font-black tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={site.productUrl}
            className="rounded-xl border border-line px-4 py-2 text-sm font-bold text-ink"
          >
            Sign In
          </a>
          <a
            href={site.productUrl}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-black text-background"
          >
            Book a Demo
          </a>
        </div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-line px-3 py-2 text-sm font-bold text-ink">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 w-64 rounded-xl border border-line bg-[#07182c] p-3"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.productUrl}
              className="mt-2 block rounded-xl bg-accent px-3 py-2 text-center text-sm font-black text-background"
            >
              Book a Demo
            </a>
          </nav>
        </details>
      </Container>
    </header>
  );
}
