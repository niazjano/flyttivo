import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montering & demontering vid flytt i Skåne | Flyttivo",
  description:
    "Professionell montering och demontering av möbler vid flytt i Skåne. Vi monterar och demonterar IKEA-möbler, sängar, bokhyllor och mer. Snabb och säker service.",
};

export default function MonteringPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Montering & demontering vid flytt
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Många möbler behöver demonteras innan flytten och monteras igen
              på den nya adressen. Flyttivo hjälper dig med professionell
              montering och demontering av möbler vid flytt i hela Skåne. Vi har
              erfarenhet av alla typer av möbler – från IKEA-möbler och
              bokhyllor till sängar, skrivbord och köksmöbler. Vårt team har
              rätt verktyg och kunskap för att hantera både enkel och mer
              komplex montering. Vi arbetar i Kristianstad, Åhus, Hässleholm,
              Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla, Sibbhult,
              Osby, Glimåkra, Sölvesborg och resten av Skåne. Montering och
              demontering är viktigt för att möbler ska kunna flyttas säkert och
              för att de ska passa genom dörrar och trappor. Med Flyttivo får
              du professionell hjälp som gör hela processen enklare.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vilka möbler hanterar vi?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  IKEA-möbler och plattmöbler
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Bokhyllor (Billy, Hemnes, etc.)</li>
                  <li>• Skrivbord och kontorsmöbler</li>
                  <li>• Köksmöbler och köksluckor</li>
                  <li>• Sängar och sängramar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Sängar och sovrumsmöbler
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Sängramar och sänggavlar</li>
                  <li>• Sänglådor och sängbottnar</li>
                  <li>• Garderober och klädkammare</li>
                  <li>• Byråer och kommoder</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Köksmöbler
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Köksluckor och skåp</li>
                  <li>• Köksöar och bänkskivor</li>
                  <li>• Köksapparater (vid behov)</li>
                  <li>• Kökshyllor</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övriga möbler
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Skrivbord och kontorsmöbler</li>
                  <li>• TV-bänkar och mediahyllor</li>
                  <li>• Bord och bänkar</li>
                  <li>• Speciella möbler och inbyggnadsmöbler</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför är montering och demontering viktigt?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Säker transport:</strong>{" "}
                  Demonterade möbler tar mindre plats och är lättare att
                  transportera säkert, vilket minskar risken för skador.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Får plats genom dörrar:</strong>{" "}
                  Många möbler är för stora för att passa genom dörrar och
                  trappor när de är monterade. Demontering löser detta problem.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt montering:</strong>{" "}
                  Professionell montering säkerställer att möbler monteras korrekt
                  och säkert på den nya adressen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Erfaren personal monterar och demonterar snabbare än om du gör
                  det själv.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt verktyg:</strong> Vi
                  har alla nödvändiga verktyg och skruvar för att hantera olika
                  typer av möbler.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Så fungerar montering och demontering
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Demontering
                </h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li>1. Vi går igenom vilka möbler som behöver demonteras</li>
                  <li>2. Vi demonterar möblerna försiktigt och systematiskt</li>
                  <li>3. Vi förvarar alla skruvar och delar säkert</li>
                  <li>4. Vi packar delarna för säker transport</li>
                </ol>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Montering
                </h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li>1. Vi transporterar delarna till den nya adressen</li>
                  <li>2. Vi monterar möblerna enligt instruktioner</li>
                  <li>3. Vi kontrollerar att allt är säkert monterat</li>
                  <li>4. Vi städar upp efter oss</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka montering & demontering i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på montering
              och demontering. Vi hjälper dig gärna!
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

