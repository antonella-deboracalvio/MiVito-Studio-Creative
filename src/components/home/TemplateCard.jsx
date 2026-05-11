import { getInvitationTemplateById } from '../../data/invitationRegistry';

function TemplateCard({ template, onPreview, onUseStyle }) {
  const invitationTemplate = getInvitationTemplateById(template.id);
  const previewStyle = invitationTemplate?.style;
  const previewContent = invitationTemplate?.content;
  const previewImage =
    invitationTemplate?.previewImage ||
    invitationTemplate?.preview ||
    invitationTemplate?.thumbnail ||
    invitationTemplate?.image ||
    invitationTemplate?.mockup ||
    invitationTemplate?.assets?.cover;
  const previewFit = invitationTemplate?.previewFit || template.previewFit || 'contain';
  const previewPosition = invitationTemplate?.previewPosition || template.previewPosition || 'center';

  return (
    <article className="group flex h-full flex-col rounded-[24px] border border-white/90 bg-white/90 p-3 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-card sm:rounded-[2rem] sm:p-5 sm:hover:-translate-y-2">
      <div className="flex h-[360px] shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-brand-line/70 bg-[#FBF8F3] p-2 sm:h-[430px] sm:rounded-[1.65rem] sm:p-3 lg:h-[450px]">
        <div className="mx-auto w-[12.25rem] rounded-[1.8rem] border border-[#222222] bg-[#141414] p-1.5 shadow-soft transition duration-500 group-hover:scale-[1.01] sm:w-[14.5rem] sm:rounded-[2.25rem] sm:p-2 sm:group-hover:scale-[1.02] lg:w-[15.25rem]">
          <div className="rounded-[1.45rem] bg-[#F4EFE6] p-1 sm:rounded-[1.85rem] sm:p-1.5">
            <div className="overflow-hidden rounded-[1.15rem] bg-[#F9F3EA] sm:rounded-[1.5rem]">
              {invitationTemplate ? (
                <div
                  className="relative aspect-[1240/1748] overflow-hidden text-center"
                  style={{ backgroundColor: previewStyle.background || '#F9F3EA' }}
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={`Anteprima ${previewContent?.coupleNames || template.title}`}
                      className="block h-full w-full transition-transform duration-500"
                      style={{
                        objectFit: previewFit,
                        objectPosition: previewPosition,
                      }}
                    />
                  ) : null}
                </div>
              ) : (
                <div className={`aspect-[1240/1748] bg-gradient-to-b ${template.palette} px-3 py-4 sm:px-4 sm:py-5`}>
                  <div className="mx-auto h-1 w-11 rounded-full bg-black/65 sm:h-1.5 sm:w-14" />
                  <p className="mt-5 text-center font-sans text-[0.5rem] uppercase tracking-[0.26em] text-brand-muted sm:mt-7 sm:text-[0.58rem] sm:tracking-[0.32em]">
                    {template.eyebrow}
                  </p>
                  <h3 className="mt-8 text-center font-display text-[1.25rem] leading-none text-brand-text sm:mt-11 sm:text-[1.7rem]">
                    {template.accent}
                  </h3>
                  <p className="mt-1.5 text-center font-sans text-[0.54rem] uppercase tracking-[0.16em] text-brand-muted sm:mt-2 sm:text-[0.62rem] sm:tracking-[0.18em]">
                    {template.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col sm:mt-6">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-brand-gold">
          {template.category}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-brand-text sm:mt-3 sm:text-3xl sm:leading-tight">
          {template.title}
        </h3>
        <p className="mt-2 overflow-hidden text-sm leading-5 text-brand-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:mt-3 sm:leading-6">
          {template.description}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4 sm:flex sm:gap-3 sm:pt-6">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-brand-line bg-white px-3 py-2.5 text-xs font-medium text-brand-text transition duration-300 hover:border-brand-gold hover:text-brand-text sm:px-4 sm:py-3 sm:text-sm"
          >
            Guarda Demo
          </button>
          <button
            type="button"
            onClick={() => onUseStyle?.(template)}
            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-brand-text bg-brand-text px-3 py-2.5 text-xs font-medium text-brand-ivory transition duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text sm:px-4 sm:py-3 sm:text-sm"
          >
            Usa questo stile
          </button>
        </div>
      </div>
    </article>
  );
}

export default TemplateCard;
