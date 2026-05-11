import { useState } from 'react';
import { Send } from 'lucide-react';
import { buildVelvetWhatsappUrl } from './velvetWhatsapp';

function VelvetSection({ children }) {
  return (
    <section className="velvet-fade-up px-4 py-2.5">
      <div className="mx-auto w-full max-w-[390px]">{children}</div>
    </section>
  );
}

function VelvetAllergyForm({ participation, whatsappNumber }) {
  const [form, setForm] = useState({
    name: '',
    allergies: ['Nessuna'],
    notes: '',
    guests: '1',
  });

  const options = ['Nessuna', 'Glutine', 'Lattosio', 'Vegetariano', 'Vegano', 'Altro'];
  const allergiesText = form.allergies.join(', ');
  const whatsappHref = buildVelvetWhatsappUrl({
    participation,
    name: form.name,
    guests: form.guests,
    allergies: participation === 'si' ? allergiesText : '',
    notes: participation === 'si' ? form.notes : '',
    whatsappNumber,
  });

  const toggleAllergy = (option) => {
    setForm((current) => {
      if (option === 'Nessuna') {
        return { ...current, allergies: ['Nessuna'] };
      }

      const withoutNone = current.allergies.filter((item) => item !== 'Nessuna');
      const allergies = withoutNone.includes(option)
        ? withoutNone.filter((item) => item !== option)
        : [...withoutNone, option];

      return { ...current, allergies: allergies.length ? allergies : ['Nessuna'] };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  if (participation === 'no') {
    return (
      <VelvetSection>
        <div className="rounded-[24px] border border-[#eadbd4] bg-white/90 p-6 text-center shadow-[0_22px_52px_rgba(92,31,42,0.10)]">
          <p className="font-display text-3xl text-[#702131]">Ci dispiace non averti con noi</p>
          <p className="mt-3 text-sm leading-6 text-[#8a6470]">Puoi inviare la risposta direttamente su WhatsApp.</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#9C2F3F] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(156,47,63,0.22)]"
          >
            <Send size={16} strokeWidth={1.7} aria-hidden="true" />
            Invia su WhatsApp
          </a>
        </div>
      </VelvetSection>
    );
  }

  return (
    <VelvetSection>
      <form className="relative overflow-hidden rounded-[24px] border border-[#9C2F3F]/10 bg-white/58 p-6 shadow-[0_14px_36px_rgba(92,31,42,0.08)] backdrop-blur">
        <div className="relative">
          <h2 className="font-display text-4xl leading-tight text-[#702131]">Allergie o intolleranze?</h2>
          <p className="mt-2 text-sm leading-6 text-[#8a6470]">Aiutaci a organizzare tutto al meglio.</p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#9C2F3F]">
              Nome e cognome
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-2xl border border-[#eadbd4] bg-[#fffaf6] px-4 py-3 text-sm font-medium normal-case tracking-normal text-[#5e2631] outline-none"
                placeholder="Il tuo nome"
              />
            </label>

            <div>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#9C2F3F]">Allergie</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {options.map((option) => {
                  const isActive = form.allergies.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleAllergy(option)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? 'border-[#9C2F3F] bg-[#9C2F3F] text-white'
                          : 'border-[#eadbd4] bg-[#fffaf6] text-[#7a3d49]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="grid gap-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#9C2F3F]">
              Note alimentari
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="4"
                className="resize-none rounded-2xl border border-[#eadbd4] bg-[#fffaf6] px-4 py-3 text-sm font-medium normal-case tracking-normal text-[#5e2631] outline-none"
                placeholder="Scrivi eventuali dettagli"
              />
            </label>

            <label className="grid gap-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#9C2F3F]">
              Numero invitati
              <input
                name="guests"
                type="number"
                min="1"
                value={form.guests}
                onChange={handleChange}
                className="rounded-2xl border border-[#eadbd4] bg-[#fffaf6] px-4 py-3 text-sm font-medium normal-case tracking-normal text-[#5e2631] outline-none"
              />
            </label>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9C2F3F] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(156,47,63,0.22)]"
          >
            <Send size={16} strokeWidth={1.7} aria-hidden="true" />
            Invia su WhatsApp
          </a>
        </div>
      </form>
    </VelvetSection>
  );
}

export default VelvetAllergyForm;
