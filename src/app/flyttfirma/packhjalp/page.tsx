import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Packhjälp i Skåne – vi packar allt säkert åt dig | Flyttivo",
  description:
    "Professionell packhjälp i Skåne. Vi packar ditt bohag säkert och effektivt inför flytten. Erfaren personal, rätt material och trygg förpackning i hela Skåne.",
};

export default function PackhjalpPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Packhjälp i Skåne – vi packar allt säkert åt dig
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Packning är en av de mest tidskrävande delarna av en flytt, men
              med Flyttivos packhjälp blir det enkelt och stressfritt. Vårt
              erfarna team packar ditt bohag säkert och effektivt med rätt
              material och teknik. Vi vet exakt hur olika föremål ska packas
              för att skyddas under transporten, från känslig porslin till tunga
              böcker och elektronik. Flyttivo erbjuder packhjälp i hela Skåne,
              inklusive Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby,
              Hanaskog, Knislinge, Bromölla, Sibbhult, Osby, Glimåkra och
              Sölvesborg. Med professionell packhjälp sparar du tid, minskar
              risken för skador och kan fokusera på andra viktiga saker inför
              flytten. Vi tar med oss allt nödvändigt material och packar
              systematiskt rum för rum.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad packar vi?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kök och matsal
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Porslin, glas och serviser</li>
                  <li>• Köksredskap och bestick</li>
                  <li>• Kylskåp och frys (tomma)</li>
                  <li>• Småapparater och elektronik</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Vardagsrum och sovrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dekorationer och prydnadsföremål</li>
                  <li>• Bilder och speglar</li>
                  <li>• Textilier och kläder</li>
                  <li>• Böcker och media</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Elektronik och teknik
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• TV-apparater och skärmar</li>
                  <li>• Datorer och IT-utrustning</li>
                  <li>• Ljudanläggningar</li>
                  <li>• Känslig elektronik</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övrigt bohag
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Lampor och belysning</li>
                  <li>• Leksaker och spel</li>
                  <li>• Trädgårdsredskap</li>
                  <li>• Alla andra hushållsföremål</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för packhjälp?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Erfarenhet:</strong> Vi
                  vet exakt hur olika föremål ska packas för att skyddas under
                  transporten. Känslig porslin, elektronik och tunga böcker –
                  vi hanterar allt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt material:</strong> Vi
                  tar med oss allt nödvändigt material – kartonger i olika
                  storlekar, bubbelplast, skyddsmaterial, tejp och mer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Systematisk packning:</strong>{" "}
                  Vi packar rum för rum och märker alla kartonger tydligt, så
                  det är lätt att hitta saker när du flyttar in.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Professionell packning går mycket snabbare än om du gör det
                  själv, vilket ger dig mer tid till annat.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Trygghet:</strong> Med
                  rätt packning minskar risken för skador på dina ägodelar
                  avsevärt.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Så fungerar packhjälp
            </h2>
            <ol className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  1
                </span>
                <span>
                  <strong className="text-slate-900">Planering:</strong> Vi
                  går igenom ditt hem och planerar packningen tillsammans med
                  dig. Vi bestämmer vilka rum som ska packas först och vad som
                  behövs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  2
                </span>
                <span>
                  <strong className="text-slate-900">Material:</strong> Vi tar
                  med oss allt nödvändigt packmaterial – kartonger, skydd,
                  bubbelplast och mer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  3
                </span>
                <span>
                  <strong className="text-slate-900">Packning:</strong> Vi
                  packar systematiskt rum för rum, märker alla kartonger tydligt
                  och ser till att allt är säkert förpackat.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white">
                  4
                </span>
                <span>
                  <strong className="text-slate-900">Klar för transport:</strong>{" "}
                  När packningen är klar är allt redo för flytten. Kartongerna
                  är märkta och säkert förpackade.
                </span>
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka packhjälp i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på packhjälp.
              Vi hjälper dig gärna!
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

