import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hotelKitchen1 from '@/assets/hotel-kitchen-1.jpg';
import restaurantChef2 from '@/assets/restaurant-chef-2.jpg';
import pastryKitchen3 from '@/assets/pastry-kitchen-3.jpg';
import banquetKitchen4 from '@/assets/banquet-kitchen-4.jpg';
import resortKitchen5 from '@/assets/resort-kitchen-5.jpg';

const ExperienceCenter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: hotelKitchen1,
      title: 'Premium Hotel Kitchen Solutions',
      description:
        'Professional chefs in luxury hotels rely on our commercial refrigeration systems for optimal food safety and efficiency',
    },
    {
      image: restaurantChef2,
      title: 'Fine Dining Excellence',
      description:
        'Executive chefs trust our display refrigerators to showcase premium ingredients while maintaining perfect temperatures',
    },
    {
      image: pastryKitchen3,
      title: 'Specialized Pastry Operations',
      description:
        'Modern pastry kitchens depend on our blast chillers and specialized refrigeration for delicate dessert preparation',
    },
    {
      image: banquetKitchen4,
      title: 'Large-Scale Event Catering',
      description:
        'Hotel banquet operations require our extensive refrigeration systems to handle high-volume food preparation safely',
    },
    {
      image: resortKitchen5,
      title: 'Five-Star Resort Kitchens',
      description:
        'Luxury resorts choose our premium refrigeration solutions to maintain the highest culinary standards for their guests',
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const resetSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetSlideshow();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetSlideshow();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetSlideshow();
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Visit Our Experience Center</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See our complete range of commercial refrigeration solutions in person. Book your personalized tour and discover the perfect system for your business.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Slideshow */}
          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-[400px] object-cover"
            />

            {/* Slide Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
              <h3 className="text-xl font-semibold">{slides[currentSlide].title}</h3>
              <p className="text-sm">{slides[currentSlide].description}</p>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
            >
              <ChevronRight className="text-white" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 pb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Box */}
          <div className="bg-muted p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Visit Our Experience Center?</h2>
            <p className="text-muted-foreground mb-4">
              Our experience center offers you the unique opportunity to explore our commercial refrigeration solutions in a real-world environment.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>View our entire range of refrigeration products in operation</li>
              <li>Consult with industry experts for personalized recommendations</li>
              <li>Compare models and features side by side</li>
              <li>Get hands-on training on maintenance and operation</li>
              <li>Experience the build quality and performance firsthand</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCenter;
