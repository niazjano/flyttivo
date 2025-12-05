export default function StadningPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Städning i Skåne
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Flyttivo erbjuder noggrann hemstädning, flyttstädning och
          företagsstädning i Skåne. Vi jobbar strukturerat med checklistor och
          kvalitetskontroller för att säkerställa ett skinande resultat.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Hemstädning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Återkommande hemstädning varje vecka, varannan vecka eller en
            gång i månaden – du väljer upplägg.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Flyttstädning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Grundlig flyttstädning enligt mäklarnas riktlinjer, alltid med
            städgaranti.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Företagsstädning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Kontorsstädning, butiksstädning och trappstädning – skräddarsytt
            efter verksamheten.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-slate-100 pt-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Varför välja Flyttivo för städning?
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Pålitlig personal med stor yrkesstolthet.</li>
            <li>Miljövänliga och effektiva städmetoder.</li>
            <li>Tydliga priser med RUT-avdrag direkt på fakturan.</li>
          </ul>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            RUT-avdrag på städning
          </h3>
          <p className="text-sm text-slate-600">
            Som privatperson kan du använda RUT-avdrag på upp till 50 % av
            arbetskostnaden för städning. Vi hanterar avdraget åt dig.
          </p>
          <a
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Boka städning
          </a>
        </aside>
      </section>
    </div>
  );
}


