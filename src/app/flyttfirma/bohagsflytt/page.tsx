import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bohagsflytt i Skåne – trygg & prisvärd flytthjälp | Flyttivo",
  description:
    "Professionell bohagsflytt i Skåne med Flyttivo. Trygg flytthjälp för lägenheter och villor i Kristianstad, Åhus, Hässleholm och hela Skåne. RUT-avdrag tillgängligt.",
};

export default function BohagsflyttPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Bohagsflytt i Skåne – trygg & prisvärd flytthjälp
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Flyttivo är din lokala flyttfirma i Skåne som hjälper dig med
              trygg och effektiv bohagsflytt. Oavsett om du flyttar från en
              lägenhet eller villa, tar vi hand om allt från packning och
              lastning till transport och lossning. Vår erfarenhet och
              professionalism säkerställer att dina ägodelar hanteras med omsorg
              och att flytten går smidigt. Vi arbetar i hela Skåne, inklusive
              Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra och Sölvesborg. Som
              privatperson kan du dra nytta av RUT-avdrag på delar av
              arbetskostnaden vid flyttjänster, vilket gör flytten ännu mer
              prisvärd.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för din bohagsflytt?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Erfaren personal:</strong>{" "}
                  Vårt team har mångårig erfarenhet av flyttar och hanterar ditt
                  bohag med omsorg och professionalism.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Försäkrad transport:</strong>{" "}
                  Alla flyttar är försäkrade, så du kan känna dig trygg med att
                  dina ägodelar är skyddade.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibla lösningar:</strong>{" "}
                  Vi anpassar oss efter dina behov och tider, oavsett om det är
                  en lokal flytt eller längre transport.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tydliga priser:</strong>{" "}
                  Inga dolda kostnader – du får alltid ett tydligt prisförslag
                  innan flytten startar.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i en bohagsflytt?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Packning och förberedelse
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Packning av känsliga föremål</li>
                  <li>• Demontering av möbler vid behov</li>
                  <li>• Förpackning i kartonger och skydd</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Transport och hantering
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Lastning av alla möbler och kartonger</li>
                  <li>• Säker transport i våra flyttbilar</li>
                  <li>• Lossning på ny adress</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Montering och uppsättning
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Montering av demonterade möbler</li>
                  <li>• Uppsättning av sängar och större möbler</li>
                  <li>• Grundläggande inredning</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Ytterligare tjänster
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Bortforsling av grovsopor</li>
                  <li>• Magasinering vid behov</li>
                  <li>• Flyttstädning (kan bokas separat)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              RUT-avdrag för flyttjänster
            </h2>
            <p className="mb-4 text-slate-600">
              Som privatperson kan du dra nytta av RUT-avdrag på arbetskostnaden
              för flyttjänster. Detta innebär att du kan få tillbaka en del av
              kostnaden via skatteavdraget. Flyttivo hanterar RUT-avdraget direkt
              på fakturan, så du behöver inte göra något extra. Detta gör din
              flytt ännu mer prisvärd och är en av många fördelar med att välja
              en professionell flyttfirma.
            </p>
            <p className="text-sm text-slate-500">
              Kontakta oss för mer information om RUT-avdrag och hur det
              fungerar för din specifika flytt.
            </p>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka bohagsflytt i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på din
              bohagsflytt. Vi hjälper dig gärna med flytten!
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

