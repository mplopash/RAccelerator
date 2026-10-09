import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{site.name}</p>
        <p className="font-mono text-xs tracking-wide">
          Next.js 16 · React 19 · Tailwind 4
        </p>
      </div>
    </footer>
  );
}
