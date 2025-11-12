import { useState, useEffect } from "react";
import { BrowserProvider, Contract, parseEther, formatEther } from "ethers";
import { toast } from "sonner";

// Utilitaire pour récupérer l'adresse du contrat selon le réseau courant
const getContractAddress = (chainIdHexOrNum: string | number) => {
  try {
    const num = typeof chainIdHexOrNum === "string"
      ? (chainIdHexOrNum.startsWith("0x") ? parseInt(chainIdHexOrNum, 16) : parseInt(chainIdHexOrNum, 10))
      : chainIdHexOrNum;
    const key = `VITE_CONTRACT_ADDRESS_${num}` as keyof ImportMetaEnv;
    // @ts-ignore: dynamic env access
    const byChain = import.meta.env[key] as string | undefined;
    if (byChain && byChain.trim()) return byChain.trim();
  } catch (_) {}
  const fallback = import.meta.env.VITE_CONTRACT_ADDRESS as string | undefined;
  return fallback?.trim() || "";
};

// Helpers réseau
const normalizeChainId = (id: string | number | null | undefined) => {
  if (id == null) return "";
  if (typeof id === "string") {
    return id.startsWith("0x") ? parseInt(id, 16).toString() : parseInt(id, 10).toString();
  }
  return id.toString();
};

const formatChainName = (idNumStr: string) => {
  const id = Number(idNumStr);
  switch (id) {
    case 1: return "Ethereum Mainnet";
    case 5: return "Goerli";
    case 11155111: return "Sepolia";
    case 137: return "Polygon";
    case 10: return "OP Mainnet";
    case 42161: return "Arbitrum One";
    case 56: return "BNB Chain";
    case 31337: return "Local (Hardhat)";
    case 1337: return "Local";
    default: return `Chain ${id}`;
  }
};

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
        // Vérification basique du RPC: tenter de lire le numéro de bloc
        try {
          const chainIdHex: string = await provider.send("eth_chainId", []);
          const idStr = normalizeChainId(chainIdHex);
          await provider.getBlockNumber();
          toast.message(`Connecté au réseau ${formatChainName(idStr)} (chainId ${idStr})`);
        } catch (rpcErr) {
          toast.error("Erreur RPC détectée - vérifiez que MetaMask est connecté au bon réseau ou que le nœud est actif.");
        }
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
      try {
        const eth = (window as any).ethereum;
        const provider = new BrowserProvider(eth);
        const chainIdHex: string = await provider.send("eth_chainId", []);
        const idStr = normalizeChainId(chainIdHex);
        toast.error(`Erreur RPC lors de la lecture du solde - réseau ${formatChainName(idStr)} (chainId ${idStr}). Assurez-vous que MetaMask est sur le bon réseau.`);
      } catch (_) {
        toast.error("Erreur RPC lors de la lecture du solde.");
      }
    }
  };

  const connectWallet = async () => {
    try {
      if (typeof window === "undefined") {
        toast.error("Erreur : environnement non supporté");
        return null;
      }

      const eth = (window as any).ethereum;
      if (!eth) {
        toast.error("MetaMask n'est pas détecté. Veuillez installer MetaMask et recharger la page.");
        return null;
      }

      const accounts = await eth.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      setAccount(account);
      
      const provider = new BrowserProvider(eth);
      setProvider(provider);
      // Healthcheck RPC
      try {
        const chainIdHex: string = await provider.send("eth_chainId", []);
        const idStr = normalizeChainId(chainIdHex);
        await provider.getBlockNumber();
        toast.message(`Connecté au réseau ${formatChainName(idStr)} (chainId ${idStr})`);
      } catch (rpcErr) {
        toast.error("Erreur RPC détectée - vérifiez le réseau MetaMask ou votre nœud.");
      }
      await updateBalance(account);
      
      toast.success(`Wallet connecté: ${account.slice(0, 6)}...${account.slice(-4)}`);
      return account;
    } catch (error: any) {
      if (error.code === 4001) {
        toast.error("Connexion refusée par l'utilisateur");
      } else {
        toast.error(error?.message || "Connexion au wallet échouée.");
      }
      return null;
    }
  };

  const buyTickets = async (quantity: number, pricePerTicket: number) => {
    try {
      if (typeof window === "undefined") {
        toast.error("Environnement non supporté");
        return { success: false };
      }

      const eth = (window as any).ethereum;
      if (!eth) {
        toast.error("MetaMask n'est pas détecté");
        return { success: false };
      }

      // S'assurer qu'un compte est bien connecté
      let currentAccount = account;
      if (!currentAccount) {
        const accounts = await eth.request({ method: "eth_requestAccounts" });
        currentAccount = accounts?.[0] || null;
        if (!currentAccount) {
          toast.error("Aucun compte MetaMask détecté");
          return { success: false };
        }
        setAccount(currentAccount);
      }

      const providerInstance = new BrowserProvider(eth);
      setProvider(providerInstance);
      const signer = await providerInstance.getSigner();

      const totalPriceStr = (quantity * pricePerTicket).toFixed(6);

      // Résoudre l'adresse du contrat selon le réseau courant
      const chainIdHex: string = await providerInstance.send("eth_chainId", []);
      const contractAddress = getContractAddress(chainIdHex);
      if (!contractAddress) {
        const idStr = normalizeChainId(chainIdHex);
        toast.error(`Adresse du contrat introuvable pour ${formatChainName(idStr)} (chainId ${idStr}). Configurez VITE_CONTRACT_ADDRESS_${idStr} ou VITE_CONTRACT_ADDRESS.`);
        return { success: false };
      }

      toast.info("Confirmation de la transaction dans MetaMask...");

      const tx = await signer.sendTransaction({
        to: contractAddress,
        value: parseEther(totalPriceStr),
      });

      toast.info("Transaction en cours...");

      const receipt = await tx.wait();

      if (receipt?.status === 1) {
        await updateBalance(currentAccount);
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
        try {
          const eth = (window as any).ethereum;
          const provider = new BrowserProvider(eth);
          const chainIdHex: string = await provider.send("eth_chainId", []);
          const idStr = normalizeChainId(chainIdHex);
          const resolvedAddr = getContractAddress(chainIdHex) || "(non configurée)";
          toast.error(`Erreur RPC lors de l'achat sur ${formatChainName(idStr)} (chainId ${idStr}). Contrat ciblé: ${resolvedAddr}. ${error?.message || ''}`.trim());
        } catch (_) {
          toast.error(error?.message || "Erreur lors de l'achat");
        }
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
