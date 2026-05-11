import rsvpCard from '../../assets/templates/velvet-wedding/sections/rsvp-card.png';

function VelvetSection({ children }) {
  return (
    <section className="velvet-fade-up px-4 py-2.5">
      <div className="mx-auto w-full max-w-[390px]">{children}</div>
    </section>
  );
}

function VelvetImageCard({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="block w-full rounded-[22px] object-contain shadow-[0_12px_34px_rgba(92,31,42,0.08)]"
    />
  );
}

function VelvetRsvpCard({ onAnswer }) {
  return (
    <VelvetSection>
      <div className="relative">
        <VelvetImageCard src={rsvpCard} alt="Conferma partecipazione" />
        <button
          type="button"
          aria-label="Confermo la partecipazione"
          onClick={() => onAnswer('si')}
          className="absolute bottom-[9.5%] left-[13%] h-[10%] w-[32%] rounded-full opacity-0"
        />
        <button
          type="button"
          aria-label="Non posso partecipare"
          onClick={() => onAnswer('no')}
          className="absolute bottom-[9.5%] right-[13%] h-[10%] w-[32%] rounded-full opacity-0"
        />
      </div>
    </VelvetSection>
  );
}

export default VelvetRsvpCard;
