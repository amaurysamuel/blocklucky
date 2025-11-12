import { Wallet, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWeb3 } from "@/hooks/useWeb3";

export const Header = () => {
  const { account, balance, connectWallet } = useWeb3();
  const shorten = (addr: string) => addr.slice(0, 6) + "..." + addr.slice(-4);
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                BlockLucky
              </h1>
              <p className="text-xs text-muted-foreground">EtherBay Lottery</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {account && (
              <div className="text-right hidden sm:block">
                <div className="text-xs text-muted-foreground">Balance</div>
                <div className="text-sm font-semibold">{parseFloat(balance).toFixed(4)} ETH</div>
              </div>
            )}
            <Button variant="hero" size="lg" className="gap-2" onClick={connectWallet}>
              <Wallet className="w-4 h-4" />
              {account ? `${shorten(account)}` : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
