import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">Flyttivo</p>
            <p>Organisationsnummer: [Organisationsnummer]</p>
            <p>Registrerad adress: [Adress]</p>
            <p>Verksamhetsområde: Kristianstad med omnejd</p>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">Kontakt</p>
            <p>E-post: info@flyttivo.se</p>
            <p>Telefon: 044–785 3002</p>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">Juridik</p>
            <div className="flex flex-col gap-2">
              <Link className="hover:text-slate-900" href="/integritetspolicy">
                Integritetspolicy
              </Link>
              <Link className="hover:text-slate-900" href="/allmanna-villkor">
                Allmänna villkor
              </Link>
              <Link className="hover:text-slate-900" href="/gdpr">
                GDPR
              </Link>
              <Link className="hover:text-slate-900" href="/cookies">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Flyttivo. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}


