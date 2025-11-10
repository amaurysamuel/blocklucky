import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ParticipationSection } from "@/components/ParticipationSection";
import { WinnersSection } from "@/components/WinnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ParticipationSection />
      <WinnersSection />
      <Footer />
    </div>
  );
};

export default Index;
