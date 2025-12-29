import logo from "/images/diya-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">

      {/* TOP BAR */}
      <div className="top-bar">
        <img src={logo} alt="Diya International" className="logo" />

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for..."
            hidden
          />
        </div>

        <div className="actions">
          <button className="account-btn">Account</button>
          <button className="cart-btn">Rs. 0.00 (0)</button>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/makhana-story" className="nav-link">Makhana Story</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>

    </header>
  );
}
