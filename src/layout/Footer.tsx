import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <img src="/images/diya-logo.png" alt="DesiDazzle" />
          <p>
            Authentic taste of Mithila, delivered with care.
          </p>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to="/shop">Shop All</Link>
            </li>
            <li>
              <Link to="/makhana-story">Makhana</Link>
            </li>
            <li>
              <Link to="/flours">Flours</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/returns">Returns & Cancellation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Diya International · Powered by AILA
      </div>

    </footer>
  );
}
