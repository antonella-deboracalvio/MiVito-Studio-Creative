import { useEffect, useMemo, useState } from 'react';
import StepCategory from './StepCategory';
import StepCover from './StepCover';
import StepTemplate from './StepTemplate';
import StepForm from './StepForm';
import PreviewResult from './PreviewResult';
import { builderCategories } from '../../data/categories';
import { builderTemplateLayouts, getCoversForCategory } from '../../data/builderOptions';

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
                  templates={builderTemplateLayouts}
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
