// src/pages/Wishlist.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Wishlist.css";
import { useWishlist } from "../../context/WishListProvider";

export default function Wishlist() {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const [removingItem, setRemovingItem] = useState<number | null>(null);

  const handleRemoveItem = (itemId: number) => {
    setRemovingItem(itemId);
    setTimeout(() => {
      removeFromWishlist(itemId);
      setRemovingItem(null);
    }, 300);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        {/* Page Title */}
        <div className="wishlist-title-section">
          <h1 className="wishlist-page-title">My Wishlist ({wishlistItems.length})</h1>
        </div>

        {/* Empty Wishlist State */}
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist-container">
            <div className="empty-wishlist">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="1.5"
                className="empty-wishlist-icon"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h2 className="empty-wishlist-title">Your wishlist is empty!</h2>
              <p className="empty-wishlist-text">
                Save your favourite items here and shop them anytime.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="continue-shopping-btn"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="wishlist-items-container">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className={`wishlist-item-card ${
                  removingItem === item.id ? "removing" : ""
                }`}
              >
                {/* Product Image */}
                <div
                  className="wishlist-product-image"
                  onClick={() => handleProductClick(item.id)}
                >
                  <img src={item.image} alt={item.name} />
                </div>

                {/* Product Details */}
                <div className="wishlist-product-details">
                  <h3
                    className="wishlist-product-name"
                    onClick={() => handleProductClick(item.id)}
                  >
                    {item.name}
                  </h3>

                  {/* Assured Badge - if you have this feature */}
                  {item.tags?.includes("Assured") && (
                    <div className="assured-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#2874f0">
                        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                        <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
                      </svg>
                      <span>Assured</span>
                    </div>
                  )}

                  {/* Price Section */}
                  <div className="wishlist-price-section">
                    <span className="wishlist-current-price">₹{item.price.toLocaleString()}</span>
                    <span className="wishlist-original-price">₹{item.originalPrice.toLocaleString()}</span>
                    <span className="wishlist-discount">{item.discount}% off</span>
                  </div>

                  {/* Stock Status */}
                  {!item.inStock && (
                    <div className="wishlist-out-of-stock">Currently out of stock</div>
                  )}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="wishlist-remove-btn"
                  aria-label="Remove from wishlist"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}