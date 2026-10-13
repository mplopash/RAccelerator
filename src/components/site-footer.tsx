import { Container } from "@/components/container";
import { InteractButton } from "@/components/interact";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";

const columns = [
  { title: "Product", links: footer.product },
  { title: "Resources", links: footer.resources },
  { title: "Company", links: footer.company },
] as const;

export function SiteFooter() {
  return (
    <footer className="band relative z-10 overflow-hidden border-t border-stroke">
      <Container className="pt-7 pb-2 md:pt-8">
        <nav aria-label="Social" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-stroke pb-4">
          {footer.social.map((name) => (
            <InteractButton key={name} mode="note" label={name} className="link-rule text-sm text-ink">
              {name}
            </InteractButton>
          ))}
        </nav>
        <div className="grid gap-8 border-b border-stroke py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,2fr)] lg:gap-16 lg:py-8">
          <div>
            <p className="max-w-[14rem] text-3xl leading-tight font-black tracking-tight text-ink md:text-4xl">
              {footer.tagline}
            </p>
            <InteractButton
              mode="demo"
              className="btn-mint mt-5 inline-flex rounded-full px-4 py-2 text-sm font-black"
            >
              Book a Demo
            </InteractButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-accent">{column.title}</p>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {"href" in link && link.href ? (
                        <a href={link.href} className="link-rule text-sm text-ink">
                          {link.label}
                        </a>
                      ) : (
                        <InteractButton
                          mode="note"
                          label={link.label}
                          className="link-rule text-left text-sm text-ink"
                        >
                          {link.label}
                        </InteractButton>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="pt-4 font-mono text-[11px] tracking-[0.14em] text-muted">
          © 2026 {site.legalName}
        </p>
      </Container>
      <p className="footer-mark pt-3 pb-1 text-ink">{site.name}</p>
    </footer>
  );
}
