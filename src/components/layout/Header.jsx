import { useState } from 'react';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Esempi', href: '#examples' },
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Prezzi', href: '#pricing' },
];

// Layout: navigazione principale del sito agenzia.
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 px-5 py-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-md sm:rounded-full sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="font-display text-xl tracking-wide text-brand-text">
            MiVito Studio
          </a>

          <nav className="hidden items-center gap-8 text-sm text-brand-muted md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-brand-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#builder"
              className="hidden items-center rounded-full border border-brand-text bg-brand-text px-4 py-2 text-sm font-medium text-brand-ivory transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text sm:inline-flex"
            >
              Crea il tuo invito
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line bg-white text-brand-text transition hover:shadow-soft md:hidden"
              aria-label="Apri menu"
              aria-expanded={isMenuOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-[1.6rem] border border-brand-line bg-white p-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleCloseMenu}
                  className="rounded-[1rem] px-4 py-3 text-sm text-brand-text transition hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#builder"
                onClick={handleCloseMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-brand-text bg-brand-text px-4 py-3 text-sm font-medium text-brand-ivory transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text"
              >
                Crea il tuo invito
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
