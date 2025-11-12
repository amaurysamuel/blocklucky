import { useState } from "react";
import { Wallet, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export const Header = () => {
  const [account, setAccount] = useState<string | null>(null);
  const shorten = (addr: string) => addr.slice(0, 6) + "..." + addr.slice(-4);
  const handleConnect = async () => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) {
        toast.info("Installez MetaMask pour connecter votre wallet.");
        window.open("https://metamask.io/download.html", "_blank");
        return;
      }
      const accounts: string[] = await eth.request({ method: "eth_requestAccounts" });
      const acc = accounts?.[0];
      if (acc) {
        setAccount(acc);
        toast.success(`Wallet connecté: ${shorten(acc)}`);
      }
    } catch (err: any) {
      toast.error(err?.message || "Connexion au wallet échouée.");
    }
  };
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
          
          <Button variant="hero" size="lg" className="gap-2" onClick={handleConnect}>
            <Wallet className="w-4 h-4" />
            {account ? `${shorten(account)}` : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </header>
  );
};
