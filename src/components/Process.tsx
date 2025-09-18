import { Users, Building, Box, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export const Process = () => {
  const steps = [{
    step: '01',
    icon: Users,
    title: 'Meet Sales Consultant',
    description: 'Connect with our refrigeration experts who understand your specific industry needs and operational requirements.',
    features: ['Industry expertise', 'Personalized consultation', 'Needs assessment']
  }, {
    step: '02',
    icon: Building,
    title: 'Experience Center Walkthrough',
    description: 'Visit our state-of-the-art showroom to see, touch, and test our premium refrigeration solutions firsthand.',
    features: ['Live demonstrations', 'Product comparisons', 'Performance testing']
  }, {
    step: '03',
    icon: Box,
    title: 'Free 3D Layout Design',
    description: 'Our experts create a detailed 3D layout of your space, optimizing equipment placement for maximum efficiency.',
    features: ['Professional CAD design', 'Space optimization', 'Equipment integration']
  }, {
    step: '04',
    icon: Calculator,
    title: 'Instant Quote',
    description: 'Receive a comprehensive, transparent quote including equipment, installation, and ongoing support services.',
    features: ['Detailed pricing', 'Financing options', 'Service packages']
  }];
  return <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
            Your Path to Premium Refrigeration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final installation, we guide you through every step 
            of creating your perfect commercial refrigeration solution.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isLast = index === steps.length - 1;
          return <div key={index} className="relative">
                {/* Connection Line */}
                {!isLast && <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 transform translate-x-4 z-0"></div>}
                
                {/* Step Card */}
                <div className="relative z-10 card-premium p-8 text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </div>;
        })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-glaucous to-gunmetal rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your consultation today and discover how our premium refrigeration solutions 
            can transform your commercial kitchen operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center rounded-none bg-[#000a0e]/0">
            
            <Link 
              to="/experience-center"
              onClick={() => {
                // Small delay to allow navigation to complete
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
            >
              <Button size="lg" variant="outline" className="btn-premium text-lg px-8 py-6 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Visit Experience Center
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-white/80 text-sm">3D Layout Design</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24hrs</div>
              <div className="text-white/80 text-sm">Quote Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};