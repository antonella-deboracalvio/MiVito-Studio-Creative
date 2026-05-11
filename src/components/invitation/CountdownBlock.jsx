import { useEffect, useRef, useState } from 'react';

function getTimeLeft(dateISO) {
  const target = new Date(dateISO).getTime();
  const distance = Math.max(target - Date.now(), 0);

  return {
    giorni: Math.floor(distance / (1000 * 60 * 60 * 24)),
    ore: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minuti: Math.floor((distance / (1000 * 60)) % 60),
    secondi: Math.floor((distance / 1000) % 60),
  };
}

function CountdownBlock({ dateISO, style, reveal = false }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(dateISO));
  const [hasEntered, setHasEntered] = useState(!reveal);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(dateISO));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [dateISO]);

  useEffect(() => {
    if (!reveal || hasEntered || !sectionRef.current || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasEntered, reveal]);

  return (
    <section
      ref={sectionRef}
      className={`px-5 py-8 ${reveal ? `countdown-reveal ${hasEntered ? 'is-visible' : ''}` : ''}`}
    >
      <div className="mx-auto max-w-[430px]">
        <h2
          className="text-center text-[0.78rem] font-semibold uppercase tracking-[0.34em]"
          style={{ color: style.primary }}
        >
          Countdown
        </h2>
        <div className="mt-6 grid grid-cols-4 gap-2">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="rounded-[18px] border px-2 py-4 text-center shadow-[0_14px_34px_rgba(17,17,17,0.045)]"
              style={{ backgroundColor: style.card, borderColor: style.border }}
            >
              <p className="font-display text-2xl leading-none" style={{ color: style.text }}>
                {String(value).padStart(2, '0')}
              </p>
              <p className="mt-2 text-[0.55rem] uppercase" style={{ color: style.muted }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountdownBlock;
