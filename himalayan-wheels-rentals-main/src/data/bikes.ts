
import { Bike } from "@/types/bike";

export const featuredBikes: Bike[] = [
  {
    id: 1,
    name: "पल्सर १५०",
    type: "स्पोर्ट बाइक",
    price_per_day: 1500,
    image_url: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/47027/pulsar-150-right-front-three-quarter.jpeg?isig=0",
    location: "काठमाडौं",
    is_available: true,
    description: "A popular sport bike with great handling and power.",
    features: ["Disc Brakes", "Digital Console", "Tubeless Tires"],
    engine_size: "150cc",
    mileage: "45 kmpl"
  },
  {
    id: 2,
    name: "रॉयल एनफिल्ड हिमालयन",
    type: "एड्भेंचर",
    price_per_day: 3000,
    image_url: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/106865/himalayan-2022-right-front-three-quarter.jpeg?isig=0&q=80",
    location: "पोखरा",
    is_available: true,
    description: "Perfect for mountain adventures and long rides.",
    features: ["ABS", "Long Travel Suspension", "Digital Compass"],
    engine_size: "411cc",
    mileage: "30 kmpl"
  },
  {
    id: 3,
    name: "होण्डा शाइन",
    type: "कम्युटर",
    price_per_day: 1000,
    image_url: "https://bd.gaadicdn.com/processedimages/honda/shine-bs6/640X309/shine-bs6610c18b5d2eb9.jpg",
    location: "काठमाडौं",
    is_available: true,
    description: "Economical and reliable commuter bike.",
    features: ["Tubeless Tires", "Electric Start", "Comfortable Seat"],
    engine_size: "125cc",
    mileage: "60 kmpl"
  },
  {
    id: 4,
    name: "बजाज डोमिनर ४००",
    type: "स्पोर्ट टुअरर",
    price_per_day: 2500,
    image_url: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45215/dominar-400-right-front-three-quarter.jpeg?isig=0&q=80",
    location: "चितवन",
    is_available: true,
    description: "Powerful sports tourer for long distance riding.",
    features: ["Dual Channel ABS", "LED Headlamps", "Digital Instrument Cluster"],
    engine_size: "373cc",
    mileage: "25 kmpl"
  },
  {
    id: 5,
    name: "टीवीएस अपाचे आरटीआर १६०",
    type: "स्पोर्ट बाइक",
    price_per_day: 1800,
    image_url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/43085/tvs-apache-rtr-160-right-front-three-quarter-2.jpeg?q=80",
    location: "पोखरा",
    is_available: false,
    description: "Race inspired design with excellent performance.",
    features: ["Race Tuned Fuel Injection", "LED DRL", "Petal Disc Brakes"],
    engine_size: "160cc",
    mileage: "45 kmpl"
  },
  {
    id: 6,
    name: "होण्डा एक्टिवा ६जी",
    type: "स्कुटर",
    price_per_day: 800,
    image_url: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/48642/activa-6g-right-front-three-quarter-2.jpeg?isig=0",
    location: "काठमाडौं",
    is_available: true,
    description: "Easy to ride scooter suitable for city commuting.",
    features: ["Under-seat Storage", "Mobile Charging Socket", "Alloy Wheels"],
    engine_size: "110cc",
    mileage: "55 kmpl"
  },
  {
    id: 7,
    name: "केटीएम ३९० ड्युक",
    type: "स्पोर्ट नेकेड",
    price_per_day: 4000,
    image_url: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/ktm-390-duke-black-1548843019449.jpg?q=80",
    location: "काठमाडौं",
    is_available: true,
    description: "High-performance naked sports bike for thrill-seekers.",
    features: ["TFT Display", "Ride-by-Wire", "Slipper Clutch"],
    engine_size: "373cc",
    mileage: "25 kmpl"
  },
  {
    id: 8,
    name: "हिरो स्प्लेंडर प्लस",
    type: "कम्युटर",
    price_per_day: 700,
    image_url: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/104011/right-front-three-quarter.jpeg?isig=0&q=80",
    location: "चितवन",
    is_available: true,
    description: "The most fuel-efficient bike for daily commuting.",
    features: ["i3s Technology", "Tubeless Tires", "Alloy Wheels"],
    engine_size: "100cc",
    mileage: "70 kmpl"
  },
  {
    id: 9,
    name: "सुजुकी जिक्सर SF",
    type: "स्पोर्ट फेअरिंग",
    price_per_day: 2000,
    image_url: "https://www.suzukimotorcycle.co.in/uploads/images/slider/Website-banner-(Gixxer-SF-Fi-ABS).jpg",
    location: "पोखरा",
    is_available: false,
    description: "Stylish fully faired sport bike with excellent aerodynamics.",
    features: ["ABS", "LED Headlamp", "Split Seats"],
    engine_size: "155cc",
    mileage: "45 kmpl"
  }
];

export const allBikes: Bike[] = [...featuredBikes];
