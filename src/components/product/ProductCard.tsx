import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useCart } from '../../context/CartProvider';
import './ProductCard.css';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  if (viewMode === 'list') {
    return (
      <div className="product-card-list">
        <div onClick={handleCardClick} className="product-image-list">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-content-list">
          <div className="product-header-list">
            <div>
              <p className="product-brand-text">{product.brand}</p>
              <h3 onClick={handleCardClick} className="product-title-list">
                {product.name}
              </h3>
              <div className="product-rating-list">
                <div className="rating-badge">
                  {product.rating} <Star className="star-icon" />
                </div>
                <span className="reviews-count">({product.reviews.toLocaleString()})</span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="favorite-btn"
            >
              <Heart className={isFavorite ? 'favorite-active' : 'favorite-inactive'} />
            </button>
          </div>

          <div className="product-pricing-list">
            <span className="price-current">₹{product.price.toLocaleString()}</span>
            <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
            <span className="discount-badge">{product.discount}% off</span>
          </div>

          {product.tags && product.tags.length > 0 && (
            <div className="product-tags">
              {product.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper" onClick={handleCardClick}>
        <img src={product.image} alt={product.name} className="product-image" />
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="favorite-btn-absolute"
        >
          <Heart className={isFavorite ? 'favorite-active' : 'favorite-inactive'} />
        </button>

        {product.tags && product.tags.length > 0 && (
          <div className="tags-absolute">
            {product.tags.map(tag => (
              <span key={tag} className="tag-absolute">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className="product-content">
        <p className="product-brand-text">{product.brand}</p>
        <h3 onClick={handleCardClick} className="product-title">{product.name}</h3>
        
        <div className="product-rating">
          <div className="rating-badge">
            {product.rating} <Star className="star-icon" />
          </div>
          <span className="reviews-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-pricing">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
          <span className="discount-text">{product.discount}% off</span>
        </div>
      </div>
    </div>
  );
}