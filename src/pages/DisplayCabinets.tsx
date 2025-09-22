import { ArrowLeft, Eye, Snowflake, Zap, Shield, Award, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import displayCabinets from '@/assets/display-cabinets.jpg';
import displayRefrigerator from '@/assets/display-refrigerator.jpg';

const DisplayCabinets = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBadge, setActiveBadge] = useState<string>('All');
  
  const products = [
    {
      id: 1,
      name: 'Curved Glass Display Cabinet',
      image: displayCabinets,
      price: '$4,500',
      description: 'Premium curved glass refrigerated display case for pastries and desserts',
      features: ['Curved tempered glass', 'LED lighting', 'Digital temperature control', 'Humidity management'],
      category: 'Refrigerated Display',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Heated Food Display Warmer',
      image: displayRefrigerator,
      price: '$3,200',
      description: 'Self-service heated display cabinet for hot food items',
      features: ['Adjustable shelving', 'Humidity control', 'Sneeze guards', 'Easy access doors'],
      category: 'Heated Display',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Gelato Display Showcase',
      image: displayCabinets,
      price: '$6,800',
      description: 'Italian-style gelato display case with scooping wells',
      features: ['12 pan capacity', 'Curved glass front', 'LED accent lighting', 'Temperature display'],
      category: 'Gelato Display'
    },
    {
      id: 4,
      name: 'Bakery Tower Display',
      image: displayRefrigerator,
      price: '$2,800',
      description: 'Multi-tier rotating display for baked goods',
      features: ['5-tier rotating design', 'Ambient temperature', 'Removable trays', 'Easy loading'],
      category: 'Bakery Display'
    },
    {
      id: 5,
      name: 'Deli Meat Slicer Case',
      image: displayCabinets,
      price: '$5,500',
      description: 'Refrigerated deli display with integrated slicer',
      features: ['Built-in slicer', 'Refrigerated storage', 'Stainless steel construction', 'Safety features'],
      category: 'Deli Display',
      badge: 'Best Seller'
    },
    {
      id: 6,
      name: 'Chocolate Display Cooler',
      image: displayRefrigerator,
      price: '$4,200',
      description: 'Temperature-controlled chocolate display cabinet',
      features: ['Precise temperature control', 'Low humidity', 'UV-resistant glass', 'Anti-condensation'],
      category: 'Chocolate Display'
    },
    {
      id: 7,
      name: 'Sushi Display Refrigerator',
      image: displayCabinets,
      price: '$7,500',
      description: 'Specialized sushi display with precise temperature control',
      features: ['Ultra-low temperature', 'High humidity control', 'Stainless steel interior', 'LED lighting'],
      category: 'Sushi Display'
    },
    {
      id: 8,
      name: 'Wine Display Cabinet',
      image: displayRefrigerator,
      price: '$3,800',
      description: 'Temperature-controlled wine display with UV protection',
      features: ['Dual temperature zones', 'UV-resistant glass', 'Vibration dampening', 'LED strip lighting'],
      category: 'Wine Display',
      badge: 'New'
    },
    {
      id: 9,
      name: 'Salad Bar Display Cooler',
      image: displayCabinets,
      price: '$4,800',
      description: 'Open-top refrigerated salad bar with sneeze guards',
      features: ['Open-top design', 'Sneeze guard protection', 'Cold plate cooling', 'Drain system'],
      category: 'Salad Bar'
    },
    {
      id: 10,
      name: 'Pizza Display Warmer',
      image: displayRefrigerator,
      price: '$2,400',
      description: 'Heated pizza display case for slice service',
      features: ['Heated display shelves', 'Humidity retention', 'Easy access', 'Non-stick surfaces'],
      category: 'Pizza Display'
    },
    {
      id: 11,
      name: 'Sandwich Display Cooler',
      image: displayCabinets,
      price: '$3,600',
      description: 'Refrigerated sandwich and wrap display case',
      features: ['Multi-tier shelving', 'Sliding rear doors', 'LED lighting', 'Temperature monitoring'],
      category: 'Sandwich Display',
      badge: 'Best Seller'
    },
    {
      id: 12,
      name: 'Ice Cream Display Freezer',
      image: displayRefrigerator,
      price: '$8,200',
      description: 'Curved glass ice cream display freezer',
      features: ['Ultra-low temperature', 'Curved glass design', 'Scooping wells', 'LED accent lights'],
      category: 'Ice Cream Display'
    },
    {
      id: 13,
      name: 'Donut Display Case',
      image: displayCabinets,
      price: '$1,800',
      description: 'Clear acrylic donut display with tiered shelving',
      features: ['Acrylic construction', 'Tiered display', 'Easy access doors', 'Crumb tray'],
      category: 'Donut Display'
    },
    {
      id: 14,
      name: 'Cheese Display Cabinet',
      image: displayRefrigerator,
      price: '$5,200',
      description: 'Specialty cheese aging and display cabinet',
      features: ['Humidity control', 'Air circulation', 'Temperature zones', 'Wooden shelving'],
      category: 'Cheese Display'
    },
    {
      id: 15,
      name: 'Hot Dog Roller Display',
      image: displayCabinets,
      price: '$1,200',
      description: 'Heated roller display for hot dogs and sausages',
      features: ['Heated rollers', 'Sneeze guard', 'Condiment wells', 'Easy cleaning'],
      category: 'Hot Food Display'
    },
    {
      id: 16,
      name: 'Seafood Display Case',
      image: displayRefrigerator,
      price: '$6,500',
      description: 'Refrigerated seafood display with crushed ice system',
      features: ['Ice display bed', 'Drain system', 'Curved glass', 'Temperature control'],
      category: 'Seafood Display'
    },
    {
      id: 17,
      name: 'Popcorn Display Warmer',
      image: displayCabinets,
      price: '$950',
      description: 'Heated popcorn display with warming lights',
      features: ['Warming lights', 'Clear panels', 'Easy access', 'Removable trays'],
      category: 'Snack Display',
      badge: 'New'
    },
    {
      id: 18,
      name: 'Pretzel Display Warmer',
      image: displayRefrigerator,
      price: '$1,800',
      description: 'Heated pretzel display with humidity control',
      features: ['Heated display', 'Humidity control', 'Rotating racks', 'Easy loading'],
      category: 'Snack Display'
    },
    {
      id: 19,
      name: 'Coffee Cup Display Warmer',
      image: displayCabinets,
      price: '$650',
      description: 'Heated cup and lid dispenser with warming plate',
      features: ['Cup warming', 'Multiple size holders', 'Heated plate', 'Easy refilling'],
      category: 'Coffee Display'
    },
    {
      id: 20,
      name: 'Chicken Rotisserie Display',
      image: displayRefrigerator,
      price: '$4,500',
      description: 'Heated rotisserie chicken display cabinet',
      features: ['Heated display', 'Humidity retention', 'Easy access doors', 'Drip management'],
      category: 'Rotisserie Display'
    },
    {
      id: 21,
      name: 'Breakfast Pastry Display',
      image: displayCabinets,
      price: '$2,200',
      description: 'Ambient temperature pastry display with multiple tiers',
      features: ['Multi-tier design', 'Clear panels', 'Easy access', 'Crumb collection'],
      category: 'Pastry Display'
    },
    {
      id: 22,
      name: 'Smoothie Ingredient Display',
      image: displayRefrigerator,
      price: '$3,400',
      description: 'Refrigerated ingredient display for smoothie bars',
      features: ['Individual compartments', 'Clear lids', 'Refrigerated base', 'Easy serving'],
      category: 'Smoothie Display'
    },
    {
      id: 23,
      name: 'Candy Bulk Display Bins',
      image: displayCabinets,
      price: '$1,600',
      description: 'Self-serve candy display bins with scoops',
      features: ['Multiple compartments', 'Clear bins', 'Scoop holders', 'Easy refilling'],
      category: 'Candy Display'
    },
    {
      id: 24,
      name: 'Frozen Yogurt Display',
      image: displayRefrigerator,
      price: '$7,800',
      description: 'Soft-serve frozen yogurt display cabinet',
      features: ['Temperature control', 'Clear panels', 'Easy access', 'Drip management'],
      category: 'Frozen Yogurt Display'
    },
    {
      id: 25,
      name: 'Soup Display Warmer',
      image: displayCabinets,
      price: '$2,800',
      description: 'Heated soup display with ladle wells',
      features: ['Multiple soup wells', 'Temperature control', 'Ladle storage', 'Easy cleaning'],
      category: 'Soup Display'
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
                    <Eye className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
                  Display Cabinets
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Premium glass-door display cases and showcases for optimal product presentation. 
                  From heated food displays to refrigerated showcases, our collection enhances your product visibility.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Premium Glass</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Food Safe</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperature Control</span>
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
            <h2 className="text-3xl font-bold mb-6">Need Expert Consultation?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our display specialists can help you choose the perfect showcase solution for your business needs.
            </p>
            <Link to="/">
              <Button size="lg" className="btn-premium text-lg px-8 py-6" onClick={() => {
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }, 100);
              }}>
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DisplayCabinets;