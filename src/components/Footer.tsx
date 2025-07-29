const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Zach Rich
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Building innovative solutions and sharing knowledge with the developer community.
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Email
            </a>
          </div>
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 Zachary Rich. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;