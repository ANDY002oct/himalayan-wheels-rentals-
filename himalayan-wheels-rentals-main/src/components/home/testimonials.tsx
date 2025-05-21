
import React from "react";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "राजेश श्रेष्ठ",
    englishName: "Rajesh Shrestha",
    location: "काठमाडौं",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Nepal Bike Rentals ले मलाई काठमाडौंको यात्रामा अद्भुत अनुभव दिए। बाइकहरू उत्कृष्ट अवस्थामा थिए र प्रक्रिया सजिलो थियो।",
    englishQuote: "Nepal Bike Rentals gave me an amazing experience for my trip around Kathmandu. The bikes were in excellent condition and the process was easy."
  },
  {
    name: "सुष्मिता थापा",
    englishName: "Sushmita Thapa",
    location: "पोखरा",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "हामीले पोखरा घुम्नको लागि बाइक भाडामा लियौं र यो हाम्रो यात्राको हाइलाइट थियो! म निश्चित रूपमा सिफारिस गर्दछु।",
    englishQuote: "We rented bikes to explore Pokhara and it was the highlight of our trip! I definitely recommend it."
  },
  {
    name: "डेविड स्मिथ",
    englishName: "David Smith",
    location: "USA",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "As a tourist, I was worried about renting a bike in Nepal, but Nepal Bike Rentals made it incredibly easy. Great service and well-maintained bikes!",
    englishQuote: "As a tourist, I was worried about renting a bike in Nepal, but Nepal Bike Rentals made it incredibly easy. Great service and well-maintained bikes!"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-nepal-secondary mb-4">
            <span className="nepali-text">ग्राहकको अनुभव</span>
            <span className="block text-xl text-nepal-dark mt-2">(Customer Testimonials)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Nepal Bike Rentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-nepal-secondary">
                    <span className="nepali-text">{testimonial.name}</span>
                    {testimonial.name !== testimonial.englishName && (
                      <span className="block text-xs text-gray-500 mt-0.5">({testimonial.englishName})</span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <svg className="h-5 w-5 text-nepal-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-3 nepali-text">
                {testimonial.quote}
              </p>
              {testimonial.quote !== testimonial.englishQuote && (
                <p className="text-gray-500 text-sm italic">
                  "{testimonial.englishQuote}"
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
