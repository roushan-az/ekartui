import "./HomeDetailSection.css";

export default function HomeDetailSection() {
  return (
    <section className="home-detail">
      <div className="home-detail-container">
        
        {/* Left Content */}
        <div className="home-detail-content">
          <span className="badge">Premium Quality</span>

          <h2 className="brand-heading">
            Why{" "}
            <span className="brand-name">
              <span className="brand-d">D</span>esi
              <span className="brand-d">D</span>azzle
            </span>
            ?
          </h2>

          <p className="subtitle">
            Pure. Authentic. Naturally Nourishing.
          </p>

          <p className="description">
            Directly sourced from the fertile lands of Upper Bihar,{" "}
            <span className="brand-name">
              <span className="brand-d">D</span>esi
              <span className="brand-d">D</span>azzle
            </span>{" "}
            products are hygienically processed and packed with care to preserve
            their natural nutrition, taste, and purity.
          </p>

          {/* Trust Information */}
          <div className="trust-strip">
            <div className="trust-item">✅ FSSAI Certified</div>
            <div className="trust-item">🌱 100% Natural</div>
            <div className="trust-item">🧪 Lab Tested</div>
            <div className="trust-item">🚫 0% Additives</div>
          </div>

          <ul className="highlights">
            <li>🌿 Farm-fresh sourcing</li>
            <li>🧼 Hygienic processing</li>
            <li>💪 Rich in natural nutrition</li>
            <li>📦 Premium quality packaging</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="home-detail-image">
          <img
            src="/images/slides/slide2.jpg"
            alt="Why DesiDazzle"
          />
        </div>

      </div>
    </section>
  );
}
