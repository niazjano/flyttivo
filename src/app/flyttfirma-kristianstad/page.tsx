import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flyttfirma Kristianstad – Flytthjälp & bohagsflytt | Flyttivo",
  description:
    "Flyttivo är en lokal flyttfirma i Kristianstad. Vi hjälper med trygg flytthjälp, bohagsflytt och flyttstädning i Kristianstad, Åhus, Hässleholm och omnejd. RUT-avdrag ingår.",
};

export default function FlyttfirmaKristianstadPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Flyttfirma i Kristianstad – trygg & prisvärd flytthjälp
            </h1>
            <div className="space-y-3 text-base leading-relaxed text-slate-600">
              <p>
                Flyttivo är en lokal flyttfirma med stark närvaro i Kristianstad
                och omnejd. Vi hjälper privatpersoner och företag med trygg
                bohagsflytt, bärhjälp och transport. Oavsett om du flyttar från
                lägenhet, villa eller kontor i Kristianstad, så tar vi hand om
                hela flytten från början till slut.
              </p>
              <p>
                Vi är också aktiva i närliggande orter som Åhus, Hässleholm,
                Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla, Sibbhult,
                Osby, Glimåkra och Sölvesborg. Som privatperson kan du använda
                RUT-avdrag på upp till 50% av arbetskostnaden vid flyttjänster –
                vi sköter avdraget direkt på fakturan.
              </p>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Flytthjälp i Kristianstad
            </h2>
            <div className="space-y-3 text-base text-slate-600">
              <p>
                Vi erbjuder komplett flytthjälp i Kristianstad med erfaren
                personal och rätt utrustning. Våra flyttkillar är försäkrade och
                arbetar strukturerat för att säkerställa att dina tillhörigheter
                kommer fram i samma skick som de lämnade.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Bohagsflytt:
                    </strong>{" "}
                    Vi bär, lastar och transporterar hela ditt bohag från gammal
                    till ny adress.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Bärhjälp & transport:
                    </strong>{" "}
                    Professionell hantering av möbler, vitvaror och känsliga
                    föremål.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Packhjälp & montering:
                    </strong>{" "}
                    Vi kan hjälpa till med packning och montering av möbler om
                    du önskar.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      RUT-avdrag:
                    </strong>{" "}
                    Som privatperson betalar du bara 50% av arbetskostnaden efter
                    RUT-avdrag.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Lokalkännedom:
                    </strong>{" "}
                    Vi känner Kristianstad väl och planerar effektiva rutter och
                    tidsplaner.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Flyttstädning i Kristianstad
            </h2>
            <div className="space-y-3 text-base text-slate-600">
              <p>
                Många kunder i Kristianstad väljer att kombinera flytt med
                flyttstädning. Det blir enklare för dig och du får en
                grundligare städning som uppfyller mäklarnas krav vid
                bostadsförsäljning.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-2 text-base text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    Noggrann flyttstädning enligt mäklarnas riktlinjer med fokus
                    på kök, badrum och alla ytor.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    Nöjd-kund-garanti – vi återkommer om något inte är till
                    belåtenhet.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    Möjlighet till fönsterputs för att bostaden ska se
                    skinande ren ut.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sky-600">•</span>
                  <span>
                    Skönt att slippa tänka på besiktning – vi tar hand om allt
                    så att du kan fokusera på din nya bostad.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Boka flyttfirma i Kristianstad
            </h2>
            <p className="mb-4 text-base text-slate-600">
              Kontakta oss för en kostnadsfri offert på din flytt i Kristianstad
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
