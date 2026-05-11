import { useMemo, useState } from 'react';

const defaultRsvp = {
  title: 'Conferma presenza',
  deadline: '',
  whatsappNumber: '390000000000',
  fields: ['Nome e Cognome', 'Parteciperai?', 'Numero ospiti', 'Allergie o intolleranze', 'Messaggio'],
};

const defaultStyle = {
  primary: '#6F7750',
};

function RSVPBlock({ rsvp = defaultRsvp, coupleNames = 'Federica & Mario', style = defaultStyle, variant = 'rsvp' }) {
  const [form, setForm] = useState({
    name: '',
    attending: 'Si',
    allergies: '',
    notes: '',
    guests: '1',
    message: '',
  });

  const whatsappHref = useMemo(() => {
    const allergiesText = [
      `Ciao ${coupleNames}, ecco le informazioni alimentari.`,
      `Nome: ${form.name || '-'}`,
      `Allergie o intolleranze: ${form.allergies || '-'}`,
      `Note alimentari: ${form.notes || '-'}`,
      `Numero ospiti: ${form.guests || '-'}`,
    ].join('\n');

    const rsvpText = [
      `Ciao ${coupleNames}, confermo la mia presenza.`,
      `Nome: ${form.name || '-'}`,
      `Parteciperai: ${form.attending}`,
      `Numero ospiti: ${form.guests || '-'}`,
      `Allergie o intolleranze: ${form.allergies || '-'}`,
      `Messaggio: ${form.message || '-'}`,
    ].join('\n');

    return `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(
      variant === 'allergies' ? allergiesText : rsvpText,
    )}`;
  }, [coupleNames, form, rsvp.whatsappNumber, variant]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  };

  if (variant !== 'allergies') {
    return (
      <section className="px-5 py-8">
        <div
          className="mx-auto max-w-[430px] rounded-[30px] px-6 py-8 shadow-[0_20px_60px_rgba(17,17,17,0.12)]"
          style={{ backgroundColor: style.primary, color: '#FFFFFF' }}
        >
          <h2 className="text-center font-display text-4xl">{rsvp.title}</h2>
          <p className="mt-3 text-center text-sm text-white/75">{rsvp.deadline}</p>
          <form onSubmit={handleSubmit} className="mt-7 grid gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder={rsvp.fields[0]} className="rounded-2xl border border-white/25 bg-white px-4 py-3 text-sm text-[#111111] outline-none" />
            <select name="attending" value={form.attending} onChange={handleChange} className="rounded-2xl border border-white/25 bg-white px-4 py-3 text-sm text-[#111111] outline-none">
              <option>Si</option>
              <option>No</option>
            </select>
            <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} placeholder={rsvp.fields[2]} className="rounded-2xl border border-white/25 bg-white px-4 py-3 text-sm text-[#111111] outline-none" />
            <input name="allergies" value={form.allergies} onChange={handleChange} placeholder={rsvp.fields[3]} className="rounded-2xl border border-white/25 bg-white px-4 py-3 text-sm text-[#111111] outline-none" />
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder={rsvp.fields[4]} className="resize-none rounded-2xl border border-white/25 bg-white px-4 py-3 text-sm text-[#111111] outline-none" />
            <button type="submit" className="mt-2 rounded-full bg-white px-7 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em]" style={{ color: style.primary }}>
              Confermare qui
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-6">
      <div
        className="mx-auto max-w-[430px] rounded-[24px] border px-6 py-8 shadow-[0_18px_50px_rgba(17,17,17,0.07)]"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#E8DDCC', color: style.text || '#111111' }}
      >
        <h2 className="text-center font-display text-4xl" style={{ color: style.text || '#111111' }}>
          Allergie o intolleranze?
        </h2>
        <p className="mt-3 text-center text-sm leading-6" style={{ color: style.muted || '#8C8478' }}>
          Aiutaci a organizzare tutto al meglio.
        </p>
        <form onSubmit={handleSubmit} className="mt-7 grid gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nome e cognome" className="rounded-2xl border border-[#E8DDCC] bg-[#F8F5EF] px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#6F7750]" />
          <input name="allergies" value={form.allergies} onChange={handleChange} placeholder="Allergie o intolleranze" className="rounded-2xl border border-[#E8DDCC] bg-[#F8F5EF] px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#6F7750]" />
          <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" placeholder="Note alimentari" className="resize-none rounded-2xl border border-[#E8DDCC] bg-[#F8F5EF] px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#6F7750]" />
          <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} placeholder="Numero ospiti" className="rounded-2xl border border-[#E8DDCC] bg-[#F8F5EF] px-4 py-3 text-sm text-[#111111] outline-none focus:border-[#6F7750]" />
          <button type="submit" className="mt-2 rounded-full px-7 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white" style={{ backgroundColor: '#6F7750' }}>
            Invia su WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default RSVPBlock;
