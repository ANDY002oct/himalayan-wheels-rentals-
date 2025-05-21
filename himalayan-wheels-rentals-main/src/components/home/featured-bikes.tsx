
import React from "react";
import { Container } from "@/components/ui/container";
import { BikeCard } from "@/components/bikes/bike-card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { featuredBikes } from "@/data/bikes";

export function FeaturedBikes() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nepal-secondary mb-4">
            <span className="nepali-text">लोकप्रिय बाइकहरू</span>
            <span className="block text-xl text-nepal-dark mt-2">(Featured Bikes)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular motorcycles for rent in Nepal. From daily commute to mountain adventures, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredBikes.slice(0, 3).map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/bikes')}
            className="bg-nepal-secondary hover:bg-nepal-secondary/90"
          >
            <span className="nepali-text">सबै बाइकहरू हेर्नुहोस्</span>
            <span className="ml-2">(View All Bikes)</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
