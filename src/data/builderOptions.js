import { builderCategories } from './categories';
import { envelopes } from './envelopes';

export const coversByCategory = {
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

export function getCoversForCategory(category) {
  if (!category) {
    return [];
  }

  const envelopeCategory = envelopeCategoryByBuilderCategory[category.id] || category.title;
  const categoryEnvelopes = envelopeCovers.filter(
    (envelope) => envelope.category?.toLowerCase() === envelopeCategory.toLowerCase(),
  );

  return [...categoryEnvelopes, ...(coversByCategory[category.id] || [])];
}

export const builderTemplateLayouts = [
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
    builderTemplateLayouts.find((item) => item.id === templateId) ||
    builderTemplateLayouts.find((item) => item.id === 'elegant-one-page');

  return {
    category,
    cover,
    template: selectedTemplate,
    templateId: exampleTemplate.id,
    templateName: exampleTemplate.title,
    sourceTitle: exampleTemplate.title,
  };
}
