import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../util/ScrollToTop";
import NewsletterBanner from "../components/home/NewsletterBanner";
import QuoteBanner from "../components/home/QuoteBanner";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
       <QuoteBanner />
       <NewsletterBanner />
      <Footer />
    </>
  );
}
