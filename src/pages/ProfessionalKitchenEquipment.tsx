import { ArrowLeft, ChefHat, Thermometer, Timer, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
import professionalKitchenEquipment from '@/assets/professional-kitchen-equipment.jpg';

const ProfessionalKitchenEquipment = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBadge, setActiveBadge] = useState<string>('All');
  
  const products = [
    {
      id: 1,
      name: 'Industrial Convection Oven',
      image: commercialKitchen,
      price: '$12,500',
      description: 'High-performance convection oven with digital controls and steam injection',
      features: ['Digital temperature control', 'Steam injection system', '6 rack capacity', 'Energy efficient'],
      category: 'Ovens',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Commercial Gas Range',
      image: professionalKitchenEquipment,
      price: '$8,900',
      description: 'Professional 6-burner gas range with griddle and double oven',
      features: ['6 high-BTU burners', 'Built-in griddle', 'Double oven', 'Heavy-duty construction'],
      category: 'Ranges',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Walk-in Blast Freezer',
      image: commercialKitchen,
      price: '$25,000',
      description: 'Rapid freezing technology for preserving food quality',
      features: ['Blast freezing capability', 'Digital monitoring', 'Stainless steel interior', 'Energy efficient'],
      category: 'Freezing'
    },
    {
      id: 4,
      name: 'Commercial Mixer 60Qt',
      image: professionalKitchenEquipment,
      price: '$3,500',
      description: 'Heavy-duty planetary mixer for high-volume production',
      features: ['60-quart capacity', 'Variable speed control', 'Bowl guard safety', 'Multiple attachments'],
      category: 'Mixers'
    },
    {
      id: 5,
      name: 'Combi Steamer Oven',
      image: commercialKitchen,
      price: '$18,500',
      description: 'Multi-function cooking with steam and convection capabilities',
      features: ['Steam and convection modes', 'Programmable recipes', 'Water filtration', 'Self-cleaning'],
      category: 'Ovens',
      badge: 'Best Seller'
    },
    {
      id: 6,
      name: 'Industrial Fryer Dual Basket',
      image: professionalKitchenEquipment,
      price: '$6,800',
      description: 'High-capacity dual basket fryer with oil filtration',
      features: ['Dual basket design', 'Oil filtration system', 'Digital controls', 'Energy efficient'],
      category: 'Fryers'
    },
    {
      id: 7,
      name: 'Commercial Dishwasher',
      image: commercialKitchen,
      price: '$4,200',
      description: 'High-temperature sanitizing dishwasher',
      features: ['High-temp sanitizing', 'Fast wash cycles', 'Chemical dispensing', 'Stainless construction'],
      category: 'Warewashing'
    },
    {
      id: 8,
      name: 'Professional Food Processor',
      image: professionalKitchenEquipment,
      price: '$2,800',
      description: 'Heavy-duty food processor for prep work',
      features: ['Large capacity bowl', 'Multiple cutting discs', 'Variable speeds', 'Safety interlocks'],
      category: 'Food Prep',
      badge: 'New'
    },
    {
      id: 9,
      name: 'Salamander Broiler',
      image: commercialKitchen,
      price: '$1,900',
      description: 'Overhead broiler for finishing and browning',
      features: ['Adjustable heat zones', 'Easy-clean design', 'Fast heating', 'Compact footprint'],
      category: 'Broilers'
    },
    {
      id: 10,
      name: 'Commercial Ice Machine',
      image: professionalKitchenEquipment,
      price: '$3,200',
      description: 'High-output ice machine with storage bin',
      features: ['500 lbs daily production', 'Self-cleaning cycle', 'Energy star rated', 'Antimicrobial protection'],
      category: 'Ice Equipment'
    },
    {
      id: 11,
      name: 'Tilting Braising Pan',
      image: commercialKitchen,
      price: '$15,600',
      description: 'Versatile tilting pan for braising, searing, and sautéing',
      features: ['40-gallon capacity', 'Tilting mechanism', 'Precise temperature control', 'Easy pour spout'],
      category: 'Cooking Equipment',
      badge: 'Best Seller'
    },
    {
      id: 12,
      name: 'Commercial Griddle 48"',
      image: professionalKitchenEquipment,
      price: '$4,500',
      description: 'Large flat-top griddle for high-volume cooking',
      features: ['48-inch cooking surface', 'Thermostatic controls', 'Grease management', 'Even heat distribution'],
      category: 'Griddles'
    },
    {
      id: 13,
      name: 'Vacuum Chamber Sealer',
      image: commercialKitchen,
      price: '$5,500',
      description: 'Professional vacuum sealing for food preservation',
      features: ['Chamber sealing technology', 'Digital controls', 'Multiple seal bars', 'Oil pump system'],
      category: 'Food Packaging'
    },
    {
      id: 14,
      name: 'Commercial Smoker',
      image: professionalKitchenEquipment,
      price: '$8,200',
      description: 'Large capacity smoker for BBQ and specialty items',
      features: ['Digital temperature control', 'Multiple racks', 'Wood chip feeder', 'Insulated chamber'],
      category: 'Smoking Equipment'
    },
    {
      id: 15,
      name: 'Pasta Cooker Station',
      image: commercialKitchen,
      price: '$3,800',
      description: 'Dedicated pasta cooking station with baskets',
      features: ['Multiple cooking baskets', 'Automatic lift system', 'Temperature control', 'Water level indicator'],
      category: 'Specialty Cooking'
    },
    {
      id: 16,
      name: 'Commercial Dough Sheeter',
      image: professionalKitchenEquipment,
      price: '$6,500',
      description: 'Precision dough rolling for bakery operations',
      features: ['Adjustable thickness', 'Reversible operation', 'Food-grade rollers', 'Safety guards'],
      category: 'Bakery Equipment'
    },
    {
      id: 17,
      name: 'Blast Chiller Cabinet',
      image: commercialKitchen,
      price: '$12,800',
      description: 'Rapid cooling technology for food safety',
      features: ['Blast chill and freeze modes', 'Core probe monitoring', 'Programmable cycles', 'HACCP compliance'],
      category: 'Cooling Equipment',
      badge: 'New'
    },
    {
      id: 18,
      name: 'Commercial Coffee Machine',
      image: professionalKitchenEquipment,
      price: '$4,800',
      description: 'Professional espresso machine for café service',
      features: ['Dual boiler system', 'Steam wands', 'Programmable shots', 'Cup warmer'],
      category: 'Beverage Equipment'
    },
    {
      id: 19,
      name: 'Induction Cooktop Station',
      image: commercialKitchen,
      price: '$2,200',
      description: 'Energy-efficient induction cooking surface',
      features: ['Precise temperature control', 'Energy efficient', 'Easy to clean', 'Safety features'],
      category: 'Cooktops'
    },
    {
      id: 20,
      name: 'Commercial Meat Slicer',
      image: professionalKitchenEquipment,
      price: '$1,800',
      description: 'Precision slicing for deli and food prep',
      features: ['Adjustable slice thickness', 'Safety features', 'Easy cleaning', 'Non-slip base'],
      category: 'Food Prep'
    },
    {
      id: 21,
      name: 'Rotisserie Oven',
      image: commercialKitchen,
      price: '$7,500',
      description: 'Self-basting rotisserie for poultry and roasts',
      features: ['Multiple spit capacity', 'Glass viewing doors', 'Grease management', 'Timer controls'],
      category: 'Specialty Cooking'
    },
    {
      id: 22,
      name: 'Commercial Warmer Cabinet',
      image: professionalKitchenEquipment,
      price: '$2,400',
      description: 'Food holding cabinet with humidity control',
      features: ['Humidity control', 'Multiple shelves', 'Digital display', 'Insulated construction'],
      category: 'Food Holding'
    },
    {
      id: 23,
      name: 'Pressure Steamer',
      image: commercialKitchen,
      price: '$9,200',
      description: 'High-pressure steaming for fast cooking',
      features: ['Pressure cooking capability', 'Multiple compartments', 'Steam injection', 'Safety systems'],
      category: 'Steamers'
    },
    {
      id: 24,
      name: 'Commercial Proofing Cabinet',
      image: professionalKitchenEquipment,
      price: '$3,600',
      description: 'Controlled environment for dough proofing',
      features: ['Temperature and humidity control', 'Multiple shelves', 'Clear doors', 'Caster wheels'],
      category: 'Bakery Equipment'
    },
    {
      id: 25,
      name: 'Ultrasonic Cleaner',
      image: commercialKitchen,
      price: '$1,500',
      description: 'Precision cleaning for small parts and utensils',
      features: ['Ultrasonic cleaning', 'Digital timer', 'Heated tank', 'Stainless steel construction'],
      category: 'Cleaning Equipment'
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
                    <ChefHat className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
                  Professional Kitchen Equipment
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Complete kitchen setups and specialized equipment for professional kitchens, restaurants, 
                  and commercial food service operations. Built to handle high-volume cooking with precision and reliability.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Commercial Grade</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>NSF Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Energy Efficient</span>
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
                  <div key={product.id} className="card-premium p-6 group hover:scale-105 transition-all duration-300 relative">
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
                      <Button size="sm" className="w-full btn-premium text-sm">
                        Request Quote
                      </Button>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Choosing Equipment?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our kitchen design experts can help you select the right equipment for your specific needs and space requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="btn-premium text-lg px-8 py-6" onClick={() => {
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }, 100);
                }}>
                  Get Expert Consultation
                  <Timer className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfessionalKitchenEquipment;