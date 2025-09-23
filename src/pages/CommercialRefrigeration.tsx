import { ArrowLeft, Snowflake, Thermometer, Timer, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import commercialRefrigeration from '@/assets/commercial-refrigeration.jpg';
import OneDoorCabinet from '@/assets/RC_OneFoorFV.png';
import blastChiller from '@/assets/blast-chiller.jpg';

const CommercialRefrigeration = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBadge, setActiveBadge] = useState<string>('All');
  
  const products = [
    {
      id: 1,
      name: 'One Door Cabinet',
      image: OneDoorCabinet ,
      price: 'na',
      description: 'Pre-fabricated walk-in cooler with insulated panels',
      features: ['3x7 foot size', 'Self-closing door', 'Digital controls', 'Energy efficient'],
      category: 'Refrigerated Cabinets',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Blast Chiller Cabinet',
      image: blastChiller,
      price: '$22,000',
      description: 'Rapid cooling technology for food safety compliance',
      features: ['Blast chill and freeze', 'Core probe monitoring', 'HACCP compliance', 'Stainless interior'],
      category: 'Blast Chillers',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Reach-in Freezer 3-Door',
      image: commercialRefrigeration,
      price: '$8,500',
      description: 'Heavy-duty three-door reach-in freezer',
      features: ['Three solid doors', 'Digital temperature display', 'Stainless steel', 'Energy star rated'],
      category: 'Reach-in Units'
    },
    {
      id: 4,
      name: 'Under-counter Refrigerator',
      image: blastChiller,
      price: '$3,200',
      description: 'Compact under-counter refrigeration unit',
      features: ['Space-saving design', 'Solid door', 'Adjustable shelving', 'Front ventilation'],
      category: 'Under-counter Units'
    },
    {
      id: 5,
      name: 'Wine Storage Cabinet',
      image: commercialRefrigeration,
      price: '$4,800',
      description: 'Temperature-controlled wine storage with dual zones',
      features: ['Dual temperature zones', 'UV-resistant glass', 'Vibration dampening', 'Humidity control'],
      category: 'Wine Storage',
      badge: 'Best Seller'
    },
    {
      id: 6,
      name: 'Freezer Room 10x12',
      image: blastChiller,
      price: '$28,500',
      description: 'Custom freezer room with advanced insulation',
      features: ['10x12 foot size', 'Heavy-duty flooring', 'Emergency release', 'Temperature monitoring'],
      category: 'Walk-in Freezers'
    },
    {
      id: 7,
      name: 'Prep Table Refrigerator',
      image: commercialRefrigeration,
      price: '$2,800',
      description: 'Refrigerated prep table with cutting surface',
      features: ['Stainless steel top', 'Refrigerated base', 'Storage drawers', 'Food pans included'],
      category: 'Prep Tables'
    },
    {
      id: 8,
      name: 'Glass Door Merchandiser',
      image: blastChiller,
      price: '$5,500',
      description: 'Glass door refrigerator for beverage display',
      features: ['Glass display doors', 'LED lighting', 'Digital controls', 'Lock system'],
      category: 'Merchandisers',
      badge: 'New'
    },
    {
      id: 9,
      name: 'Ice Storage Bin',
      image: commercialRefrigeration,
      price: '$1,800',
      description: 'Insulated ice storage with easy access',
      features: ['500 lb capacity', 'Insulated construction', 'Drain system', 'Easy loading'],
      category: 'Ice Storage'
    },
    {
      id: 10,
      name: 'Pharmacy Refrigerator',
      image: blastChiller,
      price: '$6,200',
      description: 'Medical-grade refrigerator for pharmaceutical storage',
      features: ['Precise temperature control', 'Alarm system', 'Data logging', 'Glass door'],
      category: 'Medical Refrigeration'
    },
    {
      id: 11,
      name: 'Keg Cooler Walk-in',
      image: commercialRefrigeration,
      price: '$18,000',
      description: 'Specialized walk-in cooler for keg storage',
      features: ['Keg-specific design', 'CO2 ventilation', 'Heavy-duty flooring', 'Easy access door'],
      category: 'Keg Coolers',
      badge: 'Best Seller'
    },
    {
      id: 12,
      name: 'Floral Display Cooler',
      image: blastChiller,
      price: '$4,500',
      description: 'Refrigerated display case for fresh flowers',
      features: ['Humidity control', 'Glass display', 'Adjustable shelving', 'Easy access'],
      category: 'Floral Coolers'
    },
    {
      id: 13,
      name: 'Meat Aging Cabinet',
      image: commercialRefrigeration,
      price: '$12,500',
      description: 'Controlled environment for meat aging process',
      features: ['Temperature and humidity control', 'Air circulation', 'UV lighting', 'Glass viewing'],
      category: 'Specialty Refrigeration'
    },
    {
      id: 14,
      name: 'Bakery Display Freezer',
      image: blastChiller,
      price: '$7,200',
      description: 'Frozen bakery product display case',
      features: ['Low temperature display', 'Curved glass', 'LED lighting', 'Easy loading'],
      category: 'Bakery Freezers'
    },
    {
      id: 15,
      name: 'Mortuary Refrigerator',
      image: commercialRefrigeration,
      price: '$25,000',
      description: 'Specialized refrigeration for mortuary use',
      features: ['Ultra-low temperature', 'Stainless construction', 'Secure access', 'Alarm system'],
      category: 'Mortuary Equipment'
    },
    {
      id: 16,
      name: 'Laboratory Freezer',
      image: blastChiller,
      price: '$8,500',
      description: 'Scientific-grade freezer for laboratory samples',
      features: ['Ultra-low temperature', 'Precise controls', 'Alarm system', 'Data recording'],
      category: 'Laboratory Equipment'
    },
    {
      id: 17,
      name: 'Ice Machine 500lb',
      image: commercialRefrigeration,
      price: '$4,200',
      description: 'High-capacity ice machine with storage',
      features: ['500 lb daily production', 'Energy efficient', 'Self-cleaning', 'Storage bin included'],
      category: 'Ice Machines',
      badge: 'New'
    },
    {
      id: 18,
      name: 'Combination Unit',
      image: blastChiller,
      price: '$9,800',
      description: 'Half freezer, half refrigerator combination unit',
      features: ['Dual temperature zones', 'Independent controls', 'Energy efficient', 'Space saving'],
      category: 'Combination Units'
    },
    {
      id: 19,
      name: 'Reach-in Cooler 2-Door',
      image: commercialRefrigeration,
      price: '$5,500',
      description: 'Two-door reach-in refrigerator for general storage',
      features: ['Two solid doors', 'Adjustable shelving', 'Digital display', 'Energy star rated'],
      category: 'Reach-in Units'
    },
    {
      id: 20,
      name: 'Shock Freezer Tunnel',
      image: blastChiller,
      price: '$45,000',
      description: 'Industrial shock freezing tunnel system',
      features: ['Continuous operation', 'Variable speed conveyor', 'Ultra-low temperature', 'High capacity'],
      category: 'Industrial Freezing'
    },
    {
      id: 21,
      name: 'Plate Freezer System',
      image: commercialRefrigeration,
      price: '$35,000',
      description: 'Horizontal plate freezer for seafood processing',
      features: ['Hydraulic plate system', 'Rapid freezing', 'Automated operation', 'Easy cleaning'],
      category: 'Plate Freezers',
      badge: 'Best Seller'
    },
    {
      id: 22,
      name: 'Spiral Freezer',
      image: blastChiller,
      price: '$125,000',
      description: 'High-capacity spiral freezing system',
      features: ['Continuous spiral design', 'High throughput', 'Energy efficient', 'Automated controls'],
      category: 'Spiral Freezers'
    },
    {
      id: 23,
      name: 'Refrigerated Truck Body',
      image: commercialRefrigeration,
      price: '$18,500',
      description: 'Insulated truck body for refrigerated transport',
      features: ['Heavy insulation', 'Reinforced construction', 'Multiple doors', 'Temperature monitoring'],
      category: 'Mobile Refrigeration'
    },
    {
      id: 24,
      name: 'Cold Storage Warehouse',
      image: blastChiller,
      price: '$250,000',
      description: 'Large-scale cold storage facility system',
      features: ['Industrial capacity', 'Zone control', 'Monitoring systems', 'Energy management'],
      category: 'Cold Storage'
    },
    {
      id: 25,
      name: 'Refrigerated Trailer',
      image: commercialRefrigeration,
      price: '$55,000',
      description: 'Mobile refrigerated trailer for transport',
      features: ['Tri-temperature zones', 'GPS tracking', 'Fuel efficient unit', 'Remote monitoring'],
      category: 'Mobile Refrigeration'
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];
  const badges = ['All', 'New', 'Best Seller'];
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const badgeMatch = activeBadge === 'All' || product.badge === activeBadge;
    return categoryMatch && badgeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/product-catalogue" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Product Catalogue
              </Link>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Snowflake className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
                  Commercial Refrigeration
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Walk-in coolers, freezers, and storage solutions for commercial kitchens. 
                  From compact under-counter units to large industrial systems, we provide reliable refrigeration.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Industrial Grade</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Food Safe</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Precise Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="space-y-4">
              {/* Category Filters */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">Categories</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    variant={activeCategory === 'All' ? 'default' : 'outline'} 
                    size="sm" 
                    className={activeCategory === 'All' ? 'btn-premium' : 'hover:bg-primary hover:text-primary-foreground'}
                    onClick={() => setActiveCategory('All')}
                  >
                    All ({products.length})
                  </Button>
                  {categories.map((category) => (
                    <Button 
                      key={category} 
                      variant={activeCategory === category ? 'default' : 'outline'} 
                      size="sm" 
                      className={activeCategory === category ? 'btn-premium' : 'hover:bg-primary hover:text-primary-foreground'}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category} ({products.filter(p => p.category === category).length})
                    </Button>
                  ))}
                </div>
              </div>

              {/* Badge Filters */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">Special Offers</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {badges.map((badge) => (
                    <Button 
                      key={badge} 
                      variant={activeBadge === badge ? 'default' : 'outline'} 
                      size="sm" 
                      className={activeBadge === badge ? 'btn-premium' : 'hover:bg-primary hover:text-primary-foreground'}
                      onClick={() => setActiveBadge(badge)}
                    >
                      {badge} {badge !== 'All' && `(${products.filter(p => p.badge === badge).length})`}
                      {badge === 'All' && `(${products.length})`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="block">
                    <div className="card-premium p-6 group hover:scale-105 transition-all duration-300 relative cursor-pointer">
                      {/* Badge on left side */}
                      {product.badge && (
                        <div className="absolute -top-2 -left-2 z-10">
                          <span className={`px-3 py-1 text-xs rounded-full font-medium shadow-lg ${
                            product.badge === 'New' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-orange-500 text-white'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                      )}
                      
                      {/* Product Image */}
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-3">
                        <Button size="sm" className="w-full btn-premium text-sm pointer-events-none">
                          View Details
                        </Button>
                      </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Custom Refrigeration?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our refrigeration experts can design and install custom cooling solutions for your specific requirements.
            </p>
            <Link to="/">
              <Button size="lg" className="btn-premium text-lg px-8 py-6" onClick={() => {
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }, 100);
              }}>
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialRefrigeration;