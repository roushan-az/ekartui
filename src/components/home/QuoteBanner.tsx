import { Link } from "react-router-dom";
import "./QuoteBanner.css";

export default function QuoteBanner() {
  return (
    <section className="full-width quote-banner">
      <div className="quote-banner-inner">
        <h2>Eat Better. Snack Happier. Regret Nothing.</h2>

        <p>
          Discover premium makhana crafted for taste, nutrition,
          and everyday wellness — without boring snacks or guilt.
        </p>

        <Link to="/products" className="quote-banner-btn">
          Shop Premium Makhana
        </Link>
      </div>
    </section>
  );
}
