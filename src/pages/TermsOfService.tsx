import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Conditions d'Utilisation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <ScrollArea className="h-[600px] pr-4">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Acceptation des Conditions</h2>
              <p className="text-muted-foreground mb-6">
                En accédant et en utilisant BlockLucky, vous acceptez d'être lié par ces conditions
                d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce service.
                L'utilisation de BlockLucky implique votre accord avec toutes les clauses ci-dessous.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Description du Service</h2>
              <p className="text-muted-foreground mb-4">
                BlockLucky est une loterie décentralisée fonctionnant sur la blockchain Ethereum.
                Le service permet aux utilisateurs de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Acheter des tickets de loterie en utilisant de l'ETH</li>
                <li>Participer à des tirages au sort automatisés</li>
                <li>Recevoir des gains automatiquement via smart contract</li>
                <li>Vérifier l'historique des tirages et des gagnants</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Éligibilité</h2>
              <p className="text-muted-foreground mb-4">
                Pour utiliser BlockLucky, vous devez :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Avoir au moins 18 ans (ou l'âge légal dans votre juridiction)</li>
                <li>Avoir le droit légal de participer à des jeux d'argent dans votre pays</li>
                <li>Posséder un wallet Ethereum compatible (MetaMask recommandé)</li>
                <li>Avoir suffisamment d'ETH pour les tickets et les frais de transaction</li>
                <li>Accepter les risques associés aux transactions blockchain</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">4. Achat de Tickets</h2>
              <p className="text-muted-foreground mb-6">
                Le prix d'un ticket est fixé à 0.01 ETH. Vous pouvez acheter entre 1 et 100 tickets
                par transaction. Une fois une transaction confirmée sur la blockchain, elle est
                irréversible. Les tickets ne peuvent pas être remboursés, échangés ou transférés.
                Vous êtes responsable de vérifier le nombre de tickets et le montant avant de confirmer
                la transaction.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Tirages et Gains</h2>
              <p className="text-muted-foreground mb-4">
                Les tirages sont effectués par le smart contract de manière automatique et aléatoire.
                Le gagnant est sélectionné proportionnellement au nombre de tickets possédés.
                90% du pot total est versé au gagnant, 10% reste pour le prochain tirage.
              </p>
              <p className="text-muted-foreground mb-6">
                Si vous êtes désigné gagnant, les fonds seront automatiquement transférés vers votre
                wallet. BlockLucky ne prend aucune commission sur les gains. Vous êtes responsable
                de déclarer vos gains aux autorités fiscales si requis dans votre juridiction.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Sécurité du Wallet</h2>
              <p className="text-muted-foreground mb-6">
                Vous êtes seul responsable de la sécurité de votre wallet Ethereum. BlockLucky ne
                stocke pas vos clés privées et ne peut pas récupérer vos fonds en cas de perte.
                Nous vous recommandons fortement de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Sauvegarder votre phrase de récupération (seed phrase)</li>
                <li>Ne jamais partager vos clés privées</li>
                <li>Utiliser un wallet sécurisé comme MetaMask</li>
                <li>Vérifier l'URL du site avant de connecter votre wallet</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Frais de Transaction</h2>
              <p className="text-muted-foreground mb-6">
                Les transactions sur Ethereum nécessitent des frais de gas. Ces frais varient selon
                la congestion du réseau et ne sont pas contrôlés par BlockLucky. Vous êtes responsable
                de payer ces frais pour chaque transaction (achat de tickets, etc.). Ces frais ne sont
                pas remboursables même si la transaction échoue.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Risques et Limitations</h2>
              <p className="text-muted-foreground mb-4">
                En utilisant BlockLucky, vous reconnaissez et acceptez les risques suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Les transactions blockchain sont irréversibles</li>
                <li>La valeur de l'ETH peut fluctuer</li>
                <li>Des bugs dans le smart contract peuvent exister</li>
                <li>Le réseau Ethereum peut être congestionné ou inaccessible</li>
                <li>Aucune garantie de gain n'est fournie</li>
                <li>La réglementation peut changer</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">9. Conformité Légale</h2>
              <p className="text-muted-foreground mb-6">
                Vous êtes responsable de vous conformer aux lois et réglementations de votre
                juridiction concernant les jeux d'argent et les cryptomonnaies. BlockLucky ne garantit
                pas la légalité du service dans toutes les juridictions. Certains pays interdisent
                ou restreignent les loteries en ligne et l'utilisation de cryptomonnaies.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Jeu Responsable</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky encourage le jeu responsable. Ne jouez qu'avec de l'argent que vous pouvez
                vous permettre de perdre. Si vous ou quelqu'un que vous connaissez avez un problème
                de jeu compulsif, veuillez chercher de l'aide auprès d'organisations spécialisées.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Propriété Intellectuelle</h2>
              <p className="text-muted-foreground mb-6">
                Le nom "BlockLucky", le logo, et le design du site sont protégés par le droit d'auteur.
                Le code du smart contract est open source sous licence MIT. Vous ne pouvez pas utiliser
                notre marque ou notre contenu sans autorisation écrite préalable.
              </p>

              <h2 className="text-2xl font-bold mb-4">12. Limitation de Responsabilité</h2>
              <p className="text-muted-foreground mb-6">
                BlockLucky est fourni "tel quel" sans aucune garantie. Nous ne sommes pas responsables
                des pertes financières, dommages directs ou indirects, ou tout autre préjudice résultant
                de l'utilisation de notre service. Cela inclut mais ne se limite pas à : bugs du smart
                contract, hacks, erreurs de l'utilisateur, problèmes du réseau Ethereum, ou changements
                réglementaires.
              </p>

              <h2 className="text-2xl font-bold mb-4">13. Modifications des Conditions</h2>
              <p className="text-muted-foreground mb-6">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications
                seront effectives dès leur publication sur cette page. Votre utilisation continue du
                service après les modifications constitue votre acceptation des nouvelles conditions.
              </p>

              <h2 className="text-2xl font-bold mb-4">14. Résiliation</h2>
              <p className="text-muted-foreground mb-6">
                Nous nous réservons le droit de suspendre ou de terminer votre accès au service à tout
                moment, avec ou sans préavis, en cas de violation de ces conditions ou pour toute autre
                raison. Le smart contract continuera de fonctionner de manière autonome sur la blockchain.
              </p>

              <h2 className="text-2xl font-bold mb-4">15. Loi Applicable et Juridiction</h2>
              <p className="text-muted-foreground mb-6">
                Ces conditions sont régies par les lois applicables à la blockchain Ethereum et aux
                technologies décentralisées. Tout litige sera résolu selon les lois de votre juridiction
                locale, dans la mesure du possible.
              </p>

              <h2 className="text-2xl font-bold mb-4">16. Contact</h2>
              <p className="text-muted-foreground mb-6">
                Pour toute question concernant ces conditions d'utilisation, veuillez consulter notre
                page FAQ ou vérifier les informations sur la blockchain via l'adresse du smart contract.
              </p>

              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  En utilisant BlockLucky, vous confirmez avoir lu, compris et accepté ces conditions
                  d'utilisation dans leur intégralité. Si vous n'acceptez pas ces conditions, veuillez
                  ne pas utiliser ce service.
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

export default TermsOfService;
