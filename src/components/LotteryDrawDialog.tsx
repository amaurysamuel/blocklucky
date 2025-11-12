import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, Sparkles, Frown } from "lucide-react";
import { toast } from "sonner";

interface LotteryDrawDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticketCount: number;
  onComplete: () => void;
}

export const LotteryDrawDialog = ({ open, onOpenChange, ticketCount, onComplete }: LotteryDrawDialogProps) => {
  const [stage, setStage] = useState<"waiting" | "drawing" | "result">("waiting");
  const [isWinner, setIsWinner] = useState(false);
  const [winningNumber, setWinningNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (open) {
      setStage("waiting");
      setIsWinner(false);
      setCurrentNumber(0);
    }
  }, [open]);

  const startDraw = () => {
    setStage("drawing");
    
    // Animation des numéros qui défilent
    const interval = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 10000));
    }, 50);

    // Après 3 secondes, on révèle le résultat
    setTimeout(() => {
      clearInterval(interval);
      const finalNumber = Math.floor(Math.random() * 10000);
      setWinningNumber(finalNumber);
      
      // 15% de chance de gagner basé sur le nombre de tickets
      const winChance = Math.min(0.15 * ticketCount, 0.8);
      const won = Math.random() < winChance;
      setIsWinner(won);
      setStage("result");

      if (won) {
        toast.success("🎉 Félicitations ! Vous avez gagné !");
      } else {
        toast.info("Pas de chance cette fois. Retentez votre chance !");
      }
    }, 3000);
  };

  const handleClose = () => {
    onOpenChange(false);
    onComplete();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            Tirage au Sort
          </DialogTitle>
          <DialogDescription>
            Tirage basé sur {ticketCount} ticket{ticketCount > 1 ? 's' : ''}
          </DialogDescription>
        </DialogHeader>

        <div className="py-8 space-y-6">
          {stage === "waiting" && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                <Trophy className="w-12 h-12 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Prêt pour le tirage ?</h3>
                <p className="text-muted-foreground">
                  Cliquez sur le bouton ci-dessous pour lancer le tirage au sort
                </p>
              </div>
              <Button variant="gold" size="lg" onClick={startDraw} className="w-full">
                Lancer le Tirage
              </Button>
            </div>
          )}

          {stage === "drawing" && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-gold rounded-full flex items-center justify-center animate-spin">
                <Sparkles className="w-12 h-12 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Tirage en cours...</h3>
                <div className="text-6xl font-bold text-primary tabular-nums animate-fade-in">
                  #{currentNumber.toString().padStart(4, '0')}
                </div>
              </div>
            </div>
          )}

          {stage === "result" && (
            <div className="text-center space-y-6 animate-scale-in">
              {isWinner ? (
                <>
                  <div className="w-24 h-24 mx-auto bg-gradient-gold rounded-full flex items-center justify-center animate-pulse">
                    <Trophy className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-secondary">🎉 Vous avez gagné ! 🎉</h3>
                    <p className="text-muted-foreground mb-4">
                      Numéro gagnant : <span className="text-2xl font-bold text-primary">#{winningNumber.toString().padStart(4, '0')}</span>
                    </p>
                    <div className="bg-gradient-gold p-6 rounded-lg">
                      <div className="text-sm text-secondary-foreground/80 mb-1">Votre gain</div>
                      <div className="text-5xl font-bold text-secondary-foreground">45.2 ETH</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Frown className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Pas cette fois...</h3>
                    <p className="text-muted-foreground mb-4">
                      Numéro tiré : <span className="text-xl font-bold text-primary">#{winningNumber.toString().padStart(4, '0')}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ne vous découragez pas ! Le prochain tirage arrive bientôt.
                    </p>
                  </div>
                </>
              )}
              <Button variant="outline" onClick={handleClose} className="w-full">
                Fermer
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
