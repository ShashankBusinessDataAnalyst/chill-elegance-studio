import { ArrowRight, Snowflake, Zap, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Snowflake className="h-4 w-4 text-white" />
              <span className="text-white/90 font-medium">Premium Commercial Refrigeration</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-premium text-5xl lg:text-7xl text-white mb-6">
              Efficient Cooling,
              <span className="block text-transparent bg-gradient-to-r from-white to-white/70 bg-clip-text">
                Sustainable Future
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Premium eco-friendly refrigeration solutions for upscale restaurants, 
              luxury hotels, and gourmet food retailers. Experience unmatched efficiency 
              and sophisticated design.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-white" />
                <span className="text-white/90 text-sm font-medium">High-Efficiency</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Leaf className="h-4 w-4 text-white" />
                <span className="text-white/90 text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="btn-premium text-lg px-8 py-6">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-premium text-lg px-8 py-6 border-white/20 text-white hover:opacity-80"
              >
                Request Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-premium)]">
              <img
                src={commercialKitchen}
                alt="Premium commercial refrigeration units in luxury kitchen"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-large)]">
              <div className="text-3xl font-bold text-primary mb-1">30+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-large)]">
              <div className="text-3xl font-bold text-primary mb-1">99%</div>
              <div className="text-sm text-muted-foreground">Efficiency Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
