<section id="gallery" className="section">
  <div className="container">
    <h2>Gallery</h2>
    <p className="meta">A curated selection of recent grooms.</p>

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

    {/* View More → Instagram */}
    <div style={{ textAlign: "center", marginTop: "16px" }}>
      <a
        className="btn btn-outline"
        href="https://instagram.com/bark.and.sparkle"
        target="_blank"
        rel="noopener noreferrer"
      >
        View more on Instagram
      </a>
    </div>
  </div>
</section>
