import { ArrowRight, Thermometer, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import displayRefrigerator from '@/assets/display-refrigerator.jpg';
import blastChiller from '@/assets/blast-chiller.jpg';

export const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product-catalogue');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  const products = [
    {
      title: 'Display Refrigeration',
      description: 'Premium glass-door display cabinets with LED lighting and precision temperature control for showcasing gourmet products.',
      image: displayRefrigerator,
      features: ['LED Interior Lighting', 'Energy Star Certified', 'Glass Door Design'],
      icon: Thermometer,
    },
    {
      title: 'Blast Chillers',
      description: 'High-performance blast chillers for rapid cooling and freezing, essential for maintaining food quality and safety.',
      image: blastChiller,
      features: ['Rapid Cooling Technology', 'Digital Controls', 'Stainless Steel Construction'],
      icon: Zap,
    },
    {
      title: 'Cold Storage Solutions',
      description: 'Custom walk-in coolers and freezers designed for high-volume commercial operations with maximum efficiency.',
      image: displayRefrigerator, // Reusing image for demo
      features: ['Custom Sizing', 'Remote Monitoring', 'Eco-Friendly Refrigerants'],
      icon: Shield,
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
            Premium Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive lineup of high-efficiency commercial refrigeration 
            equipment designed for the most demanding professional kitchens.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="card-premium p-8 group">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <h3 
                      className="text-2xl font-bold mb-4 cursor-pointer hover:text-primary transition-colors duration-200"
                      onClick={handleProductClick}
                    >
                      Cabinets
                    </h3>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-sm font-semibold">{product.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="flex flex-col space-y-1 pt-2">
                        <span className="text-xs font-medium text-muted-foreground">Key Features:</span>
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="text-xs">• {feature}</span>
                        ))}
                      </div>
                      <div className="pt-2">
                        <span className="text-xs text-primary font-medium">Click to view full catalog →</span>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/product-catalogue"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          >
            <Button size="lg" className="btn-premium text-lg px-8 py-6">
              View Complete Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};