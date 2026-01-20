import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Heart, Share2, Shield, Truck, Package } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartProvider";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pdp-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')} className="pdp-back-btn">
          Browse Products
        </button>
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  // Mock multiple images (using same image for demo)
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="pdp-container">
      <div className="pdp-wrapper">
        
        {/* LEFT SECTION - Images */}
        <div className="pdp-images-section">
          {/* Thumbnail Column */}
          <div className="pdp-thumbnails">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`pdp-thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="pdp-main-image">
            <img src={productImages[selectedImage]} alt={product.name} />
            
            {/* Action Buttons on Image */}
            <div className="pdp-image-actions">
              <button 
                className={`pdp-icon-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart size={20} fill={isFavorite ? '#ff6b35' : 'none'} />
              </button>
              <button className="pdp-icon-btn">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Cart Buttons - Desktop */}
          <div className="pdp-desktop-actions">
            <button className="pdp-add-to-cart" onClick={handleAddToCart}>
              <Package size={20} />
              Add to Cart
            </button>
            <button className="pdp-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - Details */}
        <div className="pdp-details-section">
          
          {/* Breadcrumb */}
          <div className="pdp-breadcrumb">
            <span onClick={() => navigate('/')}>Home</span>
            <span>/</span>
            <span onClick={() => navigate('/products')}>Products</span>
            <span>/</span>
            <span>{product.brand}</span>
          </div>

          {/* Brand */}
          <p className="pdp-brand">{product.brand}</p>

          {/* Product Name */}
          <h1 className="pdp-title">{product.name}</h1>

          {/* Rating */}
          <div className="pdp-rating-row">
            <div className="pdp-rating-badge">
              {product.rating} <Star size={14} fill="#fff" stroke="#fff" />
            </div>
            <span className="pdp-rating-text">
              {product.reviews?.toLocaleString()} Ratings & {Math.floor((product.reviews || 0) / 10)} Reviews
            </span>
          </div>

          {/* Special Price Tag */}
          <div className="pdp-special-price">Special Price</div>

          {/* Pricing */}
          <div className="pdp-price-section">
            <span className="pdp-current-price">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="pdp-original-price">₹{product.originalPrice.toLocaleString()}</span>
                <span className="pdp-discount">{product.discount}% off</span>
              </>
            )}
          </div>

          {/* Tax Info */}
          <p className="pdp-tax-info">inclusive of all taxes</p>

          {/* Offers Section */}
          <div className="pdp-offers">
            <h3>Available offers</h3>
            <ul>
              <li>
                <strong>Bank Offer</strong> 10% off on HDFC Bank Credit Cards, up to ₹1000
              </li>
              <li>
                <strong>Partner Offer</strong> Sign-up for pay and get ₹100 cashback
              </li>
              <li>
                <strong>Special Price</strong> Get extra 5% off (price inclusive of cashback)
              </li>
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="pdp-quantity-section">
            <label>Quantity</label>
            <div className="pdp-quantity-controls">
              <button 
                className="pdp-qty-btn" 
                onClick={handleDecrease}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="pdp-qty-value">{quantity}</span>
              <button className="pdp-qty-btn" onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pdp-mobile-actions">
            <button className="pdp-add-to-cart" onClick={handleAddToCart}>
              <Package size={20} />
              Add to Cart
            </button>
            <button className="pdp-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="pdp-delivery">
            <h3>Delivery</h3>
            <div className="pdp-delivery-input">
              <input type="text" placeholder="Enter Delivery Pincode" />
              <button>Check</button>
            </div>
            <div className="pdp-delivery-features">
              <div className="pdp-feature">
                <Truck size={18} />
                <span>Free Delivery</span>
              </div>
              <div className="pdp-feature">
                <Package size={18} />
                <span>7 Days Replacement</span>
              </div>
              <div className="pdp-feature">
                <Shield size={18} />
                <span>Warranty Policy</span>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="pdp-description">
            <h3>Product Details</h3>
            <p>{product.name}</p>
          </div>

          {/* Specifications */}
          <div className="pdp-specifications">
            <h3>Specifications</h3>
            <table>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{product.brand}</td>
                </tr>
                {product.tags && product.tags.length > 0 && (
                  <tr>
                    <td>Features</td>
                    <td>{product.tags.join(', ')}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}