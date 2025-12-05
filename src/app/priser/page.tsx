export default function PriserPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Priser
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Här hittar du exempel på våra vanligaste priser för flytt, städning
          och flyttstädning. Kontakta oss för en exakt offert anpassad efter
          ditt uppdrag.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Flyttpriser
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Från <span className="font-semibold">499 kr/timme</span> efter
            RUT-avdrag för två flyttkillar och lastbil.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
            <li>Minsta debitering 2 timmar.</li>
            <li>Alla uppdrag offereras alltid i förväg.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Städpriser
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Hemstädning från{" "}
            <span className="font-semibold">199 kr/timme</span> efter
            RUT-avdrag.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
            <li>Återkommande eller enstaka städningar.</li>
            <li>Material kan ingå eller hållas av kund.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Flyttstädning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Fast pris från{" "}
            <span className="font-semibold">x kr/m²</span> efter RUT-avdrag
            beroende på bostadens storlek och skick.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
            <li>Städning enligt mäklarstandard.</li>
            <li>Städgaranti ingår alltid.</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-8 border-t border-slate-100 pt-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Enkelt med RUT-avdrag
          </h2>
          <p className="text-sm text-slate-600">
            Som privatperson kan du använda RUT-avdrag för både flyttjänster
            och städning. Vi hanterar ansökan om RUT åt dig och drar av
            skattereduktionen direkt på fakturan, så du bara betalar
            slutbeloppet.
          </p>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            Vill du ha ett exakt pris?
          </h3>
          <p className="text-sm text-slate-600">
            Berätta kort om din bostad, omfattning och datum så tar vi fram en
            tydlig offert utan dolda kostnader.
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


