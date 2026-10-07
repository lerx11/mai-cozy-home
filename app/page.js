import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StayWithUs from "@/components/StayWithUs";
import ToursSection from "@/components/ToursSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <StayWithUs />
        <ToursSection />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
