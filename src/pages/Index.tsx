import Hero from "@/components/Hero";
import WhatIsCropRotation from "@/components/WhatIsCropRotation";
import Benefits from "@/components/Benefits";
import Statistics from "@/components/Statistics";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsCropRotation />
      <Benefits />
      <Statistics />
      <CallToAction />
      
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Crop Rotation Awareness. Building sustainable futures through better farming practices.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
