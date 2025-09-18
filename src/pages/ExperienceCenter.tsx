import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import hotelKitchen1 from '@/assets/hotel-kitchen-1.jpg';
import restaurantChef2 from '@/assets/restaurant-chef-2.jpg';
import pastryKitchen3 from '@/assets/pastry-kitchen-3.jpg';
import banquetKitchen4 from '@/assets/banquet-kitchen-4.jpg';
import resortKitchen5 from '@/assets/resort-kitchen-5.jpg';

const ExperienceCenter = () => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferred_date: '',
    preferred_time: '',
    message: ''
  });

  // Slideshow images featuring hotels and chefs using our refrigeration products
  const slides = [
    {
      image: hotelKitchen1,
      title: 'Premium Hotel Kitchen Solutions',
      description: 'Professional chefs in luxury hotels rely on our commercial refrigeration systems for optimal food safety and efficiency'
    },
    {
      image: restaurantChef2,
      title: 'Fine Dining Excellence',
      description: 'Executive chefs trust our display refrigerators to showcase premium ingredients while maintaining perfect temperatures'
    },
    {
      image: pastryKitchen3,
      title: 'Specialized Pastry Operations',
      description: 'Modern pastry kitchens depend on our blast chillers and specialized refrigeration for delicate dessert preparation'
    },
    {
      image: banquetKitchen4,
      title: 'Large-Scale Event Catering',
      description: 'Hotel banquet operations require our extensive refrigeration systems to handle high-volume food preparation safely'
    },
    {
      image: resortKitchen5,
      title: 'Five-Star Resort Kitchens',
      description: 'Luxury resorts choose our premium refrigeration solutions to maintain the highest culinary standards for their guests'
    }
  ];

  // Auto-slideshow with 3 second interval
  useEffect(() => {
    const startSlideshow = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    };

    startSlideshow();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const resetSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.preferred_date || !formData.preferred_time) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('appointments')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Appointment booked successfully!",
        description: "We'll contact you within 24 hours to confirm your visit."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferred_date: '',
        preferred_time: '',
        message: ''
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast({
        title: "Booking failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-2 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-6">
          <div className="text-center mb-6">
            <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
              Visit Our Experience Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See our complete range of commercial refrigeration solutions in person. 
              Book your personalized tour and discover the perfect system for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Center Content - 2 Column Layout */}
      {/* Experience Center Content - 70/30 Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[70%_30%] gap-12">
            
            {/* Left Column - Image Slideshow */}
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-gunmetal/10">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
      
                {/* Slide Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
      
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
      
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
      
              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
      
            {/* Right Column - Experience Center Information */}
            <div className="space-y-8">
              <div className="card-premium p-8">
                <h2 className="text-2xl font-bold mb-4">Experience Our Solutions</h2>
                <p className="text-muted-foreground mb-6">
                  Visit our state-of-the-art experience center to see our complete range of commercial refrigeration solutions in action. Our expert team will guide you through personalized demonstrations tailored to your specific needs.
                </p>
      
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Live Product Demonstrations</h4>
                      <p className="text-sm text-muted-foreground">
                        See our refrigeration systems operating under real-world conditions
                      </p>
                    </div>
                  </div>
      
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Expert Consultation</h4>
                      <p className="text-sm text-muted-foreground">
                        Get personalized advice from our refrigeration specialists
                      </p>
                    </div>
                  </div>
      
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Custom Solutions Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Design the perfect refrigeration system for your business
                      </p>
                    </div>
                  </div>
      
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Hands-on Training</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn proper operation and maintenance techniques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>



      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Booking Form */}
            <div className="card-premium p-8">
              <h2 className="text-3xl font-bold mb-6">Book Your Visit</h2>
              <p className="text-muted-foreground mb-8">
                Schedule a personalized tour of our experience center and see our solutions in action.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <Input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                    <Input
                      type="time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific interests or requirements..."
                    rows={4}
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-premium text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Visit Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">ArcticPro Experience Center</p>
                  <p className="font-semibold">123 Innovation Drive</p>
                  <p className="font-semibold">New York, NY 10001</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>visit@arcticpro.com</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-gunmetal/10 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Guided tour of our complete product range</li>
                  <li>• Live demonstrations of key features</li>
                  <li>• Personalized consultation with our experts</li>
                  <li>• Custom solution design for your needs</li>
                  <li>• Refreshments and networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperienceCenter;