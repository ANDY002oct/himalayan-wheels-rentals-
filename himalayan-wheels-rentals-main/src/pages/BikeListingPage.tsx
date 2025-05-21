
import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { BikeCard } from "@/components/bikes/bike-card";
import { allBikes } from "@/data/bikes";
import { Bike } from "@/types/bike";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

const BikeListingPage = () => {
  const { t } = useLanguage();
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Get unique locations and types
  const uniqueLocations = Array.from(new Set(allBikes.map(bike => bike.location)));
  const uniqueTypes = Array.from(new Set(allBikes.map(bike => bike.type)));

  // Filter bikes based on current filters
  const filteredBikes: Bike[] = allBikes.filter(bike => {
    // Filter by search query
    if (searchQuery && !bike.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by location
    if (selectedLocation !== "all" && bike.location !== selectedLocation) {
      return false;
    }
    
    // Filter by type
    if (selectedType !== "all" && bike.type !== selectedType) {
      return false;
    }
    
    // Filter by availability
    if (showAvailableOnly && !bike.is_available) {
      return false;
    }
    
    return true;
  });

  // Helper function to ensure we're working with strings
  const getTranslationAsString = (key: string): string => {
    const translation = t(key);
    return Array.isArray(translation) ? translation.join(", ") : translation;
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-nepal-light py-8 md:py-12">
          <Container>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-nepal-secondary mb-4">
                {getTranslationAsString('bikes.title')}
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {getTranslationAsString('bikes.subtitle')}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder={getTranslationAsString('bikes.filter.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={getTranslationAsString('bikes.filter.location')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{getTranslationAsString('bikes.filter.all_locations')}</SelectItem>
                    {uniqueLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={getTranslationAsString('bikes.filter.type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{getTranslationAsString('bikes.filter.all_types')}</SelectItem>
                    {uniqueTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox
                  id="availableOnly"
                  checked={showAvailableOnly}
                  onCheckedChange={(checked) => setShowAvailableOnly(checked as boolean)}
                />
                <Label htmlFor="availableOnly" className="text-sm text-gray-700">
                  {getTranslationAsString('bikes.filter.available_only')}
                </Label>
              </div>
            </div>

            {filteredBikes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredBikes.map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 mb-2">
                  {getTranslationAsString('bikes.no_results.title')}
                </p>
                <p className="text-gray-500">
                  {getTranslationAsString('bikes.no_results.subtitle')}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BikeListingPage;
