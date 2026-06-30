import { BookingModalProvider } from "./components/BookingModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CalculatorSection from "./components/CalculatorSection";
import TestimoniSection from "./components/TestimoniSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <BookingModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <CalculatorSection />
        <TestimoniSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </BookingModalProvider>
  );
}
