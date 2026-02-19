export default function CookiesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Cookies
        </h1>
        <p className="text-sm text-slate-600">
          Denna sida beskriver hur cookies används på flyttivo.se.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Vad är cookies?</h2>
        <p>
          Cookies är små textfiler som lagras i din webbläsare för att hjälpa
          webbplatsen att fungera korrekt.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Användning</h2>
        <p>
          Om cookies används för funktionalitet, analys eller andra ändamål
          framgår det här. Information uppdateras vid förändringar i
          webbplatsens funktionalitet.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Hantera cookies</h2>
        <p>
          Du kan blockera eller radera cookies via din webbläsares inställningar.
          Detta kan påverka webbplatsens funktion.
        </p>
      </section>
    </div>
  );
}
