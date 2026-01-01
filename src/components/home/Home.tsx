import ProductCarousel from "../product/ProductCarousel";
import HeroSlider from "../slider/HeroSlider";
import HomeDetailSection from "./HomeDetailSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* REQUIRED wrapper */}
      <section className="home-carousel">
        <ProductCarousel />
      </section>

      <HomeDetailSection />
    </>
  );
}
