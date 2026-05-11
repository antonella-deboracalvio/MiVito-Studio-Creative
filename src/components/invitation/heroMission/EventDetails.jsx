const detailCards = [
  {
    title: 'Data',
    value: 'Sabato 15 Giugno 2026',
  },
  {
    title: 'Ora',
    value: '16:00',
  },
  {
    title: 'Luogo',
    value: 'Via delle Stelle 12, Bari',
  },
  {
    title: 'Dress Code',
    value: 'Dettaglio hero o colori power',
  },
];

function EventDetails() {
  return (
    <section id="dettagli" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md">
        <div className="mb-5">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#8BE8F1]">
            Dettagli Evento
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">
            Tutto quello che serve alla squadra
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {detailCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.55rem] border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#FFDD57]">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#E6EEFF]">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
