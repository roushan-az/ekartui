import "./HomeDetailSection.css";

export default function HomeDetailSection() {
  return (
    <section className="home-detail">
      <div className="home-detail-container">
        
        {/* Left Content */}
        <div className="home-detail-content">
          <span className="badge">Premium Quality</span>

          <h2>
            Why <span>DesiDazzle</span>?
          </h2>

          <p className="subtitle">
            Pure. Authentic. Naturally Nourishing.
          </p>

          <p className="description">
            Directly sourced from the fertile lands of Upper Bihar, DesiDazzle
            products are hygienically processed and packed with care to preserve
            their natural nutrition, taste, and purity.
          </p>

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
            src="/images/hero/slide2.jpg"
            alt="Why DesiDazzle"
          />
        </div>

      </div>
    </section>
  );
}
