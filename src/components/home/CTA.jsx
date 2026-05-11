// CTA finale del sito agenzia per portare il visitatore su WhatsApp.
function CTA() {
  return (
    <section className="px-5 pb-12 pt-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-brand-line bg-brand-text px-8 py-14 text-center text-brand-ivory shadow-card sm:px-12">
        <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
          Richiedi il tuo invito
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          Il tuo evento merita qualcosa di speciale.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          Scrivici, scegli il template e ricevi un invito digitale curato nei
          minimi dettagli, pronto da condividere.
        </p>
        <a
          href="https://wa.me/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-text bg-brand-text px-7 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text hover:shadow-float"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CTA;
