const whatsappMessage = encodeURIComponent(
  'Ciao! Confermiamo la presenza alla missione di Alessio. Non vediamo l’ora di partecipare!',
);

function RSVP() {
  return (
    <section id="rsvp" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md space-y-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#8BE8F1]">
            Mission Map
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">
            Raggiungi la base operativa
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#C7D4F7]">
            Via delle Stelle 12, Bari
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via%20delle%20Stelle%2012%2C%20Bari"
            target="_blank"
            rel="noreferrer"
            className="hero-glow mt-5 inline-flex w-full items-center justify-center rounded-full border border-[#7CE0E8]/30 bg-[#0E2246] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5"
          >
            Apri Google Maps
          </a>
        </div>

        <div className="rounded-[2rem] border border-[#FFDD57]/20 bg-[linear-gradient(180deg,rgba(255,221,87,0.12),rgba(124,224,232,0.08))] p-5 backdrop-blur">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#FFDD57]">
            RSVP
          </p>
          <h2 className="mt-3 font-display text-3xl text-white">
            Conferma la tua presenza
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#E5ECFF]">
            Contatta Mamma al numero 333 1234567 e unisciti ufficialmente alla
            squadra hero.
          </p>
          <a
            href={`https://wa.me/393331234567?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="hero-glow mt-5 inline-flex w-full items-center justify-center rounded-full border border-[#FFDD57]/30 bg-[#FFDD57] px-5 py-3 text-sm font-semibold text-[#081327] transition duration-300 hover:-translate-y-0.5"
          >
            Conferma su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
