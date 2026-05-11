import { useEffect, useState } from 'react';
import { ArrowLeft, Music2, Play, Send, Shirt, SkipForward } from 'lucide-react';
import EnvelopeIntro from './EnvelopeIntro';
import CountdownBlock from './CountdownBlock';
import EventDetailsBlock from './EventDetailsBlock';
import TimelineBlock from './TimelineBlock';
import RSVPBlock from './RSVPBlock';
import GalleryBlock from './GalleryBlock';
import GiftBlock from './GiftBlock';
import FooterBlock from './FooterBlock';
import heroCard from '../../assets/templates/velvet-wedding/sections/hero-card.png';
import saveDateCard from '../../assets/templates/velvet-wedding/sections/save-date-card.png';
import timelineCard from '../../assets/templates/velvet-wedding/sections/timeline-card.png';
import locationCard from '../../assets/templates/velvet-wedding/sections/location-card.png';
import rsvpCard from '../../assets/templates/velvet-wedding/sections/rsvp-card.png';
import galleryOne from '../../assets/templates/velvet-wedding/gallery/gallery-1.png';
import { resetWindowScroll } from '../../utils/scroll';

const velvetSpotifyTrackUrl = 'https://open.spotify.com/intl-it/track/0tgVpDi06FyKpA1z0VMD4v';

function MobileSection({ children }) {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-[430px]">{children}</div>
    </section>
  );
}

function HeroCover({ template }) {
  const { assets, content, style } = template;

  return (
    <section
      className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden px-6 pb-12 pt-6 text-white shadow-[0_30px_90px_rgba(17,17,17,0.08)] sm:my-6 sm:min-h-[860px] sm:rounded-[30px]"
      style={{ backgroundColor: style.primary }}
    >
      {assets.cover ? (
        <img src={assets.cover} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.16),rgba(17,17,17,0.38))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rotate-45 border border-white/20" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/20" />
      </div>
      <div className="relative z-10 flex min-h-[88vh] flex-col items-center justify-center text-center">
        <p className="text-[0.66rem] uppercase tracking-[0.38em] text-white/75">{content.openingLabel}</p>
        <h1
          className="mt-8 text-[4.4rem] leading-[0.82]"
          style={{ fontFamily: `"${style.scriptFont}", "${style.titleFont}", serif` }}
        >
          {content.firstName}
          <span className="block py-2 text-5xl">&</span>
          {content.secondName}
        </h1>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-white/82">{content.date}</p>
      </div>
    </section>
  );
}

function IntroBlock({ template }) {
  const { assets, content, images = {}, style } = template;
  const introImage = images.intro || assets.coupleMain;

  return (
    <MobileSection>
      <div
        className="overflow-hidden rounded-[30px] border shadow-[0_18px_60px_rgba(17,17,17,0.06)]"
        style={{ backgroundColor: style.card, borderColor: style.border }}
      >
        {introImage ? <img src={introImage} alt="" className="block h-auto w-full object-cover" /> : null}
        <div className="px-7 py-8 text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.32em]" style={{ color: style.primary }}>
            {template.subtitle}
          </p>
          <p className="mt-4 font-display text-3xl leading-snug" style={{ color: style.text }}>
            {content.introText}
          </p>
        </div>
      </div>
    </MobileSection>
  );
}

function MusicBlock({ template }) {
  const { content, style } = template;

  return (
    <MobileSection>
      <div
        className="rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)]"
        style={{ backgroundColor: style.card, borderColor: style.border }}
      >
        <p className="text-center font-display text-3xl" style={{ color: style.text }}>
          {content.musicText}
        </p>
        <div className="mt-6 rounded-full border p-3" style={{ backgroundColor: style.background, borderColor: style.border }}>
          <div className="flex items-center justify-between gap-3">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: style.primary }}
              type="button"
              aria-label="Play"
            >
              <Play size={16} strokeWidth={1.5} fill="currentColor" aria-hidden="true" />
            </button>
            <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: style.border }}>
              <div className="h-full w-2/5 rounded-full" style={{ backgroundColor: style.primary }} />
            </div>
            <button type="button" style={{ color: style.primary }} aria-label="Avanti">
              <SkipForward size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </MobileSection>
  );
}

function VelvetSection({ children, className = '' }) {
  return (
    <section className={`velvet-fade-up px-4 py-2.5 ${className}`}>
      <div className="mx-auto w-full max-w-[390px]">{children}</div>
    </section>
  );
}

function VelvetImageCard({ src, alt, href, actionLabel }) {
  const image = (
    <img
      src={src}
      alt={alt}
      className="block w-full rounded-[22px] object-contain shadow-[0_12px_34px_rgba(92,31,42,0.08)]"
    />
  );

  if (!href) {
    return image;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer touch-manipulation transition duration-300 hover:scale-[1.01] hover:drop-shadow-[0_16px_34px_rgba(156,47,63,0.16)] active:scale-[0.995]"
      aria-label={`${alt} - apri su Maps`}
    >
      {image}
      {actionLabel ? (
        <span className="mx-auto mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#9C2F3F]/20 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9C2F3F] transition group-hover:border-[#9C2F3F]">
          {actionLabel}
        </span>
      ) : null}
    </a>
  );
}

function VelvetMusicCard() {
  return (
    <VelvetSection>
      <div className="overflow-hidden rounded-[24px] border border-[#9C2F3F]/12 bg-[#fff8f0]/76 p-5 shadow-[0_16px_40px_rgba(92,31,42,0.09)] backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <a
            href={velvetSpotifyTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apri Perfect su Spotify"
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#9C2F3F] text-white shadow-[0_0_0_8px_rgba(156,47,63,0.08),0_16px_32px_rgba(156,47,63,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_10px_rgba(156,47,63,0.10),0_18px_36px_rgba(156,47,63,0.26)] focus:outline-none focus:ring-4 focus:ring-[#9C2F3F]/18 active:scale-95"
          >
            <Play size={17} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
          </a>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[#702131]">
              <Music2 size={16} strokeWidth={1.7} aria-hidden="true" />
              <p className="truncate text-sm font-semibold leading-tight">La nostra canzone</p>
            </div>
            <p className="mt-1 truncate text-xs font-medium text-[#9b7480]">Perfect &mdash; Ed Sheeran</p>
            <div className="mt-4 flex h-8 items-end gap-1.5" aria-hidden="true">
              {[35, 58, 44, 76, 52, 88, 62, 42, 70, 48, 64, 38].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-1.5 rounded-full bg-[#9C2F3F]/32 transition duration-500"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs leading-5 text-[#9b7480]">
          Ascoltala su Spotify.
        </p>

        <a
          href={velvetSpotifyTrackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#9C2F3F] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(156,47,63,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#842838] focus:outline-none focus:ring-4 focus:ring-[#9C2F3F]/18 active:scale-[0.98]"
        >
          Apri su Spotify
        </a>
      </div>
    </VelvetSection>
  );
}

function VelvetRsvpCard({ onAnswer }) {
  return (
    <VelvetSection>
      <div className="relative">
        <VelvetImageCard src={rsvpCard} alt="Conferma partecipazione" />
        <button
          type="button"
          aria-label="Confermo la partecipazione"
          onClick={() => onAnswer('si')}
          className="absolute bottom-[9.5%] left-[13%] h-[10%] w-[32%] rounded-full opacity-0"
        />
        <button
          type="button"
          aria-label="Non posso partecipare"
          onClick={() => onAnswer('no')}
          className="absolute bottom-[9.5%] right-[13%] h-[10%] w-[32%] rounded-full opacity-0"
        />
      </div>
    </VelvetSection>
  );
}

function buildVelvetWhatsappUrl({ participation, name, guests, allergies, notes, whatsappNumber }) {
  const message = [
    `Partecipazione: ${participation === 'si' ? 'sì' : 'no'}`,
    name ? `Nome: ${name}` : 'Nome: Non indicato',
    guests ? `Numero invitati: ${guests}` : 'Numero invitati: Non indicato',
    allergies ? `Allergie: ${allergies}` : null,
    notes ? `Note: ${notes}` : null,
  ].filter(Boolean).join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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

function VelvetWeddingContent({ template, phase }) {
  const { content } = template;
  const [participation, setParticipation] = useState(null);
  const whatsappNumber = content.rsvp?.whatsappNumber || '';
  const eventLocationUrl =
    template.eventLocationUrl || template.locationUrl || content.eventLocationUrl || content.reception?.mapUrl || content.locationUrl;
  const churchLocationUrl =
    template.churchLocationUrl || content.churchLocationUrl || content.ceremony?.mapUrl || template.locationUrl || eventLocationUrl;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff8f0_0%,#fde7ec_45%,#fff8f0_100%)] text-[#5e2631]">
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[#f3a8b7]/24 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[34rem] h-72 w-72 rounded-full bg-[#9C2F3F]/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-[62rem] h-60 w-60 rounded-full bg-[#f7c6cf]/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle_at_1px_1px,rgba(156,47,63,0.22)_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="relative z-10 mx-auto w-full max-w-[430px] pb-14 pt-4">
        <VelvetSection className={`pt-6 ${phase === 'content' ? 'velvet-content-hero-enter' : ''}`}>
          <VelvetImageCard src={heroCard} alt="Federica e Mario" />
        </VelvetSection>
        <VelvetMusicCard />
        <VelvetSection>
          <CountdownBlock
            reveal
            dateISO={content.dateISO}
            style={{ ...template.style, card: 'rgba(255,250,246,0.88)', background: '#F9F3EA', primary: '#9C2F3F' }}
          />
        </VelvetSection>
        <VelvetSection>
          <VelvetImageCard src={saveDateCard} alt="Save the date e luogo della festa" href={eventLocationUrl} actionLabel="Apri su Maps" />
        </VelvetSection>
        <VelvetSection>
          <VelvetImageCard src={timelineCard} alt="Timeline del matrimonio" />
        </VelvetSection>
        <VelvetSection>
          <VelvetImageCard src={locationCard} alt="Luogo del matrimonio" href={churchLocationUrl} actionLabel="Apri su Maps" />
        </VelvetSection>
        <VelvetRsvpCard onAnswer={setParticipation} />
        {participation ? <VelvetAllergyForm participation={participation} whatsappNumber={whatsappNumber} /> : null}
        <VelvetSection>
          <VelvetImageCard src={galleryOne} alt="Galleria fotografica" />
        </VelvetSection>
        <VelvetSection>
          <div className="relative overflow-hidden rounded-[28px] px-6 py-12 text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3a8b7]/24 blur-3xl" />
            <div className="pointer-events-none absolute left-7 top-7 text-2xl text-[#9C2F3F]/18">♥</div>
            <div className="pointer-events-none absolute bottom-7 right-8 text-xl text-[#9C2F3F]/14">♥</div>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9C2F3F]">Con amore</p>
              <p className="mt-4 font-display text-5xl leading-none text-[#702131]">{content.coupleNames}</p>
            </div>
          </div>
        </VelvetSection>
        </div>
    </div>
  );
}

function DressCodeBlock({ dressCode, style }) {
  return (
    <MobileSection>
      <div
        className="rounded-[28px] border p-7 text-center shadow-[0_18px_50px_rgba(17,17,17,0.05)]"
        style={{ backgroundColor: style.card, borderColor: style.border }}
      >
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: style.background, color: style.muted }}
        >
          <Shirt size={28} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <h2 className="mt-5 font-display text-4xl" style={{ color: style.text }}>{dressCode.title}</h2>
        <p className="mt-3 text-base leading-7" style={{ color: style.muted }}>{dressCode.description}</p>
      </div>
    </MobileSection>
  );
}

// Demo invito: renderizza l'esperienza completa del template selezionato.
function InvitationRenderer({ template, onBack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [velvetPhase, setVelvetPhase] = useState('idle');
  const { content, style, assets, images = {} } = template;
  const isVelvetWedding = template.id === 'velvet-wedding';
  const galleryImages = assets.gallery?.length
    ? assets.gallery
    : [images.hero, images.intro, images.details].filter(Boolean);
  const isVelvetContentVisible = isVelvetWedding && (velvetPhase === 'car' || velvetPhase === 'content');

  useEffect(() => {
    resetWindowScroll();
  }, [template.id]);

  useEffect(() => {
    if (!isVelvetWedding || velvetPhase !== 'content') {
      return;
    }

    resetWindowScroll();
  }, [isVelvetWedding, velvetPhase]);

  return (
    <main
      className="min-h-screen overflow-x-hidden font-sans"
      style={{
        backgroundColor: style.background,
        color: style.text,
        fontFamily: `${style.bodyFont}, sans-serif`,
      }}
    >
      <EnvelopeIntro
        template={template}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        phase={isVelvetWedding ? velvetPhase : undefined}
        setPhase={isVelvetWedding ? setVelvetPhase : undefined}
      />

      <div className={`transition duration-300 ${isVelvetWedding ? (isVelvetContentVisible ? 'opacity-100' : 'pointer-events-none opacity-0') : (isOpen ? 'opacity-100' : 'pointer-events-none opacity-0')}`}>
        <div className="fixed left-4 top-4 z-50">
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 shadow-[0_12px_28px_rgba(17,17,17,0.1)]"
            style={{ borderColor: style.border, color: style.primary }}
            aria-label="Torna agli inviti"
          >
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        {isVelvetWedding ? (
          <VelvetWeddingContent template={template} phase={velvetPhase} />
        ) : (
          <>
            <HeroCover template={template} />
            <IntroBlock template={template} />
            <MusicBlock template={template} />
            <CountdownBlock dateISO={content.dateISO} style={style} />
            <EventDetailsBlock ceremony={content.ceremony} reception={content.reception} style={style} />
            <TimelineBlock items={content.timeline} style={style} />
            <DressCodeBlock dressCode={content.dressCode} style={style} />
            <GiftBlock gift={content.gift} style={style} />
            <RSVPBlock rsvp={content.rsvp} coupleNames={content.coupleNames} style={style} />
            <GalleryBlock images={galleryImages} style={style} />
            <FooterBlock template={template} />
          </>
        )}
      </div>
    </main>
  );
}

export default InvitationRenderer;
