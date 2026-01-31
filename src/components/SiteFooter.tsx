export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-slate-700">
              © {new Date().getFullYear()} Flyttivo. Alla rättigheter förbehållna.
            </p>
            <p className="text-xs text-slate-500">
              Lokal flyttfirma & städfirma i Skåne – fokus på professionalism,
              trygghet och personlig service.
            </p>
          </div>

          <form
            data-offer-form
            className="w-full max-w-md space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-name"
                  className="block text-xs font-medium text-slate-700"
                >
                  Namn
                </label>
                <input
                  id="footer-name"
                  name="name"
                  type="text"
                  className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-phone"
                  className="block text-xs font-medium text-slate-700"
                >
                  Telefon
                </label>
                <input
                  id="footer-phone"
                  name="phone"
                  type="tel"
                  className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="07x-xxx xx xx"
                  required
                />
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-email"
                  className="block text-xs font-medium text-slate-700"
                >
                  E-post
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="din@epost.se"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="footer-city"
                  className="block text-xs font-medium text-slate-700"
                >
                  Stad / område
                </label>
                <input
                  id="footer-city"
                  name="city"
                  type="text"
                  className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="t.ex. Kristianstad"
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="footer-message"
                className="block text-xs font-medium text-slate-700"
              >
                Meddelande
              </label>
              <textarea
                id="footer-message"
                name="message"
                rows={3}
                className="block w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-xs shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Beskriv kort vad du behöver hjälp med."
                required
              />
            </div>
            <div
              data-success-message
              className="hidden rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-800"
            >
              Tack! Vi återkommer till dig inom kort.
            </div>
            <div
              data-error-message
              className="hidden rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800"
            >
              Något gick fel. Försök igen eller ring oss på 044–785 3002.
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-70"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}


