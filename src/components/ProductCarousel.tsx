import { useState } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const visibleCards = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;

  const next = () => {
    if (index < products.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="carousel-section">
      <h2>DiyaDazzle Premium Collection</h2>

      <div className="carousel-wrapper">
        <button className="nav-btn" onClick={prev}>‹</button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {products.map(p => (
              <div className="product-card" key={p.id}>
                <div className="image-box">
                  <Link to={`/product/${p.id}`}>
                    <img src={p.image} alt={p.name} />
                  </Link>
                </div>
                <h3>{p.name}</h3>
                <p className="price">Rs. {p.price}</p>
                <button className="buy-btn">Buy now</button>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn" onClick={next}>›</button>
      </div>

      {/* <div className="view-all">
        <button>View all products</button>
      </div> */}

    </section>
  );
}
