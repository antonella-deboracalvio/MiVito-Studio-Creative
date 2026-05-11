import { useEffect, useMemo, useState } from 'react';
import StepCategory from './StepCategory';
import StepCover from './StepCover';
import StepTemplate from './StepTemplate';
import StepForm from './StepForm';
import PreviewResult from './PreviewResult';
import { builderCategories } from '../../data/categories';
import { envelopes } from '../../data/envelopes';

const coversByCategory = {
  kids: [
    { id: 'hero-mission-cover', title: 'Hero Mission Cover', palette: 'from-[#D7E6FF] via-[#F6FBFF] to-[#FFFFFF]', eyebrow: 'Kids Hero' },
    { id: 'dino-world-cover', title: 'Dino World Cover', palette: 'from-[#DDE8D5] via-[#F6F9F2] to-[#FFFFFF]', eyebrow: 'Adventure' },
    { id: 'galaxy-party-cover', title: 'Galaxy Party Cover', palette: 'from-[#E0E3FA] via-[#F5F7FF] to-[#FFFFFF]', eyebrow: 'Space Night' },
  ],
  wedding: [
    { id: 'velvet-wedding-cover', title: 'Velvet Wedding', palette: 'from-[#6F7750] via-[#F8F5EF] to-[#FFFFFF]', eyebrow: 'Olive Green Wedding' },
    { id: 'floral-luxury', title: 'Floral Luxury', palette: 'from-[#F2E6D8] via-[#FBF5EE] to-[#FFFFFF]', eyebrow: 'Wedding' },
    { id: 'envelope-gold', title: 'Envelope Gold', palette: 'from-[#EBDCBF] via-[#FAF4E7] to-[#FFFFFF]', eyebrow: 'Signature' },
    { id: 'minimal-white', title: 'Minimal White', palette: 'from-[#F7F5F1] via-[#FFFFFF] to-[#FFFFFF]', eyebrow: 'Modern Classic' },
  ],
  birth: [
    { id: 'baby-soft', title: 'Baby Soft', palette: 'from-[#F3E5E8] via-[#FCF7F8] to-[#FFFFFF]', eyebrow: 'Birth' },
    { id: 'clouds-dream', title: 'Clouds Dream', palette: 'from-[#E3EEFB] via-[#F7FBFF] to-[#FFFFFF]', eyebrow: 'Cloud Light' },
  ],
  'baby-shower': [
    { id: 'teddy-shower-cover', title: 'Teddy Shower', palette: 'from-[#EEE4D7] via-[#FBF7F1] to-[#FFFFFF]', eyebrow: 'Baby Shower' },
    { id: 'soft-cloud-shower-cover', title: 'Soft Cloud Shower', palette: 'from-[#E5EEF8] via-[#F8FBFF] to-[#FFFFFF]', eyebrow: 'Little Party' },
  ],
  eighteen: [
    { id: 'midnight-glam', title: 'Midnight Glam', palette: 'from-[#EEE0C9] via-[#FBF5EA] to-[#FFFFFF]', eyebrow: '18 Years' },
    { id: 'flash-gold', title: 'Flash Gold', palette: 'from-[#F0E0B9] via-[#FBF6EA] to-[#FFFFFF]', eyebrow: 'Party Chic' },
  ],
  baptism: [
    { id: 'soft-light', title: 'Soft Light', palette: 'from-[#F1EBE2] via-[#FCFAF7] to-[#FFFFFF]', eyebrow: 'Baptism' },
    { id: 'pure-ivory', title: 'Pure Ivory', palette: 'from-[#F7F4EE] via-[#FFFFFF] to-[#FFFFFF]', eyebrow: 'Delicate' },
  ],
  graduation: [
    { id: 'modern-laurel', title: 'Modern Laurel', palette: 'from-[#E5E8D7] via-[#F7F8F0] to-[#FFFFFF]', eyebrow: 'Graduation' },
    { id: 'deep-ceremony', title: 'Deep Ceremony', palette: 'from-[#E6E2DB] via-[#F8F5F0] to-[#FFFFFF]', eyebrow: 'Academic' },
  ],
  party: [
    { id: 'neon-after', title: 'Neon After', palette: 'from-[#E2E5F6] via-[#F6F7FD] to-[#FFFFFF]', eyebrow: 'Party' },
    { id: 'gold-rhythm', title: 'Gold Rhythm', palette: 'from-[#EFE2C8] via-[#FAF5EA] to-[#FFFFFF]', eyebrow: 'Celebration' },
  ],
  anniversary: [
    { id: 'timeless-note', title: 'Timeless Note', palette: 'from-[#EFE5D9] via-[#FBF6EF] to-[#FFFFFF]', eyebrow: 'Anniversary' },
    { id: 'signature-date', title: 'Signature Date', palette: 'from-[#F1EBE4] via-[#FEFCF9] to-[#FFFFFF]', eyebrow: 'Memory' },
  ],
};

const envelopeCovers = envelopes.map((envelope) => ({
  ...envelope,
  title: envelope.title || envelope.name,
  envelopeId: envelope.id,
  envelopeImage: envelope.image,
}));

const envelopeCategoryByBuilderCategory = {
  wedding: 'Wedding',
};

function getCoversForCategory(category) {
  if (!category) {
    return [];
  }

  const envelopeCategory = envelopeCategoryByBuilderCategory[category.id] || category.title;
  const categoryEnvelopes = envelopeCovers.filter(
    (envelope) => envelope.category?.toLowerCase() === envelopeCategory.toLowerCase(),
  );

  return [...categoryEnvelopes, ...(coversByCategory[category.id] || [])];
}

const templates = [
  {
    id: 'elegant-one-page',
    title: 'Elegant One Page',
    description: 'Hero, dettagli essenziali e RSVP in una sola pagina pulita.',
    layout: ['Hero', 'Dettagli', 'RSVP'],
  },
  {
    id: 'countdown-party',
    title: 'Countdown Party',
    description: 'Hero di impatto, timer live e conferma rapida su WhatsApp.',
    layout: ['Hero', 'Timer', 'Conferma'],
  },
  {
    id: 'story-experience',
    title: 'Story Experience',
    description: 'Scroll narrativo per raccontare l evento come un mini sito.',
    layout: ['Intro', 'Story', 'RSVP'],
  },
  {
    id: 'gallery-event',
    title: 'Gallery Event',
    description: 'Hero, foto, mappa e momenti principali ben ordinati.',
    layout: ['Hero', 'Gallery', 'Mappa'],
  },
  {
    id: 'video-reveal',
    title: 'Video Reveal',
    description: 'Intro animata con reveal iniziale e informazioni evento.',
    layout: ['Reveal', 'Info', 'CTA'],
  },
];

const categoryByExampleCategory = {
  'Kids Party': 'kids',
  'Baby Shower': 'baby-shower',
  Wedding: 'wedding',
  '18 Anni': 'eighteen',
  Nascita: 'birth',
  Battesimo: 'baptism',
  Laurea: 'graduation',
  Party: 'party',
};

const coverByExampleTemplate = {
  'superhero-mission': 'hero-mission-cover',
  'velvet-wedding': 'velvet-envelope',
  'teddy-shower': 'teddy-shower-cover',
  'soft-cloud-shower': 'soft-cloud-shower-cover',
};

const templateByExampleTemplate = {
  'superhero-mission': 'story-experience',
  'velvet-wedding': 'elegant-one-page',
};

export function createBuilderSelectionFromTemplate(exampleTemplate) {
  const categoryId = categoryByExampleCategory[exampleTemplate.category];
  const category = builderCategories.find((item) => item.id === categoryId) || null;
  const covers = category ? getCoversForCategory(category) : [];
  const coverId = coverByExampleTemplate[exampleTemplate.id];
  const cover =
    covers.find((item) => item.id === coverId) ||
    covers.find((item) => item.title === exampleTemplate.title) ||
    {
      id: `${exampleTemplate.id}-cover`,
      title: exampleTemplate.title,
      palette: exampleTemplate.palette,
      eyebrow: exampleTemplate.eyebrow,
    };
  const templateId = templateByExampleTemplate[exampleTemplate.id] || 'elegant-one-page';
  const selectedTemplate =
    templates.find((item) => item.id === templateId) || templates.find((item) => item.id === 'elegant-one-page');

  return {
    category,
    cover,
    template: selectedTemplate,
    templateId: exampleTemplate.id,
    templateName: exampleTemplate.title,
    sourceTitle: exampleTemplate.title,
  };
}

const initialForm = {
  celebrantName: '',
  age: '',
  eventDate: '',
  eventTime: '',
  location: '',
  whatsapp: '',
  customMessage: '',
  allergies: '',
  dressCode: '',
};

const builderSteps = [
  { step: 1, label: 'Categoria' },
  { step: 2, label: 'Cover' },
  { step: 3, label: 'Template' },
  { step: 4, label: 'Info' },
];

function InviteBuilder({ builderSelection, builderStep = 1, onBuilderStepChange }) {
  const [currentStep, setCurrentStep] = useState(builderStep);
  const [selectedCategory, setSelectedCategory] = useState(builderSelection?.category || null);
  const [selectedCover, setSelectedCover] = useState(builderSelection?.cover || null);
  const [selectedTemplate, setSelectedTemplate] = useState(builderSelection?.template || null);
  const [formData, setFormData] = useState(initialForm);
  const [isGenerated, setIsGenerated] = useState(false);

  const updateStep = (step) => {
    setCurrentStep(step);
    onBuilderStepChange?.(step);
  };

  useEffect(() => {
    if (!builderSelection) {
      return;
    }

    setSelectedCategory(builderSelection.category || null);
    setSelectedCover(builderSelection.cover || null);
    setSelectedTemplate(builderSelection.template || null);
    setIsGenerated(false);
    setCurrentStep(builderStep);
  }, [builderSelection]);

  const availableCovers = useMemo(() => {
    if (!selectedCategory) {
      return [];
    }

    return getCoversForCategory(selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedCover(null);
    setSelectedTemplate(null);
    setIsGenerated(false);
    updateStep(2);
  };

  const handleCoverSelect = (cover) => {
    setSelectedCover(cover);
    setSelectedTemplate(null);
    setIsGenerated(false);
    updateStep(3);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsGenerated(false);
    updateStep(4);
  };

  const handleFieldChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
    setIsGenerated(false);
  };

  const handleGeneratePreview = () => {
    setIsGenerated(true);
  };

  const previewHref =
    selectedCover?.id === 'hero-mission-cover' ? '#/demo/hero-mission' : '#preview-ready';

  const canOpenStep = (step) =>
    step === 1 ||
    (step === 2 && selectedCategory) ||
    (step === 3 && selectedCover) ||
    (step === 4 && selectedTemplate);

  const activeStep = builderSteps.find((item) => item.step === currentStep);

  useEffect(() => {
    const builderTop = document.getElementById('builder');

    if (builderTop) {
      builderTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  useEffect(() => {
    if (!isGenerated) {
      return;
    }

    const previewBox = document.getElementById('preview-ready');

    if (previewBox) {
      previewBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isGenerated]);

  return (
    <section id="builder" className="px-5 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Builder: selezione categoria, cover, template e dati evento. */}
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Configuratore guidato
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Crea il tuo invito digitale
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
            Scegli stile, cover e dettagli in pochi passaggi.
          </p>
        </div>

        <div className="mt-7 rounded-[1.6rem] border border-white/80 bg-white/80 p-3 shadow-card backdrop-blur sm:mt-10 sm:rounded-[2.25rem] sm:p-6 lg:p-8">
          <div className="rounded-[1.35rem] border border-brand-line bg-white p-4 sm:rounded-[1.9rem] sm:p-6">
            <div className="md:hidden">
              <div className="flex items-center justify-between gap-2">
                {builderSteps.map((item, index) => {
                  const isActive = currentStep === item.step;
                  const isDone = currentStep > item.step;
                  const isEnabled = canOpenStep(item.step);

                  return (
                    <div key={item.step} className="flex flex-1 items-center">
                      <button
                        type="button"
                        onClick={() => {
                          if (isEnabled) {
                            updateStep(item.step);
                          }
                        }}
                        disabled={!isEnabled}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition duration-300 ${
                          isActive || isDone
                            ? 'border-brand-text bg-brand-text text-brand-ivory'
                            : isEnabled
                              ? 'border-brand-line bg-white text-brand-text'
                              : 'border-brand-line/70 bg-transparent text-brand-muted/50'
                        }`}
                      >
                        {item.step}
                      </button>
                      {index < builderSteps.length - 1 ? (
                        <div
                          className={`mx-2 h-px flex-1 ${
                            currentStep > item.step ? 'bg-brand-text' : 'bg-[#E5DCCF]'
                          }`}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-brand-text">
                  Step {currentStep}: {activeStep?.label}
                </p>
                <p className="text-xs text-brand-muted">{currentStep}/4</p>
              </div>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#EFE8DC]">
                <div
                  className="h-full rounded-full bg-brand-text transition-all duration-500"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <div className="hidden gap-3 md:grid md:grid-cols-4">
              {builderSteps.map((item) => {
                const isActive = currentStep === item.step;
                const isDone = currentStep > item.step;

                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => {
                      if (canOpenStep(item.step)) {
                        updateStep(item.step);
                      }
                    }}
                    className={`rounded-[1.4rem] border px-4 py-4 text-left transition duration-300 ${
                      isActive
                        ? 'border-brand-gold bg-white shadow-soft'
                        : isDone
                          ? 'border-brand-line bg-brand-surface'
                          : 'border-brand-line/80 bg-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                          isActive || isDone
                            ? 'bg-brand-text text-brand-ivory'
                            : 'bg-white text-brand-muted'
                        }`}
                      >
                        {item.step}
                      </span>
                      {isDone ? (
                        <span className="text-xs uppercase tracking-[0.18em] text-brand-gold">
                          Done
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm font-medium text-brand-text">{item.label}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 hidden h-2 overflow-hidden rounded-full bg-[#EFE8DC] md:block">
              <div
                className="h-full rounded-full bg-brand-text transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>

            <div className="mt-5 transition-all duration-500 md:mt-8">
              {currentStep === 1 ? (
                <StepCategory
                  categories={builderCategories}
                  selectedCategory={selectedCategory}
                  onSelect={handleCategorySelect}
                />
              ) : null}

              {currentStep === 2 ? (
                <StepCover
                  category={selectedCategory}
                  covers={availableCovers}
                  selectedCover={selectedCover}
                  onBack={() => updateStep(1)}
                  onSelect={handleCoverSelect}
                />
              ) : null}

              {currentStep === 3 ? (
                <StepTemplate
                  templates={templates}
                  selectedTemplate={selectedTemplate}
                  onBack={() => updateStep(2)}
                  onSelect={handleTemplateSelect}
                />
              ) : null}

              {currentStep === 4 ? (
                <StepForm
                  formData={formData}
                  selectedCategory={selectedCategory}
                  selectedCover={selectedCover}
                  selectedTemplate={selectedTemplate}
                  onBack={() => updateStep(3)}
                  onChange={handleFieldChange}
                  onSubmit={handleGeneratePreview}
                  onEditStyle={() => updateStep(1)}
                  sourceStyleTitle={builderSelection?.sourceTitle}
                />
              ) : null}
            </div>
          </div>
        </div>

        <PreviewResult
          isVisible={isGenerated}
          previewHref={previewHref}
          selectedCategory={selectedCategory}
          selectedCover={selectedCover}
          selectedTemplate={selectedTemplate}
          formData={formData}
        />
      </div>
    </section>
  );
}

export default InviteBuilder;
