"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { COMPANY } from "@/lib/company";

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
    alt: "Flyttivo flytthjälp i Kristianstad",
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

const FAQ_ITEMS = [
  {
    question: "Vad kostar en flyttfirma i Kristianstad?",
    answer:
      "Priset beror på bostadens storlek, avstånd och vilka tjänster som ingår. Vi lämnar alltid en tydlig offert i förväg så att du vet exakt vad som gäller innan uppdraget startar.",
  },
  {
    question: "Hur snabbt kan man få offert?",
    answer:
      "Vi återkommer vanligtvis samma dag med ett tydligt prisförslag. Fyll i offertformuläret eller ring oss så går vi igenom dina behov direkt.",
  },
  {
    question: "Erbjuder ni flyttstädning?",
    answer:
      "Ja. Vi erbjuder professionell flyttstädning i Kristianstad enligt gängse riktlinjer, med städgaranti och möjlighet till RUT-avdrag på arbetskostnaden.",
  },
  {
    question: "Arbetar ni i Åhus och Kristianstad?",
    answer:
      "Ja. Vi är baserade i Kristianstad och arbetar i centrala Kristianstad, Åhus, Nosaby, Vä, Öllsjö och närliggande orter.",
  },
  {
    question: "Är ni försäkrade?",
    answer:
      "Ja. Alla våra flytt- och städuppdrag är försäkrade, så du kan känna dig trygg genom hela processen.",
  },
];

export function HomePageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeoutRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const preloadCache = useRef(new Set<string>());
  const isMountedRef = useRef(true);
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
            Flyttfirma i Kristianstad
          </h1>

          <p className="hero-fade-up hero-fade-up-delay-1 mx-auto mb-4 max-w-2xl text-sm font-medium text-white/95 sm:text-base">
            Professionell flytt och städ i Kristianstad
          </p>

          <p className="hero-fade-up hero-fade-up-delay-1 mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base md:text-lg">
            Trygg flyttservice i Kristianstad, centrala Kristianstad, Åhus,
            Nosaby, Vä och Öllsjö – med tydlig offert och 50% RUT-avdrag på
            arbetskostnaden.
          </p>

          {/* Premium CTA Buttons */}
          <div className="hero-fade-up hero-fade-up-delay-2 mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA - Flyttivo Blue */}
            <Button variant="primary" href="https://tally.so/r/pbBdkB">
              Få gratis offert
            </Button>
            {/* Secondary CTA - Transparent White Border */}
            <Button variant="secondary" href={`tel:${COMPANY.phoneTel}`}>
              Ring oss: {COMPANY.phoneDisplay}
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

      {/* CTA Banner */}
      <section
        className="reveal bg-slate-50 py-10 sm:py-12"
        data-reveal
        data-reveal-id="offer"
        id="offert"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-slate-200/70 bg-white/90 px-6 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:px-10 sm:py-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Begär offert för flytt eller städ i Kristianstad
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                Vi återkommer snabbt med ett tydligt prisförslag anpassat efter
                ditt uppdrag – utan dolda avgifter.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button variant="primary" href="https://tally.so/r/pbBdkB">
                Få gratis offert
              </Button>
              <Button variant="ghost" href="/kontakt">
                Kontakta oss
              </Button>
            </div>
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
                  Flyttfirma i Kristianstad
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Vi hjälper dig med allt från mindre lägenhetsflyttar till större
                  bohagsflyttar i Kristianstad och omnejd. Bärhjälp, packning,
                  montering och transport.
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

      {/* About Section */}
      <section
        className="reveal bg-white py-16 sm:py-20"
        data-reveal
        data-reveal-id="about"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Om företaget
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {COMPANY.name} erbjuder professionella tjänster inom flytt och
              städning i Kristianstad. Vi fokuserar på trygg service, tydlig
              kommunikation och hög kvalitet i varje uppdrag.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Som registrerat svenskt aktiebolag arbetar vi strukturerat med
              tydliga priser, professionell kundservice och ett upplägg som
              gör det enkelt att planera flytt och städning.
            </p>
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section
        className="reveal border-y border-slate-200/60 bg-slate-50/80 py-14 sm:py-16"
        data-reveal
        data-reveal-id="trust"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Trygg flyttfirma i Kristianstad
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Vi bygger långsiktiga relationer med tydlig kommunikation, professionellt
              utförande och ett lokalt team du kan lita på.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Lokalt företag i Kristianstad",
                icon: "📍",
              },
              {
                title: "Snabba svarstider",
                icon: "⚡",
              },
              {
                title: "Transparent prissättning",
                icon: "📋",
              },
              {
                title: "Försäkrade tjänster",
                icon: "🛡️",
              },
              {
                title: "Professionell kundservice",
                icon: "✓",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="trust-card rounded-2xl border border-slate-200/60 bg-white px-5 py-5 text-center shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              >
                <span className="mb-3 block text-xl" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-sm font-medium text-slate-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal bg-white py-16 sm:py-20" data-reveal data-reveal-id="faq">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Vanliga frågor
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Tydliga svar på de vanligaste frågorna innan du bokar.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200/70 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
                >
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-slate-900 sm:text-base"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() =>
                        setOpenFaqIndex((prev) => (prev === index ? -1 : index))
                      }
                    >
                      <span>{item.question}</span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    className={`faq-panel px-6 ${
                      isOpen ? "faq-panel-open" : ""
                    }`}
                  >
                    <p className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
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
            Flytt och städ i Kristianstad med omnejd
          </h2>
          <p className="mb-10 text-base leading-relaxed text-slate-600">
            Vi är din lokala flyttfirma i Kristianstad och arbetar i centrala
            Kristianstad, Åhus, Nosaby, Vä, Öllsjö samt närliggande orter som
            Hässleholm, Östra Göinge, Broby och Bromölla.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Kristianstad", slug: "kristianstad" },
              { name: "Åhus", slug: "ahus" },
              { name: "Nosaby", slug: null },
              { name: "Vä", slug: null },
              { name: "Öllsjö", slug: null },
              { name: "Hässleholm", slug: "hassleholm" },
              { name: "Östra Göinge", slug: "ostra-goinge" },
              { name: "Bromölla", slug: "bromolla" },
            ].map((city) =>
              city.slug ? (
                <Link
                  key={city.name}
                  href={`/stad/${city.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-center text-xs font-medium text-[#1C1F23] transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  aria-label={`Flytt och städ i ${city.name}`}
                >
                  {city.name}
                </Link>
              ) : (
                <span
                  key={city.name}
                  className="rounded-full border border-slate-200/80 bg-slate-50 px-5 py-2.5 text-center text-xs font-medium text-slate-600"
                >
                  {city.name}
                </span>
              )
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="reveal mb-20"
          data-reveal
          data-reveal-id="contact"
        >
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Kontakta oss
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Vi återkommer med en tydlig offert så snart som möjligt. Ring
                eller maila oss om du vill diskutera ditt uppdrag direkt.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="rounded-2xl border border-slate-200/70 bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:border-[#1E5F99]/30 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Telefon
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {COMPANY.phoneDisplay}
                </p>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="rounded-2xl border border-slate-200/70 bg-white px-6 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:border-[#1E5F99]/30 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  E-post
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {COMPANY.email}
                </p>
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" href="https://tally.so/r/pbBdkB">
                Få gratis offert
              </Button>
              <Button
                variant="ghost"
                href={`tel:${COMPANY.phoneTel}`}
              >
                Ring {COMPANY.phoneDisplay}
              </Button>
            </div>
          </div>
        </section>

        {/* Tally Embed Section */}
        <section className="reveal py-20 bg-slate-50" data-reveal data-reveal-id="tally">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border border-slate-200/60 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-6">
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
        href={`sms:${COMPANY.phoneTel}?body=Hej! Jag vill ha en gratis offert.`}
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
