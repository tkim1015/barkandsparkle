<div className="gallery-grid">
  {curated.map((src, i) => (
    <img
      key={i}
      src={src}
      loading="lazy"
      alt={`Bark & Sparkle groom #${i + 1}`}
      decoding="async"
    />
  ))}
</div>
