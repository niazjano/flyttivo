import { COMPANY } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight text-[#1E5F99]">
              {COMPANY.name}
            </p>
            <p className="text-sm text-slate-500">
              Professionella flytt- och städtjänster i Kristianstad med fokus
              på trygghet, kvalitet och tydlig kommunikation.
            </p>
          </div>

          <dl className="space-y-2.5 text-sm text-slate-500">
            <div>
              <dt className="sr-only">Organisationsnummer</dt>
              <dd>
                <span className="font-medium text-slate-600">Org.nr:</span>{" "}
                {COMPANY.orgNumber}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Telefon</dt>
              <dd>
                <span className="font-medium text-slate-600">Telefon:</span>{" "}
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="transition-colors hover:text-[#1E5F99]"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">E-post</dt>
              <dd>
                <span className="font-medium text-slate-600">E-post:</span>{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-[#1E5F99]"
                >
                  {COMPANY.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {COMPANY.name}. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
