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
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="disabled-link"
              >
                Shop All
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="disabled-link"
              >
                Makhana
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="disabled-link"
              >
                Water Chestnut Flours
              </a>
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
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/images/icon/facebook.png" alt="Facebook" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/images/icon/instagram.png" alt="Instagram" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img src="/images/icon/youtube.png" alt="YouTube" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999?text=Hello%20I%20need%20help"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <img src="/images/icon/whatsapp.png" alt="WhatsApp" />
            </a>
          </div>
        </div>


      </div>

      <div className="footer-bottom">
        © 2025 Diya International · Powered by AILA
      </div>

    </footer>
  );
}
