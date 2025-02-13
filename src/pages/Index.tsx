
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import IndiaMap from "@/components/IndiaMap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { heroImages, resourcesData } from '@/data/constants';

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

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

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

      {/* Resources Section */}
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
              <div className="text-3xl font-bold">15,000+</div>
              <div>Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold">28 States</div>
              <div>Coverage</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
