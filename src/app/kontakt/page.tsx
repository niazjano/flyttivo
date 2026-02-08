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

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <iframe
          title="Tally kontaktformulär"
          src="https://tally.so/r/jaQ6L6"
          loading="lazy"
          className="h-[700px] w-full rounded-2xl border-0"
        />
      </div>
    </div>
  );
}


