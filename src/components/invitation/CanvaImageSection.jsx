function CanvaImageSection({ image, alt }) {
  if (!image) {
    return null;
  }

  return (
    <section className="px-5 py-5">
      <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-[28px] border border-[#E8DDCC] bg-white shadow-sm">
        <img
          src={image}
          alt={alt}
          className="block h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}

export default CanvaImageSection;
