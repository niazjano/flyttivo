"use client";

import { useState } from "react";
import { submitOfferForm } from "@/lib/offerForm";

export default function KontaktPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const payload = {
      name,
      phone,
      email,
      city,
      message,
      source: "contact-page" as const
    };

    try {
      await submitOfferForm(payload);
      setSuccess(true);
      resetForm();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Kontakta oss
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Fyll i formuläret nedan så återkommer vi med en kostnadsfri offert
          på flytt eller städning. Vi försöker alltid svara inom 24 timmar på
          vardagar.
        </p>
      </header>

      <form
        id="kontaktForm"
        className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4 md:col-span-1">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-900"
            >
              Namn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="För- och efternamn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-900"
            >
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="din@epost.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-900"
            >
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="07x-xxx xx xx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-slate-900"
            >
              Stad / område
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="t.ex. Kristianstad, Åhus, Hässleholm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-1">
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Beskriv kort vad du behöver hjälp med (flytt, flyttstädning, hemstädning osv.), datum och ort."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {success && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Tack! Vi har mottagit din förfrågan och återkommer till dig inom
              kort.
            </div>
          )}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              Något gick fel. Försök igen eller ring oss på 044–785 3002.
            </div>
          )}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Skickar..." : "Skicka förfrågan"}
          </button>
          <p className="text-xs text-slate-500">
            Genom att skicka formuläret godkänner du att vi kontaktar dig via
            e-post eller telefon med ett prisförslag.
          </p>
        </div>
      </form>
    </div>
  );
}


