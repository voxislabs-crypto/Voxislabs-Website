export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/voxislabs-logo.png" alt="VoxisLabs Logo" className="h-8" />
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>VoxisLabs</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              An independent AI systems initiative building adaptive intelligence for human connection.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#platforms" className="text-muted-foreground hover:text-primary transition-colors">Platforms</a></li>
              <li><a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">Vision</a></li>
              <li><a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors">Philosophy</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@voxislabs.com" className="text-muted-foreground hover:text-primary transition-colors">hello@voxislabs.com</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Early Access</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            &copy; 2025 VoxisLabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
