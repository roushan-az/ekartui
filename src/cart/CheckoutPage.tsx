import { useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { useCart } from "../context/CartProvider";

export default function CheckoutPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal - discount + shipping;

  const handleQuantityChange = (id: number, newQty: number) => {
    if (newQty > 0) {
      updateQuantity(id, newQty);
    }
  };

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(subtotal * 0.1);
      alert("Coupon applied! 10% off");
    } else if (couponCode) {
      alert("Invalid coupon code");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some delicious makhana to get started!</p>
        <Link to="/products" className="shop-btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        
        {/* Left Side - Cart Items */}
        <div className="cart-items-section">
          <h1>Shopping Cart ({cartItems.length} items)</h1>
          
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">₹{item.price}</p>
                
                <div className="item-actions">
                  <div className="quantity-control">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="item-total">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
          
          <Link to="/products" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>

        {/* Right Side - Price Summary */}
        <div className="price-summary">
          <h2>Price Details</h2>
          
          <div className="summary-row">
            <span>Price ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>₹{subtotal}</span>
          </div>
          
          <div className="summary-row">
            <span>Discount</span>
            <span className="discount">− ₹{discount}</span>
          </div>
          
          <div className="summary-row">
            <span>Delivery Charges</span>
            <span className={shipping === 0 ? "free" : ""}>
              {shipping === 0 ? "FREE" : `₹${shipping}`}
            </span>
          </div>
          
          {shipping > 0 && (
            <p className="free-shipping-msg">
              Add ₹{500 - subtotal} more for FREE delivery
            </p>
          )}
          
          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
          
          <div className="coupon-section">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="coupon-input"
            />
            <button onClick={applyCoupon} className="apply-btn">
              Apply
            </button>
          </div>
          
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          
          <div className="payment-options">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" />
          </div>
        </div>
      </div>
    </div>
  );
}