import Link from "next/link";
import { COMPANY } from "@/lib/company";

const footerLinks = {
  tjänster: [
    { href: "/flyttfirma", label: "Flyttfirma" },
    { href: "/stadning", label: "Städning" },
    { href: "/flyttfirma-kristianstad", label: "Flytt i Kristianstad" },
    { href: "/stadning-kristianstad", label: "Städ i Kristianstad" },
  ],
  företag: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/priser", label: "Priser" },
    { href: "/trygg-partner", label: "Trygg partner" },
  ],
  juridiskt: [
    { href: "/integritetspolicy", label: "Integritetspolicy" },
    { href: "/villkor", label: "Allmänna villkor" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-1">
            <p className="text-sm font-semibold tracking-tight text-[#163A5F]">
              {COMPANY.name}
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              Professionell flyttfirma och städfirma i Kristianstad med fokus på
              trygghet, kvalitet och tydlig kommunikation.
            </p>
            <p className="text-sm text-slate-500">
              {COMPANY.city}, {COMPANY.country}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#163A5F]">
              Tjänster
            </h3>
            <ul className="space-y-2">
              {footerLinks.tjänster.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-[#163A5F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#163A5F]">
              Företag
            </h3>
            <ul className="space-y-2">
              {footerLinks.företag.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-[#163A5F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#163A5F]">
              Kontakt
            </h3>
            <dl className="space-y-2 text-sm text-slate-500">
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
                    className="transition-colors hover:text-[#163A5F]"
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
                    className="transition-colors hover:text-[#163A5F]"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-2">
              {footerLinks.juridiskt.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-[#163A5F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
