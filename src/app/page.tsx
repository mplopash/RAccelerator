import Link from "next/link";
import { Container } from "@/components/container";
import { ClassReport, GapPanel } from "@/components/product-panels";
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
      <section className="border-b border-line">
        <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
              AI-Enabled Regulatory Acceleration for MedTech
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] font-black tracking-tight text-ink md:text-6xl">
              <span className="text-accent">EU MDR and IVDR</span>
              <span className="mt-1 block">ongoing compliance.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.productUrl}
                className="inline-flex h-12 items-center rounded-xl bg-accent px-5 text-sm font-black text-background"
              >
                Start Gap Assessment
              </a>
              <a
                href={site.productUrl}
                className="inline-flex h-12 items-center rounded-xl border border-accent px-5 text-sm font-black text-accent"
              >
                Book a Demo
              </a>
            </div>
            <p className="mt-10 text-xs font-black tracking-[0.16em] text-muted uppercase">
              Supports Workflows Aligned To
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {standards.map((standard) => (
                <li
                  key={standard}
                  className="rounded-full border border-line px-3 py-1 text-xs font-bold text-ink"
                >
                  {standard}
                </li>
              ))}
            </ul>
          </div>
          <GapPanel />
        </Container>
      </section>

      <section aria-label="Coverage">
        <Container>
          <dl className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-line px-1 py-8 lg:border-r lg:px-6 lg:last:border-r-0">
                <dt className="text-sm leading-6 text-muted">{metric.label}</dt>
                <dd className="mt-2 text-3xl font-black tracking-tight text-ink">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="features" className="scroll-mt-20 py-16 md:py-24">
        <Container>
          <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
            Platform Capabilities
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-ink md:text-5xl">
            Everything Your RA Team Needs in One Platform
          </h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {capabilities.map((item, index) => (
              <li
                key={item.title}
                className="reveal grid gap-3 py-7 md:grid-cols-[4.5rem_16rem_1fr] md:items-baseline md:gap-8"
              >
                <p className="font-black text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-black tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="solutions" className="scroll-mt-20 border-y border-line bg-[#07182c]/60 py-16 md:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink md:text-4xl">
              Device Classification Report
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              {capabilities[1].body}
            </p>
          </div>
          <ClassReport />
        </Container>
      </section>

      <section id="why" className="scroll-mt-20 py-16 md:py-24">
        <Container>
          <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
            Why RAccelerator
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-ink md:text-5xl">
            RAccelerator Deterministic AI: Compliance You Can Trust
          </h2>
          <h3 className="mt-8 text-xl font-black text-ink">Not All AI Is Created Equal</h3>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {proofs.map((proof) => (
              <li key={proof.title} className="rounded-2xl border border-line p-5">
                <h4 className="text-lg font-black text-ink">{proof.title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">{proof.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="text-sm font-black tracking-[0.16em] text-muted uppercase">
                Generic AI
              </h3>
              <ul className="mt-5 space-y-3">
                {genericAi.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line bg-[#07182c] p-6 md:border-t-0 md:border-l md:p-8">
              <h3 className="text-sm font-black tracking-[0.16em] text-accent uppercase">
                RAccelerator Deterministic AI
              </h3>
              <ul className="mt-5 space-y-3">
                {deterministicAi.map((item) => (
                  <li key={item} className="text-sm font-bold text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="trust" className="scroll-mt-20 border-t border-line py-16 md:py-24">
        <Container>
          <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
            Trusted By
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink md:text-5xl">
            Regulatory Teams Trust RAccelerator
          </h2>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {audiences.map((audience) => (
              <li key={audience} className="text-sm font-bold text-muted">
                {audience}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {quotes.map((item) => (
              <blockquote key={item.role} className="rounded-2xl border border-line p-6">
                <p className="text-lg leading-8 font-bold text-ink">“{item.quote}”</p>
                <footer className="mt-5 text-sm text-muted">
                  <span className="font-black text-ink">{item.role}</span>
                  <span> · {item.org}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <article className="mt-4 rounded-2xl border border-line bg-[#07182c] p-6 md:p-8">
            <p className="text-xs font-black tracking-[0.16em] text-accent uppercase">
              Case Study: 60% Faster NB Submission
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink">
              A Class IIb cardiac device manufacturer reduced their submission
              timeline from 9 months to under 4 using RAccelerator’s automated
              GSPR assessment and gap remediation workflow.
            </p>
            <Link
              href="/#trust"
              className="mt-6 inline-flex text-sm font-black text-accent"
            >
              Read Case Study
            </Link>
          </article>
        </Container>
      </section>

      <section id="security" className="scroll-mt-20 border-t border-line py-16 md:py-24">
        <Container>
          <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
            Enterprise Security
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink md:text-5xl">
            Built for Regulated Industries
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {security.map((item) => (
              <li key={item.title} className="bg-background p-6">
                <h3 className="text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-muted">
            All data hosted in EU-based infrastructure. Available for on-premise
            deployment for enterprise clients.
          </p>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-line py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-accent uppercase">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink md:text-4xl">
              Common Questions from Regulatory Teams
            </h2>
          </div>
          <div className="border-t border-line">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-line"
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
