export default function GdprPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          GDPR-information
        </h1>
        <p className="text-sm text-slate-600">
          Här beskriver vi hur Flyttivo hanterar personuppgifter enligt GDPR.
        </p>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Personuppgiftsansvarig</h2>
        <p>Flyttivo är personuppgiftsansvarig för behandlingen.</p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Dina rättigheter</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Rätt till tillgång (registerutdrag)</li>
          <li>Rätt till rättelse</li>
          <li>Rätt till radering där det är möjligt</li>
          <li>Rätt till begränsning av behandling</li>
          <li>Rätt att invända mot behandling</li>
          <li>Rätt till dataportabilitet i tillämpliga fall</li>
        </ul>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-900">Kontakt</h2>
        <p>
          För frågor om GDPR eller dina rättigheter, kontakta oss:
          <br />
          E-post: info@flyttivo.se
          <br />
          Telefon: 044–785 3002
        </p>
      </section>
    </div>
  );
}
