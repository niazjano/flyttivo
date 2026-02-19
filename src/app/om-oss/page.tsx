export default function OmOssPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Om företaget
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Flyttivo erbjuder flytt- och städtjänster för privatpersoner och
          företag. Verksamheten utgår från Kristianstad och uppdrag utförs i
          närområdet enligt offert och överenskommelse.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Tjänster
            </h2>
            <p className="mt-2">
              Flytt, packning, montering, flyttstädning samt återkommande
              städtjänster. Omfattning och upplägg fastställs i offert.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Målgrupp
            </h2>
            <p className="mt-2">
              Privatpersoner och företag som behöver flytt- eller städservice i
              Kristianstad med omnejd.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Arbetssätt
            </h2>
            <p className="mt-2">
              Vi arbetar med tydliga arbetsprocesser, dokumenterad planering och
              skriftliga villkor för varje uppdrag.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            Företagsuppgifter
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <span className="font-medium text-slate-700">Företag:</span>{" "}
              Flyttivo
            </li>
            <li>
              <span className="font-medium text-slate-700">Organisationsnr:</span>{" "}
              [Organisationsnummer]
            </li>
            <li>
              <span className="font-medium text-slate-700">Adress:</span> [Adress]
            </li>
            <li>
              <span className="font-medium text-slate-700">Telefon:</span>{" "}
              044–785 3002
            </li>
            <li>
              <span className="font-medium text-slate-700">E-post:</span>{" "}
              info@flyttivo.se
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}


