import { Card } from "@/components/ui/card";
import { Leaf, RefreshCw } from "lucide-react";

const WhatIsCropRotation = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">The Basics</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What is Crop Rotation?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crop rotation is the practice of growing different types of crops in the same area 
              across sequential seasons. This time-tested agricultural technique has been used for 
              thousands of years to maintain soil health and optimize crop yields.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of depleting the soil by growing the same crop repeatedly, farmers alternate 
              between crops with different nutrient needs and root structures, creating a natural 
              balance that benefits both the land and the harvest.
            </p>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-[var(--shadow-soft)]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">The Cycle</h3>
                  <p className="text-sm text-muted-foreground">Continuous improvement through diversity</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Year 1: Legumes</h4>
                    <p className="text-sm text-muted-foreground">Fix nitrogen in the soil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Year 2: Leafy Greens</h4>
                    <p className="text-sm text-muted-foreground">Use nitrogen from previous crop</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Year 3: Root Vegetables</h4>
                    <p className="text-sm text-muted-foreground">Break up soil with deep roots</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/60 text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Year 4: Grains</h4>
                    <p className="text-sm text-muted-foreground">Complete the cycle</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCropRotation;
