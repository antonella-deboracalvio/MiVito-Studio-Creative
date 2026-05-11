function StepCover({ category, covers, selectedCover, onBack, onSelect }) {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Step 2
          </p>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">Scegli la tua busta</h3>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            Selezione attiva per {category?.title || 'la tua categoria'}.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-fit items-center rounded-full border border-brand-line bg-white px-4 py-2 text-sm text-brand-text transition hover:-translate-y-0.5"
        >
          Torna indietro
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {covers.map((cover) => {
          const isActive = selectedCover?.id === cover.id;
          const title = cover.name || cover.title;

          return (
            <button
              key={cover.id}
              type="button"
              onClick={() => onSelect(cover)}
              className={`group rounded-[1.9rem] border p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                isActive
                  ? 'border-brand-gold bg-white shadow-card'
                  : 'border-brand-line bg-white/85 hover:border-brand-gold/50'
              }`}
            >
              {cover.image ? (
                <div className="rounded-[1.5rem] border border-brand-line bg-brand-surface p-5">
                  <div className="mx-auto max-w-[14rem] overflow-hidden rounded-[1.4rem] border border-[#E8DDCC] bg-white shadow-soft">
                    <img src={cover.image} alt={title} className="block h-52 w-full object-cover" />
                  </div>
                </div>
              ) : (
                <div className={`rounded-[1.5rem] border border-brand-line bg-gradient-to-b ${cover.palette} p-5`}>
                  <div className="mx-auto w-[12.5rem] rounded-[2rem] border border-[#222222] bg-[#111111] p-2.5 shadow-soft">
                    <div className="rounded-[1.65rem] bg-[#F5F1EA] p-2.5">
                      <div className="overflow-hidden rounded-[1.3rem] bg-white">
                        <div className={`h-40 bg-gradient-to-b ${cover.palette} px-4 py-5`}>
                          <div className="mx-auto h-1.5 w-14 rounded-full bg-black/65" />
                          <p className="mt-5 text-center font-sans text-[0.58rem] uppercase tracking-[0.28em] text-brand-muted">
                            {cover.eyebrow}
                          </p>
                          <h4 className="mt-6 text-center font-display text-[1.6rem] leading-none text-brand-text">
                            {title}
                          </h4>
                        </div>
                        <div className="space-y-2 bg-white/90 px-4 py-4">
                          <div className="rounded-xl border border-brand-line bg-brand-surface px-3 py-3" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-9 rounded-xl bg-brand-text" />
                            <div className="h-9 rounded-xl bg-brand-text/85" />
                            <div className="h-9 rounded-xl bg-brand-text/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <p className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold">
                Envelope Selection
              </p>
              <h4 className="mt-2 font-display text-3xl leading-none text-brand-text">
                {title}
              </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StepCover;
