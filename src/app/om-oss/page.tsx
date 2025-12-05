export default function OmOssPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Om oss
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Flyttivo är en lokal flyttfirma och städfirma i Skåne med tydligt
          fokus på professionalism, trygghet och service. Vi finns nära dig
          och vet hur viktigt det är att en flytt eller städning blir rätt
          från början.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[3fr,2fr]">
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Vi hjälper både privatpersoner och företag med flytt, flyttstädning
            och återkommande städtjänster. Vårt mål är att vara din trygga
            partner genom hela processen – från första kontakt till avslutat
            uppdrag.
          </p>
          <p>
            När du anlitar Flyttivo kan du räkna med tydlig kommunikation,
            realistiska tidsplaner och ett personligt bemötande. Vi är måna om
            att skydda dina tillhörigheter och behandlar varje hem som om det
            vore vårt eget.
          </p>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            Aktivt område i Skåne
          </h2>
          <p className="text-sm text-slate-600">
            Vi är särskilt aktiva i bland annat:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Kristianstad & Åhus</li>
            <li>Hässleholm & Osby</li>
            <li>Östra Göinge, Broby & Knislinge</li>
            <li>Hanaskog, Sibbhult & Glimåkra</li>
            <li>Bromölla & Sölvesborg med omnejd</li>
          </ul>
        </aside>
      </section>

      <section className="grid gap-6 border-t border-slate-100 pt-8 md:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Professionalism
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Vi planerar varje uppdrag noggrant och arbetar med rutiner som gör
            flytt och städning så smidigt som möjligt.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Trygghet
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Försäkring, ordentlig skyddsutrustning och respektfull hantering av
            dina saker är en självklarhet för oss.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Service
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Vi är flexibla, lyhörda och gör vårt bästa för att anpassa oss
            efter dina önskemål och din tidsplan.
          </p>
        </div>
      </section>
    </div>
  );
}


