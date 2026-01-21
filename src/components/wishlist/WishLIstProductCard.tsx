// src/components/ProductCard.tsx
// Example of how to integrate wishlist in your product card

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import "./ProductCard.css";
import type { Product } from "../../data/products";
import { useWishlist } from "../../context/WishListProvider";

interface ProductCardProps {
  product: Product;
}

export default function WishListProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation to product page
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    // You can add a toast notification here
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      {/* Wishlist Button */}
      <button
        className={`wishlist-toggle ${inWishlist ? "active" : ""} ${
          isAnimating ? "animating" : ""
        }`}
        onClick={handleWishlistToggle}
        aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={inWishlist ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="product-card-tags">
          {product.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="product-card-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Product Image */}
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Info */}
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        
        {product.brand && (
          <p className="product-card-brand">{product.brand}</p>
        )}

        {/* Rating */}
        <div className="product-card-rating">
          <span className="rating-value">{product.rating} ★</span>
          <span className="rating-count">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="product-card-price">
          <span className="current">₹{product.price}</span>
          <span className="original">₹{product.originalPrice}</span>
          <span className="discount">{product.discount}% off</span>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <p className="out-of-stock-badge">Out of Stock</p>
        )}

        {/* Add to Cart Button */}
        <button
          className="add-to-cart-card-btn"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}