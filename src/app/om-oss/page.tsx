import { COMPANY } from "@/lib/company";

export default function OmOssPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-16 md:px-6 md:py-20">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Om företaget
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          {COMPANY.name} erbjuder professionella tjänster inom flytt och
          städning i Kristianstad. Vi fokuserar på trygg service, tydlig
          kommunikation och hög kvalitet i varje uppdrag.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            Vi hjälper både privatpersoner och företag med flytt, flyttstädning
            och återkommande städtjänster. Vårt mål är att vara din trygga
            partner genom hela processen – från första kontakt till avslutat
            uppdrag.
          </p>
          <p>
            När du anlitar {COMPANY.shortName} kan du räkna med tydlig
            kommunikation, realistiska tidsplaner och ett professionellt
            bemötande. Vi skyddar dina tillhörigheter och arbetar strukturerat
            för att varje uppdrag ska genomföras tryggt och smidigt.
          </p>
        </div>

        <aside className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <h2 className="mb-4 text-sm font-semibold text-[#1E5F99]">
            Företagsuppgifter
          </h2>
          <dl className="space-y-3 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-700">Företag</dt>
              <dd>{COMPANY.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Org.nr</dt>
              <dd>{COMPANY.orgNumber}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Telefon</dt>
              <dd>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="hover:text-[#1E5F99]"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">E-post</dt>
              <dd>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-[#1E5F99]"
                >
                  {COMPANY.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="grid gap-6 border-t border-slate-200/80 pt-10 md:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Professionalism
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Vi planerar varje uppdrag noggrant och arbetar med rutiner som gör
            flytt och städning så smidigt som möjligt.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Trygghet</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Försäkring, ordentlig skyddsutrustning och respektfull hantering av
            dina saker är en självklarhet för oss.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Service</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Vi är lyhörda och anpassar upplägget efter dina önskemål och din
            tidsplan.
          </p>
        </div>
      </section>
    </div>
  );
}
