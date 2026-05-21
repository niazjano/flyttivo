import { COMPANY } from "@/lib/company";

type FaqItem = { question: string; answer: string };

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: COMPANY.name,
    telephone: `+46${COMPANY.phoneTel.replace(/^0/, "")}`,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressCountry: "SE",
    },
    areaServed: {
      "@type": "City",
      name: COMPANY.city,
    },
    url: "https://flyttivo.se",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
