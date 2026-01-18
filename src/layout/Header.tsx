import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "/images/logo.png";
import { useCart } from "../context/CartProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="eKart" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/makhana-story">Makhana Story</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/makhana-story" onClick={() => setMenuOpen(false)}>Makhana Story</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cartCount})</Link>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}