import { useState, useEffect } from "react";
import "./MainBanner.css";

const SLIDES = [
  { "id": 1, "url": "/images/slides/slide1.jpg", "alt": "Premium Makhana" },
  { "id": 2, "url": "/images/slides/slide2.jpg", "alt": "Healthy Snacks" },
  { "id": 3, "url": "/images/slides/slide3.jpg", "alt": "Best Deals" },
  { "id": 4, "url": "/images/slides/slide4.jpg", "alt": "Organic Dry Fruits" },
  { "id": 5, "url": "/images/slides/slide5.jpg", "alt": "Festive Offers" },
  { "id": 6, "url": "/images/slides/slide6.jpg", "alt": "Crunchy Treats" },
  { "id": 7, "url": "/images/slides/slide7.jpg", "alt": "Wholesome Delights" },
  { "id": 8, "url": "/images/slides/slide8.jpg", "alt": "Nutritious Picks" },
  { "id": 9, "url": "/images/slides/slide9.jpg", "alt": "Flavorful Mixes" },
  { "id": 10, "url": "/images/slides/slide10.jpg", "alt": "Smart Shopping" }
];

export default function MainBanner() {
  const [activeStep, setActiveStep] = useState(0);

  const nextSlide = () => {
    setActiveStep((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveStep((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  // Automatic sliding logic
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner-container">
      {/* Left Arrow */}
      <button className="nav-arrow left" onClick={prevSlide}>❮</button>

      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`banner-slide ${index === activeStep ? "visible" : ""}`}
        >
          <img src={slide.url} alt={slide.alt} className="banner-img" />
        </div>
      ))}

      {/* Right Arrow */}
      <button className="nav-arrow right" onClick={nextSlide}>❯</button>
    </section>
  );
}