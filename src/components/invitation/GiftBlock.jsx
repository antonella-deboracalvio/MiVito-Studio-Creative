function DecorativeQr({ style }) {
  return (
    <div className="mx-auto grid h-28 w-28 grid-cols-5 gap-1 rounded-[18px] bg-white p-3">
      {Array.from({ length: 25 }, (_, index) => (
        <span
          key={index}
          className="rounded-[3px]"
          style={{
            backgroundColor: [0, 1, 2, 5, 10, 12, 14, 18, 20, 21, 22, 24].includes(index)
              ? style.primary
              : style.border,
          }}
        />
      ))}
    </div>
  );
}

function GiftBlock({ gift, style }) {
  return (
    <section className="px-5 py-8">
      <div
        className="mx-auto max-w-[430px] rounded-[30px] px-7 py-9 text-center text-white shadow-[0_20px_60px_rgba(17,17,17,0.14)]"
        style={{ backgroundColor: style.primary }}
      >
        <h2 className="font-display text-4xl">{gift.title}</h2>
        {gift.qrEnabled ? (
          <div className="mt-6">
            <DecorativeQr style={style} />
          </div>
        ) : null}
        <p className="mt-5 text-sm leading-6 text-white/78">{gift.description}</p>
      </div>
    </section>
  );
}

export default GiftBlock;
