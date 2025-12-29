import { Route, Routes } from "react-router-dom";
import HeroSlider from "../components/hero/HeroSlider";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./App.css";
import About from "../components/About";
import Contact from "../components/Contact";
import ProductDetails from "../components/ProductDetails";

export default function App() {
  return (
    <>
      <Header />
 <Routes>
        <Route path="/" element={ <> <HeroSlider /> <ProductCarousel /> </>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
