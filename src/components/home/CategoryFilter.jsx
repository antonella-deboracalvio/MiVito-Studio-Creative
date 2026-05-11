function CategoryFilter({ filters, activeFilter, onChange }) {
  return (
    <div className="relative w-full overflow-hidden md:overflow-visible">
      <div className="-mx-4 flex gap-3 overflow-x-auto overscroll-x-contain touch-pan-x whitespace-nowrap px-4 pb-3 no-scrollbar snap-x snap-mandatory md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:snap-none">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              className={`flex-none shrink-0 snap-start select-none rounded-full border px-4 py-2.5 text-sm transition duration-300 ${
                isActive
                  ? 'border-brand-gold bg-brand-text text-brand-ivory shadow-soft'
                  : 'border-brand-line bg-white text-brand-text hover:-translate-y-0.5 hover:shadow-soft'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;
