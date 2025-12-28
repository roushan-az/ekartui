import logo from "/images/diya-logo.png";
import "./Header.css";

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
          />
        </div>

        <div className="actions">
          <button className="account-btn">Account</button>
          <button className="cart-btn">Rs. 0.00 (0)</button>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="nav-bar">
        <a href="#">Shop Now</a>
        <a href="#">Makhana</a>
        <a href="#">Diya International</a>
        <a href="#">Knowledge Centre</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

    </header>
  );
}
