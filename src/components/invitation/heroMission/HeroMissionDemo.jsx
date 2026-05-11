import { useEffect } from 'react';
import Countdown from './Countdown';
import MissionBriefing from './MissionBriefing';
import EventDetails from './EventDetails';
import MissionCards from './MissionCards';
import RSVP from './RSVP';
import { resetWindowScroll } from '../../../utils/scroll';

const floatingStars = [
  { left: '8%', top: '9%', delay: '0s', size: '0.45rem' },
  { left: '82%', top: '11%', delay: '1.3s', size: '0.35rem' },
  { left: '18%', top: '28%', delay: '0.8s', size: '0.3rem' },
  { left: '74%', top: '37%', delay: '2.2s', size: '0.42rem' },
  { left: '12%', top: '66%', delay: '1.7s', size: '0.36rem' },
  { left: '88%', top: '72%', delay: '0.4s', size: '0.3rem' },
  { left: '46%', top: '20%', delay: '2.8s', size: '0.28rem' },
  { left: '57%', top: '82%', delay: '1.1s', size: '0.38rem' },
];

const revealSections = ['briefing', 'countdown', 'details', 'missions', 'rsvp'];

function CitySkyline() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(8,15,36,0),rgba(8,15,36,0.95))]" />
      <div className="absolute bottom-0 left-0 h-20 w-12 rounded-t-[0.9rem] bg-[#0C1736]" />
      <div className="absolute bottom-0 left-10 h-28 w-16 rounded-t-[1rem] bg-[#11224C]" />
      <div className="absolute bottom-0 left-24 h-16 w-10 rounded-t-[0.8rem] bg-[#0D1A3F]" />
      <div className="absolute bottom-0 left-32 h-32 w-20 rounded-t-[1rem] bg-[#142A5B]" />
      <div className="absolute bottom-0 right-24 h-24 w-14 rounded-t-[0.9rem] bg-[#11224C]" />
      <div className="absolute bottom-0 right-10 h-36 w-20 rounded-t-[1rem] bg-[#18316A]" />
      <div className="absolute bottom-0 right-0 h-[4.5rem] w-12 rounded-t-[0.8rem] bg-[#0D1A3F]" />
      <div className="absolute bottom-0 left-[45%] h-24 w-16 rounded-t-[0.9rem] bg-[#0F1D44]" />
      <div className="absolute bottom-0 left-[58%] h-14 w-10 rounded-t-[0.8rem] bg-[#142A5B]" />
    </div>
  );
}

function Lightning({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`hero-lightning ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 3L12 24H22L18 45L36 20H25L27 3Z"
        fill="#FFDD57"
        stroke="#FFF3B2"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// Demo invito: esperienza kids party standalone raggiunta da Guarda Demo.
function HeroMissionDemo() {
  useEffect(() => {
    resetWindowScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    const sections = revealSections
      .map((id) => document.querySelector(`[data-reveal="${id}"]`))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071127] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,71,141,0.45),transparent_30%),linear-gradient(180deg,#081327_0%,#0A1835_45%,#071127_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
        {floatingStars.map((star, index) => (
          <span
            key={`${star.left}-${star.top}-${index}`}
            className="hero-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <section className="relative flex min-h-[100svh] items-end px-4 pb-10 pt-6 sm:px-6">
        <Lightning className="absolute left-5 top-24 h-10 w-10" />
        <Lightning className="absolute right-6 top-36 h-12 w-12 [animation-delay:0.8s]" />

        <div className="relative mx-auto flex w-full max-w-md flex-col rounded-[2.2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur">
          <a
            href="#"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#C9D9FF]"
          >
            Back to MiVito Studio
          </a>

          <div className="hero-glow inline-flex w-fit items-center gap-3 rounded-full border border-[#7CE0E8]/30 bg-[#0E2246]/90 px-4 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDD57] font-display text-lg text-[#081327]">
              A
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#8BE8F1]">
                Hero Badge
              </p>
              <p className="text-sm text-white">Missione Speciale</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#FFDD57]">
              Birthday Demo
            </p>
            <h1 className="mt-4 font-display text-[3rem] leading-[0.92] text-white">
              Alessio compie 6 anni
            </h1>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#C7D4F7]">
              Sei invitato a una missione epica.
            </p>
          </div>

          <a
            href="#briefing"
            className="hero-glow mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#FFDD57]/30 bg-[#FFDD57] px-5 py-3 text-sm font-semibold text-[#081327] transition duration-300 hover:-translate-y-0.5"
          >
            Inizia la missione
          </a>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {['Hero Call', 'Night City', 'Power Squad'].map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-white/8 bg-white/5 px-3 py-3 text-center text-[0.68rem] uppercase tracking-[0.18em] text-[#DCE7FF]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <CitySkyline />
      </section>

      <div data-reveal="briefing" className="reveal-fade-up">
        <MissionBriefing />
      </div>
      <div data-reveal="countdown" className="reveal-fade-up">
        <Countdown />
      </div>
      <div data-reveal="details" className="reveal-fade-up">
        <EventDetails />
      </div>
      <div data-reveal="missions" className="reveal-fade-up">
        <MissionCards />
      </div>
      <div data-reveal="rsvp" className="reveal-fade-up">
        <RSVP />
      </div>

      <footer className="px-4 pb-10 pt-8 text-center sm:px-6">
        <p className="font-display text-3xl text-white">La citta ha bisogno di te.</p>
      </footer>
    </div>
  );
}

export default HeroMissionDemo;
