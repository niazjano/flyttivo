import { PackingGame } from "@/components/spel/PackingGame";

export default function GamePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 lg:py-14">
        {/* Intro Section */}
        <div className="mb-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1E5F99]">
            MINI-SPEL
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Packa Flyttivos kartong
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Dra in sakerna i flyttlådan och försök få plats med allt utan att det
            krockar. Ett lugnt litet spel som visar hur viktigt smart packning är
            – precis som i en riktig Flyttivo-flytt.
          </p>
          <div className="text-sm text-slate-500 italic">
            Tips: klicka på sakerna för att rotera dem. På mobil: använd
            rotationsknappen.
          </div>
        </div>

        {/* Game Component */}
        <PackingGame />
      </section>
  );
}

