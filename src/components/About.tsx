// import ImageRibbon from "../util/ImageRibbon";

export default function About() {
  return (
    <>
    {/* <ImageRibbon image="/images/hero/slide2.jpg" alt="About Diya International"/> */}
    <section className="about-rich container">
      {/* Hero Title */}
      <header className="about-header">
        <h1>About DesiDazzle</h1>
        <p className="tagline">
          DESIDAZZLE  began with a simple question- Why  choose between taste and health?
            We took an Indian superfood—makhana—and gave it a modern twist.
            Light, crunchy, flavourful, and guilt-free.
            We don't make snacks. We create better choices.

        </p>
      </header>

      {/* Story / Journey */}
      <div className="about-journey">
        <h2>A Superfood with a Story</h2>
        <p>
          Our hero product is makhana, also known as fox nuts or lotus seeds—a naturally light, plant-based superfood that has been part of Indian diets for centuries.

          Low in fat, naturally gluten-free, and high in nutrients, makhana has long been valued for its clean energy and digestibility. Yet, outside traditional kitchens, it remained largely undiscovered—or misunderstood.

          DESIDAZZLE was created to bring this ancient superfood to the modern world.

        </p>
      </div>

      {/* Values */}
      <div className="about-values">
        <h2>What Makes  DESIDAZZLE  Different</h2>
         <p>We reimagined makhana for today’s lifestyle:</p>
        <ul>
          <li>Light, crunchy texture with satisfying flavor</li>
          <li>Thoughtfully seasoned, never overpowering</li>
          <li>Lower oil, no unnecessary additives</li>
          <li>Suitable for mindful eaters and everyday snackers alike</li>
        </ul>
      </div>

      {/* Optional: Future Team / Highlights */}
      <div className="about-highlights">
        <div className="highlight-box">
          <h3>1000+ Happy Customers</h3>
        </div>
        <div className="highlight-box">
          <h3>500+ Premium Products</h3>
        </div>
      </div>
    </section>
   </>
  );
}
