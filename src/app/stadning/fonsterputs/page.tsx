import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Fönsterputs i Skåne – klara & rena fönster | Flyttivo",
  description:
    "Professionell fönsterputs i Skåne. Vi putsar fönster, fönsterkarmar, fönsterbräden och glasdörrar. Inkluderar både insida och utsida. RUT-avdrag tillgängligt.",
};

export default function FonsterputsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Fönsterputs i Skåne – klara & rena fönster
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Klara och rena fönster gör stor skillnad för både ljusinsläpp och
              utseende. Flyttivo erbjuder professionell fönsterputs i hela
              Skåne där vi putsar fönster, fönsterkarmar, fönsterbräden och
              glasdörrar både inuti och utvändigt. Vårt erfarna team har rätt
              utrustning och teknik för att få fönstren skinande rena utan
              fläckar eller strimmor. Vi arbetar i Kristianstad, Åhus,
              Hässleholm, Östra Göinge, Broby, Hanaskog, Knislinge, Bromölla,
              Sibbhult, Osby, Glimåkra, Sölvesborg och resten av Skåne.
              Fönsterputs är viktigt för att maximera ljusinsläppet, förbättra
              utsikten och ge hemmet ett fräscht och välstädat intryck. Som
              privatperson kan du dra nytta av RUT-avdrag på upp till 50 % av
              arbetskostnaden för fönsterputs.
            </p>
          </header>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Vad ingår i fönsterputs?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Fönster
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Putsning av fönster både inuti och utvändigt</li>
                  <li>• Borttagning av fläckar och strimmor</li>
                  <li>• Putsning av glasytor</li>
                  <li>• Putsning av fönsterkarmar</li>
                  <li>• Putsning av fönsterbräden</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Glasdörrar och glasväggar
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Putsning av glasdörrar</li>
                  <li>• Putsning av glasväggar</li>
                  <li>• Putsning av glaspartier</li>
                  <li>• Rengöring av dörrkarmar</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Ytterligare service
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Rengöring av fönsterlistor</li>
                  <li>• Rengöring av fönsterbleck</li>
                  <li>• Borttagning av spindelväv</li>
                  <li>• Rengöring av gardiner (vid behov)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  Tilläggstjänster
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Putsning av solfjädrar</li>
                  <li>• Putsning av markiser</li>
                  <li>• Putsning av balkongglas</li>
                  <li>• Putsning av altanglas</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Varför välja Flyttivo för fönsterputs?
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Professionell teknik:</strong>{" "}
                  Vi har rätt utrustning och teknik för att få fönstren
                  skinande rena utan fläckar eller strimmor.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Säkerhet:</strong> Vi
                  har erfarenhet av att arbeta säkert med höga fönster och
                  utvändig putsning.
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
                  <strong className="text-slate-900">Tidsbesparing:</strong>{" "}
                  Professionell fönsterputs går mycket snabbare än om du gör det
                  själv.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-sky-600">✓</span>
                <span>
                  <strong className="text-slate-900">Bättre resultat:</strong>{" "}
                  Med professionell teknik får du bättre resultat än vid
                  egenputsning.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Regelbunden fönsterputs
            </h2>
            <p className="mb-4 text-slate-600">
              Vi kan också erbjuda regelbunden fönsterputs – varje månad, varje
              kvartal eller vid behov. Regelbunden fönsterputs håller fönstren
              alltid rena och fräscha, vilket ger bättre ljusinsläpp och ett
              välstädat intryck.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Månadsvis fönsterputs</li>
              <li>• Kvartalsvis fönsterputs</li>
              <li>• Fönsterputs vid behov</li>
              <li>• Fönsterputs som del av större städning</li>
            </ul>
          </section>

          <section className="rounded-2xl border-2 border-sky-600 bg-sky-50 p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Boka fönsterputs i Skåne
            </h2>
            <p className="mb-6 text-slate-600">
              Kontakta oss idag för ett kostnadsfritt prisförslag på
              fönsterputs. Vi hjälper dig gärna!
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

