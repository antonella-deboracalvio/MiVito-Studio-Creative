import { Check } from 'lucide-react';
import { categoryIcons, fallbackCategoryIcon } from '../../data/categoryIcons';

const categoryDetails = {
  birth: { hint: 'Dolce e raffinato' },
  kids: { hint: 'Hero, dino, party' },
  eighteen: { hint: 'Chic e brillante' },
  wedding: { hint: 'Romantico e premium' },
  baptism: { hint: 'Luce e delicatezza' },
  graduation: { hint: 'Pulito e celebrativo' },
  party: { hint: 'Energia e movimento' },
  anniversary: { hint: 'Eleganza e ricordo' },
};

function StepCategory({ categories, selectedCategory, onSelect }) {
  return (
    <div>
      <div className="hidden max-w-2xl md:block">
        <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
          Step 1
        </p>
        <h3 className="mt-3 font-display text-3xl sm:text-4xl">Scegli categoria</h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => {
          const isActive = selectedCategory?.id === category.id;
          const details = categoryDetails[category.id] || {
            hint: category.hint,
          };
          const Icon = categoryIcons[category.iconKey || category.title] || fallbackCategoryIcon;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category)}
              className={`group relative rounded-[18px] border px-4 py-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/70 hover:shadow-soft sm:px-5 sm:py-5 ${
                isActive
                  ? 'border-brand-gold bg-white shadow-soft'
                  : 'border-brand-line bg-white/90'
              }`}
            >
              {isActive ? (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand-text text-brand-ivory">
                  <Check size={12} strokeWidth={1.7} aria-hidden="true" />
                </span>
              ) : null}

              <div className="flex items-start gap-3 pr-5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5EF] text-[#8C8478] shadow-[inset_0_0_0_1px_rgba(232,221,204,0.9)] transition duration-300 group-hover:text-brand-text">
                  <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold leading-tight text-brand-text sm:text-xl">
                    {category.title}
                  </h4>
                  <p className="mt-1 text-[13px] leading-5 text-brand-muted sm:text-sm">
                    {details.hint}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StepCategory;
