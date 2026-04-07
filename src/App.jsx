import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import CTA from "./components/CTA";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import SeoSchemas from "./components/SeoSchemas";

function App() {
  return (
    <>
      <SeoSchemas />
      <Navbar />
      <Hero />
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
    </>
  );
}

export default App;