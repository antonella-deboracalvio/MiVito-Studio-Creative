function FooterBlock({ template }) {
  const { assets, content, style } = template;

  return (
    <footer className="mx-auto max-w-[430px] px-5 pb-8 pt-6">
      <div
        className="overflow-hidden rounded-[30px] border shadow-[0_18px_60px_rgba(17,17,17,0.06)]"
        style={{ backgroundColor: style.card, borderColor: style.border }}
      >
        {assets.coupleSecond ? (
          <img src={assets.coupleSecond} alt="" className="h-[560px] w-full object-cover" />
        ) : null}
        <div className="px-7 py-8 text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.32em]" style={{ color: style.muted }}>
            {content.footer}
          </p>
          <p className="mt-4 font-display text-6xl italic" style={{ color: style.primary }}>
            {content.firstName?.[0]} & {content.secondName?.[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterBlock;
