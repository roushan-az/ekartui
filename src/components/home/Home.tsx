import ProductCarousel from "../product/ProductCarousel";
import MainBanner from "../slider/MainBanner";
import HomeDetailSection from "./HomeDetailSection";
import "./Home.css";
import QuoteBanner from "./QuoteBanner";
import NewsletterBanner from "./NewsletterBanner";

export default function Home() {
  return (
    <>
      <MainBanner />

      {/* REQUIRED wrapper */}
      <section className="home-carousel">
        <ProductCarousel />
      </section>

      <HomeDetailSection />
      <QuoteBanner />
      <NewsletterBanner />
    
    </>
  );
}
