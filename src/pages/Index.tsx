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
import { Brain, Shield, ChartBar, Clock, GraduationCap } from "lucide-react";

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
    title: "Students from Delhi Public School Win National Science Competition 2024",
    date: "March 15, 2024",
    category: "EVENTS NEWS",
    description: "A team of young innovators from DPS created an AI-powered solution for sustainable agriculture, securing first place among 500 schools nationwide.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
  },
  {
    title: "Kendriya Vidyalaya launches 'Digital First' Learning Initiative",
    date: "March 12, 2024",
    category: "EVENTS NEWS",
    description: "Revolutionary program integrating AR/VR technology into classroom teaching begins across 50 KV schools, transforming traditional education methods.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    title: "Navodaya Vidyalaya Students Shine in International Olympiad",
    date: "March 10, 2024",
    category: "EVENTS NEWS",
    description: "Five students from JNV schools receive gold medals in International Mathematics Olympiad, marking a historic achievement for Indian education.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754"
  },
  {
    title: "Education Ministry Announces 'Smart School' Certification Program",
    date: "March 8, 2024",
    category: "LECTURE UPDATES",
    description: "New certification program launched to recognize schools implementing innovative teaching methods and digital infrastructure.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
  },
  {
    title: "Rural Schools Digital Transformation Initiative Launched",
    date: "March 6, 2024",
    category: "PROGRAM UPDATES",
    description: "Government launches comprehensive program to bring digital education tools and internet connectivity to 1000+ rural schools across India.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350"
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

const erpDomains = [
  {
    id: 1,
    title: "Connected Intelligence",
    subtitle: "Effortless Integration of Data & People",
    description: "Smart Schools, Seamless Intelligence – Unifying Data for a Brighter Future!",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Connecting Governance",
    subtitle: "Policy Meets Practice in Real Time",
    description: "From Policy to Progress – Bringing Governance to Every Classroom!",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    subtitle: "Smarter Decisions, Smarter Schools",
    description: "AI That Thinks Ahead – Actionable Insights for Smarter Education!",
    icon: ChartBar,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 4,
    title: "Manage Like Clockwork",
    subtitle: "Effortless Administration, Maximum Efficiency",
    description: "Effortless Operations, Maximum Impact – Your School, Streamlined to Perfection!",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    id: 5,
    title: "Engage and Motivate",
    subtitle: "Empowered Learning, Inspired Growth",
    description: "Engage, Empower, Excel – Preparing Students for a Future Without Limits!",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const resourcesData = [
  {
    title: "AI in Education Guide",
    description: "Comprehensive guide for implementing AI in schools",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Guide"
  },
  {
    title: "Digital Assessment Tools",
    description: "Best practices for online student evaluation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Tools"
  },
  {
    title: "Smart Classroom Setup",
    description: "Technical guide for modern classroom infrastructure",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Infrastructure"
  },
  {
    title: "Data Analytics Workshop",
    description: "Learn to leverage educational data insights",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Workshop"
  },
  {
    title: "Parent Portal Guide",
    description: "Maximizing parent-school communication",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Guide"
  }
];

const Index = () => {
  const { toast } = useToast();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [api, setApi] = React.useState<any>(null);
  const [secondApi, setSecondApi] = React.useState<any>(null);
  const [selectedDomain, setSelectedDomain] = useState(erpDomains[0]);

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
      <section className="bg-[#D3E4FD] py-8">
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
      <section className="bg-[#FDE1D3] py-4">
        <div className="container mx-auto px-2">
          <IndiaMap onStateSelect={handleStateSelect} selectedState={selectedState} />
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
              {erpDomains.map((domain) => (
                <Button
                  key={domain.id}
                  variant={selectedDomain.id === domain.id ? "secondary" : "ghost"}
                  className={`flex-shrink-0 min-w-[200px] h-24 flex flex-col items-center justify-center gap-2 text-white hover:bg-white/20 ${
                    selectedDomain.id === domain.id ? "bg-white/20" : ""
                  }`}
                  onClick={() => setSelectedDomain(domain)}
                >
                  <domain.icon className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-semibold whitespace-nowrap">{domain.title}</div>
                    <div className="text-xs opacity-80 whitespace-nowrap">{domain.subtitle}</div>
                  </div>
                </Button>
              ))}
            </div>
            
            <div className="w-full">
              <div className="bg-white/10 rounded-lg p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedDomain.title}
                  </h3>
                  <p className="text-lg text-white/90">
                    {selectedDomain.description}
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg transition-all duration-500">
                  <img
                    src={selectedDomain.image}
                    alt={selectedDomain.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold text-purple-900">News & Updates</h2>
              <Button variant="link" className="text-gray-400">
                View All Updates
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured News */}
              <div>
                <div className="relative">
                  <img 
                    src={newsData[0].image}
                    alt={newsData[0].title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <div className="text-white">
                      <span className="text-sm font-medium mb-2 inline-block">{newsData[0].category}</span>
                      <h3 className="text-2xl font-semibold">{newsData[0].title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* News List */}
              <div className="space-y-6">
                {newsData.slice(1).map((news, index) => (
                  <div key={index} className="flex gap-4 group cursor-pointer">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-32 h-24 object-cover rounded"
                    />
                    <div>
                      <span className="text-sm text-gray-500 mb-1 inline-block">{news.category}</span>
                      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-purple-900 transition-colors">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Carousel */}
      <section className="py-12 bg-[#fff8dc]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Educational Resources</h2>
            <Button variant="outline" className="mb-4">View More Resources</Button>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-6">
            {resourcesData.map((resource, i) => (
              <div key={i} className="flex-none w-72">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-40">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
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
