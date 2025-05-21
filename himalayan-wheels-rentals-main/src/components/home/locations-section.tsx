
import React from "react";
import { Container } from "@/components/ui/container";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    name: "काठमाडौं",
    englishName: "Kathmandu",
    bikeCount: 45,
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "पोखरा",
    englishName: "Pokhara",
    bikeCount: 32,
    image: "https://images.unsplash.com/photo-1583395745833-0ba9d7b33f1a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "चितवन",
    englishName: "Chitwan",
    bikeCount: 18,
    image: "https://images.unsplash.com/photo-1591268913196-6a236b87aaeb?q=80&w=2037&auto=format&fit=crop"
  }
];

export function LocationsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-nepal-light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nepal-secondary mb-4">
            <span className="nepali-text">हाम्रो स्थानहरू</span>
            <span className="block text-xl text-nepal-dark mt-2">(Our Locations)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have rental services across all major cities in Nepal, making it convenient for you to explore the beautiful landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md group"
              style={{ height: "280px" }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${location.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-nepal-accent" />
                  <h3 className="text-2xl font-bold">
                    <span className="nepali-text">{location.name}</span>
                    <span className="block text-sm opacity-80 mt-1">({location.englishName})</span>
                  </h3>
                </div>
                <p className="text-sm mb-4">{location.bikeCount} bikes available</p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white hover:bg-white/20 text-white"
                  onClick={() => navigate(`/locations/${location.englishName.toLowerCase()}`)}
                >
                  <span className="nepali-text">बाइकहरू हेर्नुहोस्</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/locations')}
            variant="outline"
            className="border-nepal-secondary text-nepal-secondary hover:bg-nepal-secondary hover:text-white"
          >
            <span className="nepali-text">सबै स्थानहरू हेर्नुहोस्</span>
            <span className="ml-2">(View All Locations)</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
