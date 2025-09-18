import { ArrowLeft, ArrowRight, Thermometer, Zap, Shield, Snowflake, Wind, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import displayRefrigerator from '@/assets/display-refrigerator.jpg';
import blastChiller from '@/assets/blast-chiller.jpg';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
import hotelKitchen from '@/assets/hotel-kitchen-1.jpg';
import pastryKitchen from '@/assets/pastry-kitchen-3.jpg';
import banquetKitchen from '@/assets/banquet-kitchen-4.jpg';

const ProductCatalogue = () => {
  const categories = [
    {
      title: 'Display Refrigeration',
      description: 'Premium glass-door display cases for showcasing products',
      icon: Thermometer,
      products: [
        {
          name: 'Premium Glass Door Cooler',
          model: 'PGD-48',
          image: displayRefrigerator,
          specs: ['48" Width', 'LED Lighting', 'Digital Controls'],
          price: 'Starting at $3,200'
        },
        {
          name: 'Curved Glass Display Case',
          model: 'CGD-60',
          image: commercialKitchen,
          specs: ['60" Width', 'Curved Glass', 'Self-Defrost'],
          price: 'Starting at $4,800'
        }
      ]
    },
    {
      title: 'Blast Chillers',
      description: 'High-performance rapid cooling and freezing systems',
      icon: Zap,
      products: [
        {
          name: 'Commercial Blast Chiller',
          model: 'BC-120',
          image: blastChiller,
          specs: ['120 lbs capacity', 'Touch controls', 'HACCP compliant'],
          price: 'Starting at $12,500'
        },
        {
          name: 'Countertop Blast Chiller',
          model: 'BC-30',
          image: hotelKitchen,
          specs: ['30 lbs capacity', 'Compact design', 'Energy efficient'],
          price: 'Starting at $6,800'
        }
      ]
    },
    {
      title: 'Walk-in Solutions',
      description: 'Custom walk-in coolers and freezers for large operations',
      icon: Shield,
      products: [
        {
          name: 'Modular Walk-in Cooler',
          model: 'MWC-8x10',
          image: pastryKitchen,
          specs: ['8x10 ft', 'Modular panels', 'Remote refrigeration'],
          price: 'Starting at $8,900'
        },
        {
          name: 'Walk-in Freezer',
          model: 'MWF-6x8',
          image: banquetKitchen,
          specs: ['6x8 ft', 'Heavy duty', '-10°F to 0°F range'],
          price: 'Starting at $11,200'
        }
      ]
    },
    {
      title: 'Specialty Equipment',
      description: 'Specialized refrigeration for unique applications',
      icon: Settings,
      products: [
        {
          name: 'Wine Storage System',
          model: 'WS-200',
          image: displayRefrigerator,
          specs: ['200 bottle capacity', 'Dual zone', 'UV protection'],
          price: 'Starting at $5,500'
        },
        {
          name: 'Deli Case',
          model: 'DC-72',
          image: commercialKitchen,
          specs: ['72" Length', 'Curved glass', 'Marble base'],
          price: 'Starting at $7,200'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              
              <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
                Complete Product Catalogue
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Explore our comprehensive range of premium commercial refrigeration equipment 
                designed for professional kitchens and food service operations.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="mb-20 last:mb-0">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                      <p className="text-muted-foreground text-lg">{category.description}</p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="card-premium p-8 group">
                        {/* Product Image */}
                        <div className="relative mb-6 overflow-hidden rounded-xl">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                            <span className="text-sm font-medium text-primary">{product.model}</span>
                          </div>
                        </div>

                        {/* Product Info */}
                        <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                        
                        {/* Specifications */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                            Key Specifications
                          </h4>
                          <ul className="space-y-1">
                            {product.specs.map((spec, specIndex) => (
                              <li key={specIndex} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <p className="text-2xl font-bold text-primary">{product.price}</p>
                          </div>
                          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts can design and build custom refrigeration systems tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-premium text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Download Full Catalog (PDF)
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCatalogue;