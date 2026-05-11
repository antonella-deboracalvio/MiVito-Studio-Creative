// Template demo completi usati dal renderer invito.
import heroCard from '../assets/templates/velvet-wedding/sections/hero-card.png';
import envelopeClosed from '../assets/templates/velvet-wedding/intro/envelope-closed.png';
import loveCarCard from '../assets/templates/velvet-wedding/intro/love-car-card.png';
import saveDateCard from '../assets/templates/velvet-wedding/sections/save-date-card.png';
import timelineCard from '../assets/templates/velvet-wedding/sections/timeline-card.png';
import locationCard from '../assets/templates/velvet-wedding/sections/location-card.png';
import rsvpCard from '../assets/templates/velvet-wedding/sections/rsvp-card.png';
import galleryOne from '../assets/templates/velvet-wedding/gallery/gallery-1.png';

export const invitationTemplates = {
  'velvet-wedding': {
    id: 'velvet-wedding',
    category: 'Wedding',
    name: 'Velvet Wedding',
    subtitle: 'Olive Green Wedding',
    description: 'Invito verde oliva elegante con countdown, RSVP, mappa e programma completo.',
    previewImage: heroCard,
    cover: heroCard,
    preview: heroCard,
    thumbnail: heroCard,
    image: heroCard,
    mockup: heroCard,
    previewFit: 'contain',
    previewPosition: 'center',
    locationUrl: 'https://maps.google.com',
    eventLocationUrl: 'https://maps.google.com',
    churchLocationUrl: 'https://maps.google.com',

    envelope: {
      image: envelopeClosed,
      label: 'Velvet Envelope',
    },

    images: {
      hero: heroCard,
      intro: saveDateCard,
      details: locationCard,
      timeline: timelineCard,
      rsvp: rsvpCard,
      carCard: loveCarCard,
      closing: galleryOne,
    },

    style: {
      background: '#F8F5EF',
      card: '#FFFFFF',
      text: '#111111',
      muted: '#8C8478',
      primary: '#6F7750',
      accent: '#C8A96A',
      border: '#E8DDCC',
      titleFont: 'Playfair Display',
      scriptFont: 'Great Vibes',
      bodyFont: 'Inter',
    },

    assets: {
      envelope: envelopeClosed,
      cover: heroCard,
      preview: heroCard,
      thumbnail: heroCard,
      mockup: heroCard,
      carCard: loveCarCard,
      coupleMain: saveDateCard,
      coupleSecond: locationCard,
      decorations: ['/assets/decorations/olive-leaf.png'],
      gallery: [
        galleryOne,
        saveDateCard,
        timelineCard,
      ],
    },

    content: {
      coupleNames: 'Federica & Mario',
      firstName: 'Federica',
      secondName: 'Mario',
      date: '05 Luglio 2025',
      dateISO: '2028-10-25T10:30:00',
      location: 'Villa Roma',
      openingLabel: 'Velvet Wedding',
      openButton: 'Apri invito',
      introText: 'Con immensa gioia vi invitiamo a celebrare il nostro giorno speciale.',
      musicText: 'Dai play alla nostra canzone',
      ceremony: {
        title: 'Cerimonia religiosa',
        place: 'Chiesa San Francesco',
        address: 'Piazza San Francesco, Roma',
        time: '16:30',
        mapUrl: 'https://maps.google.com',
      },
      reception: {
        title: 'Ricevimento',
        place: 'Villa Roma',
        address: 'Via Roma, Roma',
        time: '19:30',
        mapUrl: 'https://maps.google.com',
      },
      timeline: [
        { time: '16:30', title: 'Cerimonia' },
        { time: '17:30', title: 'Cocktail di benvenuto' },
        { time: '19:30', title: 'Cena' },
        { time: '22:30', title: 'Taglio torta & Party' },
      ],
      dressCode: {
        title: 'Dress code',
        description: 'Elegante. Sono graditi toni neutri, verde oliva e champagne.',
      },
      gift: {
        title: 'Suggerenza di regalo',
        description:
          'La vostra presenza e il regalo piu bello. Se desiderate, potete contribuire al nostro viaggio.',
        qrEnabled: true,
      },
      rsvp: {
        title: 'Conferma presenza',
        deadline: 'Entro il 1 Luglio 2025',
        whatsappNumber: '390000000000',
        fields: [
          'Nome e Cognome',
          'Parteciperai?',
          'Numero ospiti',
          'Allergie o intolleranze',
          'Messaggio',
        ],
      },
      footer: 'Non vediamo l ora di festeggiare con voi.',
    },
  },
};

export const invitationTemplateList = Object.values(invitationTemplates);

export function getInvitationTemplateById(id) {
  return invitationTemplates[id] || null;
}
