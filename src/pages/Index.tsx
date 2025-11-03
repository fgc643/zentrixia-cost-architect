import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Founder } from "@/components/Founder";
import { Portfolio } from "@/components/Portfolio";
import { Opportunities } from "@/components/Opportunities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Founder />
      <Portfolio />
      <Opportunities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
