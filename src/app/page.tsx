"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays smoothly on all devices
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, which is fine - browser will handle it
      });
    }
  }, []);

  return (
    <>
      {/* Premium Hero Section - Full Width Edge-to-Edge */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* World-Class Video Background - Full Width */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center center",
          }}
        >
          <source src="/videos/flyttivo-hero.mov" type="video/quicktime" />
          <source src="/videos/flyttivo-hero.mov" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F23] via-[#0E3A5D] to-[#1C1F23]" />
        </video>

        {/* Premium Gradient Overlay - Soft from bottom to top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* Hero Content - Premium Typography & Layout */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:py-24 lg:py-28">

          {/* Main Headline - Premium Typography 3xl→5xl */}
          <h1 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trusted flytt- & städfirma i Skåne
          </h1>

          {/* Subheadline - Softer Text Color, max-w-xl */}
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base md:text-lg">
            Smidigare flytt och renare hem i Kristianstad, Åhus, Hässleholm,
            Östra Göinge och hela norra & östra Skåne – med 50% RUT-avdrag på
            arbetskostnaden.
          </p>

          {/* Premium CTA Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA - Flyttivo Blue */}
            <Button variant="primary" href="/kontakt">
              Få gratis offert
            </Button>
            {/* Secondary CTA - Transparent White Border */}
            <Button variant="secondary" href="tel:0447853002">
              Ring oss: 044–785 3002
            </Button>
          </div>

          {/* Premium Frosted Glass Trust Bar */}
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[12px] text-white backdrop-blur-md sm:gap-4">
            <span className="flex items-center gap-2">
              <span className="text-xs opacity-80">✓</span>
              <span>Försäkrad flyttfirma</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xs opacity-80">⚡</span>
              <span>Snabb offert inom 24h</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xs opacity-80">👷</span>
              <span>Erfaren personal</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xs opacity-80">🧾</span>
              <span>50% RUT-avdrag</span>
            </span>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Premium Design */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 space-y-8 md:px-6">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Våra tjänster
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Vi kombinerar flytt och städning i samma företag så att du kan få
              en trygg helhetslösning – från första kartong till sista städrond.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {/* Flytt Service Card */}
            <Card href="/flyttfirma">
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src="/image/flytt.png"
                  alt="Flytt inom Skåne"
                  fill
                  className="relative z-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized
                />
                {/* Subtle overlay for better text readability if needed */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="relative p-5 sm:p-6">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-50/0 to-sky-50/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              
                <div className="relative">
                  {/* Icon Area */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700">
                    🚚
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-base font-semibold text-slate-900 sm:text-lg">
                    Flytt inom Skåne
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm leading-relaxed text-slate-600">
                    Vi hjälper dig med allt från mindre lägenhetsflyttar till större
                    bohagsflyttar. Vi kan bära, packa, montera och transportera.
                  </p>

                  {/* Link Text */}
                  <p className="mt-3 text-[13px] font-medium text-sky-700 transition-colors group-hover:text-sky-800">
                    Läs mer om våra flyttjänster →
                  </p>
                </div>
              </div>
            </Card>

            {/* Städning Service Card */}
            <Card href="/stadning">
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src="/image/stad.png"
                  alt="Flyttstädning & städning"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* Subtle overlay for better text readability if needed */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative p-5 sm:p-6">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-50/0 to-sky-50/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              
                <div className="relative">
                  {/* Icon Area */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700">
                    ✨
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-base font-semibold text-slate-900 sm:text-lg">
                    Flyttstädning & städning
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm leading-relaxed text-slate-600">
                    Noggrann flyttstädning med städgaranti samt löpande hemstädning,
                    kontorsstädning och trappstädning – alltid med RUT-avdrag.
                  </p>

                  {/* Link Text */}
                  <p className="mt-3 text-[13px] font-medium text-sky-700 transition-colors group-hover:text-sky-800">
                    Läs mer om våra städtjänster →
                  </p>
                </div>
              </div>
            </Card>

            {/* Trygg Partner Card */}
            <Card>
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src="/image/trygg1.png"
                  alt="Trygg partner"
                  fill
                  className="relative z-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized
                />
                {/* Subtle overlay for better text readability if needed */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="relative p-5 sm:p-6">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-50/0 to-sky-50/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              
                <div className="relative">
                  {/* Icon Area */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700">
                    🛡️
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-base font-semibold text-slate-900 sm:text-lg">
                    Trygg partner
                  </h3>

                  {/* Body Text */}
                  <p className="text-sm leading-relaxed text-slate-600">
                    Vi dyker upp i tid, håller vad vi lovar och kommunicerar tydligt
                    genom hela uppdraget.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content - Premium Spacing py-20 */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">

        {/* Games Section - Premium Card Design */}
        <section className="mb-20 border-t border-slate-200 pt-20">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1E5F99] mb-2">
              SPEL & UNDERHÅLLNING
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Testa våra mini-spel
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Packing Game Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#1E5F99]/8 via-[#E6F0FB]/40 to-[#1E5F99]/5 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1E5F99]/30">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E5F99] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E6F0FB] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#1E5F99]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E5F99]">
                  <span>🎮</span>
                  <span>MINI-SPEL</span>
                </div>
                <h2 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Packa Flyttivos kartong
                </h2>
                <p className="mb-5 text-base leading-relaxed text-slate-600 max-w-2xl">
                  Testa vårt roliga packningsspel! Dra in sakerna i flyttlådan och
                  försök få plats med allt utan att det krockar. Ett lugnt litet spel
                  som visar hur viktigt smart packning är – precis som i en riktig Flyttivo-flytt.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/spel"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E5F99] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#174A77] hover:scale-105 shadow-[0_8px_30px_rgba(30,95,153,0.22)]"
                  >
                    <span>Spela nu</span>
                    <span>→</span>
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>📦</span>
                    <span>4 nivåer</span>
                    <span>•</span>
                    <span>Gratis att spela</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="relative">
                  <div className="text-7xl animate-pulse">📦</div>
                  <div className="absolute inset-0 text-7xl opacity-20 blur-xl">📦</div>
                </div>
              </div>
            </div>
          </div>

            {/* Cleaning Game Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#22C55E]/8 via-[#E6F0FB]/40 to-[#22C55E]/5 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#22C55E]/30">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E6F0FB] rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
                    <span>✨</span>
                    <span>STÄD-SPEL</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    Städa Rummet
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    Välj rätt städon och klicka på smutsen för att städa rummet. Ett roligt
                    spel som visar hur viktigt det är att använda rätt verktyg.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/stad-spel"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#16A34A] hover:scale-105 shadow-[0_8px_30px_rgba(34,197,94,0.22)]"
                    >
                      <span>Spela nu</span>
                      <span>→</span>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>🧹</span>
                      <span>4 rum</span>
                      <span>•</span>
                      <span>Gratis att spela</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <div className="text-7xl animate-pulse">🧹</div>
                    <div className="absolute inset-0 text-7xl opacity-20 blur-xl">🧹</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Work In - Premium Pill Design */}
        <section className="mb-20 border-t border-slate-200 pt-20">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#1C1F23] sm:text-3xl">
            Vi arbetar i hela Skåne
          </h2>
          <p className="mb-10 text-base leading-relaxed text-slate-600">
            Flyttivo är extra aktiva i Kristianstad, Åhus, Hässleholm, Östra
            Göinge, Broby, Hanaskog, Knislinge, Bromölla, Sibbhult, Osby,
            Glimåkra, Sölvesborg och omnejd.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Kristianstad",
              "Åhus",
              "Hässleholm",
              "Östra Göinge",
              "Broby",
              "Hanaskog",
              "Knislinge",
              "Bromölla",
            ].map((city) => (
              <div
                key={city}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-center text-xs font-medium text-[#1C1F23] transition-colors duration-200 hover:bg-slate-100"
              >
                {city}
              </div>
            ))}
          </div>
        </section>

        {/* Modern Contact Form Section */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-5xl px-4">
            {/* Form Card */}
            <div className="space-y-8 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-md sm:p-10">
              {/* Header */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Snabb offert
                </h2>
                <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                  Beskriv din flytt eller städning så återkommer vi med ett
                  prisförslag – oftast samma dag.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-5">
                {/* First Row - Two Columns on Desktop */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Namn */}
                  <div className="space-y-2">
                    <label
                      htmlFor="namn"
                      className="text-sm font-medium text-slate-700"
                    >
                      Namn
                    </label>
                    <input
                      type="text"
                      id="namn"
                      name="namn"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                      placeholder="Ditt namn"
                    />
                  </div>

                  {/* Telefonnummer */}
                  <div className="space-y-2">
                    <label
                      htmlFor="telefon"
                      className="text-sm font-medium text-slate-700"
                    >
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                      placeholder="070-123 45 67"
                    />
                  </div>
                </div>

                {/* Second Row - Two Columns on Desktop */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* E-post */}
                  <div className="space-y-2">
                    <label
                      htmlFor="epost"
                      className="text-sm font-medium text-slate-700"
                    >
                      E-post
                    </label>
                    <input
                      type="email"
                      id="epost"
                      name="epost"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                      placeholder="din@epost.se"
                    />
                  </div>

                  {/* Typ av tjänst */}
                  <div className="space-y-2">
                    <label
                      htmlFor="tjanst"
                      className="text-sm font-medium text-slate-700"
                    >
                      Typ av tjänst
                    </label>
                    <select
                      id="tjanst"
                      name="tjanst"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    >
                      <option value="">Välj tjänst</option>
                      <option value="flytthjalp">Flytthjälp</option>
                      <option value="flyttstadning">Flyttstädning</option>
                      <option value="hemstadning">Hemstädning</option>
                      <option value="foretagsflytt">Företagsflytt</option>
                      <option value="annat">Annat</option>
                    </select>
                  </div>
                </div>

                {/* Stad / område - Full Width */}
                <div className="space-y-2">
                  <label
                    htmlFor="stad"
                    className="text-sm font-medium text-slate-700"
                  >
                    Stad / område
                  </label>
                  <input
                    type="text"
                    id="stad"
                    name="stad"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    placeholder="t.ex. Kristianstad, Åhus, Hässleholm"
                  />
                </div>

                {/* Meddelande - Full Width */}
                <div className="space-y-2">
                  <label
                    htmlFor="meddelande"
                    className="text-sm font-medium text-slate-700"
                  >
                    Meddelande
                  </label>
                  <textarea
                    id="meddelande"
                    name="meddelande"
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 resize-none"
                    placeholder="Beskriv ditt behov här..."
                  />
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  {/* Primary Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:text-base"
                  >
                    Skicka förfrågan
                  </Button>

                  {/* Secondary Phone Button */}
                  <Button
                    variant="ghost"
                    href="tel:0447853002"
                    className="w-full sm:text-base"
                  >
                    Ring oss: 044–785 3002
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/<MY_NUMBER>"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600"
        aria-label="Kontakta oss på WhatsApp"
      >
        <span className="text-xl">💬</span>
      </a>
    </>
  );
}
