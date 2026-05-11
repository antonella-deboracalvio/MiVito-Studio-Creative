import CanvaImageSection from './CanvaImageSection';

function EventCard({ event, style }) {
  return (
    <div
      className="rounded-[28px] border p-6 text-center shadow-[0_18px_50px_rgba(17,17,17,0.05)]"
      style={{ backgroundColor: style.card, borderColor: style.border }}
    >
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]" style={{ color: style.primary }}>
        {event.title}
      </p>
      <h3 className="mt-4 font-display text-3xl" style={{ color: style.text }}>
        {event.place}
      </h3>
      <p className="mt-2 text-sm leading-6" style={{ color: style.muted }}>
        {event.address}
        <br />
        {event.time}
      </p>
      <a
        href={event.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
        style={{ borderColor: style.primary, color: style.primary }}
      >
        Apri mappa
      </a>
    </div>
  );
}

function EventDetailsBlock({ image, ceremony, reception, style }) {
  if (image) {
    return <CanvaImageSection image={image} alt="Dettagli evento" />;
  }

  if (!ceremony || !reception || !style) {
    return null;
  }

  return (
    <section className="px-5 py-8">
      <div className="mx-auto grid max-w-[430px] gap-4">
        <EventCard event={ceremony} style={style} />
        <EventCard event={reception} style={style} />
      </div>
    </section>
  );
}

export default EventDetailsBlock;
