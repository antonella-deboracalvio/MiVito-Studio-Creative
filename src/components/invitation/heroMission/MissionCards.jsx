const missions = [
  {
    title: 'Hero Training Games',
    description: 'Sfide, percorsi e prove lampo per attivare i superpoteri.',
  },
  {
    title: 'Pizza Power Break',
    description: 'Ricarica energia nella zona ristoro della squadra speciale.',
  },
  {
    title: 'Cake Moment',
    description: 'Il grande momento con torta, candeline e applausi da quartier generale.',
  },
  {
    title: 'Surprise Reward',
    description: 'Una ricompensa finale per chi completa la missione con stile.',
  },
];

function MissionCards() {
  return (
    <section id="missioni" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md">
        <div className="mb-5">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#8BE8F1]">
            Cosa succederà
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">
            La missione è piena di momenti speciali
          </h2>
        </div>

        <div className="space-y-3">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,33,69,0.82),rgba(10,19,44,0.9))] p-4 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="hero-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] border border-[#7CE0E8]/30 bg-[#0D2347] text-lg text-[#FFDD57]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">{mission.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#C7D4F7]">
                    {mission.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionCards;
