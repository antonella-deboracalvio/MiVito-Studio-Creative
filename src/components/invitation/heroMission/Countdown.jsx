import { useEffect, useState } from 'react';

const eventDate = new Date('2026-06-15T16:00:00+02:00');

function getTimeLeft() {
  const difference = eventDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / 1000);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { label: 'Giorni', value: timeLeft.days },
    { label: 'Ore', value: timeLeft.hours },
    { label: 'Minuti', value: timeLeft.minutes },
    { label: 'Secondi', value: timeLeft.seconds },
  ];

  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#8BE8F1]">
              Countdown
            </p>
            <h2 className="mt-2 font-display text-3xl text-white">La missione parte tra</h2>
          </div>
          <div className="hero-glow rounded-full border border-[#FFDD57]/30 bg-[#FFDD57]/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#FFDD57]">
            Live
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-[1.5rem] border border-white/10 bg-[#0F1E40]/80 px-4 py-4 text-center"
            >
              <div className="font-display text-4xl text-white">{unit.value}</div>
              <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-[#8EA4D9]">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
