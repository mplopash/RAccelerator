import Link from "next/link";
import { Container } from "@/components/container";
import { InteractButton } from "@/components/interact";
import { Logo } from "@/components/logo";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";

const columns = [
  { title: "Product", links: footer.product },
  { title: "Resources", links: footer.resources },
  { title: "Company", links: footer.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-ink">
              <Logo className="size-8 text-accent" />
              <span className="text-lg font-black">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Regulatory intelligence for MedTech. Accelerating device lifecycle
              management from classification to NB submission.
            </p>
            <InteractButton
              mode="note"
              label="www.RAccelerator.ai"
              className="mt-4 text-sm font-bold text-accent"
            >
              www.RAccelerator.ai
            </InteractButton>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-black tracking-[0.16em] text-muted uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <InteractButton
                        mode="note"
                        label={link.label}
                        className="text-sm text-ink/80 hover:text-ink"
                      >
                        {link.label}
                      </InteractButton>
                    ) : (
                      <a
                        href={link.href.replace(/^\//, "")}
                        className="text-sm text-ink/80 hover:text-ink"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RAccelerator LLC. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-4">
            <InteractButton mode="note" label="Privacy">
              Privacy
            </InteractButton>
            <InteractButton mode="note" label="Terms">
              Terms
            </InteractButton>
            <InteractButton mode="note" label="Cookies">
              Cookies
            </InteractButton>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
