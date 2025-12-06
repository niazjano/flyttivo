import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flyttstädning i Skåne – godkänt vid besiktning | Flyttivo",
  description:
    "Professionell flyttstädning i Skåne. Grundlig städning enligt mäklarnas riktlinjer med städgaranti. Vi städar kök, badrum, vardagsrum och alla rum. RUT-avdrag tillgängligt.",
};

export default function FlyttstadningPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Flyttstädning i Skåne – godkänt vid besiktning
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Flyttstädning är en viktig del av flytten och kräver noggrannhet
              för att godkännas vid besiktning. Flyttivo erbjuder professionell
              flyttstädning i hela Skåne som följer mäklarnas riktlinjer och
              säkerställer att bostaden är redo för nya hyresgäster eller
              köpare. Vårt erfarna team städar grundligt med rätt produkter och
              teknik, från kök och badrum till vardagsrum och alla andra rum. Vi
              arbetar i Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby,
              Hanaskog, Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg
              och resten av Skåne. Med Flyttivos flyttstädning får du
              städgaranti, vilket innebär att vi återkommer om något inte är
              tillräckligt rent vid besiktning. Som privatperson kan du dra
              nytta av RUT-avdrag på upp till 50 % av arbetskostnaden för
              städning.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i flyttstädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kök
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av köksluckor inuti och utvändigt</li>
                  <li>• Rengöring av köksfläkt och filter</li>
                  <li>• Rengöring av spis, ugn och mikro</li>
                  <li>• Rengöring av kylskåp och frys (tomma)</li>
                  <li>• Rengöring av diskbänk och kranar</li>
                  <li>• Rengöring av köksbord och ytor</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Badrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av toalett, handfat och badkar/dusch</li>
                  <li>• Avkalkning av kranar och duschmunstycke</li>
                  <li>• Rengöring av speglar och glasytor</li>
                  <li>• Rengöring av badrumsskåp inuti och utvändigt</li>
                  <li>• Rengöring av väggar och golv</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Vardagsrum och sovrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dammtorkning av alla ytor</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                  <li>• Rengöring av dörrar och dörrkarmar</li>
                  <li>• Rengöring av lister och golvskenor</li>
                  <li>• Rengöring av väggar (vid behov)</li>
                  <li>• Rengöring av eluttag och strömbrytare</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övrigt
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av trappor och hallar</li>
                  <li>• Rengöring av balkonger och altaner</li>
                  <li>• Rengöring av garderober och förråd</li>
                  <li>• Golvsköljning och dammsugning</li>
                  <li>• Borttagning av spindelväv</li>
                  <li>• Kontroll av att allt är rent</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Städgaranti – nöjd-kund-garanti
            </h2>
            <p className="mb-4 text-slate-600">
              Flyttivo erbjuder städgaranti på all flyttstädning. Detta innebär
              att om något inte är tillräckligt rent vid besiktning, återkommer
              vi kostnadsfritt och städar det som behöver göras om. Vi vill att
              du ska vara nöjd och att bostaden ska godkännas vid besiktning
              utan problem.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Vi återkommer kostnadsfritt om något behöver göras om</li>
              <li>• Vi följer mäklarnas riktlinjer för flyttstädning</li>
              <li>• Vi kontrollerar att allt är rent innan vi lämnar</li>
              <li>• Du kan vara trygg med att bostaden är redo för besiktning</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för flyttstädning?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Erfarenhet:</strong> Vi
                  har städat många bostäder inför besiktning och vet exakt vad
                  som krävs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Städgaranti:</strong> Vi
                  återkommer kostnadsfritt om något behöver göras om.
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
                  kan städa när det passar dig, även kvällar och helger.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka flyttstädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              flyttstädning. Vi hjälper dig gärna!
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

