import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hemstädning i Skåne – anpassad efter ditt hem | Flyttivo",
  description:
    "Professionell hemstädning i Skåne. Återkommande städning anpassad efter ditt hem – veckovis, varannan vecka eller månadsvis. RUT-avdrag tillgängligt.",
};

export default function HemstadningPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Hemstädning i Skåne – anpassad efter ditt hem
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Flyttivo erbjuder professionell hemstädning i hela Skåne som är
              anpassad efter ditt hem och dina behov. Oavsett om du behöver
              städning varje vecka, varannan vecka eller en gång i månaden, kan
              vi skräddarsy en lösning som passar dig. Vårt erfarna team kommer
              till ditt hem och städar grundligt med rätt produkter och teknik,
              så att du kan fokusera på det som är viktigt för dig. Vi arbetar
              i Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg och
              resten av Skåne. Hemstädning är viktigt för att hålla hemmet rent
              och fräscht, vilket bidrar till en bättre hälsa och välmående.
              Som privatperson kan du dra nytta av RUT-avdrag på upp till 50 %
              av arbetskostnaden för städning, vilket gör hemstädning ännu mer
              prisvärt.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i hemstädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kök
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av köksluckor och ytor</li>
                  <li>• Rengöring av spis och mikro</li>
                  <li>• Rengöring av diskbänk och kranar</li>
                  <li>• Tömning av diskmaskin (vid behov)</li>
                  <li>• Rengöring av köksbord</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Badrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av toalett, handfat och badkar/dusch</li>
                  <li>• Avkalkning av kranar</li>
                  <li>• Rengöring av speglar</li>
                  <li>• Rengöring av badrumsskåp</li>
                  <li>• Rengöring av golv</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Vardagsrum och sovrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dammtorkning av alla ytor</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                  <li>• Rengöring av dörrar</li>
                  <li>• Rengöring av lister</li>
                  <li>• Dammsugning och moppning</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övrigt
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av trappor och hallar</li>
                  <li>• Rengöring av balkonger (vid behov)</li>
                  <li>• Tömning av papperskorgar</li>
                  <li>• Borttagning av spindelväv</li>
                  <li>• Anpassning efter dina önskemål</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Veckovis, varannan vecka eller månadsvis
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Veckostädning
                </h3>
                <p className="text-sm text-slate-600">
                  Perfekt för familjer med barn eller hem med högt städbehov.
                  Vi kommer varje vecka och håller hemmet rent och fräscht.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Varannan vecka
                </h3>
                <p className="text-sm text-slate-600">
                  Ett populärt val för många hem. Vi kommer varannan vecka och
                  gör en grundlig städning som håller hemmet rent.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Månadsstädning
                </h3>
                <p className="text-sm text-slate-600">
                  För hem med lägre städbehov. Vi kommer en gång i månaden och
                  gör en grundlig städning.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Vi kan också anpassa städningen efter dina specifika behov och
              önskemål. Kontakta oss så diskuterar vi vad som passar bäst för
              ditt hem.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för hemstädning?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Anpassad service:</strong>{" "}
                  Vi anpassar städningen efter ditt hem och dina önskemål.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Pålitlig personal:</strong>{" "}
                  Vårt team är pålitligt, professionellt och respekterar ditt
                  hem.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">RUT-avdrag:</strong> Som
                  privatperson kan du dra nytta av RUT-avdrag på upp till 50 %
                  av arbetskostnaden.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Miljövänliga produkter:</strong>{" "}
                  Vi använder miljövänliga och effektiva städprodukter.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibla tider:</strong> Vi
                  kan komma när det passar dig, oavsett om det är på dagen,
                  kvällen eller helgen.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka hemstädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              hemstädning. Vi hjälper dig gärna!
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

