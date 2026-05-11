// Layout: footer istituzionale del sito agenzia.
function Footer() {
  return (
    <footer id="faq" className="px-5 pb-10 pt-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-brand-line py-8 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-brand-text">MiVito Studio</p>
          <p className="mt-2 max-w-md">
            Inviti digitali eleganti, personalizzati e pronti da condividere.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a href="https://instagram.com" className="transition hover:text-brand-text">
            Instagram
          </a>
          <a href="https://wa.me/" className="transition hover:text-brand-text">
            WhatsApp
          </a>
          <a href="mailto:hello@mivitostudio.com" className="transition hover:text-brand-text">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
