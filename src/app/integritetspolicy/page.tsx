import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Integritetspolicy | Flyttivo Flytt och Städ AB",
  description:
    "Läs hur Flyttivo Flytt och Städ AB hanterar personuppgifter när du kontaktar oss eller begär offert.",
};

export default function IntegritetspolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Integritetspolicy
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {COMPANY.name} värnar om din integritet. Denna policy beskriver hur vi
        hanterar personuppgifter när du kontaktar oss, begär offert eller bokar
        tjänster.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Vilka uppgifter vi samlar in
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Vi kan behandla uppgifter som namn, telefonnummer, e-postadress,
          adress och information om ditt uppdrag när du fyller i vårt
          offertformulär, ringer oss eller skickar e-post.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Hur vi använder uppgifterna
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Uppgifterna används för att besvara förfrågningar, lämna offerter,
          planera och utföra flytt- och städtjänster samt för nödvändig
          kundkommunikation.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Har du frågor om hur vi hanterar dina uppgifter? Kontakta oss på{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-medium text-[#1E5F99] hover:underline"
          >
            {COMPANY.email}
          </a>{" "}
          eller ring{" "}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="font-medium text-[#1E5F99] hover:underline"
          >
            {COMPANY.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <p className="mt-12 text-sm text-slate-500">
        <Link href="/" className="text-[#1E5F99] hover:underline">
          ← Tillbaka till startsidan
        </Link>
      </p>
    </div>
  );
}
