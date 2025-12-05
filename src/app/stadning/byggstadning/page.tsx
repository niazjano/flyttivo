import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Byggstädning & renoveringsstädning i Skåne | Flyttivo",
  description:
    "Professionell byggstädning och renoveringsstädning i Skåne. Vi tar bort damm, byggrester, smuts och skräp efter renovering eller byggnation. Grundlig rengöring.",
};

export default function ByggstadningPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Byggstädning & renoveringsstädning i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Efter renovering eller byggnation behövs ofta grundlig byggstädning
              för att ta bort damm, byggrester, smuts och skräp. Flyttivo erbjuder
              professionell byggstädning och renoveringsstädning i hela Skåne där
              vi gör en grundlig rengöring av alla utrymmen som påverkats av
              renoveringen. Vårt erfarna team har rätt utrustning och produkter
              för att hantera byggdamm, färgfläckar, kalkrester och annan smuts
              som uppstår vid renovering. Vi arbetar i Kristianstad, Åhus,
              Hässleholm, Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla,
              Sibbhult, Osby, Glimåkra, Sölvesborg och resten av Skåne.
              Byggstädning är viktigt för att bostaden eller lokalen ska vara
              redo att användas igen efter renoveringen. Med Flyttivos
              byggstädning får du ett helt rent utrymme där allt damm, smuts och
              byggrester är borttaget.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i byggstädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Borttagning av byggrester
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Borttagning av damm och byggdamm</li>
                  <li>• Borttagning av byggrester och skräp</li>
                  <li>• Borttagning av färgfläckar</li>
                  <li>• Borttagning av kalkrester</li>
                  <li>• Borttagning av fogrester</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Grundlig rengöring
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av alla ytor och hörn</li>
                  <li>• Rengöring av fönster och fönsterkarmar</li>
                  <li>• Rengöring av dörrar och dörrkarmar</li>
                  <li>• Rengöring av lister och golvskenor</li>
                  <li>• Rengöring av väggar (vid behov)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kök och badrum
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av köksluckor och ytor</li>
                  <li>• Rengöring av spis, ugn och mikro</li>
                  <li>• Rengöring av toalett, handfat och badkar/dusch</li>
                  <li>• Avkalkning av kranar</li>
                  <li>• Rengöring av alla ytor</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Golv och ytor
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Grundlig dammsugning</li>
                  <li>• Moppning av hårdgolv</li>
                  <li>• Rengöring av mattor (vid behov)</li>
                  <li>• Borttagning av alla spår av renovering</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför är byggstädning viktigt?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Hälsa:</strong> Byggdamm
                  och byggrester kan vara skadliga för hälsan. Grundlig
                  byggstädning tar bort allt damm och gör utrymmet säkert att
                  använda.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Redo att användas:</strong>{" "}
                  Efter byggstädning är utrymmet redo att användas igen, utan
                  rester av renoveringen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Professionell standard:</strong>{" "}
                  Professionell byggstädning säkerställer att allt är grundligt
                  rengjort enligt hög standard.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt utrustning:</strong>{" "}
                  Vi har rätt utrustning och produkter för att hantera byggdamm
                  och byggrester effektivt.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Professionell byggstädning går mycket snabbare än om du gör
                  det själv.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              När behövs byggstädning?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Efter renovering
                </h3>
                <p className="text-sm text-slate-600">
                  Efter renovering av kök, badrum, vardagsrum eller andra rum
                  behövs ofta grundlig byggstädning för att ta bort allt damm
                  och byggrester.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Efter byggnation
                </h3>
                <p className="text-sm text-slate-600">
                  Efter nybyggnation eller större ombyggnation behövs omfattande
                  byggstädning för att göra utrymmet redo att användas.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Efter målning
                </h3>
                <p className="text-sm text-slate-600">
                  Efter målning kan det finnas färgfläckar, damm och målrester
                  som behöver tas bort med professionell byggstädning.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Efter installation
                </h3>
                <p className="text-sm text-slate-600">
                  Efter installation av kök, badrum eller annan utrustning kan
                  det finnas rester och smuts som behöver tas bort.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka byggstädning i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              byggstädning. Vi hjälper dig gärna!
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

