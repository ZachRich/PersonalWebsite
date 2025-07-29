import { Button } from "@/components/ui/button";
import SpaceBackground from "@/components/SpaceBackground";
import blackBackground from "@/assets/black-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SpaceBackground />
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-nebula-gradient opacity-15"></div>
        <img
          src={blackBackground}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold cosmic-text">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light cosmic-text">
            Navigating the digital cosmos, one commit at a time
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I explore the infinite possibilities of code, crafting stellar applications 
            and digital experiences that reach beyond the ordinary into the extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Universe
            </Button>
            <Button 
              variant="outline-glow" 
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Launch Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;