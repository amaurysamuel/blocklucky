import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wallet, Ticket, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Comment Ça Fonctionne
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Participer à BlockLucky est simple et transparent. Suivez ces étapes pour tenter votre chance !
          </p>

          <div className="space-y-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">1. Connectez Votre Wallet</h3>
                    <p className="text-muted-foreground mb-4">
                      Utilisez MetaMask ou tout autre wallet Ethereum compatible. Assurez-vous d'avoir
                      suffisamment d'ETH pour acheter vos tickets et couvrir les frais de transaction.
                    </p>
                    <p className="text-sm text-primary">
                      💡 Astuce : Un ticket coûte 0.01 ETH
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">2. Achetez Vos Tickets</h3>
                    <p className="text-muted-foreground mb-4">
                      Choisissez le nombre de tickets que vous souhaitez acheter. Plus vous avez de tickets,
                      plus vous avez de chances de gagner ! Chaque achat est enregistré sur la blockchain.
                    </p>
                    <p className="text-sm text-primary">
                      💡 Conseil : Vous pouvez acheter jusqu'à 100 tickets par transaction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">3. Attendez le Tirage</h3>
                    <p className="text-muted-foreground mb-4">
                      Les tirages sont effectués automatiquement par le smart contract. Le processus
                      utilise un système aléatoire vérifiable qui garantit l'équité totale du tirage.
                    </p>
                    <p className="text-sm text-primary">
                      💡 Info : Seul le propriétaire du contrat peut lancer le tirage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">4. Récupérez Vos Gains</h3>
                    <p className="text-muted-foreground mb-4">
                      Si vous gagnez, les fonds sont automatiquement transférés vers votre wallet !
                      Aucune action requise de votre part. Tout est géré par le smart contract.
                    </p>
                    <p className="text-sm text-primary">
                      💡 Bonus : 90% du pot va au gagnant, 10% reste pour le prochain tirage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Questions Fréquentes</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Comment le gagnant est-il choisi ?</p>
                <p>Le smart contract utilise un générateur de nombres aléatoires basé sur le block hash,
                garantissant un tirage totalement équitable et vérifiable.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Quand sont effectués les tirages ?</p>
                <p>Les tirages sont lancés manuellement par l'administrateur du contrat quand le pot
                atteint un montant significatif ou à intervalles réguliers.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Puis-je vérifier le résultat ?</p>
                <p>Oui ! Chaque tirage est enregistré sur la blockchain. Vous pouvez consulter
                l'historique complet des gagnants et vérifier les transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
