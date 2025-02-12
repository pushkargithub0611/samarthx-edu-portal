import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import IndiaMap from "@/components/IndiaMap";
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stateCoordinates: { [key: string]: { lat: number; lng: number } } = {
  Maharashtra: { lat: 19.7515, lng: 75.7139 },
  Karnataka: { lat: 15.3173, lng: 75.7139 },
  Gujarat: { lat: 22.2587, lng: 71.1924 },
  Rajasthan: { lat: 27.0238, lng: 74.2179 },
  "Madhya Pradesh": { lat: 22.9734, lng: 78.6569 },
  "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
  Bihar: { lat: 25.0961, lng: 85.3131 },
  "West Bengal": { lat: 22.9868, lng: 87.8550 },
  "Tamil Nadu": { lat: 11.1271, lng: 78.6569 },
  Kerala: { lat: 10.8505, lng: 76.2711 },
  "Andhra Pradesh": { lat: 15.9129, lng: 79.7400 },
  Telangana: { lat: 17.1231, lng: 79.2088 },
  Odisha: { lat: 20.9517, lng: 85.0985 },
  Chhattisgarh: { lat: 21.2787, lng: 81.8661 },
  Punjab: { lat: 31.1471, lng: 75.3412 },
  Haryana: { lat: 29.0588, lng: 76.0856 }
};

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Empowering Schools",
    title: "Empowering Schools, Transforming Education",
    description: "AI-Driven, Governance-Connected, Future-Ready!"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Digital Collaboration",
    title: "Collaborative Learning",
    description: "Building the future of education together"
  },
  {
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    alt: "Indian Student Learning",
    title: "Connected Education",
    description: "From Intelligence to Impact – Transforming Education"
  },
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Student Technology",
    title: "AI-Driven Education",
    description: "Revolutionizing Learning with Advanced Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "SamarthX Quote",
    title: "SamarthX Vision",
    description: "\"Education is not just about learning, it's about transforming lives through technology\" - SamarthX"
  }
];

const newsData = [
  {
    title: "National Education Policy 2024 Updates",
    date: "March 15, 2024",
    category: "Policy Update",
    description: "New guidelines released for implementing NEP 2024 in schools across India. Focus on digital learning and AI integration."
  },
  {
    title: "CBSE Board Exam Schedule Released",
    date: "March 12, 2024",
    category: "Academic Calendar",
    description: "Central Board of Secondary Education announces exam dates for class 10th and 12th. New digital assessment methods introduced."
  },
  {
    title: "Smart Classroom Initiative Launch",
    date: "March 10, 2024",
    category: "Infrastructure",
    description: "Government launches nationwide smart classroom initiative. 10,000 schools to receive digital infrastructure upgrade."
  },
  {
    title: "Teacher Training Program 2024",
    date: "March 8, 2024",
    category: "Professional Development",
    description: "National program for upskilling 100,000 teachers in digital teaching methodologies announced."
  }
];

const notificationData = [
  {
    title: "School Registration Portal Open",
    date: "March 14, 2024",
    type: "Administrative"
  },
  {
    title: "Digital Library Access Available",
    date: "March 13, 2024",
    type: "Resource"
  },
  {
    title: "Parent-Teacher Meeting Schedule",
    date: "March 11, 2024",
    type: "Event"
  },
  {
    title: "Sports Day Registration",
    date: "March 9, 2024",
    type: "Event"
  },
  {
    title: "Summer Camp Programs",
    date: "March 7, 2024",
    type: "Activity"
  },
  {
    title: "Scholarship Applications",
    date: "March 5, 2024",
    type: "Academic"
  }
];

const Index = () => {
  const { toast } = useToast();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [api, setApi] = React.useState<any>(null);
  const [secondApi, setSecondApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (api && secondApi) {
      api.on('select', () => {
        secondApi.scrollTo(api.selectedScrollSnap());
      });
      secondApi.on('select', () => {
        api.scrollTo(secondApi.selectedScrollSnap());
      });
    }
  }, [api, secondApi]);

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Sent",
      description: "Our team will contact you shortly.",
    });
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold">Samarth</span>
                <span className="text-2xl font-bold text-[#F97316]">X</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Parents & Students</Button>
              <Button variant="ghost">Support</Button>
              <Button variant="ghost">Search</Button>
              <Button variant="outline">Login</Button>
              <Button>Get a Demo</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 space-x-6">
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Solutions</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Dashboards</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">SamarthX AI</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Documents Management</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Community & Support</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">About SamarthX</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#e8f3e8] py-8">
        <div className="container mx-auto px-2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="md:w-1/2">
              <Carousel setApi={setApi} className="max-w-[600px]">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                          {image.title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                          {image.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex space-x-2 mt-4">
                  <CarouselPrevious className="relative static" />
                  <CarouselNext className="relative static" />
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2">
              <Carousel setApi={setSecondApi} className="max-w-[600px]">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#fff3e0] py-4">
        <div className="container mx-auto px-2">
          <IndiaMap onStateSelect={handleStateSelect} selectedState={selectedState} />
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-around text-sm">
            <span>AI-Driven</span>
            <span>Employee | Attendance</span>
            <span>Student Performance</span>
            <span>Welfare & Incentives</span>
            <span>Infrastructure</span>
          </div>
        </div>
      </div>

      {/* News & Resources */}
      <section className="py-12 bg-[#ffe4e1]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Latest Updates</h3>
              <div className="space-y-4">
                {newsData.slice(0, 4).map((news, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold">{news.title}</CardTitle>
                        <span className="text-sm text-gray-500">{news.date}</span>
                      </div>
                      <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        {news.category}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{news.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">News and Notifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {notificationData.map((notification, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">{notification.title}</CardTitle>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{notification.date}</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                          {notification.type}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Carousel */}
      <section className="py-12 bg-[#fff8dc]">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-4">View More Resources</Button>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {Array(5).fill(null).map((_, i) => (
              <div key={i} className="flex-none w-64">
                <div className="bg-blue-500 h-36 rounded-lg"></div>
                <p className="mt-2 text-sm text-center">Resource {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#8b4513] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1.57 Million</div>
              <div>Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1.57 Million</div>
              <div>Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1.57 Million</div>
              <div>Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#4b0082] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-8">Trusted to power 1400+ institutions, multiple campuses, and systems</p>
          <div className="flex justify-center space-x-8">
            {/* Add partner logos here */}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">We're in this together.</h2>
                <p className="text-gray-600">
                  Let's discuss how Banner can drive innovation and successful outcomes for your entire institution.
                </p>
                <Button className="mt-4">Get a Live Demo</Button>
              </div>
            </div>
            <div className="bg-[#00008b] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Get a Demo.</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleDemoRequest();
              }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 rounded text-black"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 rounded text-black"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded text-black"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 rounded text-black"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="p-2 rounded text-black"
                    required
                  />
                  <input
                    type="text"
                    placeholder="School/District"
                    className="p-2 rounded text-black"
                    required
                  />
                </div>
                <Button type="submit" variant="outline" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
