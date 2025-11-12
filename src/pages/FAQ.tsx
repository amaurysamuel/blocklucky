import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Toutes les réponses à vos questions sur BlockLucky.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Qu'est-ce que BlockLucky ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                BlockLucky est une loterie décentralisée fonctionnant sur la blockchain Ethereum.
                Elle utilise des smart contracts pour garantir la transparence totale et l'équité
                de chaque tirage. Contrairement aux loteries traditionnelles, tout est vérifiable
                et automatisé.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Comment acheter des tickets ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pour acheter des tickets, vous devez d'abord connecter votre wallet MetaMask.
                Ensuite, cliquez sur "Acheter des Tickets", choisissez le nombre de tickets souhaités
                (minimum 1, maximum 100 par transaction), et confirmez la transaction. Chaque ticket
                coûte 0.01 ETH plus les frais de gas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Comment fonctionne le tirage au sort ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Le tirage est effectué par le smart contract en utilisant un générateur de nombres
                aléatoires basé sur le block hash Ethereum. Chaque participant a une chance de gagner
                proportionnelle au nombre de tickets qu'il possède. Le processus est entièrement
                transparent et vérifiable sur la blockchain.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Quand sont effectués les tirages ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Les tirages sont lancés par l'administrateur du contrat à des moments stratégiques,
                généralement lorsque le pot atteint un montant significatif ou à intervalles réguliers
                programmés. Vous serez informé à l'avance des dates de tirage prévues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Combien puis-je gagner ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Le gagnant reçoit 90% du pot total accumulé. Les 10% restants sont conservés pour
                démarrer le prochain tirage. Le pot actuel est toujours visible sur la page d'accueil.
                Si vous gagnez, les fonds sont automatiquement transférés vers votre wallet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Est-ce vraiment équitable ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Oui, absolument ! Le smart contract est open source et vérifiable. Le tirage utilise
                des données de la blockchain (block hash) qui ne peuvent pas être manipulées. Chaque
                transaction est enregistrée publiquement. Il n'y a aucun moyen de tricher ou de
                favoriser quelqu'un.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Quels sont les frais ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Le prix d'un ticket est fixé à 0.01 ETH. Il n'y a pas de frais supplémentaires de la
                part de BlockLucky. Vous devrez seulement payer les frais de gas Ethereum standard
                pour chaque transaction (achat de tickets). Ces frais varient selon la congestion du
                réseau.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Puis-je acheter des tickets pour quelqu'un d'autre ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Non, les tickets sont automatiquement attribués à l'adresse wallet qui effectue la
                transaction. Si vous gagnez, les fonds sont envoyés à cette même adresse. C'est une
                mesure de sécurité pour éviter les fraudes et garantir que chaque participant reçoit
                ses gains.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Que se passe-t-il si personne ne participe ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Un tirage nécessite au moins un participant. Si personne n'achète de tickets, le
                tirage est simplement reporté. Les fonds restent dans le smart contract et s'accumulent
                pour le prochain tirage, augmentant ainsi le pot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Comment puis-je vérifier les résultats ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tous les tirages passés sont enregistrés sur la blockchain Ethereum. Vous pouvez voir
                l'historique complet des gagnants sur notre page "Winners". Vous pouvez également
                vérifier chaque transaction sur Etherscan en utilisant l'adresse du smart contract.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                BlockLucky est-il légal ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                BlockLucky opère sur une blockchain décentralisée. La réglementation des loteries
                blockchain varie selon les juridictions. Il est de votre responsabilité de vérifier
                la légalité dans votre pays avant de participer. Nous vous encourageons à consulter
                nos conditions d'utilisation et votre législation locale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Que faire si je rencontre un problème technique ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Si vous rencontrez un problème, vérifiez d'abord que MetaMask est correctement
                connecté et sur le bon réseau (Ethereum Mainnet). Assurez-vous d'avoir suffisamment
                d'ETH pour les tickets et les frais de gas. Si le problème persiste, vérifiez les
                logs de transaction sur Etherscan ou contactez notre support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
