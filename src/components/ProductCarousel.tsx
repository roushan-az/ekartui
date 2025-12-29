
import { Link } from "react-router-dom";
import "./ProductCarousel.css";
import { products } from "../data/products";

export default function ProductCarousel() {
  return (
    <section className="carousel-section">
      <h2 className="carousel-title">DiyaDazzle Premium Collection</h2>

      <div className="carousel-wrapper">
        <div className="carousel-viewport">
          <div className="carousel-track">
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
      </div>
    </section>
  );
}
