import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";


import About from "../components/pages/About";
import Contact from "../components/pages/Contact";

import MakhanaStory from "../components/pages/MakhanaStory";

import FAQs from "../components/faq/FAQs";
import PrivacyPolicy from "../components/faq/PrivacyPolicy";
import Terms from "../components/faq/Terms";
import Returns from "../components/faq/Returns";
import Home from "../components/home/Home";
import ProductDetails from "../components/product/ProductDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/makhana-story" element={<MakhanaStory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Returns />} />
      </Route>
    </Routes>
  );
}
