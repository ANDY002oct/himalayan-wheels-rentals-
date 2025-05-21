
import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedBikes } from "@/components/home/featured-bikes";
import { HowItWorks } from "@/components/home/how-it-works";
import { LocationsSection } from "@/components/home/locations-section";
import { Testimonials } from "@/components/home/testimonials";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedBikes />
        <HowItWorks />
        <LocationsSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Index;
