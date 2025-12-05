export default function KontaktPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Kontakta oss
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Fyll i formuläret nedan så återkommer vi med en kostnadsfri offert
          på flytt eller städning. Vi försöker alltid svara inom 24 timmar på
          vardagar.
        </p>
      </header>

      <form className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="space-y-4 md:col-span-1">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-900"
            >
              Namn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="För- och efternamn"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-900"
            >
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="din@epost.se"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-900"
            >
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="07x-xxx xx xx"
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Beskriv kort vad du behöver hjälp med (flytt, flyttstädning, hemstädning osv.), datum och ort."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Skicka förfrågan
          </button>
          <p className="text-xs text-slate-500">
            Genom att skicka formuläret godkänner du att vi kontaktar dig via
            e-post eller telefon med ett prisförslag.
          </p>
        </div>
      </form>
    </div>
  );
}


