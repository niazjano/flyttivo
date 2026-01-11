import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Flytt & städ i Broby – Flyttivo | Flyttfirma & Städfirma",
  description:
    "Flyttivo är din lokala flyttfirma och städfirma i Broby. Vi erbjuder trygg flytthjälp, flyttstädning och hemstädning i Broby och omnejd. RUT-avdrag ingår.",
};

export default function StadBrobyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
      <div className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Flytt & städ i Broby
          </h1>
          <div className="space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              Flyttivo är din lokala flyttfirma och städfirma i Broby. Vi hjälper
              privatpersoner och företag med trygg flytt, flyttstädning och
              återkommande städning i Broby och omnejd. Med Flyttivo får du en
              helhetslösning för både flytt och städning – allt från första
              kartong till sista städrond.
            </p>
            <p>
              Vi är aktiva i Broby och närliggande orter som Kristianstad,
              Hässleholm, Östra Göinge, Hanaskog, Knislinge, Sibbhult och
              Glimåkra. Som privatperson kan du använda RUT-avdrag på upp till 50%
              av arbetskostnaden för både flytt och städning – vi hanterar avdraget
              åt dig direkt på fakturan.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Flyttfirma i Broby
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Flyttivo erbjuder komplett flytthjälp i Broby. Vi hjälper med
            bohagsflytt, bärhjälp, transport, packning och montering. Våra
            flyttkillar är försäkrade och arbetar strukturerat för att säkerställa
            att dina tillhörigheter kommer fram i samma skick som de lämnade.
          </p>
          <Link
            href="/flyttfirma"
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
          >
            Läs mer om våra flyttjänster →
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Städfirma i Broby
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Vi erbjuder noggrann flyttstädning, hemstädning och veckostädning i
            Broby. Våra städare arbetar strukturerat med checklistor och
            kvalitetskontroller för att säkerställa ett skinande resultat. Oavsett
            om du behöver flyttstädning inför bostadsförsäljning eller
            återkommande hemstädning, så hjälper vi dig.
          </p>
          <Link
            href="/stadning"
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
          >
            Läs mer om våra städtjänster →
          </Link>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Boka flytt eller städning i Broby
          </h2>
          <p className="mb-6 text-base text-slate-600">
            Kontakta oss för en kostnadsfri offert på flytt eller städning i Broby
            och omnejd. Vi återkommer oftast samma dag med ett tydligt
            prisförslag.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" href="/kontakt">
              Få gratis offert
            </Button>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
            >
              Kontakta oss
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

