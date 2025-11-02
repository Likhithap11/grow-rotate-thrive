import { Card } from "@/components/ui/card";
import { Heart, Shield, TrendingUp, Sprout, Bug, Droplet } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Soil Health",
    description: "Improves soil structure, increases organic matter, and maintains essential nutrients naturally.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Pest Control",
    description: "Disrupts pest and disease cycles by removing their preferred host crops each season.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Higher Yields",
    description: "Optimized nutrient availability and healthier soil lead to better crop production over time.",
    color: "text-accent"
  },
  {
    icon: Sprout,
    title: "Biodiversity",
    description: "Promotes diverse ecosystems with various beneficial insects and microorganisms.",
    color: "text-primary"
  },
  {
    icon: Bug,
    title: "Reduced Chemicals",
    description: "Less reliance on synthetic fertilizers and pesticides, creating safer food systems.",
    color: "text-secondary"
  },
  {
    icon: Droplet,
    title: "Water Retention",
    description: "Improved soil structure helps retain moisture, reducing irrigation needs and water waste.",
    color: "text-accent"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Crop Rotation Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The benefits extend far beyond just the farm, impacting our entire food system and environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="space-y-4">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${benefit.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
