import { useState, useEffect } from "react";
import { BrowserProvider, Contract, parseEther, formatEther } from "ethers";
import { toast } from "sonner";

// Adresse du contrat de loterie
const LOTTERY_CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    checkIfWalletIsConnected();
    
    if (typeof window !== "undefined" && (window as any).ethereum) {
      const eth = (window as any).ethereum;
      
      eth.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          updateBalance(accounts[0]);
        } else {
          setAccount(null);
          setBalance("0");
        }
      });

      eth.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) return;

      const accounts = await eth.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        const account = accounts[0];
        setAccount(account);
        const provider = new BrowserProvider(eth);
        setProvider(provider);
        await updateBalance(account);
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const updateBalance = async (address: string) => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) return;
      
      const provider = new BrowserProvider(eth);
      const balance = await provider.getBalance(address);
      setBalance(formatEther(balance));
    } catch (error) {
      console.error("Error getting balance:", error);
    }
  };

  const connectWallet = async () => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) {
        toast.info("Installez MetaMask pour connecter votre wallet.");
        window.open("https://metamask.io/download.html", "_blank");
        return null;
      }

      const accounts = await eth.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      setAccount(account);
      
      const provider = new BrowserProvider(eth);
      setProvider(provider);
      await updateBalance(account);
      
      toast.success(`Wallet connecté: ${account.slice(0, 6)}...${account.slice(-4)}`);
      return account;
    } catch (error: any) {
      toast.error(error?.message || "Connexion au wallet échouée.");
      return null;
    }
  };

  const buyTickets = async (quantity: number, pricePerTicket: number) => {
    if (!provider || !account) {
      toast.error("Veuillez connecter votre wallet");
      return { success: false };
    }

    try {
      const signer = await provider.getSigner();
      const totalPrice = (quantity * pricePerTicket).toString();
      
      toast.info("Confirmation de la transaction dans MetaMask...");

      // Envoyer la transaction
      const tx = await signer.sendTransaction({
        to: LOTTERY_CONTRACT_ADDRESS,
        value: parseEther(totalPrice),
      });

      toast.info("Transaction en cours...");
      
      // Attendre la confirmation
      const receipt = await tx.wait();
      
      if (receipt?.status === 1) {
        await updateBalance(account);
        toast.success(`${quantity} ticket${quantity > 1 ? 's' : ''} acheté${quantity > 1 ? 's' : ''} avec succès !`);
        return { success: true, txHash: receipt.hash };
      } else {
        toast.error("Transaction échouée");
        return { success: false };
      }
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error("Transaction rejetée par l'utilisateur");
      } else {
        toast.error(error?.message || "Erreur lors de l'achat");
      }
      return { success: false, error };
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setProvider(null);
    setBalance("0");
    toast.info("Wallet déconnecté");
  };

  const switchAccount = async () => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) {
        toast.error("MetaMask n'est pas installé");
        return;
      }

      // Cette méthode ouvre MetaMask pour changer de compte
      const accounts = await eth.request({ 
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }]
      }).then(() => eth.request({ method: "eth_requestAccounts" }));
      
      if (accounts.length > 0) {
        const account = accounts[0];
        setAccount(account);
        const provider = new BrowserProvider(eth);
        setProvider(provider);
        await updateBalance(account);
        toast.success(`Compte changé: ${account.slice(0, 6)}...${account.slice(-4)}`);
      }
    } catch (error: any) {
      if (error.code !== 4001) {
        toast.error("Erreur lors du changement de compte");
      }
    }
  };

  return {
    account,
    balance,
    connectWallet,
    disconnectWallet,
    switchAccount,
    buyTickets,
    updateBalance: () => account && updateBalance(account),
  };
};
