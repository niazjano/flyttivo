import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trygg partner för flytt & städ i Skåne | Flyttivo",
  description:
    "Flyttivo är din trygga partner för flytt och städ i Skåne. Punktlighet, tydlig kommunikation och professionell service.",
};

export default function TryggPartnerPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
      <div className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Trygg partner för flytt & städ i Skåne
          </h1>
          <div className="space-y-3 text-base leading-relaxed text-slate-600">
            <p>
              Flyttivo är din trygga och pålitliga partner för flytt och städning
              i Skåne. Vi är en lokal flyttfirma och städfirma som sätter din
              trygghet och tillfredsställelse i centrum. Oavsett om du behöver
              flytthjälp, flyttstädning eller återkommande hemstädning, så kan du
              lita på att vi levererar professionell service med tydlig
              kommunikation och punktlighet.
            </p>
            <p>
              Med Flyttivo får du en pålitlig partner som håller vad vi lovar,
              kommer i tid och kommunicerar tydligt genom hela uppdraget. Vi är
              försäkrade, har erfaren personal och arbetar strukturerat för att
              säkerställa att varje uppdrag blir rätt från början.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Därför är Flyttivo en trygg partner
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-4 text-base text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 text-xl text-sky-600">✓</span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    Punktlighet – vi kommer i tid
                  </strong>
                  <p className="mt-1">
                    Vi håller våra tidsplaner och kommer när vi lovat. Din tid är
                    viktig, och vi respekterar den.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-sky-600">✓</span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    Tydlig kommunikation
                  </strong>
                  <p className="mt-1">
                    Vi håller dig informerad under hela processen och svarar på
                    dina frågor snabbt och tydligt.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-sky-600">✓</span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    Fast pris & inga överraskningar
                  </strong>
                  <p className="mt-1">
                    Du får ett tydligt prisförslag innan uppdraget börjar, utan
                    dolda kostnader eller överraskningar.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-sky-600">✓</span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    Försäkrad flytt & ansvarstagande personal
                  </strong>
                  <p className="mt-1">
                    Vi är försäkrade och vår personal är välutbildad och tar
                    ansvar för dina tillhörigheter. Alla uppdrag genomförs med
                    stor omsorg och respekt.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-sky-600">✓</span>
                <div>
                  <strong className="font-semibold text-slate-900">
                    RUT-avdrag direkt på fakturan
                  </strong>
                  <p className="mt-1">
                    Som privatperson kan du använda RUT-avdrag på upp till 50% av
                    arbetskostnaden. Vi hanterar avdraget åt dig direkt på
                    fakturan, så du behöver inte göra något själv.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Så arbetar vi
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Vi följer en strukturerad process för att säkerställa att varje
            uppdrag blir rätt från början till slut.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-lg font-semibold text-sky-700">
                1
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Kontakt & offert
              </h3>
              <p className="text-sm text-slate-600">
                Du kontaktar oss och beskriver ditt behov. Vi återkommer med ett
                tydligt prisförslag – oftast samma dag.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-lg font-semibold text-sky-700">
                2
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Planering
              </h3>
              <p className="text-sm text-slate-600">
                Vi planerar upplägget tillsammans med dig och anpassar oss efter
                dina behov och din tidsplan.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-lg font-semibold text-sky-700">
                3
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Utförande
              </h3>
              <p className="text-sm text-slate-600">
                Vi genomför uppdraget tryggt, säkert och försäkrat med erfaren
                personal och rätt utrustning.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-lg font-semibold text-sky-700">
                4
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Uppföljning & kvalitetssäkring
              </h3>
              <p className="text-sm text-slate-600">
                Vi följer upp och säkerställer att du är nöjd med resultatet. Om
                något inte är till belåtenhet, återkommer vi.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            För vilka kunder?
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Flyttivo är din trygga partner oavsett vem du är eller vad du behöver.
            Vi hjälper både privatpersoner och företag med flytt och städning.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 text-2xl">👤</div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Privatpersoner
              </h3>
              <p className="text-sm text-slate-600">
                Vi hjälper dig med flytt, flyttstädning och återkommande
                hemstädning. RUT-avdrag ingår.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 text-2xl">🏢</div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Företag
              </h3>
              <p className="text-sm text-slate-600">
                Vi hjälper med företagsflyttar, kontorsstädning och
                byggstädning med flexibla lösningar.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 text-2xl">👨‍👩‍👧‍👦</div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Familjer
              </h3>
              <p className="text-sm text-slate-600">
                Vi anpassar oss efter familjens behov och tidsplaner för att göra
                flytten så smidig som möjligt.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 text-2xl">👴</div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                Seniorer
              </h3>
              <p className="text-sm text-slate-600">
                Vi erbjuder trygg flytthjälp och hemstädning för seniorer med
                extra omsorg och respekt.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Lokal närvaro i Skåne
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Flyttivo är din trygga partner för flytt och städning i Skåne. Vi är
            extra aktiva i Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby,
            Hanaskog, Knislinge, Bromölla och närliggande områden. Med lokal
            närvaro kan vi ge dig snabb service och god kännedom om området.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              <strong className="font-semibold text-slate-900">
                Vi är aktiva i:
              </strong>{" "}
              Kristianstad, Åhus, Hässleholm, Östra Göinge, Broby, Hanaskog,
              Knislinge, Bromölla, Sibbhult, Osby, Glimåkra, Sölvesborg och
              omnejd.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/flyttfirma"
              className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              Läs mer om våra flyttjänster →
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/stadning"
              className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
            >
              Läs mer om våra städtjänster →
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50/50 to-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Boka din trygga partner
          </h2>
          <p className="mb-6 text-base text-slate-600">
            Kontakta oss för en kostnadsfri offert på flytt eller städning i
            Skåne. Vi återkommer oftast samma dag med ett tydligt prisförslag och
            svarar på dina frågor.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" href="/kontakt">
              Få gratis offert
            </Button>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
            >
              Kontakta oss
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

