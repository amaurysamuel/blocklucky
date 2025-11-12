import { Sparkles, Github, Twitter, FileText } from "lucide-react";
import { Link } from "react-router-dom";

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
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How it Works</Link></li>
              <li><Link to="/smart-contract" className="hover:text-foreground transition-colors">Smart Contract</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/legal" className="hover:text-foreground transition-colors">Legal Notices</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/gdpr" className="hover:text-foreground transition-colors">GDPR</Link></li>
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
