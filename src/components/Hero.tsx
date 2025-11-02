import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/20 backdrop-blur-sm px-4 py-2 text-sm text-primary-foreground border border-card/30">
            <Sprout className="h-4 w-4" />
            <span>Sustainable Farming for a Better Tomorrow</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            The Power of
            <span className="block text-accent">Crop Rotation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Discover how this ancient practice is revolutionizing modern agriculture, 
            building healthier soil, and creating sustainable food systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-8"
              onClick={() => {
                document.getElementById('what-is-crop-rotation')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-card/10 backdrop-blur-sm border-card/40 text-primary-foreground hover:bg-card/20"
              onClick={() => {
                document.getElementById('benefits')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24" preserveAspectRatio="none">
          <path
            fill="hsl(var(--background))"
            d="M0,64 C360,96 720,96 1080,64 C1260,48 1380,32 1440,32 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
