
import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const locations = [
  {
    id: "kathmandu",
    name: "Kathmandu",
    nepaliName: "काठमाडौं",
    description: "Nepal's vibrant capital with a mix of ancient traditions and modern conveniences.",
    address: "Thamel, Kathmandu, Nepal",
    nepaliAddress: "तामेल, काठमाडौं, नेपाल",
    contact: "+977 9812345678",
    bikeCount: 45,
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2069&auto=format&fit=crop",
    hours: "9:00 AM - 6:00 PM"
  },
  {
    id: "pokhara",
    name: "Pokhara",
    nepaliName: "पोखरा",
    description: "A beautiful lakeside city, gateway to the Annapurna Circuit and other Himalayan treks.",
    address: "Lakeside, Pokhara, Nepal",
    nepaliAddress: "लेकसाइड, पोखरा, नेपाल",
    contact: "+977 9867891234",
    bikeCount: 32,
    image: "https://images.unsplash.com/photo-1583395745833-0ba9d7b33f1a?q=80&w=2070&auto=format&fit=crop",
    hours: "9:00 AM - 6:00 PM"
  },
  {
    id: "chitwan",
    name: "Chitwan",
    nepaliName: "चितवन",
    description: "Home to Chitwan National Park, offering jungle safaris and wildlife experiences.",
    address: "Sauraha, Chitwan, Nepal",
    nepaliAddress: "सौराहा, चितवन, नेपाल",
    contact: "+977 9854321098",
    bikeCount: 18,
    image: "https://images.unsplash.com/photo-1591268913196-6a236b87aaeb?q=80&w=2037&auto=format&fit=crop",
    hours: "9:00 AM - 5:00 PM"
  },
  {
    id: "lumbini",
    name: "Lumbini",
    nepaliName: "लुम्बिनी",
    description: "The birthplace of Buddha and a UNESCO World Heritage Site.",
    address: "Lumbini, Nepal",
    nepaliAddress: "लुम्बिनी, नेपाल",
    contact: "+977 9876543210",
    bikeCount: 12,
    image: "https://images.unsplash.com/photo-1558424057-58351f1d07f1?q=80&w=2070&auto=format&fit=crop",
    hours: "10:00 AM - 5:00 PM"
  },
];

const LocationsPage = () => {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-nepal-light py-12">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-nepal-secondary mb-4">
                Our Locations
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find Nepal Bike Rentals in major cities across Nepal. Each location offers a variety of bikes to suit your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div 
                  key={location.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col"
                >
                  <div className="h-48 relative">
                    <img 
                      src={location.image} 
                      alt={location.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 p-2">
                      <span className="location-badge flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {locale === 'ne' ? location.nepaliName : location.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold text-nepal-secondary mb-2">
                      {locale === 'ne' ? location.nepaliName : location.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{location.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Address:</p>
                        <p>{locale === 'ne' ? location.nepaliAddress : location.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact:</p>
                        <p>{location.contact}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Opening Hours:</p>
                        <p>{location.hours}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Available Bikes:</p>
                        <p>{location.bikeCount}</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-nepal-secondary hover:bg-nepal-secondary/90 w-full"
                      onClick={() => navigate(`/bikes?location=${locale === 'ne' ? location.nepaliName : location.name}`)}
                    >
                      {locale === 'ne' ? 'यो स्थानमा बाइकहरू हेर्नुहोस्' : 'View Bikes at this Location'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocationsPage;
