
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Bike } from "@/types/bike";
import { useLanguage } from "@/contexts/LanguageContext";

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Helper function to ensure we're working with strings
  const getTranslationAsString = (key: string): string => {
    const translation = t(key);
    return Array.isArray(translation) ? translation.join(", ") : translation;
  };

  return (
    <div className="bike-card">
      <div className="relative h-48">
        <img 
          src={bike.image_url} 
          alt={bike.name} 
          className="w-full h-full object-cover"
        />
        {!bike.is_available && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-medium">
            {getTranslationAsString('bikes.card.unavailable')}
          </div>
        )}
        <div className="absolute bottom-0 left-0 p-2">
          <span className="pricing-badge">
            रू {bike.price_per_day.toLocaleString()}
            {getTranslationAsString('bikes.card.per_day')}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-nepal-secondary">
            {bike.name}
          </h3>
          <span className="text-xs bg-nepal-mountain/10 text-nepal-mountain px-2 py-1 rounded">
            {bike.type}
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          {bike.location}
        </div>
        <Button 
          className="w-full bg-nepal-secondary hover:bg-nepal-secondary/90"
          onClick={() => navigate(`/bikes/${bike.id}`)}
          disabled={!bike.is_available}
        >
          {bike.is_available ? 
            getTranslationAsString('bikes.card.details') : 
            getTranslationAsString('bikes.card.unavailable')
          }
        </Button>
      </div>
    </div>
  );
}
