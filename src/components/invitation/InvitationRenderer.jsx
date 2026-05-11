import { useEffect, useState } from 'react';
import { ArrowLeft, Play, Shirt, SkipForward } from 'lucide-react';
import EnvelopeIntro from './EnvelopeIntro';
import CountdownBlock from './CountdownBlock';
import EventDetailsBlock from './EventDetailsBlock';
import TimelineBlock from './TimelineBlock';
import RSVPBlock from './RSVPBlock';
import GalleryBlock from './GalleryBlock';
import GiftBlock from './GiftBlock';
import FooterBlock from './FooterBlock';
import VelvetWeddingContent from '../../templates/velvetWedding/VelvetWeddingContent';
import { resetWindowScroll } from '../../utils/scroll';

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

function GenericInvitationContent({ template }) {
  const { content, style, assets, images = {} } = template;
  const galleryImages = assets.gallery?.length
    ? assets.gallery
    : [images.hero, images.intro, images.details].filter(Boolean);

  return (
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
  );
}

// Demo invito: renderizza l'esperienza completa del template selezionato.
function InvitationRenderer({ template, onBack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [velvetPhase, setVelvetPhase] = useState('idle');
  const { style } = template;
  const isVelvetWedding = template.id === 'velvet-wedding';
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
          <GenericInvitationContent template={template} />
        )}
      </div>
    </main>
  );
}

export default InvitationRenderer;
