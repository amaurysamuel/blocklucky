import { Sparkles, Github, Twitter, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xl font-bold">BlockLucky</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The first fully transparent blockchain lottery for EtherBay.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">About</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Contract</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Connect</h5>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 BlockLucky - EtherBay Municipality. All rights reserved.</p>
          <p className="mt-2">Built with transparency on Ethereum blockchain.</p>
        </div>
      </div>
    </footer>
  );
};
