import velvetHeroCard from '../../assets/templates/velvet-wedding/sections/hero-card.png';

const demos = [
  {
    category: 'Kids Party',
    title: 'Hero Mission',
    description: 'Missione epica per piccoli eroi.',
    palette: 'from-[#D9E8FF] via-[#F7FBFF] to-[#FFFFFF]',
    accent: 'Capitan Leo',
    demoHref: '#/demo/hero-mission',
  },
  {
    category: 'Kids Party',
    title: 'Dino World',
    description: 'Giungla, dinosauri e avventura.',
    palette: 'from-[#DEE9D6] via-[#F6F7F0] to-[#FFFFFF]',
    accent: 'Rawr Party',
    demoHref: '#',
  },
  {
    category: 'Kids Party',
    title: 'Galaxy Party',
    description: 'Festa spaziale interattiva.',
    palette: 'from-[#D9DCF6] via-[#EFF1FB] to-[#FFFFFF]',
    accent: 'Orbit Night',
    demoHref: '#',
  },
  {
    category: 'Wedding',
    title: 'Velvet Wedding',
    description: 'Eleganza moderna e romantica.',
    palette: 'from-[#EFE1D3] via-[#F9F4EE] to-[#FFFFFF]',
    accent: 'Sofia & Luca',
    demoHref: '#',
    previewImage: velvetHeroCard,
    previewFit: 'contain',
    previewPosition: 'center',
  },
  {
    category: 'Baptism',
    title: 'Baby Soft',
    description: 'Dolce, raffinato e minimal.',
    palette: 'from-[#F3E5E6] via-[#FCF7F7] to-[#FFFFFF]',
    accent: 'Luca',
    demoHref: '#',
  },
  {
    category: 'Birthday 18',
    title: 'Glam Eighteen',
    description: 'Chic, brillante, indimenticabile.',
    palette: 'from-[#EEE5D3] via-[#FCF7ED] to-[#FFFFFF]',
    accent: 'Nina 18',
    demoHref: '#',
  },
];

function PhonePreview({ title, accent, palette, previewImage, previewFit = 'contain', previewPosition = 'center' }) {
  return (
    <div className="mx-auto w-[14rem] rounded-[2.25rem] border border-[#2A2A2A] bg-[#171717] p-2 shadow-soft transition duration-500 group-hover:scale-[1.02] sm:w-[15.5rem]">
      <div className="rounded-[1.85rem] bg-[#F5F1EA] p-1.5">
        <div className={`relative aspect-[1240/1748] overflow-hidden rounded-[1.5rem] bg-gradient-to-b ${palette}`}>
          {previewImage ? (
            <img
              src={previewImage}
              alt={`Anteprima ${title}`}
              className="block h-full w-full transition-transform duration-500"
              style={{
                objectFit: previewFit,
                objectPosition: previewPosition,
              }}
            />
          ) : (
            <>
              <div className="px-4 pb-4 pt-5">
                <div className="mx-auto h-1.5 w-14 rounded-full bg-black/70" />
                <p className="mt-5 text-center font-sans text-[0.58rem] uppercase tracking-[0.32em] text-brand-muted">
                  MiVito Studio
                </p>
                <h3 className="mt-7 text-center font-display text-[1.75rem] leading-none text-brand-text">
                  {accent}
                </h3>
                <p className="mt-2 text-center font-sans text-[0.62rem] uppercase tracking-[0.18em] text-brand-muted">
                  {title}
                </p>
              </div>
              <div className="space-y-2.5 bg-white/85 px-4 py-4 backdrop-blur-sm">
                <div className="rounded-[1rem] border border-brand-line bg-brand-surface px-3 py-3">
                  <div className="h-2 w-14 rounded-full bg-brand-gold/50" />
                  <div className="mt-2 h-2 w-24 rounded-full bg-black/10" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-[0.9rem] bg-brand-text px-2 py-3 text-center font-display text-sm text-brand-ivory"
                    >
                      0{item}
                    </div>
                  ))}
                </div>
                <div className="rounded-full border border-brand-line px-3 py-2 text-center text-[0.68rem] text-brand-text">
                  Apri invito
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function DemoCards() {
  return (
    <section id="demo" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Collezione template
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Scegli il tuo stile</h2>
          <p className="mt-4 text-base leading-7 text-brand-muted">
            Template curati per compleanni, matrimoni ed eventi speciali.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="group flex h-full flex-col rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft transition duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-card"
            >
              <div className="flex h-[440px] shrink-0 items-center justify-center rounded-[1.6rem] border border-brand-line/70 bg-[#FBF8F3] p-3">
                <PhonePreview
                  title={demo.title}
                  accent={demo.accent}
                  palette={demo.palette}
                  previewImage={demo.previewImage}
                  previewFit={demo.previewFit}
                  previewPosition={demo.previewPosition}
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-brand-gold">
                  {demo.category}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-brand-text">
                  {demo.title}
                </h3>
                <p className="mt-3 overflow-hidden text-sm leading-6 text-brand-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {demo.description}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href={demo.demoHref}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-brand-line bg-white px-4 py-3 text-sm font-medium text-brand-text transition duration-300 hover:border-brand-gold hover:text-brand-text"
                  >
                    Guarda Demo
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-brand-text bg-brand-text px-4 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:bg-[#1F1F1F]"
                  >
                    Lo Voglio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DemoCards;
