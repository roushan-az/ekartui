import "./About.css";

export default function About() {
  return (
    <section className="about-bg">
      <section className="about-page container">
        {/* Header */}
        <header className="about-header">
          <h1 className="about-title">About eKart</h1>
          <p className="about-tagline">
            eKart began with a simple question — why choose between taste and
            health? We took an Indian superfood, makhana, and gave it a modern
            twist. Light, crunchy, flavourful, and guilt-free.
          </p>
        </header>

        {/* Journey */}
        <div className="about-block">
          <h2>A Superfood with a Story</h2>
          <p>
            Our hero product is makhana — also known as fox nuts or lotus seeds —
            a naturally light, plant-based superfood that has been part of Indian
            diets for centuries.
          </p>

          <p>
            Low in fat, naturally gluten-free, and high in nutrients, makhana has
            long been valued for its clean energy and digestibility. Yet, outside
            traditional kitchens, it remained largely undiscovered.
          </p>

          <p>
            eKart was created to bring this ancient superfood to the modern
            world.
          </p>
        </div>

        {/* Values */}
        <div className="about-block highlight">
          <h2>What Makes eKart Different</h2>
          <p>We reimagined makhana for today’s lifestyle:</p>

          <ul className="about-list">
            <li>Light, crunchy texture with satisfying flavor</li>
            <li>Thoughtfully seasoned, never overpowering</li>
            <li>Lower oil, no unnecessary additives</li>
            <li>Suitable for mindful eaters and everyday snackers alike</li>
          </ul>
        </div>

        {/* Highlight */}
        <div className="about-highlight-single">
          <h3>1000+ Happy Customers</h3>
          <p>
            Growing every day through trust, taste, and mindful choices.
          </p>
        </div>
      </section>
    </section>
  );
}
