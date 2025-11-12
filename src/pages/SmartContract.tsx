import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code, ExternalLink, Shield, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SmartContract = () => {
  const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Adresse copiée !");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Smart Contract
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Transparence totale : notre code est open source et vérifiable par tous.
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Adresse du Contrat</h2>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg font-mono text-sm break-all">
                <span className="flex-1">{contractAddress}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyAddress}
                  className="flex-shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="hero" asChild>
                  <a 
                    href={`https://etherscan.io/address/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Voir sur Etherscan
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
                <p className="text-muted-foreground">
                  Le contrat est déployé sur Ethereum et ne peut pas être modifié après déploiement.
                  Code audité et testé.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Open Source</h3>
                <p className="text-muted-foreground">
                  Le code source complet est disponible et vérifiable. Aucun code caché, 
                  transparence totale.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Fonctions Principales</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">buyTickets()</h3>
                <p className="text-muted-foreground mb-3">
                  Permet aux utilisateurs d'acheter des tickets de loterie. Chaque ticket coûte 0.01 ETH.
                  Les fonds sont automatiquement ajoutés au pot.
                </p>
                <code className="block p-3 bg-muted rounded text-sm">
                  function buyTickets(uint256 _numberOfTickets) external payable
                </code>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">drawWinner()</h3>
                <p className="text-muted-foreground mb-3">
                  Lance le tirage au sort. Utilise un générateur aléatoire basé sur le block hash.
                  Seul le propriétaire du contrat peut appeler cette fonction.
                </p>
                <code className="block p-3 bg-muted rounded text-sm">
                  function drawWinner() external onlyOwner
                </code>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">getPrizePool()</h3>
                <p className="text-muted-foreground mb-3">
                  Retourne le montant actuel du pot. Cette fonction est publique et peut être appelée
                  par n'importe qui pour vérifier le pot en temps réel.
                </p>
                <code className="block p-3 bg-muted rounded text-sm">
                  function getPrizePool() external view returns (uint256)
                </code>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Mécanisme de Tirage</h2>
            <Card>
              <CardContent className="p-6">
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                  <li>Tous les participants sont enregistrés avec leur nombre de tickets</li>
                  <li>Un nombre aléatoire est généré en utilisant le block hash et le timestamp</li>
                  <li>Le gagnant est sélectionné proportionnellement au nombre de tickets possédés</li>
                  <li>90% du pot est transféré automatiquement au gagnant</li>
                  <li>10% reste dans le contrat pour la prochaine loterie</li>
                  <li>Les données du gagnant sont enregistrées sur la blockchain</li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Vérification et Audit</h2>
            <p className="text-muted-foreground mb-4">
              Le smart contract BlockLucky a été conçu avec les meilleures pratiques de sécurité :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Protection contre les attaques de reentrancy</li>
              <li>Gestion sécurisée des fonds</li>
              <li>Tests unitaires complets</li>
              <li>Code vérifié sur Etherscan</li>
              <li>Documentation complète</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmartContract;
