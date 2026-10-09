# RAccelerator

Performance-first foundation for Next.js, React, and Tailwind.

## Stack

- Next.js 16 App Router with Turbopack
- React 19 Server Components
- Tailwind CSS 4
- TypeScript, ESLint, and Prettier

## Scripts

```bash
npm run dev        # Turbopack dev server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run format     # Prettier
```

Open [http://localhost:3000](http://localhost:3000) after `npm run dev`.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deploying. That origin is used for metadata, `robots.txt`, and `sitemap.xml`.

## Layout

```text
src/app          routes, layouts, metadata, health check
src/components   shared server UI
src/lib          site configuration
```

## Performance defaults

- Cache Components and partial prefetching
- React Compiler running natively inside Turbopack
- Self-hosted Geist fonts with `display: swap`
- AVIF and WebP image formats
- Inlined Tailwind CSS for the first visit
- `X-Powered-By` removed, plus baseline security headers
