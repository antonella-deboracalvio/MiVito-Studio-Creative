function MissionBriefing() {
  return (
    <section id="briefing" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#8BE8F1]">
          Mission Briefing
        </p>
        <h2 className="mt-3 font-display text-3xl text-white">
          Convocazione ufficiale per giovani eroi
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#C7D4F7]">
          Alessio ha ricevuto un incarico speciale e ha bisogno della sua squadra
          migliore. Preparati a entrare nella base operativa, superare prove da
          veri eroi e festeggiare una missione leggendaria.
        </p>

        <div className="mt-5 rounded-[1.6rem] border border-[#1D3261] bg-[linear-gradient(180deg,rgba(11,25,55,0.9),rgba(7,16,36,0.96))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#7CE0E8]">
                Dossier Hero 006
              </p>
              <h3 className="mt-2 font-display text-2xl text-white">
                Operazione Alessio
              </h3>
            </div>
            <div className="hero-glow rounded-full border border-[#FFDD57]/30 bg-[#FFDD57]/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-[#FFDD57]">
              Priority
            </div>
          </div>

          <div className="mt-4 grid gap-3 text-sm text-[#CBD8F8]">
            <div className="rounded-[1.15rem] border border-white/8 bg-white/5 px-4 py-3">
              Obiettivo: celebrare il 6° compleanno con energia, giochi e sorprese.
            </div>
            <div className="rounded-[1.15rem] border border-white/8 bg-white/5 px-4 py-3">
              Accesso consentito solo agli invitati della squadra speciale.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionBriefing;
