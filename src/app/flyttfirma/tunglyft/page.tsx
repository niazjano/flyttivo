import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Tunglyft & pianoflytt i Skåne | Flyttivo",
  description:
    "Professionell tunglyft och pianoflytt i Skåne. Vi flyttar pianon, kassaskåp, säkerhetsdörrar och andra tunga föremål säkert med rätt utrustning. Försäkrad transport.",
};

export default function TunglyftPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Tunglyft & pianoflytt i Skåne
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Vissa föremål är för tunga och känsliga för att flyttas utan
              professionell hjälp. Flyttivo specialiserar sig på tunglyft och
              pianoflytt i hela Skåne. Vi har erfarenhet och rätt utrustning
              för att flytta pianon, kassaskåp, säkerhetsdörrar, tunga
              maskiner och andra tunga föremål säkert och försiktigt. Vårt team
              har kunskap om hur dessa föremål ska hanteras för att undvika
              skador på både föremålet och omgivningen. Vi arbetar i
              Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg och
              resten av Skåne. Tunglyft kräver rätt teknik, utrustning och
              försäkring – allt som Flyttivo erbjuder för din trygghet.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vilka föremål flyttar vi?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Pianon och musikinstrument
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Flyglar och pianon</li>
                  <li>• Upright-pianon</li>
                  <li>• Digitala pianon</li>
                  <li>• Orglar och andra tunga instrument</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Kassaskåp och säkerhetsutrustning
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Kassaskåp och värdeskåp</li>
                  <li>• Säkerhetsdörrar</li>
                  <li>• Bankvalv</li>
                  <li>• Tunga förvaringsskåp</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Maskiner och utrustning
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Träningsmaskiner och gymutrustning</li>
                  <li>• Snickerimaskiner</li>
                  <li>• Tunga verktyg och utrustning</li>
                  <li>• Produktionsmaskiner</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Övriga tunga föremål
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Tunga stenmöbler</li>
                  <li>• Stora skulpturer</li>
                  <li>• Tunga köksapparater</li>
                  <li>• Specialmöbler och antikviteter</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Säkerhet och utrustning
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Rätt utrustning:</strong>{" "}
                  Vi har tillgång till flyttdolly, lyftremmar, skydd, mattor
                  och annan specialutrustning för tunglyft.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Erfaren personal:</strong>{" "}
                  Vårt team har lång erfarenhet av tunglyft och vet exakt hur
                  olika föremål ska hanteras säkert.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Försäkring:</strong> Alla
                  flyttar är försäkrade, så du är skyddad om något skulle hända
                  under transporten.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Skydd av omgivningen:</strong>{" "}
                  Vi skyddar dörrar, väggar, golv och trappor under flytten för
                  att undvika skador.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Planering:</strong> Vi
                  planerar flytten noggrant för att säkerställa att allt går
                  smidigt och säkert.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Särskilt för pianoflytt
            </h2>
            <p className="mb-4 text-slate-600">
              Pianon är känsliga instrument som kräver särskild omsorg vid
              flytt. Vi har erfarenhet av att flytta både flyglar och
              upright-pianon och vet exakt hur de ska hanteras för att undvika
              skador på instrumentet. Vi använder specialutrustning och
              skyddsmaterial för att säkerställa att pianot kommer fram i
              samma skick som det lämnade.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Försiktig hantering med rätt teknik</li>
              <li>• Skydd av pianot under transporten</li>
              <li>• Säker fastsättning i flyttbilen</li>
              <li>• Försiktig lossning och uppsättning</li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka tunglyft i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på tunglyft
              eller pianoflytt. Vi hjälper dig gärna!
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

