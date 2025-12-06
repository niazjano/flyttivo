import { StadningGame } from "@/components/stad-spel/StadningGame";

export default function StadSpelPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 lg:py-14">
        {/* Intro Section */}
        <div className="mb-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1E5F99]">
            STÄD-SPEL
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Städa Rummet – Flyttivo Clean Challenge
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Välj rätt städon och klicka på smutsen för att städa rummet. Ett roligt
            spel som visar hur viktigt det är att använda rätt verktyg för rätt
            typ av smuts – precis som Flyttivos professionella städteam gör.
          </p>
          <div className="text-sm text-slate-500 italic">
            Tips: Välj först ett städon, sedan klicka på smutsen som passar för
            det verktyget.
          </div>
        </div>

        {/* Game Component */}
        <StadningGame />
      </section>
  );
}

