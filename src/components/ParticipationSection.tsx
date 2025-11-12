import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Lock, Wallet, Zap } from "lucide-react";
import { toast } from "sonner";

export const ParticipationSection = () => {
  return (
    <section id="participation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">How to Participate</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to enter the most transparent lottery ever created
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-card border-border hover:shadow-card transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">1. Connect Wallet</h4>
            <p className="text-muted-foreground">
              Link your MetaMask wallet in seconds. No registration required.
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-border hover:shadow-card transition-all">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold mb-2">2. Buy Ticket</h4>
            <p className="text-muted-foreground">
              Purchase your lottery ticket for 0.01 ETH. One ticket per wallet.
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-border hover:shadow-card transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">3. Wait for Draw</h4>
            <p className="text-muted-foreground">
              Winner selected randomly via blockchain. Results are instant and verifiable.
            </p>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-primary border-0 text-center max-w-2xl mx-auto shadow-glow">
          <Lock className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-3">Current Lottery Pool</h4>
          <div className="text-5xl font-bold text-secondary mb-4">50.42 ETH</div>
          <p className="text-primary-foreground/80 mb-6">
            Next draw in: <span className="font-semibold">2 days 14h 32m</span>
          </p>
          <Button variant="gold" size="lg" className="text-lg px-12" onClick={() => toast.info('Simulation: achat de ticket à venir')}>
            Buy Your Ticket Now
          </Button>
        </Card>
      </div>
    </section>
  );
};
