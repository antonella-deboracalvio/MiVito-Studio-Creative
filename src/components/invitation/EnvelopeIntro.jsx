import { useEffect, useState } from 'react';
import envelopeClosed from '../../assets/templates/velvet-wedding/intro/envelope-closed.png';
import loveCarCard from '../../assets/templates/velvet-wedding/intro/love-car-card.png';
import carOnly from '../../assets/templates/velvet-wedding/intro/car-only.png';

function EnvelopeFallback({ template }) {
  const { style, content } = template;

  return (
    <div
      className="relative mx-auto flex h-64 w-80 max-w-full items-center justify-center overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(17,17,17,0.16)]"
      style={{ backgroundColor: style.primary, color: '#FFFFFF' }}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
      <div className="absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rotate-45 border border-white/25" />
      <div className="absolute -bottom-16 left-0 h-40 w-1/2 origin-bottom-right rotate-[24deg] border-t border-white/25" />
      <div className="absolute -bottom-16 right-0 h-40 w-1/2 origin-bottom-left -rotate-[24deg] border-t border-white/25" />
      <div className="relative z-10 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/70">{content.openingLabel}</p>
        <p className="mt-5 font-display text-5xl italic leading-none">{content.coupleNames}</p>
        <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/80">{content.date}</p>
      </div>
    </div>
  );
}

function VelvetEnvelopeIntro({ phase, setPhase }) {
  useEffect(() => {
    if (phase !== 'opening') {
      return undefined;
    }

    const carTimer = window.setTimeout(() => {
      setPhase('car');
    }, 1180);

    return () => window.clearTimeout(carTimer);
  }, [phase, setPhase]);

  useEffect(() => {
    if (phase !== 'car') {
      return undefined;
    }

    const contentTimer = window.setTimeout(() => {
      setPhase('content');
    }, 4200);

    return () => window.clearTimeout(contentTimer);
  }, [phase, setPhase]);

  useEffect(() => {
    if (phase === 'idle' || phase === 'opening' || phase === 'car') {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    document.body.style.overflow = '';
    return undefined;
  }, [phase]);

  const openInvitation = () => {
    if (phase === 'idle') {
      setPhase('opening');
    }
  };

  return (
    <section
      className={`fixed inset-0 z-[80] flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F3EA] px-5 ${
        phase === 'car' ? 'velvet-intro-overlay-exit' : ''
      } ${phase === 'content' ? 'pointer-events-none opacity-0 transition-opacity duration-300 ease-out' : ''}`}
    >
      <div className="relative flex w-full max-w-[390px] flex-col items-center text-center">
        <div className="relative flex min-h-[380px] w-full items-center justify-center">
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 z-10 w-[74vw] max-w-[330px] -translate-x-1/2 -translate-y-1/2 transition duration-[900ms] ease-out sm:w-[320px] ${
              phase === 'opening' || phase === 'car'
                ? 'rotate-[-7deg] scale-[0.88] opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          >
            <img
              src={envelopeClosed}
              alt="Busta chiusa"
              className="block w-full rounded-[24px] object-contain shadow-[0_24px_60px_rgba(91,32,42,0.16)]"
            />
          </div>

          <div
            className={`pointer-events-none absolute inset-x-0 top-1/2 z-20 mx-auto w-[92vw] max-w-[390px] -translate-y-1/2 ${
              phase === 'car' ? 'velvet-car-card-visible' : 'opacity-0'
            }`}
          >
            <img
              src={loveCarCard}
              alt="Invito con auto degli sposi"
              className="block w-full rounded-[24px] object-contain shadow-[0_26px_70px_rgba(91,32,42,0.18)]"
            />
            <img
              src={carOnly}
              alt=""
              className={`pointer-events-none absolute inset-0 block h-full w-full object-contain ${
                phase === 'car' ? 'velvet-car-only-drive' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
          </div>
        </div>

        {phase === 'idle' ? (
          <button
            type="button"
            onClick={openInvitation}
            className="relative z-20 rounded-full bg-[#9C2F3F] px-8 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_16px_34px_rgba(156,47,63,0.24)] transition duration-300 hover:-translate-y-0.5 pointer-events-auto"
          >
            Apri invito
          </button>
        ) : null}
      </div>
    </section>
  );
}

function EnvelopeIntro({ template, isOpen, onOpen, phase, setPhase }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { content, style = {} } = template;
  const envelopeImage = template?.assets?.envelope || template?.envelope?.image;
  const isVelvetWedding = template?.id === 'velvet-wedding';

  useEffect(() => {
    if (isVelvetWedding && phase && setPhase) {
      return undefined;
    }

    if (isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, isVelvetWedding, phase, setPhase]);

  if (isVelvetWedding && phase && setPhase) {
    return <VelvetEnvelopeIntro phase={phase} setPhase={setPhase} />;
  }

  return (
    <section
      className={`fixed inset-0 z-[80] flex items-center justify-center px-5 transition duration-700 ${
        isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#F8F5EF' }}
    >
      <div className={`w-full max-w-[430px] text-center transition duration-700 ${isOpen ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="animate-[heroStepFloat_4.6s_ease-in-out_infinite]">
          {envelopeImage && !imageFailed ? (
            <button type="button" onClick={onOpen} className="block w-full" aria-label="Apri invito">
              <img
                src={envelopeImage}
                alt={template?.envelope?.label || 'Busta invito'}
                onError={() => setImageFailed(true)}
                className="mx-auto block w-full max-w-[430px] rounded-[28px] object-cover shadow-[0_24px_70px_rgba(17,17,17,0.16)]"
              />
            </button>
          ) : (
            <EnvelopeFallback template={template} />
          )}
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-8 rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-[0_16px_36px_rgba(17,17,17,0.12)] transition duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: style.primary || '#6F7750' }}
        >
          {content.openButton}
        </button>
      </div>
    </section>
  );
}

export default EnvelopeIntro;
