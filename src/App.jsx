import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SeoSchemas from "./components/SeoSchemas";

const Services = lazy(() => import("./components/Services"));
const Products = lazy(() => import("./components/Products"));
const CTA = lazy(() => import("./components/CTA"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const FAQ = lazy(() => import("./components/FAQ"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Blogs = lazy(() => import("./components/Blogs"));
const Contact = lazy(() => import("./components/Contact"));
const MapSection = lazy(() => import("./components/MapSection"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <SeoSchemas />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <Products />
        <CTA />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <Blogs />
        <Contact />
        <MapSection />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;