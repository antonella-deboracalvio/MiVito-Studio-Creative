export function buildVelvetWhatsappUrl({ participation, name, guests, allergies, notes, whatsappNumber }) {
  const message = [
    `Partecipazione: ${participation === 'si' ? 'si' : 'no'}`,
    name ? `Nome: ${name}` : 'Nome: Non indicato',
    guests ? `Numero invitati: ${guests}` : 'Numero invitati: Non indicato',
    allergies ? `Allergie: ${allergies}` : null,
    notes ? `Note: ${notes}` : null,
  ].filter(Boolean).join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
