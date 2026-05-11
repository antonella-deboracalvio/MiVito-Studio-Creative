const fields = [
  { id: 'celebrantName', label: 'Nomi / Nome festeggiato', type: 'text', placeholder: 'Es. Sofia e Luca, Alessio' },
  { id: 'age', label: 'Eta', type: 'text', placeholder: 'Es. 6 anni' },
  { id: 'eventDate', label: 'Data evento', type: 'date', placeholder: '' },
  { id: 'eventTime', label: 'Ora', type: 'time', placeholder: '' },
  { id: 'location', label: 'Luogo', type: 'text', placeholder: 'Via, citta, location' },
  { id: 'whatsapp', label: 'Telefono WhatsApp', type: 'tel', placeholder: '333 1234567' },
];

function StepForm({
  formData,
  selectedCategory,
  selectedCover,
  selectedTemplate,
  onBack,
  onChange,
  onSubmit,
  onEditStyle,
  sourceStyleTitle,
}) {
  const requiredReady =
    formData.celebrantName &&
    formData.eventDate &&
    formData.eventTime &&
    formData.location &&
    formData.whatsapp;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          {selectedCategory && selectedCover && selectedTemplate ? (
            <div className="mb-5 rounded-[1.35rem] border border-brand-gold/45 bg-white p-4 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold">
                    Stile scelto
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-brand-text">
                    {sourceStyleTitle || selectedCover.title}
                  </h4>
                  <div className="mt-3 grid gap-2 text-sm text-brand-muted sm:grid-cols-2">
                    <p>
                      Categoria: <span className="text-brand-text">{selectedCategory.title}</span>
                    </p>
                    <p>
                      Template: <span className="text-brand-text">{selectedTemplate.title}</span>
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onEditStyle}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-text transition hover:border-brand-gold hover:text-brand-text"
                >
                  Modifica stile
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
                Step 4
              </p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl">Inserisci info</h3>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex w-fit items-center rounded-full border border-brand-line bg-white px-4 py-2 text-sm text-brand-text transition hover:-translate-y-0.5"
            >
              Torna indietro
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.id} className="block">
                <span className="mb-2 block text-sm font-medium text-brand-text">
                  {field.label}
                </span>
                <input
                  type={field.type}
                  value={formData[field.id]}
                  placeholder={field.placeholder}
                  onChange={(event) => onChange(field.id, event.target.value)}
                  className="w-full rounded-[1.2rem] border border-brand-line bg-white px-4 py-3 text-sm text-brand-text outline-none transition focus:border-brand-gold focus:shadow-soft"
                />
              </label>
            ))}

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-brand-text">
                Messaggio
              </span>
              <textarea
                rows="4"
                value={formData.customMessage}
                placeholder="Aggiungi una frase, una dedica o un tono speciale."
                onChange={(event) => onChange('customMessage', event.target.value)}
                className="w-full rounded-[1.2rem] border border-brand-line bg-white px-4 py-3 text-sm text-brand-text outline-none transition focus:border-brand-gold focus:shadow-soft"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-brand-text">
                Note allergie se evento con RSVP
              </span>
              <input
                type="text"
                value={formData.allergies}
                placeholder="Es. intolleranze, allergie, menu speciale"
                onChange={(event) => onChange('allergies', event.target.value)}
                className="w-full rounded-[1.2rem] border border-brand-line bg-white px-4 py-3 text-sm text-brand-text outline-none transition focus:border-brand-gold focus:shadow-soft"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={onSubmit}
            disabled={!requiredReady}
            className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium transition duration-300 sm:w-auto ${
              requiredReady
                ? 'border border-brand-text bg-brand-text text-brand-ivory hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text hover:shadow-float'
                : 'cursor-not-allowed border border-brand-line bg-[#EDE7DC] text-brand-muted'
            }`}
          >
            Genera Anteprima
          </button>
        </div>

        <div className="rounded-[1.7rem] border border-brand-line bg-white p-5 shadow-soft">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold">
            Riepilogo corrente
          </p>
          <div className="mt-4 space-y-4 text-sm text-brand-muted">
            <div>
              <p className="text-brand-text">Categoria</p>
              <p>{selectedCategory?.title || 'Da scegliere'}</p>
            </div>
            <div>
              <p className="text-brand-text">Cover</p>
              <p>{selectedCover?.title || 'Da scegliere'}</p>
            </div>
            <div>
              <p className="text-brand-text">Template</p>
              <p>{selectedTemplate?.title || 'Da scegliere'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepForm;
