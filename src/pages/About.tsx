import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Users, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            À Propos de BlockLucky
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            La première loterie transparente et décentralisée sur la blockchain Ethereum pour la communauté EtherBay.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">100% Transparent</h3>
                <p className="text-muted-foreground">
                  Tous les tirages sont vérifiables sur la blockchain. Aucune manipulation possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Paiements Instantanés</h3>
                <p className="text-muted-foreground">
                  Les gains sont automatiquement versés via smart contract. Pas d'intermédiaire.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Communauté EtherBay</h3>
                <p className="text-muted-foreground">
                  Créé par et pour la communauté EtherBay. Une loterie locale et équitable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Décentralisé</h3>
                <p className="text-muted-foreground">
                  Fonctionnement autonome sur la blockchain. Pas de contrôle central.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground mb-6">
              BlockLucky a été créé pour apporter la transparence et l'équité dans le monde des loteries.
              En utilisant la technologie blockchain, nous éliminons tous les intermédiaires et garantissons
              que chaque tirage est 100% aléatoire et vérifiable par tous.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Comment Ça Fonctionne</h2>
            <p className="text-muted-foreground mb-6">
              Notre smart contract gère automatiquement tous les aspects de la loterie : vente de tickets,
              tirage au sort, et distribution des gains. Tout est codé et immuable sur la blockchain Ethereum.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8">Sécurité et Fiabilité</h2>
            <p className="text-muted-foreground">
              Le code de notre smart contract est open source et a été audité par la communauté.
              Chaque transaction est enregistrée de manière permanente et peut être vérifiée par n'importe qui.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;