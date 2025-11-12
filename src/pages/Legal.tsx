import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Scale, FileText, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mentions Légales
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Informations légales et réglementaires concernant BlockLucky.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/terms-of-service">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Conditions d'Utilisation</h3>
                  <p className="text-muted-foreground">
                    Les règles et conditions pour utiliser BlockLucky.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/privacy-policy">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Politique de Confidentialité</h3>
                  <p className="text-muted-foreground">
                    Comment nous protégeons vos données.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gdpr">
              <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <Scale className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">RGPD</h3>
                  <p className="text-muted-foreground">
                    Vos droits concernant vos données personnelles.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Informations Légales</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Éditeur du Site</h3>
                <p className="text-muted-foreground">
                  BlockLucky<br />
                  Application décentralisée sur Ethereum<br />
                  Smart Contract: 0xd9145CCE52D386f254917e481eB44e9943F39138
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Hébergement</h3>
                <p className="text-muted-foreground">
                  Ce site est hébergé de manière décentralisée sur la blockchain Ethereum.
                  L'interface utilisateur peut être hébergée sur divers services d'hébergement web.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Propriété Intellectuelle</h3>
                <p className="text-muted-foreground">
                  Le design et le contenu de ce site sont protégés par le droit d'auteur.
                  Le code du smart contract est open source et disponible pour vérification.
                  La marque "BlockLucky" et le logo sont des marques déposées.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Avertissements</h2>
            
            <Card className="mb-6 border-yellow-500/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Risques de la Blockchain</h3>
                <p className="text-muted-foreground">
                  BlockLucky fonctionne sur la blockchain Ethereum. Les utilisateurs doivent être
                  conscients des risques inhérents à l'utilisation de technologies blockchain,
                  notamment :
                </p>
                <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                  <li>Perte potentielle de fonds en cas d'erreur de manipulation</li>
                  <li>Transactions irréversibles</li>
                  <li>Frais de gas variables</li>
                  <li>Risques de sécurité liés aux wallets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6 border-yellow-500/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">Jeu Responsable</h3>
                <p className="text-muted-foreground">
                  BlockLucky est un jeu d'argent. Nous encourageons le jeu responsable :
                </p>
                <ul className="list-disc list-inside mt-3 text-muted-foreground space-y-1">
                  <li>Ne jouez qu'avec de l'argent que vous pouvez vous permettre de perdre</li>
                  <li>Fixez-vous des limites de dépenses</li>
                  <li>Ne jouez pas pour résoudre des problèmes financiers</li>
                  <li>Demandez de l'aide si vous pensez avoir un problème de jeu</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Conformité Réglementaire</h3>
                <p className="text-muted-foreground">
                  La réglementation des loteries et jeux d'argent sur blockchain varie selon
                  les juridictions. Il est de la responsabilité de chaque utilisateur de vérifier
                  la légalité de sa participation dans son pays de résidence. BlockLucky ne peut
                  être tenu responsable de l'utilisation de ses services dans des juridictions
                  où cela serait illégal.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Limitation de Responsabilité</h2>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  BlockLucky est fourni "tel quel" sans garantie d'aucune sorte. Nous ne sommes
                  pas responsables de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Pertes financières résultant de l'utilisation du service</li>
                  <li>Bugs ou dysfonctionnements du smart contract</li>
                  <li>Problèmes liés à Ethereum ou MetaMask</li>
                  <li>Changements dans la réglementation</li>
                  <li>Attaques de sécurité ou hacks</li>
                  <li>Erreurs de manipulation de l'utilisateur</li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}<br />
                Pour toute question concernant ces mentions légales, veuillez consulter notre FAQ
                ou vérifier les informations du smart contract sur la blockchain.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
