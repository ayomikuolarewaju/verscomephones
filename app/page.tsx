import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Comparison from "@/components/Comparison";
import VideoShowcase from "@/components/VideoShowcase";
import Highlights from "@/components/Highlights";
import HowToOrder from "@/components/HowToOrder";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Products />
        <Comparison />
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
