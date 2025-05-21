
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, MapPin, Check, ArrowLeft } from "lucide-react";
import { allBikes } from "@/data/bikes";
import { Bike } from "@/types/bike";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BikeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bike, setBike] = useState<Bike | null>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState<'start' | 'end'>('start');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary auth state

  useEffect(() => {
    if (id) {
      const foundBike = allBikes.find((b) => b.id === parseInt(id));
      setBike(foundBike || null);
    }
  }, [id]);

  const handleBookNow = () => {
    if (!isLoggedIn) {
      toast.error("Please log in to book a bike", {
        description: "You need to be logged in to make a booking."
      });
      return;
    }

    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates", {
        description: "You must select a date range for your booking."
      });
      return;
    }

    // In a real app, this would make a booking API request
    toast.success("Booking request submitted!", {
      description: `You've requested ${bike?.name} from ${format(startDate, "PPP")} to ${format(endDate, "PPP")}.`
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (currentSelection === 'start') {
      setStartDate(date);
      setCurrentSelection('end');
    } else {
      setEndDate(date);
      setIsCalendarOpen(false);
    }
  };

  const totalDays = startDate && endDate 
    ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;

  const totalPrice = bike && totalDays ? bike.price_per_day * totalDays : 0;

  if (!bike) {
    return (
      <>
        <Navbar />
        <Container className="py-12">
          <div className="text-center">
            <p className="text-2xl text-gray-600 mb-4">Bike not found</p>
            <Button 
              onClick={() => navigate('/bikes')}
              className="bg-nepal-secondary hover:bg-nepal-secondary/90"
            >
              Back to Bikes
            </Button>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Container className="py-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/bikes')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="nepali-text">सबै बाइकहरूमा फर्कनुहोस्</span>
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bike Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={bike.image_url} 
                alt={bike.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Bike Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-nepal-secondary">
                  <span className="nepali-text">{bike.name}</span>
                </h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-nepal-mountain/10 text-nepal-mountain">
                  <span className="nepali-text">{bike.type}</span>
                </span>
              </div>
              
              <div className="flex items-center text-gray-500 mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="nepali-text">{bike.location}</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between bg-nepal-light p-3 rounded mb-4">
                  <div>
                    <span className="block text-sm text-gray-500">Daily Rental Price</span>
                    <span className="text-2xl font-bold text-nepal-primary">
                      <span className="nepali-text">रू {bike.price_per_day.toLocaleString()}</span>
                    </span>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bike.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {bike.is_available ? 
                        <span className="nepali-text">उपलब्ध छ</span> : 
                        <span className="nepali-text">उपलब्ध छैन</span>
                      }
                    </span>
                  </div>
                </div>
                
                {bike.description && (
                  <p className="text-gray-600 mb-6">{bike.description}</p>
                )}
                
                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {bike.engine_size && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Engine Size</span>
                      <span className="font-medium">{bike.engine_size}</span>
                    </div>
                  )}
                  {bike.mileage && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Mileage</span>
                      <span className="font-medium">{bike.mileage}</span>
                    </div>
                  )}
                </div>
                
                {/* Features */}
                {bike.features && bike.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {bike.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-nepal-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Booking Section */}
              <div className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4">
                  <span className="nepali-text">बाइक बुक गर्नुहोस्</span>
                  <span className="block text-sm text-gray-500">(Book this bike)</span>
                </h3>
                
                <div className="mb-4">
                  <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate && endDate ? (
                          <>
                            {format(startDate, "PPP")} - {format(endDate, "PPP")}
                          </>
                        ) : (
                          <span>Select booking dates</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={currentSelection === 'start' ? startDate : endDate}
                        onSelect={handleDateSelect}
                        initialFocus
                        disabled={(date) => {
                          // Disable dates before today
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          if (date < today) return true;
                          
                          // When selecting end date, disable dates before start date
                          if (currentSelection === 'end' && startDate && date < startDate) {
                            return true;
                          }
                          
                          return false;
                        }}
                      />
                      <div className="p-3 border-t">
                        <div className="text-sm text-muted-foreground">
                          {currentSelection === 'start' ? 'Select start date' : 'Select end date'}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                
                {startDate && endDate && (
                  <div className="mb-4 bg-gray-50 p-3 rounded">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="font-medium">{totalDays} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Total Price:</span>
                      <span className="font-bold text-nepal-primary">
                        <span className="nepali-text">रू {totalPrice.toLocaleString()}</span>
                      </span>
                    </div>
                  </div>
                )}
                
                <Button 
                  className="w-full bg-nepal-primary hover:bg-nepal-primary/90"
                  disabled={!bike.is_available || !startDate || !endDate}
                  onClick={handleBookNow}
                >
                  <span className="nepali-text">अहिले बुक गर्नुहोस्</span>
                  <span className="ml-1">(Book Now)</span>
                </Button>
                
                {!isLoggedIn && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    <span className="nepali-text">बुक गर्न लगइन गर्नुहोस्</span>
                    <span className="ml-1">(Please login to book)</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default BikeDetailPage;
