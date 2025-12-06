import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flytthjälp & bärhjälp i Skåne | Flyttivo",
  description:
    "Professionell flytthjälp och bärhjälp i Skåne. Vi hjälper dig med tunglyft, lastning, lossning och flytt. Snabb, trygg och prisvärd service i hela Skåne.",
};

export default function FlytthjalpPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Flytthjälp & bärhjälp i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Behöver du extra hjälp med flytten? Flyttivo erbjuder professionell
              flytthjälp och bärhjälp i hela Skåne. Oavsett om du behöver hjälp
              med tunglyft, lastning, lossning eller bara en extra hand under
              flytten, är vi här för att hjälpa dig. Vårt erfarna team kan
              komma och assistera dig med precis det du behöver, när du behöver
              det. Vi arbetar i Kristianstad, Åhus, Hässleholm, Östra Göinge,
              Broby, Hanaskog, Knislinge, Bromölla, Sibbhult, Osby, Glimåkra,
              Sölvesborg och resten av Skåne. Flytthjälp är viktigt för att
              undvika skador och göra flytten säkrare och smidigare. Med
              Flyttivo får du professionell hjälp som gör hela processen
              enklare.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              När är flytthjälp användbart?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Tunglyft och stora möbler
                </h3>
                <p className="text-sm text-slate-600">
                  När du har tunga möbler, pianon, kassaskåp eller andra tunga
                  föremål som kräver flera personer och rätt teknik för att
                  flytta säkert.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Snabb flytt
                </h3>
                <p className="text-sm text-slate-600">
                  När du behöver flytta snabbt och effektivt, eller när du har
                  begränsat med tid och vill att allt ska gå fort.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Trånga utrymmen
                </h3>
                <p className="text-sm text-slate-600">
                  När du flyttar från eller till lägenheter med trånga trappor,
                  hissar eller smala dörröppningar som kräver erfarenhet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Extra säkerhet
                </h3>
                <p className="text-sm text-slate-600">
                  När du vill vara säker på att dina ägodelar hanteras korrekt
                  och att ingen skadar sig under flytten.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Fördelar med professionell flytthjälp
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Säkerhet:</strong> Vi har
                  rätt teknik och utrustning för att flytta tunga föremål utan
                  risk för skador på dig eller dina ägodelar.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Effektivitet:</strong>{" "}
                  Erfaren personal arbetar snabbt och effektivt, vilket sparar
                  dig tid och energi.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt utrustning:</strong>{" "}
                  Vi har tillgång till flyttdolly, lyftremmar, skydd och annan
                  utrustning som gör flytten enklare.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Försäkring:</strong> Alla
                  flyttar är försäkrade, så du är skyddad om något skulle hända.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibilitet:</strong> Vi
                  kan komma när det passar dig, oavsett om det är på dagen,
                  kvällen eller helgen.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i flytthjälp?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Bärhjälp
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Lastning och lossning av möbler</li>
                  <li>• Bärhjälp i trappor och hissar</li>
                  <li>• Hantering av tunga och stora föremål</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Transport
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Transport med flyttbil (vid behov)</li>
                  <li>• Säker fastsättning av last</li>
                  <li>• Försäkrad transport</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Uppsättning
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Uppsättning av möbler på rätt plats</li>
                  <li>• Grundläggande montering vid behov</li>
                  <li>• Borttagning av förpackningsmaterial</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Ytterligare tjänster
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Packhjälp (kan bokas separat)</li>
                  <li>• Demontering och montering</li>
                  <li>• Bortforsling av grovsopor</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka flytthjälp i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för att boka flytthjälp. Vi hjälper dig gärna
              med din flytt!
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


  );
}

