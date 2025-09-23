import { ArrowRight, Thermometer, Zap, Shield, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';
import { Badge } from '@/components/ui/badge';
import displayCabinets from '@/assets/display-cabinets.jpg';
import commercialRefrigeration from '@/assets/commercial-refrigeration.jpg';
import professionalKitchenEquipment from '@/assets/professional-kitchen-equipment.jpg';

export const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  // Fallback products for when database is empty
  const fallbackProducts = [
    {
      title: 'Display Cabinets',
      description: 'Premium glass-door display cabinets with LED lighting and precision temperature control for showcasing gourmet products.',
      image: displayCabinets,
      features: ['LED Interior Lighting', 'Energy Star Certified', 'Glass Door Design'],
      icon: Thermometer,
    },
    {
      title: 'Commercial Refrigeration',
      description: 'High-performance commercial refrigeration solutions for rapid cooling and freezing, essential for maintaining food quality and safety.',
      image: commercialRefrigeration,
      features: ['Rapid Cooling Technology', 'Digital Controls', 'Stainless Steel Construction'],
      icon: Zap,
    },
    {
      title: 'Professional Kitchen Equipment',
      description: 'Complete line of professional kitchen equipment designed for high-volume commercial operations with maximum efficiency.',
      image: professionalKitchenEquipment,
      features: ['Custom Sizing', 'Remote Monitoring', 'Eco-Friendly Design'],
      icon: Shield,
    },
  ];

  const getIconForCategory = (category: string | null) => {
    if (!category) return Package;
    
    if (category.toLowerCase().includes('display')) return Thermometer;
    if (category.toLowerCase().includes('refrigeration')) return Zap;
    if (category.toLowerCase().includes('kitchen')) return Shield;
    return Package;
  };

  if (isLoading) {
    return (
      <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
              Premium Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Loading our premium commercial refrigeration equipment...
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-premium p-8 animate-pulse">
                <div className="bg-secondary/20 h-64 rounded-xl mb-6"></div>
                <div className="bg-secondary/20 h-6 rounded mb-4"></div>
                <div className="bg-secondary/20 h-4 rounded mb-2"></div>
                <div className="bg-secondary/20 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const displayProducts = products && products.length > 0 ? products.slice(0, 3) : fallbackProducts;

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
          {displayProducts.map((product, index) => {
            // Handle both database products and fallback products
            const isDbProduct = 'id' in product;
            const productTitle = isDbProduct ? product.name : (product as any).title;
            const productDescription = isDbProduct ? product.description : (product as any).description;
            const productImage = isDbProduct ? (product.image || displayCabinets) : (product as any).image;
            const productFeatures = isDbProduct ? (product.features || []) : (product as any).features;
            const productBadge = isDbProduct ? product.badge : null;
            const IconComponent = isDbProduct ? getIconForCategory(product.category) : (product as any).icon;
            const productLink = isDbProduct ? `/product/${product.id}` : "/product-catalogue";
            
            return (
              <Link 
                key={isDbProduct ? product.id : index}
                to={productLink}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="block"
              >
                <div className="card-premium p-8 group cursor-pointer h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={productImage}
                      alt={productTitle}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badge */}
                    {productBadge && (
                      <div className="absolute top-4 right-4">
                        <Badge variant={productBadge === 'Best Seller' ? 'default' : 'secondary'}>
                          {productBadge}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{productTitle}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {productDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {productFeatures.slice(0, 3).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
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