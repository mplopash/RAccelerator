import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-5 py-16 md:px-8 md:py-24">
      <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
        Next brief
      </p>
      <p className="mt-5 max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight text-ink md:text-6xl">
        The real interface starts when the brief arrives.
      </p>
      <div className="mt-10 flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/architecture"
          className="text-ink underline decoration-line underline-offset-4"
        >
          Read the setup
        </Link>
        <p className="font-mono text-xs tracking-wide">
          {site.name} · Next.js 16 · React 19 · Tailwind 4
        </p>
      </div>
    </footer>
  );
}
