
import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-section py-20 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Nepal Bike Rentals</span>
            <span className="block text-nepal-accent mt-2">Rent your dream Nepali bike — Anytime, Anywhere 🇳🇵</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore Nepal's beautiful landscapes on two wheels. Affordable, reliable motorcycle rentals across major cities in Nepal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-nepal-primary hover:bg-nepal-primary/90 text-white"
              onClick={() => navigate("/bikes")}
            >
              <span className="nepali-text">बाइकहरू हेर्नुहोस्</span>
              <span className="ml-2">(Browse Bikes)</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-nepal-secondary border-nepal-secondary hover:bg-nepal-light"
              onClick={() => navigate("/locations")}
            >
              <span className="nepali-text">स्थानहरू</span>
              <span className="ml-2">(Locations)</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
