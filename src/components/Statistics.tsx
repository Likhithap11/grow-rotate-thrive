import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "30%",
    label: "Increase in Soil Organic Matter",
    description: "Over 3-5 years of consistent rotation"
  },
  {
    value: "50%",
    label: "Reduction in Pest Pressure",
    description: "Breaking pest life cycles naturally"
  },
  {
    value: "25%",
    label: "Improved Crop Yields",
    description: "Through optimized nutrient cycling"
  },
  {
    value: "40%",
    label: "Less Synthetic Fertilizer",
    description: "Natural nitrogen fixation at work"
  }
];

const Statistics = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research-backed benefits of implementing crop rotation practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center space-y-3 bg-card border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
