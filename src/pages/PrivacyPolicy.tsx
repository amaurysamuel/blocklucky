import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <ScrollArea className="h-[600px] pr-4">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky respecte votre vie privée et s'engage à protéger vos données personnelles.
                Cette politique de confidentialité explique quelles informations nous collectons,
                comment nous les utilisons, et quels sont vos droits concernant ces données.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Nature Décentralisée</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky fonctionne principalement sur la blockchain Ethereum. La blockchain est
                publique et transparente par nature. Toutes les transactions, y compris vos achats
                de tickets et vos gains, sont enregistrées de manière permanente et publique sur
                la blockchain. Ces données ne peuvent pas être supprimées ou modifiées.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Informations Collectées</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 Informations Blockchain</h3>
              <p className="text-muted-foreground mb-4">
                Nous n'avons pas besoin de collecter vos informations personnelles traditionnelles
                car BlockLucky fonctionne via des smart contracts. Cependant, les données suivantes
                sont publiquement enregistrées sur la blockchain :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Votre adresse wallet Ethereum</li>
                <li>Le nombre de tickets achetés</li>
                <li>Les montants des transactions</li>
                <li>Les horodatages des transactions</li>
                <li>Les gains reçus</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">3.2 Informations Techniques</h3>
              <p className="text-muted-foreground mb-4">
                Lors de votre utilisation du site web, nous pouvons collecter :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Pages visitées et temps passé</li>
                <li>Cookies techniques (si utilisés)</li>
                <li>Données d'interaction avec MetaMask</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Utilisation des Données</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons vos données pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Faciliter votre participation à la loterie</li>
                <li>Afficher votre solde et vos tickets</li>
                <li>Améliorer l'expérience utilisateur du site</li>
                <li>Analyser l'utilisation du service (statistiques anonymes)</li>
                <li>Détecter et prévenir les fraudes ou abus</li>
                <li>Respecter les obligations légales</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">5. Anonymat et Pseudonymat</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky ne vous demande pas de créer un compte avec un nom, email ou autres
                informations personnelles. Vous interagissez avec le service uniquement via votre
                adresse wallet Ethereum. Cependant, les adresses Ethereum sont pseudonymes, pas
                anonymes : toutes les transactions sont publiques et peuvent potentiellement être
                tracées.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Partage des Données</h2>
              <p className="text-muted-foreground mb-4">
                Nous ne vendons ni ne louons vos données personnelles. Les données blockchain sont
                par nature publiques et accessibles à tous. Nous pouvons partager des données dans
                les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Avec les fournisseurs de services techniques (hébergement, analytics)</li>
                <li>Si requis par la loi ou une autorité compétente</li>
                <li>Pour protéger nos droits légaux ou ceux d'autres utilisateurs</li>
                <li>En cas de fusion, acquisition ou vente d'actifs</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Sécurité des Données</h2>
              <p className="text-muted-foreground mb-6">
                La sécurité de la blockchain Ethereum protège vos transactions. Cependant, vous êtes
                responsable de la sécurité de votre wallet et de vos clés privées. Nous utilisons
                des mesures de sécurité standard pour protéger notre site web, mais aucun système
                n'est 100% sécurisé. Nous ne stockons pas vos clés privées et ne pouvons pas
                accéder à vos fonds.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Cookies et Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Nous utilisons des cookies essentiels pour le fonctionnement du site. Ces cookies
                peuvent inclure :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Cookies de session pour maintenir votre connexion wallet</li>
                <li>Cookies de préférence (thème sombre/clair, langue)</li>
                <li>Cookies analytiques pour comprendre l'utilisation du site</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais
                cela peut affecter le fonctionnement du site.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Vos Droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD (si applicable), vous avez le droit de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier les données inexactes</li>
                <li>Demander l'effacement de vos données (sauf données blockchain)</li>
                <li>Limiter le traitement de vos données</li>
                <li>Vous opposer au traitement</li>
                <li>Recevoir vos données dans un format structuré (portabilité)</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Note importante : Les données enregistrées sur la blockchain Ethereum ne peuvent
                pas être modifiées ou supprimées car elles font partie d'un registre immuable et
                décentralisé.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Conservation des Données</h2>
              <p className="text-muted-foreground mb-6">
                Les données sur la blockchain sont conservées indéfiniment car elles sont immuables.
                Les données techniques collectées via le site web (logs, analytics) sont conservées
                pendant une durée maximale de 24 mois, sauf obligation légale de conservation plus
                longue.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Transferts Internationaux</h2>
              <p className="text-muted-foreground mb-6">
                La blockchain Ethereum est un réseau mondial décentralisé. Vos données de transaction
                sont répliquées sur des milliers de nœuds à travers le monde. Le site web peut être
                hébergé dans différents pays. Nous prenons des mesures appropriées pour protéger vos
                données lors de ces transferts.
              </p>

              <h2 className="text-2xl font-bold mb-4">12. Mineurs (Personnes de Moins de 18 ans)</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky n'est pas destiné aux personnes de moins de 18 ans. Nous ne collectons
                pas sciemment de données personnelles de mineurs. Si vous êtes parent et découvrez
                que votre enfant a utilisé BlockLucky, veuillez nous contacter immédiatement.
              </p>

              <h2 className="text-2xl font-bold mb-4">13. Services Tiers</h2>
              <p className="text-muted-foreground mb-4">
                BlockLucky utilise des services tiers qui peuvent avoir leurs propres politiques
                de confidentialité :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>MetaMask et autres wallets Ethereum</li>
                <li>Le réseau Ethereum et les explorateurs de blockchain (Etherscan)</li>
                <li>Services d'hébergement web</li>
                <li>Fournisseurs de services d'analytics</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">14. Modifications de la Politique</h2>
              <p className="text-muted-foreground mb-6">
                Nous pouvons mettre à jour cette politique de confidentialité périodiquement pour
                refléter les changements dans nos pratiques ou la législation. Nous vous informerons
                des modifications importantes via le site web. La date de dernière mise à jour est
                indiquée en haut de cette page.
              </p>

              <h2 className="text-2xl font-bold mb-4">15. Contact et Réclamations</h2>
              <p className="text-muted-foreground mb-6">
                Pour toute question concernant cette politique de confidentialité ou pour exercer
                vos droits, vous pouvez nous contacter via les informations fournies sur le site.
                Vous avez également le droit de déposer une réclamation auprès de votre autorité
                de protection des données locale.
              </p>

              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  En utilisant BlockLucky, vous confirmez avoir lu et compris cette politique de
                  confidentialité et acceptez le traitement de vos données comme décrit ci-dessus.
                  Vous reconnaissez également la nature publique et immuable de la blockchain
                  Ethereum.
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
