import { Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ProductDetails from "../components/ProductDetails";
import MakhanaStory from "../components/MakhanaStory";
import "./App.css";
import ScrollToTop from "../util/ScrollToTop";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makhana-story" element={<MakhanaStory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}
