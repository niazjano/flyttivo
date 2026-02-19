export default function AllmannaVillkorPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Allmänna villkor
        </h1>
        <p className="text-sm text-slate-600">
          Dessa villkor gäller för tjänster som erbjuds av Flyttivo, om inget
          annat anges i offert eller avtal.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Avtal</h2>
        <p>
          Avtal uppstår när offert accepteras eller när skriftlig överenskommelse
          har träffats.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Pris och betalning</h2>
        <p>
          Pris och betalningsvillkor framgår av offerten. Eventuella tillägg
          regleras enligt överenskommelse.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Avbokning och ändringar</h2>
        <p>
          Avbokning eller ändring ska ske skriftligen. Eventuella kostnader
          framgår av offerten eller avtalade villkor.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Ansvar</h2>
        <p>
          Ansvar och eventuella begränsningar framgår av avtal och tillämplig
          lagstiftning.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Kontakt</h2>
        <p>
          E-post: info@flyttivo.se
          <br />
          Telefon: 044–785 3002
        </p>
      </section>
    </div>
  );
}
