import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Städfirma Kristianstad – Flyttstädning & hemstädning | Flyttivo",
  description:
    "Flyttivo är en lokal städfirma i Kristianstad. Vi erbjuder flyttstädning, hemstädning och veckostädning i Kristianstad, Åhus, Hässleholm och omnejd. RUT-avdrag ingår.",
};

export default function StadningKristianstadPage() {
  return (
    <div className="space-y-10">
          <header className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Städfirma i Kristianstad – flyttstädning & hemstädning
            </h1>
            <div className="space-y-3 text-base leading-relaxed text-slate-600">
              <p>
                Flyttivo är din lokala städpartner i Kristianstad. Vi hjälper
                privatpersoner och företag med noggrann flyttstädning,
                återkommande hemstädning och veckostädning. Vårt mål är att ge
                dig ett skinande rent hem eller kontor utan att du behöver
                tänka på det.
              </p>
              <p>
                Vi är aktiva i Kristianstad och omnejd, inklusive Åhus,
                Hässleholm, Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla,
                Sibbhult, Osby, Glimåkra och Sölvesborg. Som privatperson kan
                du använda RUT-avdrag på upp till 50% av arbetskostnaden för
                städning – vi hanterar avdraget åt dig direkt på fakturan.
              </p>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Flyttstädning i Kristianstad
            </h2>
            <div className="space-y-3 text-base text-slate-600">
              <p>
                När du säljer eller lämnar en bostad i Kristianstad krävs ofta
                en grundlig flyttstädning. Vi följer mäklarnas riktlinjer och
                säkerställer att bostaden är redo för besiktning och
                överlåtelse.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Köksrengöring:
                    </strong>{" "}
                    Alla skåp, lådor, vitvaror och ytor rengörs noggrant.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Badrum:
                    </strong>{" "}
                    Toalett, dusch, badkar, handfat och alla kalkfläckar tas
                    bort.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Skåp, lådor & garderober:
                    </strong>{" "}
                    Alla inre ytor rengörs och torkas av.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Golv & ytor:
                    </strong>{" "}
                    Alla golv dammsuges, moppas eller tvättas. Dörrar, fönster
                    och lister rengörs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Fönsterputs:
                    </strong>{" "}
                    Möjlighet till fönsterputs för ett extra skinande resultat.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Hemstädning & veckostädning i Kristianstad
            </h2>
            <div className="space-y-3 text-base text-slate-600">
              <p>
                För många familjer i Kristianstad blir regelbunden hemstädning en
                viktig del av vardagen. Vi anpassar städningen efter dina
                behov och kan komma varje vecka, varannan vecka eller en gång i
                månaden.
              </p>
              <p>
                Våra städare arbetar strukturerat med checklistor och
                kvalitetskontroller för att säkerställa att ingenting glöms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Veckostädning:
                    </strong>{" "}
                    Regelbunden städning varje vecka för att hålla hemmet rent
                    och fräscht.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Varannan vecka:
                    </strong>{" "}
                    Ett populärt alternativ som passar många hushåll.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Månadsstädning:
                    </strong>{" "}
                    En grundligare städning en gång per månad.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Anpassad efter behov:
                    </strong>{" "}
                    Vi diskuterar vad som är viktigast för dig och anpassar
                    städningen därefter.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              RUT-avdrag på städning i Kristianstad
            </h2>
            <div className="space-y-3 text-base text-slate-600">
              <p>
                Som privatperson kan du använda RUT-avdrag på upp till 50% av
                arbetskostnaden för städning. Det betyder att om städningen
                kostar 1000 kr i arbetslön, betalar du bara 500 kr efter
                RUT-avdrag.
              </p>
              <p>
                Vi hanterar hela RUT-processen åt dig. Du behöver inte göra
                något själv – vi sköter ansökan och drar av skattereduktionen
                direkt på fakturan. Det gör det enkelt och smidigt för dig.
              </p>
              <p>
                RUT-avdraget gäller för både flyttstädning och återkommande
                hemstädning, så länge det är privatpersoner som anlitar oss.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Boka städhjälp i Kristianstad
            </h2>
            <p className="mb-4 text-base text-slate-600">
              Kontakta oss för en kostnadsfri offert på städning i Kristianstad
              eller omnejd. Vi återkommer oftast samma dag med ett tydligt
              prisförslag.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0447853002"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Ring 044–785 3002
              </a>
              <a
                href="mailto:info@flyttivo.se"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
              >
                Maila info@flyttivo.se
              </a>
            </div>
          </section>
      </div>
  );
}

