import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kontorsstädning i Skåne för företag | Flyttivo",
  description:
    "Professionell kontorsstädning i Skåne för företag. Vi städar kontor, butiker och kommersiella lokaler. Viktigt för hygien, hälsa och professionell miljö. Flexibla tider.",
};

export default function KontorsstadningPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Kontorsstädning i Skåne för företag
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              En ren och välstädad kontorsmiljö är viktig för både hälsa,
              produktivitet och professionell image. Flyttivo erbjuder professionell
              kontorsstädning i hela Skåne för företag, organisationer och
              kommersiella lokaler. Vårt erfarna team städar kontor, butiker,
              väntrum, konferensrum och övriga arbetsutrymmen med rätt produkter
              och teknik. Vi arbetar i Kristianstad, Åhus, Hässleholm, Östra
              Göinge, Broby, Hanaskog, Knislinge, Bromölla, Sibbhult, Osby,
              Glimåkra, Sölvesborg och resten av Skåne. Kontorsstädning är
              viktigt för att hålla en hygienisk miljö, minska sjukfrånvaro och
              skapa en professionell miljö för både anställda och besökare. Med
              Flyttivo får du regelbunden kontorsstädning som anpassas efter
              ditt företags behov och tider.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför är kontorshygien viktigt?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Hälsa
                </h3>
                <p className="text-sm text-slate-600">
                  En ren kontorsmiljö minskar risken för sjukdomar och
                  sjukfrånvaro bland anställda, vilket är viktigt för både
                  hälsa och produktivitet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Professionell image
                </h3>
                <p className="text-sm text-slate-600">
                  Ett rent och välstädat kontor ger ett professionellt intryck
                  för både anställda och besökare, vilket är viktigt för
                  företagets image.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Produktivitet
                </h3>
                <p className="text-sm text-slate-600">
                  En ren och organiserad miljö bidrar till bättre
                  produktivitet och välmående för anställda.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i kontorsstädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kontorsutrymmen
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dammtorkning av skrivbord och ytor</li>
                  <li>• Rengöring av datorer och skärmar</li>
                  <li>• Tömning av papperskorgar</li>
                  <li>• Rengöring av telefoner</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Gemensamma utrymmen
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av kök och fikarum</li>
                  <li>• Rengöring av toaletter</li>
                  <li>• Rengöring av väntrum och reception</li>
                  <li>• Rengöring av konferensrum</li>
                  <li>• Rengöring av trappor och hallar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Golv och ytor
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dammsugning av alla golv</li>
                  <li>• Moppning av hårdgolv</li>
                  <li>• Rengöring av mattor (vid behov)</li>
                  <li>• Rengöring av lister</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övrigt
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av dörrar och dörrkarmar</li>
                  <li>• Borttagning av spindelväv</li>
                  <li>• Tömning av papperskorgar</li>
                  <li>• Anpassning efter dina önskemål</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för kontorsstädning?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Flexibla tider:</strong>{" "}
                  Vi kan städa när det passar ditt företag – kvällar, helger
                  eller efter verksamhetens öppettider.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Pålitlig personal:</strong>{" "}
                  Vårt team är pålitligt, professionellt och respekterar ditt
                  kontor och dina anställda.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Anpassad service:</strong>{" "}
                  Vi anpassar städningen efter ditt företags specifika behov och
                  önskemål.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Miljövänliga produkter:</strong>{" "}
                  Vi använder miljövänliga och effektiva städprodukter som är
                  säkra för både människor och miljön.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Regelbundenhet:</strong>{" "}
                  Vi kan komma regelbundet – varje dag, varje vecka eller
                  varannan vecka, beroende på dina behov.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka kontorsstädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              kontorsstädning. Vi hjälper ditt företag gärna!
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

