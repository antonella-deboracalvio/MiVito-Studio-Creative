import { Music2, Play } from 'lucide-react';

function VelvetSection({ children }) {
  return (
    <section className="velvet-fade-up px-4 py-2.5">
      <div className="mx-auto w-full max-w-[390px]">{children}</div>
    </section>
  );
}

function VelvetMusicCard({ template }) {
  const music = template.music || {};
  const label = music.label || 'La nostra canzone';
  const title = music.title || '';
  const artist = music.artist || '';
  const ariaLabel = title ? `Apri ${title} su Spotify` : 'Apri su Spotify';

  return (
    <VelvetSection>
      <div className="overflow-hidden rounded-[24px] border border-[#9C2F3F]/12 bg-[#fff8f0]/76 p-5 shadow-[0_16px_40px_rgba(92,31,42,0.09)] backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <a
            href={music.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#9C2F3F] text-white shadow-[0_0_0_8px_rgba(156,47,63,0.08),0_16px_32px_rgba(156,47,63,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_10px_rgba(156,47,63,0.10),0_18px_36px_rgba(156,47,63,0.26)] focus:outline-none focus:ring-4 focus:ring-[#9C2F3F]/18 active:scale-95"
          >
            <Play size={17} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
          </a>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[#702131]">
              <Music2 size={16} strokeWidth={1.7} aria-hidden="true" />
              <p className="truncate text-sm font-semibold leading-tight">{label}</p>
            </div>
            <p className="mt-1 truncate text-xs font-medium text-[#9b7480]">
              {title}
              {artist ? <> &mdash; {artist}</> : null}
            </p>
            <div className="mt-4 flex h-8 items-end gap-1.5" aria-hidden="true">
              {[35, 58, 44, 76, 52, 88, 62, 42, 70, 48, 64, 38].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-1.5 rounded-full bg-[#9C2F3F]/32 transition duration-500"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs leading-5 text-[#9b7480]">
          Ascoltala su Spotify.
        </p>

        <a
          href={music.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#9C2F3F] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(156,47,63,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#842838] focus:outline-none focus:ring-4 focus:ring-[#9C2F3F]/18 active:scale-[0.98]"
        >
          Apri su Spotify
        </a>
      </div>
    </VelvetSection>
  );
}

export default VelvetMusicCard;
