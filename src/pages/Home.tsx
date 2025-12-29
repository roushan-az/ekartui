import HeroSlider from "../components/hero/HeroSlider";
import ProductCarousel from "../components/ProductCarousel";
import HomeDetailSection from "../components/HomeDetailSection";
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
