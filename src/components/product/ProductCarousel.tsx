import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCarousel.css";
import { products } from "../../data/products";

export default function ProductCarousel() {
  const getItemsPerView = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  // 🔥 NEW: visible is state (not calculated on every render)
  const [visible, setVisible] = useState(getItemsPerView());
  const [index, setIndex] = useState(0);

  // 🔥 NEW: handle resize properly
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getItemsPerView();
      setVisible(newVisible);

      // 🔥 Clamp index so slider never goes empty
      setIndex((prev) =>
        Math.min(prev, Math.max(products.length - newVisible, 0))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(products.length - visible, 0);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="carousel-section">
      {/* Title */}
      <div className="title-wrapper">
        <span className="title-badge">Handpicked</span>
        <h2 className="carousel-title luxury-title brand-name">
          <span className="brand-d">D</span>esi
          <span className="brand-d">D</span>azzle Premium Collection
        </h2>
      </div>

      <div className="carousel-wrapper">
        {/* Left Arrow */}
        {index > 0 && (
          <button className="nav-btn left" onClick={prev}>
            ‹
          </button>
        )}

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <Link to={`/product/${p.id}`}>
                  <div className="image-box">
                    <img src={p.image} alt={p.name} />
                  </div>
                </Link>

                <h3>{p.name}</h3>
                <p className="price">Rs. {p.price}</p>
                <button className="buy-btn">Buy now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {index < maxIndex && (
          <button className="nav-btn right" onClick={next}>
            ›
          </button>
        )}
      </div>
    </section>
  );
}
