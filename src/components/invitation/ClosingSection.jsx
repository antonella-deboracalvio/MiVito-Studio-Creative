import { useState } from 'react';

function ClosingSection({ image, coupleNames = 'Federica & Mario', style = {} }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (image && !imageFailed) {
    return (
      <section className="px-5 py-6">
        <div className="mx-auto max-w-[430px] overflow-hidden rounded-[28px] border border-[#E8DDCC] bg-white shadow-[0_18px_50px_rgba(17,17,17,0.07)]">
          <img
            src={image}
            alt="closing"
            onError={() => setImageFailed(true)}
            className="block h-auto w-full object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-6 pb-10">
      <div
        className="mx-auto max-w-[430px] rounded-[28px] border px-6 py-10 text-center shadow-[0_18px_50px_rgba(17,17,17,0.07)]"
        style={{ backgroundColor: '#FBF4F2', borderColor: '#E8DDCC' }}
      >
        <p className="font-display text-4xl leading-tight" style={{ color: style.text || '#111111' }}>
          Non vediamo l'ora di festeggiare con voi
        </p>
        <p
          className="mt-8 font-display text-5xl italic"
          style={{ color: style.primary || '#6F7750' }}
        >
          {coupleNames}
        </p>
      </div>
    </section>
  );
}

export default ClosingSection;
