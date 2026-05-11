function WireframePreview({ layout }) {
  return (
    <div className="rounded-[1.5rem] border border-brand-line bg-white p-4">
      <div className="rounded-[1.2rem] border border-brand-line bg-white p-3">
        <div className="h-20 rounded-[1rem] bg-[#EEE7DB]" />
        <div className="mt-3 space-y-2">
          {layout.map((item, index) => (
            <div
              key={item}
              className={`rounded-xl px-3 py-3 text-[0.68rem] uppercase tracking-[0.18em] ${
                index === 0 ? 'bg-brand-text text-brand-ivory' : 'bg-[#F4EFE7] text-brand-muted'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepTemplate({ templates, selectedTemplate, onBack, onSelect }) {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Step 3
          </p>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">
            Come vuoi vivere l invito?
          </h3>
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
        {templates.map((template) => {
          const isActive = selectedTemplate?.id === template.id;

          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onSelect(template)}
              className={`rounded-[1.9rem] border p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                isActive
                  ? 'border-brand-gold bg-white shadow-card'
                  : 'border-brand-line bg-white/85 hover:border-brand-gold/50'
              }`}
            >
              <WireframePreview layout={template.layout} />
              <p className="mt-5 text-[0.68rem] uppercase tracking-[0.22em] text-brand-gold">
                Template Flow
              </p>
              <h4 className="mt-2 font-display text-3xl leading-none text-brand-text">
                {template.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{template.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StepTemplate;
