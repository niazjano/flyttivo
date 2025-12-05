import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Dödsbostädning & tömning av dödsbo i Skåne | Flyttivo",
  description:
    "Professionell och känslig dödsbostädning i Skåne. Vi hjälper med städning och tömning av dödsbo med respekt och omsorg. Diskret och professionell service.",
};

export default function DodsboPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Dödsbostädning & tömning av dödsbo i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Att hantera ett dödsbo är en känslig och emotionellt påfrestande
              situation. Flyttivo erbjuder professionell och känslig
              dödsbostädning i hela Skåne där vi hjälper dig med städning och
              tömning av dödsbo med respekt, omsorg och diskretion. Vårt erfarna
              team förstår att detta är en svår tid och arbetar med största
              omsorg och respekt. Vi arbetar i Kristianstad, Åhus, Hässleholm,
              Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla, Sibbhult,
              Osby, Glimåkra, Sölvesborg och resten av Skåne. Dödsbostädning
              innebär grundlig städning av bostaden samt hjälp med tömning och
              bortforsling av möbler och föremål. Vi kan också hjälpa med
              sortering och organisation av ägodelar. Med Flyttivo får du
              professionell hjälp som gör processen enklare under en svår tid.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i dödsbostädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Grundlig städning
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av alla rum</li>
                  <li>• Rengöring av kök och badrum</li>
                  <li>• Rengöring av vardagsrum och sovrum</li>
                  <li>• Dammtorkning av alla ytor</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                  <li>• Rengöring av golv och lister</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Tömning och bortforsling
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Tömning av möbler och föremål</li>
                  <li>• Bortforsling av möbler</li>
                  <li>• Bortforsling av grovsopor</li>
                  <li>• Sortering av ägodelar (vid behov)</li>
                  <li>• Organisation och förberedelse</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Respekt och omsorg
            </h2>
            <p className="mb-4 text-slate-600">
              Vi förstår att hantera ett dödsbo är en känslig situation. Vårt
              team arbetar med största respekt, omsorg och diskretion. Vi tar
              hand om allt med professionell standard samtidigt som vi visar
              respekt för situationen och de som påverkats.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Diskret och professionell service</li>
              <li>• Respektfull hantering av ägodelar</li>
              <li>• Flexibla lösningar som anpassas efter dina behov</li>
              <li>• Förståelse för den känsliga situationen</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för dödsbostädning?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Erfarenhet:</strong> Vi
                  har erfarenhet av dödsbostädning och förstår vad som krävs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Respekt och omsorg:</strong>{" "}
                  Vi arbetar med största respekt och omsorg för situationen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Diskretion:</strong> Vi
                  arbetar diskret och professionellt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Komplett service:</strong>{" "}
                  Vi kan hjälpa med både städning och tömning, så du behöver
                  inte oroa dig för flera olika leverantörer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibla lösningar:</strong>{" "}
                  Vi anpassar oss efter dina behov och önskemål.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Kontakta oss för dödsbostädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss för ett diskret samtal om dödsbostädning. Vi hjälper
              dig gärna med respekt och omsorg.
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

