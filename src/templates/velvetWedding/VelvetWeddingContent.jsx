import { useState } from 'react';
import CountdownBlock from '../../components/invitation/CountdownBlock';
import heroCard from '../../assets/templates/velvet-wedding/sections/hero-card.png';
import saveDateCard from '../../assets/templates/velvet-wedding/sections/save-date-card.png';
import timelineCard from '../../assets/templates/velvet-wedding/sections/timeline-card.png';
import locationCard from '../../assets/templates/velvet-wedding/sections/location-card.png';
import galleryOne from '../../assets/templates/velvet-wedding/gallery/gallery-1.png';
import VelvetMusicCard from './VelvetMusicCard';
import VelvetRsvpCard from './VelvetRsvpCard';
import VelvetAllergyForm from './VelvetAllergyForm';

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
        <VelvetMusicCard template={template} />
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
            <div className="pointer-events-none absolute left-7 top-7 text-2xl text-[#9C2F3F]/18">&hearts;</div>
            <div className="pointer-events-none absolute bottom-7 right-8 text-xl text-[#9C2F3F]/14">&hearts;</div>
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

export default VelvetWeddingContent;
