import { DossierField } from "@/components/dossier-field";
import { MotionReady } from "@/components/motion-chrome";
import { Loader21st } from "@/components/21st/loader-21st";
import { Hero21st } from "@/components/21st/hero-21st";
import { StandardsMarquee21st } from "@/components/21st/standards-marquee-21st";
import { StudioShowcase21st } from "@/components/21st/studio-showcase-21st";
import { DeviceDiagnosticScroll } from "@/components/21st/device-diagnostic-scroll";
import { Comparison21st } from "@/components/21st/comparison-21st";
import { Metrics21st } from "@/components/21st/metrics-21st";
import { Testimonials21st } from "@/components/21st/testimonials-21st";
import { Security21st } from "@/components/21st/security-21st";
import { Faq21st } from "@/components/21st/faq-21st";
import { Cta21st } from "@/components/21st/cta-21st";
import { FloatingDock21st } from "@/components/21st/floating-dock-21st";
import { faqs } from "@/lib/content";
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
    <main id="top" className="relative min-h-screen bg-background text-foreground transition-colors pb-32">
      {/* 21st.dev High-Precision Preloader */}
      <Loader21st />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DossierField />

      {/* Awwwards Flagship Architecture */}
      <Hero21st />
      <StandardsMarquee21st />
      <StudioShowcase21st />
      <DeviceDiagnosticScroll />
      <Comparison21st />
      <Metrics21st />
      <Testimonials21st />
      <Security21st />
      <Faq21st />
      <Cta21st />

      {/* Discrete Collapsible Spatial Dock */}
      <FloatingDock21st />

      <MotionReady />
    </main>
  );
}
