"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const HERO_IMAGES = [
  {
    src: "/image/3%20cars%20flyttivo%20pic.webp",
    alt: "Flyttivo flyttbilar i rad",
  },
  {
    src: "/image/2%20guys%20moving%20coach.webp",
    alt: "Flyttivo flyttpersonal bär soffa",
  },
  {
    src: "/image/3%20boys%20infornt%20of%20car.webp",
    alt: "Flyttivo team framför flyttbil",
  },
  {
    src: "/image/3%20images.webp",
    alt: "Flytt och städ i hemmet",
  },
  {
    src: "/image/garden.webp",
    alt: "Flyttivo trädgårdsskötsel",
  },
  {
    src: "/image/snow.webp",
    alt: "Flyttivo snöskottning",
  },
];

const HERO_SLIDE_DURATION = 0;
const HERO_SLIDE_DISPLAY = 2000;

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();

    if (media.addEventListener) {
      media.addEventListener("change", updatePreference);
      return () => media.removeEventListener("change", updatePreference);
    }

    media.addListener(updatePreference);
    return () => media.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setIsSliderReady(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (reduceMotion || isTransitioning) return;
    if (!isSliderReady) return;
    const timeout = window.setTimeout(() => {
      setIsTransitioning(true);
      setPreviousIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_SLIDE_DISPLAY);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isSliderReady, isTransitioning, reduceMotion]);

  useEffect(() => {
    if (!isTransitioning) return;
    setPreviousIndex(null);
    setIsTransitioning(false);
  }, [isTransitioning]);

  return (
    <>
      {/* Premium Hero Section - Full Width Edge-to-Edge */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Slider - Full Width */}
        <div
          className="hero-slider"
          data-reduce-motion={reduceMotion ? "true" : "false"}
        >
          {!isSliderReady || reduceMotion ? (
            <div className="hero-slide hero-slide-active">
              <Image
                src={HERO_IMAGES[0].src}
                alt={HERO_IMAGES[0].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            [activeIndex, previousIndex]
              .filter(
                (value, index, self) =>
                  value !== null && self.indexOf(value) === index
              )
              .map((index) => {
                const image = HERO_IMAGES[index as number];
                const isActive = index === activeIndex;
                return (
                  <div
                    key={image.src}
                    className={`hero-slide ${
                      isActive ? "hero-slide-active" : "hero-slide-previous"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={isActive && index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      sizes="100vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                );
              })
          )}
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content - Premium Typography & Layout */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:py-24 lg:py-28">

          {/* Main Headline - Premium Typography 3xl→5xl */}
          <h1 className="hero-fade-up mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Pålitlig flytt- och städfirma i Skåne
          </h1>

          {/* Subheadline - Softer Text Color, max-w-xl */}
          <p className="hero-fade-up hero-fade-up-delay-1 mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base md:text-lg">
            Smidigare flytt och renare hem i Kristianstad, Åhus, Hässleholm,
            Östra Göinge och hela norra & östra Skåne – med 50% RUT-avdrag på
            arbetskostnaden.
          </p>

          {/* Premium CTA Buttons */}
          <div className="hero-fade-up hero-fade-up-delay-2 mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA - Flyttivo Blue */}
            <Button variant="primary" href="https://tally.so/r/pbBdkB">
              Få gratis offert
            </Button>
            {/* Secondary CTA - Transparent White Border */}
            <Button variant="secondary" href="tel:0447853002">
              Ring oss: 044–785 3002
            </Button>
          </div>

          {/* Premium Frosted Glass Trust Bar */}
          <div className="hero-fade-up hero-fade-up-delay-3 hover-lift mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[12px] text-white backdrop-blur-md sm:gap-4">
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
      <section className="reveal bg-slate-50 py-16 sm:py-20" data-reveal data-reveal-id="services">
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
                  src="/image/flytt.webp"
                  alt="Flytt inom Skåne"
                  fill
                  className="relative z-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
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
                  src="/image/stad.webp"
                  alt="Flyttstädning & städning"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
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
            <Card href="/trygg-partner">
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src="/image/trygg1.webp"
                  alt="Trygg partner"
                  fill
                  className="relative z-0 object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
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

                  {/* Link Text */}
                  <p className="mt-3 text-[13px] font-medium text-sky-700 transition-colors group-hover:text-sky-800">
                    Läs mer om vår trygghet →
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content - Premium Spacing py-20 */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">


        {/* Areas We Work In - Premium Pill Design */}
        <section className="reveal mb-20 border-t border-slate-200 pt-20" data-reveal data-reveal-id="areas">
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
              { name: "Kristianstad", slug: "kristianstad" },
              { name: "Åhus", slug: "ahus" },
              { name: "Hässleholm", slug: "hassleholm" },
              { name: "Östra Göinge", slug: "ostra-goinge" },
              { name: "Broby", slug: "broby" },
              { name: "Hanaskog", slug: "hanaskog" },
              { name: "Knislinge", slug: "knislinge" },
              { name: "Bromölla", slug: "bromolla" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/stad/${city.slug}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-center text-xs font-medium text-[#1C1F23] transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer"
                aria-label={`Flytt & städ i ${city.name}`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Tally Embed Section */}
        <section className="reveal py-20 bg-slate-50" data-reveal data-reveal-id="tally">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-slate-200/60 bg-white p-4 shadow-md sm:p-6">
              <iframe
                title="Tally offertformulär"
                src="https://tally.so/r/jaQ6L6"
                loading="lazy"
                className="h-[700px] w-full rounded-2xl border-0"
              />
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
