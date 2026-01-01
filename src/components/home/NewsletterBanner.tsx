import "./NewsletterBanner.css";

export default function NewsletterBanner() {
  return (
    <section className="banner banner--light">
      <div className="banner-content">
        <h3>Where Better Eating Begins</h3>

        <p>
          Thoughtful recipes, honest food advice, and special perks —
          minus the clutter. Only the good stuff.
        </p>

        <form
          className="banner-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
          />
          <button type="submit">Sign Me Up</button>
        </form>

        <small>
          No spam. No noise. Just food you’ll feel good about.
        </small>
      </div>
    </section>
  );
}
