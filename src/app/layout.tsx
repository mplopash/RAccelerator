import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { InteractProvider } from "@/components/interact";
import { MotionChrome } from "@/components/motion-chrome";
import { Footer21st } from "@/components/21st/footer-21st";
import { CustomCursor } from "@/components/21st/custom-cursor";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "EU MDR",
    "IVDR",
    "GSPR",
    "regulatory affairs",
    "MedTech",
    "device classification",
    "21 CFR Part 11",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plex.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <CustomCursor />
        <InteractProvider>
        <MotionChrome />
        <a
          href="#features"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <Footer21st />
        </InteractProvider>
      </body>
    </html>
  );
}
