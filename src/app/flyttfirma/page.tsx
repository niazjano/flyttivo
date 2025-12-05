export default function FlyttPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Flyttfirma i Skåne
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Flyttivo hjälper dig med trygg och effektiv flytthjälp inom Skåne.
          Vi tar hand om bärande, lastning, transport och lossning – så att du
          kan fokusera på ditt nya hem eller din nya lokal.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Privatflytt
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Smidiga lägenhets- och villaflyttar. Vi anpassar oss efter ditt
            bohag och dina tider.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Företagsflytt
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Effektiva kontorsflyttar med minimal störning för verksamheten.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Tilläggstjänster
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Hjälp med packning, montering, magasinering och bortforsling av
            grovsopor.
          </p>
        </div>
      </section>

      <section className="grid gap-8 border-t border-slate-100 pt-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Så går en flytt med Flyttivo till
          </h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li>1. Du kontaktar oss och berättar om din flytt.</li>
            <li>2. Vi återkommer med ett tydligt prisförslag.</li>
            <li>3. Vi planerar upplägget tillsammans med dig.</li>
            <li>4. Vi genomför flytten tryggt, säkert och försäkrat.</li>
          </ol>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            RUT-avdrag vid flytt
          </h3>
          <p className="text-sm text-slate-600">
            Som privatperson kan du använda RUT-avdrag på delar av arbetskostnaden
            vid flyttjänster. Vi sköter avdraget direkt på fakturan.
          </p>
          <a
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Be om offert
          </a>
        </aside>
      </section>
    </div>
  );
}


