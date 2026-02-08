import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Flyttivo – Flyttfirma & Städning i Skåne",
  description:
    "Flyttivo är en lokal flyttfirma och städfirma i Skåne med fokus på trygghet, professionalism och personlig service.",
  icons: {
    icon: "/logo/flyttivo-logo.png",
    apple: "/logo/flyttivo-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
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
        <RevealOnScroll />
      </body>
    </html>
  );
}

