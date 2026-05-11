import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { resetElementScroll, resetWindowScroll } from '../../utils/scroll';

function PreviewModal({ template, onClose, onUseStyle }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!template) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    resetWindowScroll();
    resetElementScroll(modalRef.current);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, template]);

  if (!template) {
    return null;
  }

  return (
    <div ref={modalRef} className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-black/45 p-3 backdrop-blur-sm sm:flex sm:items-center sm:justify-center sm:p-6">
      <button
        type="button"
        aria-label="Chiudi modal"
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative z-10 mt-16 w-full max-w-4xl rounded-[2rem] border border-white/80 bg-white p-5 shadow-card sm:mt-0 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brand-gold">
              {template.category}
            </p>
            <h3 className="mt-3 font-display text-4xl leading-none text-brand-text sm:text-5xl">
              {template.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
              {template.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-text transition hover:shadow-soft"
            aria-label="Chiudi modal"
          >
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[1.8rem] border border-brand-line bg-white p-4">
            <div className="mx-auto w-[15rem] rounded-[2.4rem] border border-[#232323] bg-[#141414] p-3 shadow-card sm:w-[17rem]">
              <div className="rounded-[2rem] bg-[#F4EFE6] p-3">
                <div className="overflow-hidden rounded-[1.55rem] bg-white">
                  <div className={`h-56 bg-gradient-to-b ${template.palette} px-5 py-6`}>
                    <div className="mx-auto h-1.5 w-16 rounded-full bg-black/65" />
                    <p className="mt-6 text-center font-sans text-[0.62rem] uppercase tracking-[0.34em] text-brand-muted">
                      {template.eyebrow}
                    </p>
                    <h4 className="mt-10 text-center font-display text-[2rem] leading-none text-brand-text">
                      {template.accent}
                    </h4>
                    <p className="mt-3 text-center font-sans text-[0.7rem] uppercase tracking-[0.18em] text-brand-muted">
                      {template.title}
                    </p>
                  </div>
                  <div className="space-y-3 bg-white/90 px-5 py-5">
                    <div className="rounded-[1rem] border border-brand-line bg-brand-surface p-4">
                      <p className="font-display text-lg text-brand-text">Mini sito premium</p>
                      <p className="mt-1 text-sm text-brand-muted">
                        RSVP, countdown, mappa e dettagli in un solo link.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-[0.9rem] bg-brand-text px-2 py-3 text-center font-display text-base text-brand-ivory">
                        12
                      </div>
                      <div className="rounded-[0.9rem] bg-brand-text px-2 py-3 text-center font-display text-base text-brand-ivory">
                        08
                      </div>
                      <div className="rounded-[0.9rem] bg-brand-text px-2 py-3 text-center font-display text-base text-brand-ivory">
                        24
                      </div>
                    </div>
                    <div className="rounded-full border border-brand-line px-4 py-3 text-center text-sm text-brand-text">
                      Conferma su WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[1.8rem] border border-brand-line bg-white p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brand-gold">
                Perche funziona
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-brand-muted">
                <p>Ogni template e progettato come una mini esperienza digitale, non come una semplice card statica.</p>
                <p>La struttura mantiene look premium, facilita di condivisione e una sensazione di prodotto curato da studio creativo.</p>
                <p>Da qui puoi passare direttamente al configuratore e personalizzare cover, template e dettagli evento.</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onUseStyle?.(template);
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-brand-text bg-brand-text px-5 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text"
                >
                  Usa questo stile
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-5 py-3 text-sm font-medium text-brand-text transition duration-300 hover:-translate-y-0.5"
                >
                  Continua a esplorare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
