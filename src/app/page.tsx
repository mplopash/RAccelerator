import { Container } from "@/components/container";
import { DossierField } from "@/components/dossier-field";
import { InteractButton } from "@/components/interact";
import { ClassReport, GapPanel } from "@/components/product-panels";
import { Reveal } from "@/components/reveal";
import {
  audiences,
  capabilities,
  deterministicAi,
  faqs,
  genericAi,
  metrics,
  proofs,
  quotes,
  security,
  standards,
} from "@/lib/content";
import { site } from "@/lib/site";

const moduleSpan = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.legalName,
        url: site.url,
        description: site.description,
      },
      {
        "@type": "SoftwareApplication",
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: site.url,
        description: site.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DossierField />
      <section className="hero-stage relative z-10 flex min-h-[calc(100svh-4.5rem)] flex-col">
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center md:px-8">
          <Reveal>
            <p className="hero-kicker font-mono text-[11px] tracking-[0.28em] uppercase">
              AI-Enabled Regulatory Acceleration for MedTech
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="hero-title mt-6 text-[clamp(2.55rem,8.4vw,7.25rem)] leading-[0.9] font-black tracking-[-0.045em]">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-copy mx-auto mt-6 max-w-xl text-base leading-7 md:text-lg">
              Turns regulatory requirements into device-specific workflows and
              remediation plans.
            </p>
            <p className="hero-copy-soft mx-auto mt-1 max-w-xl text-sm leading-6 md:text-base">
              Traceable, reproducible technical documentation without
              sacrificing quality, control and auditability.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <InteractButton
                mode="pulse"
                target="gap-panel"
                className="btn-mint inline-flex h-12 items-center rounded-full px-6 text-sm font-black"
              >
                Start Gap Assessment
              </InteractButton>
              <InteractButton mode="demo" className="hero-demo text-sm font-bold">
                Book a Demo
              </InteractButton>
            </div>
          </Reveal>
        </div>
        <div className="hero-rule relative z-10 flex items-center justify-between gap-4 border-t px-5 py-4 md:px-8">
          <p className="hero-rule-label font-mono text-[10px] tracking-[0.22em] uppercase">
            01 — Platform
          </p>
          <p className="hero-rule-label text-right text-xs">
            From classification to NB submission
          </p>
        </div>
      </section>

      <section>
        <Container className="py-10 md:py-14">
          <GapPanel />
        </Container>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex">
              {standards.map((standard) => (
                <li
                  key={`${copy}-${standard}`}
                  className="px-8 py-4 font-mono text-xs tracking-[0.16em] text-ink uppercase"
                >
                  {standard}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <section aria-label="Coverage" className="py-14 md:py-20">
        <Container>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="panel reveal rounded-2xl border border-stroke px-5 py-7"
              >
                <dt className="font-mono text-[11px] leading-5 tracking-[0.14em] text-muted uppercase">
                  {metric.label}
                </dt>
                <dd className="mt-4 text-4xl font-black tracking-tight text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="features" className="scroll-mt-20 py-16 md:py-28">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Platform Capabilities
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl leading-[0.92] font-black tracking-[-0.045em] text-accent md:text-6xl">
            Everything Your RA Team Needs in One Platform
          </h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-6">
            {capabilities.map((item, index) => (
              <li
                key={item.title}
                className={`panel reveal rounded-2xl border border-stroke p-6 ${moduleSpan[index]}`}
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="solutions" className="scroll-mt-20 py-16 md:py-28">
        <Container className="grid items-start gap-4 lg:grid-cols-12">
          <div className="panel rounded-2xl border border-stroke p-6 md:p-8 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Solutions
            </p>
            <h2 className="mt-4 text-4xl leading-[0.95] font-black tracking-[-0.04em] text-accent md:text-5xl">
              Device Classification Report
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">{capabilities[1].body}</p>
          </div>
          <div className="lg:col-span-7">
            <ClassReport />
          </div>
        </Container>
      </section>

      <section id="why" className="scroll-mt-20 py-16 md:py-28">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Why RAccelerator
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl leading-[0.92] font-black tracking-[-0.045em] text-accent md:text-6xl">
            RAccelerator Deterministic AI: Compliance You Can Trust
          </h2>
          <h3 className="mt-8 font-mono text-[11px] tracking-[0.18em] text-ink uppercase">
            Not All AI Is Created Equal
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {proofs.map((proof) => (
              <li
                key={proof.title}
                className="panel reveal rounded-2xl border border-stroke p-6"
              >
                <h4 className="text-xl font-black text-ink">{proof.title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">{proof.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="panel rounded-2xl border border-stroke p-6 md:p-8">
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                Generic AI
              </h3>
              <ul className="mt-5 space-y-3">
                {genericAi.map((item) => (
                  <li key={item} className="border-b border-stroke/40 pb-3 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel rounded-2xl border border-stroke p-6 md:p-8">
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                RAccelerator Deterministic AI
              </h3>
              <ul className="mt-5 space-y-3">
                {deterministicAi.map((item) => (
                  <li key={item} className="border-b border-stroke/40 pb-3 text-sm font-bold text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="trust" className="scroll-mt-20 py-16 md:py-28">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Trusted By
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[0.92] font-black tracking-[-0.045em] text-accent md:text-6xl">
            Regulatory Teams Trust RAccelerator
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-stroke px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-ink uppercase"
              >
                {audience}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {quotes.map((item) => (
              <blockquote
                key={item.role}
                className="panel reveal rounded-2xl border border-stroke p-6"
              >
                <p className="text-lg leading-8 font-bold text-ink">“{item.quote}”</p>
                <footer className="mt-5 text-sm text-muted">
                  <span className="font-black text-ink">{item.role}</span>
                  <span> · {item.org}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <article
            id="case-study"
            className="panel mt-4 rounded-2xl border border-stroke p-6 md:p-8"
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Case Study: 60% Faster NB Submission
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink">
              A Class IIb cardiac device manufacturer reduced their submission
              timeline from 9 months to under 4 using RAccelerator’s automated
              GSPR assessment and gap remediation workflow.
            </p>
            <InteractButton
              mode="pulse"
              target="case-study"
              className="mt-6 text-sm font-black text-accent"
            >
              Read Case Study
            </InteractButton>
          </article>
        </Container>
      </section>

      <section id="security" className="scroll-mt-20 py-16 md:py-28">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Enterprise Security
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[0.92] font-black tracking-[-0.045em] text-accent md:text-6xl">
            Built for Regulated Industries
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-6">
            {security.map((item, index) => (
              <li
                key={item.title}
                className={`panel rounded-2xl border border-stroke p-6 ${moduleSpan[index]}`}
              >
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
            All data hosted in EU-based infrastructure. Available for on-premise
            deployment for enterprise clients.
          </p>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 py-16 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl leading-[0.95] font-black tracking-[-0.04em] text-accent md:text-5xl">
              Common Questions from Regulatory Teams
            </h2>
          </div>
          <div className="panel rounded-2xl border border-stroke px-5 md:px-7 lg:col-span-8">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-stroke last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-black text-ink">
                  {item.question}
                  <span aria-hidden="true" className="text-accent group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
