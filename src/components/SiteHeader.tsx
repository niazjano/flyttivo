"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/flyttfirma", label: "Flytt" },
  { href: "/stadning", label: "Städning" },
  { href: "#", label: "Städer vi jobbar", isDropdown: true },
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

const flyttServices = [
  { href: "/flyttfirma/bohagsflytt", label: "Bohagsflytt" },
  { href: "/flyttfirma/foretagsflytt", label: "Företagsflytt" },
  { href: "/flyttfirma/flytthjalp", label: "Flytthjälp" },
  { href: "/flyttfirma/packhjalp", label: "Packhjälp" },
  { href: "/flyttfirma/montering", label: "Montering" },
  { href: "/flyttfirma/tunglyft", label: "Tunglyft" },
  { href: "/flyttfirma/magasinering", label: "Magasinering" },
];

const stadningServices = [
  { href: "/stadning/flyttstadning", label: "Flyttstädning" },
  { href: "/stadning/hemstadning", label: "Hemstädning" },
  { href: "/stadning/veckostadning", label: "Veckostädning" },
  { href: "/stadning/storstadning", label: "Storstädning" },
  { href: "/stadning/kontorsstadning", label: "Kontorsstädning" },
  { href: "/stadning/byggstadning", label: "Byggstädning" },
  { href: "/stadning/dodsbo", label: "Dödsbostädning" },
  { href: "/stadning/fonsterputs", label: "Fönsterputs" },
];

const cities = [
  { slug: "kristianstad", name: "Kristianstad" },
  { slug: "ahus", name: "Åhus" },
  { slug: "hassleholm", name: "Hässleholm" },
  { slug: "ostra-goinge", name: "Östra Göinge" },
  { slug: "broby", name: "Broby" },
  { slug: "hanaskog", name: "Hanaskog" },
  { slug: "knislinge", name: "Knislinge" },
  { slug: "bromolla", name: "Bromölla" },
  { slug: "sibbhult", name: "Sibbhult" },
  { slug: "osby", name: "Osby" },
  { slug: "glimakra", name: "Glimåkra" },
  { slug: "solvesborg", name: "Sölvesborg" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [showFlyttDropdown, setShowFlyttDropdown] = useState(false);
  const [showStadningDropdown, setShowStadningDropdown] = useState(false);
  const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-colors hover:opacity-90">
            <span 
              className="text-lg font-semibold tracking-tight transition-colors"
              style={{ color: "#1E5F99" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#174A77";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1E5F99";
              }}
            >
              Flyttivo
            </span>
            <span className="hidden text-sm text-slate-600 lg:inline">
              Flytt & städ i Skåne
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) ||
                    pathname.startsWith("/flyttfirma/") ||
                    pathname.startsWith("/stadning/");

              if (link.href === "/flyttfirma") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setShowFlyttDropdown(true)}
                    onMouseLeave={() => setShowFlyttDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`rounded-full px-3 py-1 transition-colors ${
                        active ||
                        pathname.includes("flyttfirma-") ||
                        pathname.startsWith("/flyttfirma/")
                          ? "bg-sky-600 text-white"
                          : "hover:bg-sky-50 hover:text-sky-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {showFlyttDropdown && (
                      <>
                        <div className="absolute left-0 top-full h-2 w-64"></div>
                        <div className="absolute left-0 top-full mt-2 w-64">
                          <div className="rounded-lg border border-slate-200 bg-white shadow-lg">
                          <div className="p-2">
                            <div className="mb-1 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Tjänster
                            </div>
                            {flyttServices.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                  pathname === service.href
                                    ? "bg-sky-50 text-sky-700"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              if (link.href === "/stadning") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setShowStadningDropdown(true)}
                    onMouseLeave={() => setShowStadningDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`rounded-full px-3 py-1 transition-colors ${
                        active ||
                        pathname.includes("stadning-") ||
                        pathname.startsWith("/stadning/")
                          ? "bg-sky-600 text-white"
                          : "hover:bg-sky-50 hover:text-sky-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {showStadningDropdown && (
                      <>
                        <div className="absolute left-0 top-full h-2 w-64"></div>
                        <div className="absolute left-0 top-full mt-2 w-64">
                          <div className="rounded-lg border border-slate-200 bg-white shadow-lg">
                          <div className="p-2">
                            <div className="mb-1 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Tjänster
                            </div>
                            {stadningServices.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                  pathname === service.href
                                    ? "bg-sky-50 text-sky-700"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              if (link.isDropdown && link.label === "Städer vi jobbar") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setShowCitiesDropdown(true)}
                    onMouseLeave={() => setShowCitiesDropdown(false)}
                  >
                    <button
                      className={`rounded-full px-3 py-1 transition-colors ${
                        pathname.includes("flyttfirma-") ||
                        pathname.includes("stadning-")
                          ? "bg-sky-600 text-white"
                          : "hover:bg-sky-50 hover:text-sky-700"
                      }`}
                    >
                      {link.label}
                    </button>
                    {showCitiesDropdown && (
                      <>
                        <div className="absolute left-0 top-full h-2 w-80"></div>
                        <div className="absolute left-0 top-full mt-2 w-80">
                          <div className="rounded-lg border border-slate-200 bg-white shadow-lg">
                            <div className="p-3">
                              <div className="mb-3 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Våra städer
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {cities.map((city) => (
                                  <div key={city.slug} className="space-y-1">
                                    <Link
                                      href={`/flyttfirma-${city.slug}`}
                                      className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                                        pathname === `/flyttfirma-${city.slug}`
                                          ? "bg-sky-50 text-sky-700 font-medium"
                                          : "text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      <span className="text-xs">🚚</span>
                                      <span>{city.name}</span>
                                    </Link>
                                    <Link
                                      href={`/stadning-${city.slug}`}
                                      className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                                        pathname === `/stadning-${city.slug}`
                                          ? "bg-sky-50 text-sky-700 font-medium"
                                          : "text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      <span className="text-xs">✨</span>
                                      <span>{city.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    active
                      ? "bg-sky-600 text-white"
                      : "hover:bg-sky-50 hover:text-sky-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMobileMenu ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <nav className="mt-4 space-y-2 border-t pt-4 lg:hidden">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.href === "/flyttfirma" || link.href === "/stadning") {
                return (
                  <div key={link.href} className="space-y-1">
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.href === "/flyttfirma") {
                          setShowFlyttDropdown(!showFlyttDropdown);
                        } else {
                          setShowStadningDropdown(!showStadningDropdown);
                        }
                      }}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                        active ||
                        pathname.includes(link.href.replace("/", "") + "-") ||
                        pathname.startsWith(link.href + "/")
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-700"
                      }`}
                    >
                      {link.label} ▼
                    </Link>
                    {(link.href === "/flyttfirma" && showFlyttDropdown) ||
                    (link.href === "/stadning" && showStadningDropdown) ? (
                      <div className="ml-4 space-y-1 border-l-2 border-slate-200 pl-4">
                        <div className="mb-1 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Tjänster
                        </div>
                        {(link.href === "/flyttfirma"
                          ? flyttServices
                          : stadningServices
                        ).map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setShowMobileMenu(false)}
                            className={`block rounded-lg px-3 py-2 text-sm ${
                              pathname === service.href
                                ? "bg-sky-50 text-sky-700 font-medium"
                                : "text-slate-600"
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              if (link.isDropdown && link.label === "Städer vi jobbar") {
                return (
                  <div key={link.href} className="space-y-1">
                    <button
                      onClick={() => setShowCitiesDropdown(!showCitiesDropdown)}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                        pathname.includes("flyttfirma-") ||
                        pathname.includes("stadning-")
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-700"
                      }`}
                    >
                      {link.label} ▼
                    </button>
                    {showCitiesDropdown && (
                      <div className="ml-4 space-y-1 border-l-2 border-slate-200 pl-4">
                        <div className="mb-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Våra städer
                        </div>
                        {cities.map((city) => (
                          <div key={city.slug} className="space-y-1">
                            <Link
                              href={`/flyttfirma-${city.slug}`}
                              onClick={() => setShowMobileMenu(false)}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                pathname === `/flyttfirma-${city.slug}`
                                  ? "bg-sky-50 text-sky-700 font-medium"
                                  : "text-slate-600"
                              }`}
                            >
                              🚚 {city.name}
                            </Link>
                            <Link
                              href={`/stadning-${city.slug}`}
                              onClick={() => setShowMobileMenu(false)}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                pathname === `/stadning-${city.slug}`
                                  ? "bg-sky-50 text-sky-700 font-medium"
                                  : "text-slate-600"
                              }`}
                            >
                              ✨ {city.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}


