import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <section className="product-page">
      <div className="product-layout">

        {/* LEFT: IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="product-info">
          <h1>{product.name}</h1>

          <div className="price-row">
            <span className="price">Rs. {product.price}</span>
            <span className="old-price">Rs. 595.00</span>
          </div>

          <p className="tax">Tax included.</p>

          {/* Quantity + Buttons */}
          <div className="actions-row">
            <div className="qty-wrapper">
              <button className="qty-btn">−</button>
              <span className="qty-value">1</span>
              <button className="qty-btn">+</button>
            </div>


            <button className="add-cart">Add to cart</button>
            <button className="buy-now">Buy it now</button>
          </div>

          {/* Description */}
          <p className="description">
            Our goal is simple!!!<br /> 
            To create snacks ,you can enjoy anywhere—without compromise.
          </p>

          {/* Accordion */}
          <details className="accordion">
            <summary>Nutritional information</summary>
            <p>Energy, protein, fat, carbohydrates etc.</p>
          </details>

          {/* Icons */}
          <div className="features">
            <span>🌱 Best Quality Makhana</span>
            <span>🚚 Free Shipping</span>
            <span>🏆 Premium Blend</span>
          </div>
        </div>

      </div>
    </section>
  );
}
