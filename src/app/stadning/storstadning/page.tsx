import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storstädning i Skåne – djupgående rengöring | Flyttivo",
  description:
    "Professionell storstädning i Skåne. Djupgående rengöring av alla rum med fokus på detaljer. Perfekt inför högtider, efter renovering eller för en fräsch start. RUT-avdrag tillgängligt.",
};

export default function StorstadningPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Storstädning i Skåne – djupgående rengöring
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Storstädning är en grundlig och djupgående rengöring av hela hemmet
              som går längre än vanlig hemstädning. Flyttivo erbjuder professionell
              storstädning i hela Skåne där vi städar alla rum i detalj, från
              kök och badrum till vardagsrum, sovrum och övriga utrymmen.
              Storstädning är perfekt inför högtider, efter renovering, när du
              flyttar in i ny bostad eller när du bara vill ha en fräsch start.
              Vi arbetar i Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby,
              Hanaskog, Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg
              och resten av Skåne. Med Flyttivos storstädning får du ett helt
              rent hem där alla ytor, hörn och detaljer är noggrant rengjorda.
              Som privatperson kan du dra nytta av RUT-avdrag på upp till 50 %
              av arbetskostnaden för städning.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vilka rum ingår i storstädning?
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
                  <li>• Rengöring av diskbänk, kranar och kranfilter</li>
                  <li>• Rengöring av köksbord och alla ytor</li>
                  <li>• Rengöring av fönster, fönsterkarmar och fönsterbräden</li>
                  <li>• Rengöring av lister och golvskenor</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Badrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av toalett, handfat och badkar/dusch</li>
                  <li>• Avkalkning av kranar, duschmunstycke och glas</li>
                  <li>• Rengöring av speglar och glasytor</li>
                  <li>• Rengöring av badrumsskåp inuti och utvändigt</li>
                  <li>• Rengöring av väggar och golv</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                  <li>• Rengöring av lister</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Vardagsrum och sovrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dammtorkning av alla ytor och hörn</li>
                  <li>• Rengöring av fönster, fönsterkarmar och fönsterbräden</li>
                  <li>• Rengöring av dörrar och dörrkarmar</li>
                  <li>• Rengöring av lister och golvskenor</li>
                  <li>• Rengöring av väggar (vid behov)</li>
                  <li>• Rengöring av eluttag och strömbrytare</li>
                  <li>• Dammsugning och moppning</li>
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
                  <li>• Borttagning av spindelväv</li>
                  <li>• Rengöring av lampor och belysning</li>
                  <li>• Kontroll av att allt är rent</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Fördelar med storstädning
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Djupgående rengöring:</strong>{" "}
                  Alla ytor, hörn och detaljer städas noggrant, inte bara
                  ytligt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Fräsch start:</strong>{" "}
                  Efter storstädning känns hemmet helt fräscht och rent, vilket
                  ger en bättre miljö att leva i.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Hälsa:</strong> Ett
                  grundligt städat hem bidrar till bättre hälsa genom att
                  minska damm, allergener och bakterier.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Med professionell storstädning sparar du mycket tid jämfört
                  med att göra det själv.
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
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              När är storstädning användbart?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Inför högtider
                </h3>
                <p className="text-sm text-slate-600">
                  Perfekt inför jul, påsk eller andra högtider när du vill ha
                  hemmet helt rent och fräscht för gäster.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Efter renovering
                </h3>
                <p className="text-sm text-slate-600">
                  Efter renovering behövs ofta storstädning för att ta bort
                  damm, smuts och byggrester.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Inför flytt
                </h3>
                <p className="text-sm text-slate-600">
                  När du flyttar in i ny bostad kan storstädning ge en fräsch
                  start i det nya hemmet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Fräsch start
                </h3>
                <p className="text-sm text-slate-600">
                  När du bara vill ha en grundlig rengöring för en fräsch start
                  eller när det har gått lång tid sedan senaste städningen.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka storstädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              storstädning. Vi hjälper dig gärna!
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

