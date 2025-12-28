import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/diya-logo.png" alt="Diya Tea" />
        </div>

        {/* Shop */}
        <div className="footer-col">
          <h4>Shop</h4>
          <p>Shop All</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Return, Replacement and</p>
          <p>Cancellation Policy</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Social Links</h4>
          <div className="social-icons">
            <span>f</span>
            <span>📷</span>
            <span>▶</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        Copyright © 2025 Diya Tea. Powered by OneRoof Technologies
      </div>
    </footer>
  );
}
