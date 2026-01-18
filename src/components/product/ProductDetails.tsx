import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartProvider";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(`${quantity} ${product.name} added to cart!`);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Product not found</h2>
      </div>
    );
  }

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
            {product.originalPrice && (
              <span className="old-price">Rs. {product.originalPrice}</span>
            )}
          </div>

          <p className="tax">Tax included.</p>

          {/* Quantity + Buttons */}
          <div className="actions-row">
            <div className="qty-wrapper">
              <button className="qty-btn" onClick={handleDecrease}>−</button>
              <span className="qty-value">{quantity}</span>
              <button className="qty-btn" onClick={handleIncrease}>+</button>
            </div>

            <button className="add-cart" onClick={handleAddToCart}>
              Add to cart
            </button>
            <button className="buy-now" onClick={handleBuyNow}>
              Buy it now
            </button>
          </div>

          {/* Description */}
          <p className="description">
            {product.description || "Our goal is simple!!! To create snacks, you can enjoy anywhere—without compromise."}
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