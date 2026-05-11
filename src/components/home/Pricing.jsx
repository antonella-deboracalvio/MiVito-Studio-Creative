import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricingPlans';

function Pricing() {
  return (
    <section id="pricing" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Home: pacchetti commerciali del sito agenzia. */}
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-brand-gold">
            Prezzi chiari
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Prezzi</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card ${
                plan.featured
                  ? 'border-brand-gold bg-brand-text text-brand-ivory shadow-card'
                  : 'border-brand-line bg-white/85 text-brand-text shadow-soft'
              }`}
            >
              <p
                className={`font-sans text-xs uppercase tracking-luxe ${
                  plan.featured ? 'text-brand-gold' : 'text-brand-muted'
                }`}
              >
                {plan.name}
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-5xl">{plan.price}</span>
                <span className={plan.featured ? 'text-white/60' : 'text-brand-muted'}>
                  una tantum
                </span>
              </div>
              <p
                className={`mt-4 text-sm leading-6 ${
                  plan.featured ? 'text-white/75' : 'text-brand-muted'
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={15} strokeWidth={1.5} className="text-brand-gold" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'border-brand-gold bg-brand-gold text-brand-text hover:bg-white'
                    : 'border-brand-text bg-brand-text text-brand-ivory hover:border-brand-gold hover:bg-brand-gold hover:text-brand-text'
                }`}
              >
                Scegli {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
