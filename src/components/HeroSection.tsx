import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-lottery.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent mb-6">
          <Shield className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent-foreground">100% Transparent & Secured</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Win Big with
          <span className="bg-gradient-gold bg-clip-text text-transparent"> Blockchain</span>
          <br />
          Transparency
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join EtherBay's revolutionary blockchain lottery. Every draw is verifiable, 
          every winner is guaranteed, and every chance is fair.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="gold" size="lg" className="text-lg px-8">
            Participate Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">10,000+</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Participants</p>
          </div>
          
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-2xl font-bold text-secondary">50 ETH</span>
            </div>
            <p className="text-sm text-muted-foreground">Current Jackpot</p>
          </div>
          
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-2xl font-bold text-accent">100%</span>
            </div>
            <p className="text-sm text-muted-foreground">Transparency Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
