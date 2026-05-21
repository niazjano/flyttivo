import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/company";

export default function KontaktPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-16 md:px-6 md:py-20">
      <header className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Kontakta oss
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          Kontakta {COMPANY.name} för en kostnadsfri offert på flytt eller
          städning. Vi återkommer så snart som möjligt, vanligtvis inom 24
          timmar på vardagar.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Telefon
          </p>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="mt-3 block text-lg font-semibold text-slate-900 transition-colors hover:text-[#1E5F99]"
          >
            {COMPANY.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-slate-500">
            Ring oss för frågor eller snabb hjälp med din förfrågan.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            E-post
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-3 block text-lg font-semibold text-slate-900 transition-colors hover:text-[#1E5F99]"
          >
            {COMPANY.email}
          </a>
          <p className="mt-2 text-sm text-slate-500">
            Skicka din förfrågan så återkommer vi med offert och planering.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Företag
          </p>
          <p className="mt-3 text-base font-semibold text-slate-900">
            {COMPANY.name}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Org.nr {COMPANY.orgNumber}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Offertförfrågan
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Fyll i formuläret så återkommer vi med en tydlig offert.
            </p>
          </div>
          <Button
            variant="ghost"
            href={`tel:${COMPANY.phoneTel}`}
            className="shrink-0"
          >
            Ring {COMPANY.phoneDisplay}
          </Button>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-6">
          <iframe
            title="Tally kontaktformulär"
            src="https://tally.so/r/jaQ6L6"
            loading="lazy"
            className="h-[700px] w-full rounded-2xl border-0"
          />
        </div>
      </section>
    </div>
  );
}
