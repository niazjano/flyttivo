import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Flyttivo – Flyttfirma & Städning i Skåne",
  description:
    "Flyttivo är en lokal flyttfirma och städfirma i Skåne med fokus på trygghet, professionalism och personlig service.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <div className="sticky top-0 z-50 bg-[#1E5F99] text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 text-xs font-medium sm:flex-row sm:justify-between sm:gap-4 md:px-6">
              <a
                href="tel:0447853002"
                className="inline-flex items-center gap-2 hover:text-white/90"
              >
                <span aria-hidden="true">📞</span>
                <span>044–785 3002</span>
              </a>
              <a
                href="mailto:info@flyttivo.se"
                className="inline-flex items-center gap-2 hover:text-white/90"
              >
                <span aria-hidden="true">✉️</span>
                <span>info@flyttivo.se</span>
              </a>
            </div>
          </div>
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Link
          href="https://tally.so/r/pbBdkB"
          className="floating-cta fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-[#1E5F99] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition hover:scale-[1.03] hover:bg-[#174A77] hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E5F99] sm:inline-flex md:right-6"
          aria-label="Få offert – gå till offertformuläret"
        >
          <span>Få offert</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href="https://tally.so/r/pbBdkB"
          className="floating-cta fixed bottom-4 right-4 z-50 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#1E5F99] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition hover:scale-[1.03] hover:bg-[#174A77] hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E5F99] sm:hidden"
          aria-label="Få offert – gå till offertformuläret"
        >
          Få offert
        </Link>
        <RevealOnScroll />
      </body>
    </html>
  );
}

