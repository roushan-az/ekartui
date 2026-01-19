import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import './ProductCard.css';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (viewMode === 'list') {
    return (
      <div className="product-card-list">
        <Link to={`/product/${product.id}`} className="product-image-list">
          <img src={product.image} alt={product.name} />
        </Link>
        
        <div className="product-content-list">
          <div className="product-header-list">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="product-title-list">{product.name}</h3>
              </Link>
              <div className="product-rating-list">
                <div className="rating-badge">
                  {product.rating} <Star className="star-icon" />
                </div>
                <span className="reviews-count">({product.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="favorite-btn"
              aria-label="Add to favorites"
            >
              <Heart className={isFavorite ? 'favorite-active' : 'favorite-inactive'} />
            </button>
          </div>
          
          <div className="product-brand">
            Brand: <span>{product.brand}</span>
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

          <button className="add-to-cart-btn-list">Add to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-image" />
        </Link>
        
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="favorite-btn-absolute"
          aria-label="Add to favorites"
        >
          <Heart className={isFavorite ? 'favorite-active' : 'favorite-inactive'} />
        </button>

        {product.discount > 0 && (
          <div className="discount-badge-absolute">
            {product.discount}% OFF
          </div>
        )}

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
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>

        <div className="product-rating">
          <div className="rating-badge">
            {product.rating} <Star className="star-icon" />
          </div>
          <span className="reviews-count">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="product-pricing">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}