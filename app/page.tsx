import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import VideoShowcase from "@/components/VideoShowcase";
import Highlights from "@/components/Highlights";
import HowToOrder from "@/components/HowToOrder";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <VideoShowcase />
        <Highlights />
        <HowToOrder />
        <FAQ />
        <FinalCTA />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
