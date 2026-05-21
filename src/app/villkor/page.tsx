import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Allmänna villkor | Flyttivo Flytt och Städ AB",
  description:
    "Allmänna villkor för flytt- och städtjänster från Flyttivo Flytt och Städ AB i Kristianstad.",
};

export default function VillkorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Allmänna villkor
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Dessa allmänna villkor gäller för tjänster som utförs av {COMPANY.name}{" "}
        (org.nr {COMPANY.orgNumber}) i Kristianstad och omnejd.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Offert och bokning</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Efter godkänd offert bekräftas uppdraget skriftligt eller via
          överenskommen kommunikation. Priset baseras på den information som
          lämnats vid offerttillfället.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Utförande</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Vi utför uppdraget professionellt och enligt överenskommen omfattning.
          Kunden ansvarar för att ge korrekt information om adress, tillgång och
          eventuella särskilda förutsättningar.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Försäkring</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Våra flytt- och städuppdrag omfattas av försäkring enligt gällande
          villkor. Vid skador ska detta rapporteras utan dröjsmål.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Frågor om villkoren? Kontakta oss på{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-medium text-[#1E5F99] hover:underline"
          >
            {COMPANY.email}
          </a>{" "}
          eller{" "}
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
