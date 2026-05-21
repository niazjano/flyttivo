import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import {
  FaqPageJsonLd,
  LocalBusinessJsonLd,
} from "@/components/StructuredData";
import { SITE_METADATA } from "@/lib/company";

export const metadata: Metadata = {
  title: { absolute: SITE_METADATA.title },
  description: SITE_METADATA.description,
};

const HOME_FAQ = [
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

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FaqPageJsonLd items={HOME_FAQ} />
      <HomePageContent />
    </>
  );
}
