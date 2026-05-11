import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import TemplateCard from './TemplateCard';
import PreviewModal from './PreviewModal';
import { templatesData } from '../../data/templatesData';
import { inviteCategories } from '../../data/categories';
import { categoryIcons, fallbackCategoryIcon } from '../../data/categoryIcons';
import { getInvitationTemplateById } from '../../data/invitationRegistry';
import { resetWindowScroll } from '../../utils/scroll';


function ExamplesSection({ activeCategory, onCategoryChange, onOpenDemo, onUseStyle }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedCategory = activeCategory === 'Tutti' ? null : activeCategory;

  const visibleTemplates = useMemo(() => {
    if (!selectedCategory) {
      return [];
    }

    return templatesData.filter((template) => template.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenPreview = (template) => {
    if (getInvitationTemplateById(template.id)) {
      resetWindowScroll();
      setSelectedTemplate(null);
      setIsModalOpen(false);
      onOpenDemo?.(template.id);
      return;
    }

    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleClosePreview = () => {
    setSelectedTemplate(null);
    setIsModalOpen(false);
  };

  const handleCategorySelect = (category) => {
    resetWindowScroll();
    onCategoryChange(category);
    setSelectedTemplate(null);
    setIsModalOpen(false);
  };

  const handleChangeCategory = () => {
    resetWindowScroll();
    onCategoryChange('Tutti');
    setSelectedTemplate(null);
    setIsModalOpen(false);
  };

  return (
    <section id="examples" className="overflow-x-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[430px] overflow-visible sm:max-w-6xl">
        {/* Home: categorie e card demo viste dal visitatore. */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Esempi
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Scegli il tuo invito
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
            Ogni evento ha il suo stile. Parti dalla categoria e trova il design perfetto da condividere su WhatsApp.
          </p>
        </div>

        {!selectedCategory ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mx-auto sm:max-w-4xl sm:grid-cols-3 sm:gap-4 lg:max-w-5xl lg:grid-cols-4">
            {inviteCategories.map((category, index) => {
              const Icon = categoryIcons[category.iconKey || category.name] || fallbackCategoryIcon;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategorySelect(category.name)}
                  className="category-fade-up group rounded-[22px] border border-[#E8DDCC] bg-white p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card active:scale-[0.98]"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F5EF] text-[#8C8478] shadow-[inset_0_0_0_1px_rgba(232,221,204,0.9)] transition duration-300 group-hover:text-brand-text sm:h-14 sm:w-14">
                    <Icon size={26} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <span className="mt-4 block font-display text-xl leading-tight text-brand-text sm:text-2xl">
                    {category.name}
                  </span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-[0.16em] text-brand-gold">
                    Vedi design
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="templates-fade-in mt-10 overflow-visible">
            <button
              type="button"
              onClick={handleChangeCategory}
              className="mb-6 inline-flex items-center rounded-full border border-brand-line bg-white px-4 py-2.5 text-sm font-medium text-brand-text shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold"
            >
              <ArrowLeft size={16} strokeWidth={1.5} className="mr-2 text-[#8C8478]" aria-hidden="true" />
              Cambia categoria
            </button>

            <div className="mb-8 max-w-2xl">
              <h3 className="font-display text-3xl leading-tight text-brand-text sm:text-4xl">
                Inviti {selectedCategory}
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-muted">
                Scegli uno stile e personalizzalo con i dati del tuo evento.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="templates-fade-in h-full"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <TemplateCard
                    template={template}
                    onPreview={handleOpenPreview}
                    onUseStyle={onUseStyle}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && selectedTemplate ? (
        <PreviewModal
          template={selectedTemplate}
          onClose={handleClosePreview}
          onUseStyle={onUseStyle}
        />
      ) : null}
    </section>
  );
}

export default ExamplesSection;
