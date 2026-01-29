export type OfferSource = "homepage" | "contact-page";

export type OfferPayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  source: OfferSource;
};

const OFFER_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxiLYhOoO_knZV_LK--TxLILaFI0ReIaaPNdTKEhH3HlPjDPy1v2IV_XpppjxArPLpH/exec";

export async function submitOfferForm(payload: OfferPayload) {
  const res = await fetch(OFFER_WEB_APP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await res.json();

  if (!res.ok || !result?.success) {
    throw new Error("Request failed");
  }
}
