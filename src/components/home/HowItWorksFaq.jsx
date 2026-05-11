import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Come funziona MiVito Studio?',
    answer:
      'Scegli una categoria, seleziona uno stile gia pronto e compila i dati del tuo evento. Noi trasformiamo tutto in un invito digitale elegante, pronto da condividere su WhatsApp.',
  },
  {
    question: 'Devo creare tutto da zero?',
    answer:
      'No. I template partono gia da una demo completa. Tu scegli lo stile, inserisci nomi, data, luogo, foto e informazioni principali.',
  },
  {
    question: 'Posso vedere una demo prima?',
    answer:
      'Si. Ogni stile ha una demo navigabile, cosi puoi vedere il risultato prima di usarlo.',
  },
  {
    question: 'Posso inviarlo su WhatsApp?',
    answer:
      'Si. L invito finale sara condivisibile tramite link, perfetto per WhatsApp, Instagram o messaggio.',
  },
  {
    question: 'Posso aggiungere RSVP, mappa e countdown?',
    answer:
      'Si. In base al pacchetto scelto puoi includere countdown, mappa evento, programma, RSVP e dettagli personalizzati.',
  },
];

// Home: FAQ operative per spiegare il servizio.
function HowItWorksFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="come-funziona" className="bg-[#F8F5EF] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl text-brand-text sm:text-5xl">
            Come funziona
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
            Tutto quello che devi sapere prima di creare il tuo invito digitale.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `come-funziona-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[20px] border border-[#E8DDCC] bg-white shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-[18px] text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-display text-xl leading-snug text-brand-text sm:text-2xl">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8DDCC] text-brand-gold">
                    {isOpen ? (
                      <Minus size={16} strokeWidth={1.5} aria-hidden="true" />
                    ) : (
                      <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
                    )}
                  </span>
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[18px] pb-[18px] text-sm leading-6 text-brand-muted sm:text-base sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksFaq;
