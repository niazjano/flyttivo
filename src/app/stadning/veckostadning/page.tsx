import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Veckostädning i Skåne | Flyttivo",
  description:
    "Professionell veckostädning i Skåne. Vi kommer varje vecka och håller ditt hem rent och fräscht. Perfekt för familjer med barn. RUT-avdrag tillgängligt.",
};

export default function VeckostadningPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Veckostädning i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Veckostädning är perfekt för hem med högt städbehov, som familjer
              med barn eller hem där det är viktigt att hålla allt rent och
              fräscht. Flyttivo erbjuder professionell veckostädning i hela
              Skåne där vi kommer varje vecka och gör en grundlig städning av
              ditt hem. Vårt erfarna team städar systematiskt med rätt produkter
              och teknik, så att ditt hem alltid håller hög standard. Vi arbetar
              i Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg och
              resten av Skåne. Med veckostädning får du regelbunden städning som
              håller hemmet rent och fräscht, vilket bidrar till en bättre
              hälsa och välmående för hela familjen. Som privatperson kan du dra
              nytta av RUT-avdrag på upp till 50 % av arbetskostnaden för
              städning, vilket gör veckostädning prisvärt.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad städar vi varje vecka?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kök
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av köksluckor och ytor</li>
                  <li>• Rengöring av spis, ugn och mikro</li>
                  <li>• Rengöring av diskbänk och kranar</li>
                  <li>• Rengöring av köksbord</li>
                  <li>• Tömning av diskmaskin (vid behov)</li>
                  <li>• Rengöring av kylskåp utvändigt</li>
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
                  <li>• Bytning av handdukar (vid behov)</li>
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
                  <li>• Bäddning av sängar (vid behov)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övrigt
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av trappor och hallar</li>
                  <li>• Tömning av papperskorgar</li>
                  <li>• Borttagning av spindelväv</li>
                  <li>• Rengöring av balkonger (vid behov)</li>
                  <li>• Anpassning efter dina önskemål</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för veckostädning?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Regelbundenhet:</strong>{" "}
                  Vi kommer varje vecka samma dag och tid, så du vet alltid när
                  vi är där.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Pålitlig personal:</strong>{" "}
                  Du får samma personer som kommer regelbundet, så de lär sig
                  ditt hem och dina önskemål.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Med veckostädning får du mer tid till det som är viktigt för
                  dig, som familj, arbete eller fritid.
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
                  <strong className="text-slate-900">Hälsa:</strong> Ett rent
                  hem bidrar till bättre hälsa och välmående för hela familjen.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Perfekt för familjer med barn
            </h2>
            <p className="mb-4 text-slate-600">
              Veckostädning är särskilt populärt för familjer med barn, där
              städbehovet ofta är högre. Med regelbunden veckostädning håller
              hemmet rent och fräscht trots det höga användandet, vilket ger
              både föräldrar och barn en bättre miljö att leva i.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Mindre stress för föräldrar</li>
              <li>• Renare miljö för barnen</li>
              <li>• Mer tid till familjen</li>
              <li>• Bättre hälsa och välmående</li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka veckostädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              veckostädning. Vi hjälper dig gärna!
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

