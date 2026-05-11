// Home: apertura commerciale del sito agenzia.
function Hero() {
  return (
    <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Configuratore premium
          </p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.95] text-brand-text sm:text-6xl lg:text-7xl">
            Crea il tuo invito digitale in pochi step.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-muted sm:text-lg">
            Scegli categoria, cover, template e dettagli. Costruiamo una demo
            elegante, pronta da rifinire e condividere.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#builder"
              className="inline-flex items-center justify-center rounded-full border border-brand-text bg-brand-text px-6 py-3 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text hover:shadow-float"
            >
              Inizia il percorso
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3 text-sm font-medium text-brand-text transition duration-300 hover:-translate-y-0.5 hover:shadow-float"
            >
              Vedi i pacchetti
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="relative flex flex-col items-center">
            <p className="mb-3 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              PROCESSO GUIDATO
            </p>

            <div className="relative w-[18rem] rounded-[3rem] border border-[#2C2C2C] bg-[#111111] p-3 shadow-card sm:w-[20rem]">
              <div className="rounded-[2.5rem] bg-[#F2EDE4] p-4">
                <div className="mb-4 flex justify-center">
                  <div className="h-1.5 w-16 rounded-full bg-black/70" />
                </div>
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                  <div className="h-44 bg-[linear-gradient(180deg,rgba(201,168,106,0.28),rgba(255,255,255,0.15)),radial-gradient(circle_at_top,#d4b47d_0%,#f3ece2_58%,#ffffff_100%)] p-6">
                    <p className="text-center font-sans text-[0.6rem] uppercase tracking-[0.35em] text-brand-muted">
                      Preview Builder
                    </p>
                    <h3 className="mt-8 text-center font-display text-3xl leading-none text-brand-text">
                      Your
                      <span className="mx-2 text-brand-gold">Invite</span>
                      Flow
                    </h3>
                    <p className="mt-4 text-center font-sans text-xs tracking-[0.2em] text-brand-muted">
                      COVER TEMPLATE RSVP
                    </p>
                  </div>
                  <div className="space-y-4 px-5 py-6">
                    <div className="rounded-2xl border border-brand-line bg-brand-surface p-4">
                      <p className="font-display text-lg">Guided Builder</p>
                      <p className="mt-1 text-sm text-brand-muted">
                        Un percorso intuitivo per creare una demo premium.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {['Step', 'Style', 'Info', '01', '02', '04'].map((item, index) => (
                        <div
                          key={item + index}
                          className={`rounded-2xl py-3 ${
                            index < 3
                              ? 'bg-[#F6F1E9] text-[0.65rem] uppercase tracking-[0.2em] text-brand-muted'
                              : 'bg-brand-text font-display text-xl text-brand-ivory'
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="rounded-full border border-brand-line px-4 py-3 text-center text-sm">
                      Genera anteprima
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-step-enter absolute left-0 top-10 sm:-left-8" style={{ animationDelay: '0ms' }}>
              <div className="hero-step-float w-[11.25rem] rounded-full border border-[#E8DDCC] bg-white px-4 py-2.5 text-left shadow-float sm:w-auto">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-gold">
                  Step 1 — Categoria
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs text-brand-text">
                  Scegli il tipo di evento
                </p>
              </div>
            </div>

            <div className="hero-step-enter absolute right-0 top-1/2 sm:-right-10" style={{ animationDelay: '200ms' }}>
              <div className="hero-step-float w-[11.25rem] rounded-full border border-[#E8DDCC] bg-white px-4 py-2.5 text-left shadow-float sm:w-auto">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-gold">
                  Step 2 — Stile
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs text-brand-text">
                  Scegli design e cover
                </p>
              </div>
            </div>

            <div className="hero-step-enter absolute -bottom-1 right-0 sm:-right-5" style={{ animationDelay: '400ms' }}>
              <div className="hero-step-float w-[11.25rem] rounded-full border border-[#E8DDCC] bg-white px-4 py-2.5 text-left shadow-float sm:w-auto">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-gold">
                  Step 3 — Info
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs text-brand-text">
                  Inserisci i dati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
