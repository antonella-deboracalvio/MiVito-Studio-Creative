import CanvaImageSection from './CanvaImageSection';

function TimelineBlock({ image, items = [], style }) {
  if (image) {
    return <CanvaImageSection image={image} alt="Timeline evento" />;
  }

  if (!style || items.length === 0) {
    return null;
  }

  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-[430px]">
        <h2 className="text-center font-display text-4xl" style={{ color: style.text }}>
          Programma
        </h2>
        <div
          className="mt-7 rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)]"
          style={{ backgroundColor: style.card, borderColor: style.border }}
        >
          {items.map((item, index) => (
            <div key={`${item.time}-${item.title}`} className="relative flex gap-5 pb-7 last:pb-0">
              {index < items.length - 1 ? (
                <span className="absolute left-5 top-10 h-full w-px" style={{ backgroundColor: style.border }} />
              ) : null}
              <span
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: style.primary }}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: style.primary }}>
                  {item.time}
                </p>
                <p className="mt-1 font-display text-2xl" style={{ color: style.text }}>
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineBlock;
