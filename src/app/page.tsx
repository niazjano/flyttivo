"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  {
    src: "/image/flytt.webp",
    alt: "Flyttivo flytthjälp i Skåne",
  },
  {
    src: "/image/stad.webp",
    alt: "Flyttstädning & städning",
  },
  {
    src: "/image/trygg1.webp",
    alt: "Trygg partner",
  },
];

const HERO_SLIDE_DISPLAY = 3000;
const HERO_FADE_DURATION = 250;
const HERO_SLIDE_INTERVAL = HERO_SLIDE_DISPLAY + HERO_FADE_DURATION;

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const preloadCache = useRef(new Set<string>());
  const isMountedRef = useRef(true);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    isMountedRef.current = true;
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();

    if (media.addEventListener) {
      media.addEventListener("change", updatePreference);
      return () => {
        isMountedRef.current = false;
        media.removeEventListener("change", updatePreference);
      };
    }

    media.addListener(updatePreference);
    return () => {
      isMountedRef.current = false;
      media.removeListener(updatePreference);
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setIsSliderReady(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!isSliderReady) return;
    if (intervalRef.current !== null) return;

    const advanceSlide = () => {
      if (!isMountedRef.current) return;

      const currentIndex = activeIndexRef.current;
      const nextIndex = (currentIndex + 1) % HERO_IMAGES.length;

      setActiveIndex(nextIndex);
      activeIndexRef.current = nextIndex;
    };

    startTimeoutRef.current = window.setTimeout(() => {
      advanceSlide();
      intervalRef.current = window.setInterval(
        advanceSlide,
        HERO_SLIDE_INTERVAL
      );
    }, HERO_SLIDE_DISPLAY);

    return () => {
      if (startTimeoutRef.current !== null) {
        window.clearTimeout(startTimeoutRef.current);
        startTimeoutRef.current = null;
      }
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSliderReady]);

  useEffect(() => {
    if (!isSliderReady || typeof window === "undefined") return;

    const nextIndex = (activeIndexRef.current + 1) % HERO_IMAGES.length;
    const nextSrc = HERO_IMAGES[nextIndex].src;

    if (preloadCache.current.has(nextSrc)) return;

    const img = new window.Image();
    img.onload = () => {
      preloadCache.current.add(nextSrc);
    };
    img.onerror = () => {
      preloadCache.current.add(nextSrc);
    };
    img.src = nextSrc;
  }, [activeIndex, isSliderReady]);

  return (
    <>
      {/* Premium Hero Section - Full Width Edge-to-Edge */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Slider - Full Width */}
        <div
          className="hero-slider"
          data-reduce-motion={reduceMotion ? "true" : "false"}
        >
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`hero-layer ${
                activeIndex === index ? "hero-layer-active" : ""
              }`}
              aria-hidden={activeIndex !== index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                fetchPriority={index < 2 ? "high" : "low"}
                sizes="100vw"
                className="hero-image object-cover"
                unoptimized
              />
            </div>
          ))}
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

      {/* Customer Offer Section */}
      <section
        className="reveal bg-slate-50 py-10 sm:py-12"
        data-reveal
        data-reveal-id="offer"
        id="offer"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-200/70 bg-white/90 px-6 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:px-10 sm:py-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Trygg flytt & städ – med en extra kundförmån just nu
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                För att säkerställa hög kvalitet tar vi endast emot ett
                begränsat antal uppdrag.
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                15% kundförmån på första bokningen
              </p>
            </div>
            <Button variant="primary" href="https://tally.so/r/pbBdkB">
              Få gratis offert
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Premium Design */}
      <section className="reveal reveal-fast bg-slate-50 py-16 sm:py-20" data-reveal data-reveal-id="services">
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
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Flytt Service Card */}
            <Card
              href="/flyttfirma"
              className="rounded-[18px] border border-slate-200/70 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
            >
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 16.5V7.5a1 1 0 0 1 1-1h8l3 3h5a1 1 0 0 1 1 1v6" />
                    <path d="M5.5 18a1.5 1.5 0 1 0 3 0" />
                    <path d="M15.5 18a1.5 1.5 0 1 0 3 0" />
                    <path d="M8.5 18h7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Flytt inom Skåne
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Vi hjälper dig med allt från mindre lägenhetsflyttar till större
                  bohagsflyttar. Vi kan bära, packa, montera och transportera.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-700">
                  Läs mer om våra flyttjänster
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Card>

            {/* Städning Service Card */}
            <Card
              href="/stadning"
              className="rounded-[18px] border border-slate-200/70 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
            >
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 20h10" />
                    <path d="M12 4v16" />
                    <path d="M5 8h14" />
                    <path d="M8 8c0 3-2 5-2 5" />
                    <path d="M16 8c0 3 2 5 2 5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Flyttstädning & städning
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Noggrann flyttstädning med städgaranti samt löpande hemstädning,
                  kontorsstädning och trappstädning – alltid med RUT-avdrag.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-700">
                  Läs mer om våra städtjänster
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Card>

            {/* Trygg Partner Card */}
            <Card
              href="/trygg-partner"
              className="rounded-[18px] border border-slate-200/70 bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)]"
            >
              <div className="flex h-full flex-col p-6 sm:p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                    <path d="M9.5 12.5l1.5 1.5 3.5-3.5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Trygg partner
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Vi dyker upp i tid, håller vad vi lovar och kommunicerar tydligt
                  genom hela uppdraget.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-sky-700">
                  Läs mer om vår trygghet
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="reveal bg-slate-100/60 py-16 sm:py-20" data-reveal data-reveal-id="why-us">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Varför ska du välja Flyttivo?
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Trygg, professionell och smidig flytt - anpassad efter dina behov.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
              <Image
                src="/image/2%20guys%20moving%20coach.webp"
                alt="Flyttivo personal som hjälper till med flytt"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Erfarna specialister",
                  body: "Våra team arbetar metodiskt och effektivt för en trygg flytt från start till mål.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                      <path d="M9.5 12.5l1.5 1.5 3.5-3.5" />
                    </svg>
                  ),
                },
                {
                  title: "Pålitlig service",
                  body: "Vi håller tider, kommunicerar tydligt och levererar alltid det vi lovar.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 7l-8 10-4-4" />
                      <path d="M4 12h4" />
                      <path d="M16 7h4" />
                    </svg>
                  ),
                },
                {
                  title: "Tydliga priser",
                  body: "Inga dolda avgifter och fullt RUT-avdrag när det är möjligt.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v18" />
                      <path d="M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5" />
                    </svg>
                  ),
                },
                {
                  title: "Anpassat efter dig",
                  body: "Varje flytt är unik. Vi anpassar upplägget helt efter dina behov.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 12h16" />
                      <path d="M12 4v16" />
                      <circle cx="12" cy="12" r="7" />
                    </svg>
                  ),
                },
              ].map((reason) => (
                <div
                  key={reason.title}
                  className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-[0_6px_18px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                    {reason.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {reason.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="reveal reveal-fast bg-white py-16 sm:py-20" data-reveal data-reveal-id="steps">
        <div className="mx-auto max-w-6xl px-4 space-y-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Så fungerar det
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              En tydlig process som gör det enkelt att komma igång och tryggt att
              följa hela vägen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Kontakt & behov",
                body: "Du beskriver vad du behöver hjälp med så återkommer vi snabbt.",
              },
              {
                step: "02",
                title: "Offert & plan",
                body: "Vi tar fram ett tydligt prisförslag och planerar upplägget.",
              },
              {
                step: "03",
                title: "Utförande",
                body: "Vår personal genomför uppdraget tryggt, säkert och effektivt.",
              },
              {
                step: "04",
                title: "Uppföljning",
                body: "Vi säkerställer att allt är klart och att du är helt nöjd.",
              },
            ].map((step, index) => (
              <div
                key={step.step}
                className={`space-y-3 ${
                  index === 0 ? "" : "md:border-l md:border-slate-200 md:pl-6"
                }`}
              >
                <div className="text-sm font-semibold text-slate-400">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
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
        href="sms:0447853002?body=Hej! Jag vill ha en gratis offert."
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
