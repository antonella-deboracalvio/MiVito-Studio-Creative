function PreviewResult({
  isVisible,
  previewHref,
  selectedCategory,
  selectedCover,
  selectedTemplate,
  formData,
}) {
  if (!isVisible) {
    return null;
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `Ciao MiVito Studio, vorrei richiedere la versione finale del mio invito.
Categoria: ${selectedCategory?.title || ''}
Cover: ${selectedCover?.title || ''}
Template: ${selectedTemplate?.title || ''}
Nome: ${formData.celebrantName || ''}
Data: ${formData.eventDate || ''}
Ora: ${formData.eventTime || ''}`,
  )}`;

  return (
    <section
      id="preview-ready"
      className="mt-8 rounded-[2.25rem] border border-brand-line bg-brand-text px-5 py-8 text-brand-ivory shadow-card sm:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-luxe text-brand-gold">Risultato</p>
          <h3 className="mt-4 font-display text-4xl sm:text-5xl">
            La tua demo invito e pronta.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Abbiamo preparato una combinazione iniziale con le scelte del configuratore.
            Puoi aprire la demo oppure inviarci la richiesta finale per rifinirla.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={previewHref}
              className="inline-flex items-center justify-center rounded-full border border-brand-text bg-brand-text px-6 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text hover:shadow-float"
            >
              Apri Anteprima
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5"
            >
              Richiedi versione finale
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
          <div className="rounded-[1.6rem] bg-[#F3ECDD] p-3">
            <div className="overflow-hidden rounded-[1.4rem] bg-white shadow-soft">
              <div className="h-44 bg-[linear-gradient(180deg,rgba(201,168,106,0.28),rgba(255,255,255,0.18)),radial-gradient(circle_at_top,#d4b47d_0%,#f3ece2_58%,#ffffff_100%)] p-5">
                <p className="text-center text-[0.62rem] uppercase tracking-[0.24em] text-brand-muted">
                  {selectedCategory?.title || 'Invito digitale'}
                </p>
                <h4 className="mt-8 text-center font-display text-3xl leading-none text-brand-text">
                  {formData.celebrantName || 'Il tuo evento'}
                </h4>
                <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-brand-muted">
                  {selectedCover?.title || 'Cover'} / {selectedTemplate?.title || 'Template'}
                </p>
              </div>
              <div className="space-y-3 px-4 py-4 text-sm text-brand-muted">
                <div className="rounded-2xl border border-brand-line bg-brand-surface p-4">
                  <p className="font-display text-lg text-brand-text">
                    {formData.location || 'Location evento'}
                  </p>
                  <p className="mt-1">
                    {formData.eventDate || 'Data'} alle {formData.eventTime || 'Ora'}
                  </p>
                </div>
                <div className="rounded-full border border-brand-line px-4 py-3 text-center text-brand-text">
                  RSVP WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewResult;
