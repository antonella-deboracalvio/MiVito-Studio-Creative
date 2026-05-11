function GalleryBlock({ images, style }) {
  if (!images?.length) {
    return null;
  }

  return (
    <section className="px-5 py-6">
      <div
        className="mx-auto max-w-[430px] rounded-[28px] border p-5 shadow-[0_18px_50px_rgba(17,17,17,0.07)]"
        style={{ backgroundColor: style.card, borderColor: style.border }}
      >
        <h2 className="text-center font-display text-4xl" style={{ color: style.text }}>
          Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="aspect-[4/5] overflow-hidden rounded-[20px] border"
              style={{ borderColor: style.border, backgroundColor: style.background }}
            >
              <img src={image} alt="" className="block h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryBlock;
