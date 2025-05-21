
import React from "react";
import { Container } from "@/components/ui/container";
import { Bike, Calendar, MapPin } from "lucide-react";

const steps = [
  {
    icon: <Bike className="h-10 w-10 text-nepal-primary" />,
    title: "बाइक छान्नुहोस्",
    englishTitle: "Choose a Bike",
    description: "Browse our extensive collection of motorcycles and pick the perfect one for your journey",
  },
  {
    icon: <Calendar className="h-10 w-10 text-nepal-primary" />,
    title: "मिति छान्नुहोस्",
    englishTitle: "Select Dates",
    description: "Choose your rental duration - whether it's for a few hours, days, or weeks",
  },
  {
    icon: <MapPin className="h-10 w-10 text-nepal-primary" />,
    title: "सवारी गर्नुहोस्",
    englishTitle: "Ride Away",
    description: "Pick up your bike from one of our convenient locations and enjoy your ride across Nepal",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nepal-secondary mb-4">
            <span className="nepali-text">कसरी काम गर्छ</span>
            <span className="block text-xl text-nepal-dark mt-2">(How It Works)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Renting a bike with Nepal Bike Rentals is quick and easy. Follow these simple steps to hit the road in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-nepal-light rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-nepal-secondary mb-2">
                <span className="nepali-text">{step.title}</span>
                <span className="block text-sm text-nepal-dark mt-1">({step.englishTitle})</span>
              </h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 text-nepal-primary text-2xl font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
