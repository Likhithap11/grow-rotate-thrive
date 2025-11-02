import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Make a Difference?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Whether you're a farmer, student, or simply passionate about sustainable agriculture, 
              you can help spread awareness about the importance of crop rotation.
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
                <BookOpen className="mr-2 h-5 w-5" />
                Download Resources
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
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
