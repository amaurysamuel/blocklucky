import { Card } from "@/components/ui/card";
import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentWinners = [
  { address: "0x742d...8a9c", amount: "45.2 ETH", date: "Dec 20, 2024", verified: true },
  { address: "0x1a3f...7b2e", amount: "38.7 ETH", date: "Dec 15, 2024", verified: true },
  { address: "0x9c8d...4f1a", amount: "42.1 ETH", date: "Dec 10, 2024", verified: true },
  { address: "0x5e2a...3d9b", amount: "39.8 ETH", date: "Dec 5, 2024", verified: true },
];

export const WinnersSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Trophy className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-4xl font-bold mb-4">Recent Winners</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every winner is verified on the blockchain. Click to view transaction details.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {recentWinners.map((winner, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card transition-all group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <code className="text-lg font-mono font-semibold">{winner.address}</code>
                      {winner.verified && (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{winner.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">{winner.amount}</div>
                    <p className="text-xs text-muted-foreground">Prize Won</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Winners on Blockchain
          </Button>
        </div>
      </div>
    </section>
  );
};
