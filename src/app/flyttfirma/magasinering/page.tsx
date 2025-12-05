import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Magasinering & transport till förråd i Skåne | Flyttivo",
  description:
    "Magasinering och transport till förråd i Skåne. Vi hjälper dig att förvara möbler, kartonger och andra föremål säkert. Flexibla lösningar för kort eller lång förvaring.",
};

export default function MagasineringPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Magasinering & transport till förråd i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Behöver du förvara möbler, kartonger eller andra föremål under en
              period? Flyttivo hjälper dig med magasinering och transport till
              förråd i hela Skåne. Oavsett om du behöver förvara saker under en
              renovering, mellanflytt eller längre period, kan vi hjälpa dig
              att transportera och förvara dina ägodelar säkert. Vi arbetar med
              pålitliga förrådsanläggningar i Skåne och kan hjälpa dig hitta
              rätt lösning för dina behov. Flyttivo erbjuder magasinering i
              Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg och
              resten av Skåne. Med professionell magasinering får du trygghet
              att dina ägodelar är säkert förvarade medan du behöver det.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Så fungerar magasinering
            </h2>
            <ol className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-slate-900">Planering:</strong> Vi
                  går igenom vad du behöver förvara och hur länge. Vi hjälper
                  dig hitta rätt förrådsstorlek och lösning.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-slate-900">Packning och förberedelse:</strong>{" "}
                  Vi packar och förbereder dina föremål för säker förvaring. Vi
                  kan också hjälpa med packning om det behövs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-slate-900">Transport:</strong> Vi
                  transporterar dina ägodelar till förrådet säkert och
                  försäkrat.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  4
                </span>
                <div>
                  <strong className="text-slate-900">Förvaring:</strong> Dina
                  ägodelar förvaras säkert i förrådet. Du kan hämta dem när du
                  behöver.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  5
                </span>
                <div>
                  <strong className="text-slate-900">Hämtning:</strong> När du
                  behöver dina saker igen kan vi hjälpa dig hämta dem från
                  förrådet och transportera dem dit du behöver.
                </div>
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Fördelar med magasinering
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibilitet:</strong>{" "}
                  Förvara saker under kort eller lång tid, beroende på dina
                  behov. Perfekt vid renovering, mellanflytt eller när du
                  behöver mer plats hemma.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Säkerhet:</strong>{" "}
                  Förråden är säkra och försäkrade, så dina ägodelar är skyddade
                  under förvaringen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Prisvärt:</strong>{" "}
                  Magasinering är ofta mer prisvärt än att behålla större
                  bostäder eller lokaler bara för förvaring.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Smidigt:</strong> Vi
                  hanterar både transport till och från förrådet, så du behöver
                  inte oroa dig för logistiken.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Organiserat:</strong>{" "}
                  Vi kan hjälpa dig organisera och märka kartonger och föremål
                  så det är lätt att hitta saker när du behöver dem.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              När är magasinering användbart?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Mellanflytt
                </h3>
                <p className="text-sm text-slate-600">
                  När du behöver förvara möbler och bohag mellan två flyttar
                  eller medan du väntar på ny bostad.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Renovering
                </h3>
                <p className="text-sm text-slate-600">
                  När du renoverar och behöver flytta möbler och föremål ut
                  under renoveringsperioden.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Nedstädning
                </h3>
                <p className="text-sm text-slate-600">
                  När du behöver mer plats hemma och vill förvara saker som du
                  inte använder regelbundet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Säsongsförvaring
                </h3>
                <p className="text-sm text-slate-600">
                  När du behöver förvara säsongsföremål som trädgårdsmöbler,
                  vintersportutrustning eller liknande.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka magasinering i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för mer information om magasinering och transport
              till förråd. Vi hjälper dig gärna hitta rätt lösning!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:0447853002"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-700"
              >
                Ring 044–785 3002
              </a>
              <a
                href="mailto:info@flyttivo.se"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
              >
                Skicka e-post
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              <a href="tel:0447853002" className="text-sky-600 hover:underline">
                044–785 3002
              </a>{" "}
              |{" "}
              <a
                href="mailto:info@flyttivo.se"
                className="text-sky-600 hover:underline"
              >
                info@flyttivo.se
              </a>
            </p>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

