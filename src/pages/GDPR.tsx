import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Eye, Trash2, Download, Lock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            RGPD - Règlement Général sur la Protection des Données
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Vos droits concernant vos données personnelles dans le cadre du RGPD.
          </p>

          <div className="mb-12 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-500">
                  Important : Spécificités de la Blockchain
                </h3>
                <p className="text-muted-foreground">
                  Les données enregistrées sur la blockchain Ethereum sont publiques, immuables et
                  décentralisées. Ces données ne peuvent pas être modifiées ou supprimées car elles
                  font partie d'un registre distribué permanent. Ceci est une caractéristique
                  fondamentale de la technologie blockchain.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Eye className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Droit d'Accès</h3>
                <p className="text-muted-foreground mb-4">
                  Vous avez le droit de savoir quelles données nous détenons sur vous.
                </p>
                <p className="text-sm text-muted-foreground">
                  Sur blockchain : Toutes vos transactions sont publiques et consultables via
                  Etherscan avec votre adresse wallet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Portabilité des Données</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez récupérer vos données dans un format structuré.
                </p>
                <p className="text-sm text-muted-foreground">
                  Les données blockchain sont déjà portables via votre wallet et les explorateurs
                  de blockchain.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Lock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Limitation du Traitement</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez demander la limitation du traitement de vos données.
                </p>
                <p className="text-sm text-muted-foreground">
                  Vous pouvez cesser d'utiliser BlockLucky à tout moment en déconnectant votre wallet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Trash2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Droit à l'Effacement</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez demander la suppression de vos données personnelles.
                </p>
                <p className="text-sm text-muted-foreground">
                  ⚠️ Les données blockchain ne peuvent pas être supprimées. Seules les données du
                  site web peuvent l'être.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Vos Droits en Détail</h2>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">1. Droit d'Accès (Article 15 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous avez le droit de demander une copie de toutes les données personnelles que
                  nous détenons sur vous. Pour BlockLucky :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Données blockchain :</strong> Consultez directement votre adresse sur
                    Etherscan pour voir toutes vos transactions
                  </li>
                  <li>
                    <strong>Données site web :</strong> Contactez-nous pour recevoir un export de
                    vos données techniques (cookies, logs)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">2. Droit de Rectification (Article 16 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez demander la correction de données inexactes. Cependant :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Les transactions blockchain sont immuables et ne peuvent être modifiées
                  </li>
                  <li>
                    Si vous avez fourni des informations au support, vous pouvez les corriger
                  </li>
                  <li>
                    Les préférences du site web (langue, thème) peuvent être modifiées directement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">3. Droit à l'Effacement - "Droit à l'Oubli" (Article 17 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez demander la suppression de vos données dans certaines conditions :
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground font-semibold mb-1">Ce qui peut être supprimé :</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cookies et données de navigation du site web</li>
                      <li>Logs serveur et données d'analytics</li>
                      <li>Correspondances avec le support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Ce qui NE peut PAS être supprimé :</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Transactions enregistrées sur la blockchain Ethereum</li>
                      <li>Votre adresse wallet publique</li>
                      <li>Historique des achats de tickets et des gains</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">4. Droit à la Limitation du Traitement (Article 18 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez demander que le traitement de vos données soit limité. Pour BlockLucky :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Déconnectez votre wallet pour cesser toute interaction</li>
                  <li>Désactivez les cookies dans votre navigateur</li>
                  <li>Demandez l'arrêt du traitement des données non-blockchain</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">5. Droit à la Portabilité (Article 20 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous avez le droit de recevoir vos données dans un format structuré et lisible :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Export des données blockchain via Etherscan (format JSON/CSV)</li>
                  <li>Votre wallet contient déjà toutes vos clés et données</li>
                  <li>Les données peuvent être transférées vers d'autres services compatibles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">6. Droit d'Opposition (Article 21 RGPD)</h3>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez vous opposer au traitement de vos données :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Opposition au marketing : BlockLucky n'envoie pas d'emails marketing</li>
                  <li>Opposition aux cookies : Désactivez-les dans votre navigateur</li>
                  <li>Opposition au profiling : Nous ne créons pas de profils utilisateur</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">7. Décisions Automatisées et Profilage (Article 22 RGPD)</h3>
                <p className="text-muted-foreground">
                  BlockLucky utilise des smart contracts qui exécutent des décisions automatiques
                  (tirages au sort, distribution des gains). Cependant, ces décisions sont basées
                  sur des règles transparentes et vérifiables dans le code du contrat. Aucun
                  profilage personnel n'est effectué.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Comment Exercer Vos Droits</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Procédure de Demande</h3>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                  <li>
                    <strong>Identifiez vos données :</strong> Déterminez quelles données vous
                    concernent (blockchain vs site web)
                  </li>
                  <li>
                    <strong>Formulez votre demande :</strong> Soyez précis sur le droit que vous
                    souhaitez exercer
                  </li>
                  <li>
                    <strong>Vérification d'identité :</strong> Nous pouvons demander une preuve
                    que vous contrôlez l'adresse wallet concernée
                  </li>
                  <li>
                    <strong>Délai de réponse :</strong> Nous répondons sous 30 jours maximum
                  </li>
                  <li>
                    <strong>Gratuité :</strong> L'exercice de vos droits est gratuit (sauf demandes
                    manifestement excessives)
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Base Légale du Traitement</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Nous traitons vos données sur les bases légales suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Consentement :</strong> En connectant votre wallet, vous consentez au
                    traitement
                  </li>
                  <li>
                    <strong>Exécution d'un contrat :</strong> Le smart contract nécessite vos données
                    pour fonctionner
                  </li>
                  <li>
                    <strong>Intérêt légitime :</strong> Sécurité, prévention de la fraude, amélioration
                    du service
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> Conservation de certaines données pour
                    conformité fiscale
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Droit de Réclamation</h2>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Si vous estimez que vos droits n'ont pas été respectés, vous pouvez :
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Nous contacter directement pour résoudre le problème</li>
                  <li>Déposer une réclamation auprès de la CNIL (France) ou votre autorité nationale</li>
                  <li>Exercer un recours juridictionnel</li>
                </ol>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-1">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                  <p className="text-sm text-muted-foreground">
                    3 Place de Fontenoy<br />
                    TSA 80715<br />
                    75334 PARIS CEDEX 07<br />
                    Téléphone : +33 1 53 73 22 22<br />
                    Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Note Importante sur la Blockchain</h3>
              <p className="text-muted-foreground">
                La blockchain Ethereum est une technologie décentralisée où aucune entité unique ne
                contrôle les données. Les transactions sont répliquées sur des milliers de nœuds
                indépendants à travers le monde. Cette architecture rend impossible la suppression
                ou modification des données blockchain, ce qui peut entrer en conflit avec certains
                principes du RGPD comme le droit à l'effacement. En utilisant BlockLucky, vous
                reconnaissez et acceptez cette limitation inhérente à la technologie blockchain.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
