import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Minus, Plus, Ticket } from "lucide-react";
import { toast } from "sonner";

interface TicketPurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPurchase: (quantity: number) => void;
}

export const TicketPurchaseDialog = ({ open, onOpenChange, onPurchase }: TicketPurchaseDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 0.01;
  const totalPrice = (quantity * pricePerTicket).toFixed(3);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handlePurchase = () => {
    onPurchase(quantity);
    onOpenChange(false);
    setQuantity(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-secondary" />
            Acheter des Tickets
          </DialogTitle>
          <DialogDescription>
            Chaque ticket coûte 0.01 ETH. Maximum 10 tickets par transaction.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Nombre de tickets</Label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrease}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-4xl font-bold text-primary">{quantity}</div>
                <div className="text-sm text-muted-foreground">ticket{quantity > 1 ? 's' : ''}</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrease}
                disabled={quantity >= 10}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Prix unitaire</span>
              <span className="font-medium">{pricePerTicket} ETH</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantité</span>
              <span className="font-medium">×{quantity}</span>
            </div>
            <div className="h-px bg-border my-2" />
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold text-secondary">{totalPrice} ETH</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground bg-accent/10 p-3 rounded-lg">
            ⚠️ Simulation : aucun ETH réel ne sera débité. Cette démo simule l'achat de tickets.
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button variant="gold" onClick={handlePurchase} className="gap-2">
            <Ticket className="w-4 h-4" />
            Confirmer l'achat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
