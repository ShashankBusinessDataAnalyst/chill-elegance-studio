import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Zap, Award, CheckCircle, Info, Wrench, Package, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
import professionalKitchenEquipment from '@/assets/professional-kitchen-equipment.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  
  // This would typically come from an API or database
  const products = [
    {
      id: 1,
      name: 'Industrial Convection Oven',
      image: commercialKitchen,
      price: '$12,500',
      description: 'High-performance convection oven with digital controls and steam injection',
      features: ['Digital temperature control', 'Steam injection system', '6 rack capacity', 'Energy efficient'],
      category: 'Ovens',
      badge: 'Best Seller',
      specifications: {
        dimensions: '36" W x 30" D x 42" H',
        weight: '450 lbs',
        power: '208V, 3-phase, 60Hz',
        capacity: '6 full-size sheet pans',
        temperature: '200°F - 500°F'
      },
      overview: {
        description: 'Our Industrial Convection Oven represents the pinnacle of commercial baking technology. Engineered for high-volume operations, this oven delivers consistent, even cooking results through advanced air circulation technology.',
        keyBenefits: [
          'Uniform heat distribution ensures consistent results',
          'Steam injection system for perfect bread and pastries',
          'Energy-efficient design reduces operating costs',
          'Digital controls with programmable recipes',
          'Self-cleaning cycle saves maintenance time'
        ]
      },
      design: {
        description: 'Crafted with both functionality and aesthetics in mind, this convection oven features a sleek stainless steel exterior that complements any professional kitchen environment.',
        designFeatures: [
          'Seamless stainless steel construction',
          'Double-paned glass doors with interior lighting',
          'Ergonomic handle design for easy operation',
          'Compact footprint maximizes kitchen space',
          'Modern digital display interface'
        ]
      },
      materials: {
        description: 'Built to withstand the rigors of commercial use, every component is selected for durability, food safety, and easy maintenance.',
        materialSpecs: [
          'Type 304 stainless steel interior and exterior',
          'Aluminized steel oven chamber',
          'High-temperature ceramic fiber insulation',
          'Tempered glass viewing windows',
          'Food-grade silicone door seals'
        ]
      },
      performance: {
        description: 'Engineered for exceptional performance in demanding commercial environments, delivering consistent results while maintaining energy efficiency.',
        performanceMetrics: [
          'Heat-up time: 15 minutes to 350°F',
          'Temperature accuracy: ±5°F throughout chamber',
          'Energy consumption: 15% below industry average',
          'Production capacity: 120 loaves per hour',
          'Recovery time: 3 minutes after door opening'
        ]
      }
    },
    {
      id: 2,
      name: 'Commercial Gas Range',
      image: professionalKitchenEquipment,
      price: '$8,900',
      description: 'Professional 6-burner gas range with griddle and double oven',
      features: ['6 high-BTU burners', 'Built-in griddle', 'Double oven', 'Heavy-duty construction'],
      category: 'Ranges',
      badge: 'New',
      specifications: {
        dimensions: '60" W x 32" D x 36" H',
        weight: '680 lbs',
        power: 'Natural Gas / LP Gas',
        capacity: '2 standard ovens',
        btu: '32,000 BTU per burner'
      },
      overview: {
        description: 'This professional gas range combines power, precision, and versatility to meet the demands of busy commercial kitchens. With six high-BTU burners and dual ovens, it delivers exceptional cooking performance.',
        keyBenefits: [
          'High-BTU burners for rapid heating',
          'Dual oven configuration for versatility',
          'Built-in griddle for additional cooking surface',
          'Heavy-duty construction for longevity',
          'Easy-to-clean design reduces maintenance'
        ]
      },
      design: {
        description: 'Designed for professional kitchens where performance meets durability. The sleek design incorporates practical features that enhance workflow efficiency.',
        designFeatures: [
          'Professional stainless steel construction',
          'Removable cast iron grates',
          'Integrated grease management system',
          'Pilot light safety system',
          'Adjustable leveling legs'
        ]
      },
      materials: {
        description: 'Constructed with premium materials to ensure longevity and optimal performance in high-volume commercial operations.',
        materialSpecs: [
          '430 stainless steel exterior finish',
          'Cast iron burner grates',
          'Stainless steel oven interior',
          'Porcelain enamel oven bottom',
          'Heavy-gauge steel construction'
        ]
      },
      performance: {
        description: 'Engineered to deliver consistent, powerful performance that professional chefs demand, with energy-efficient operation.',
        performanceMetrics: [
          'Burner output: 32,000 BTU each',
          'Oven temperature range: 250°F - 500°F',
          'Recovery time: 2 minutes after door opening',
          'Gas consumption: Optimized for efficiency',
          'Simultaneous cooking capacity: 12+ items'
        ]
      }
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <Link to="/professional-kitchen-equipment" className="text-primary hover:underline">
                Back to Products
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/professional-kitchen-equipment" className="hover:text-primary transition-colors">
                Professional Kitchen Equipment
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Header */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <Link 
              to="/professional-kitchen-equipment" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-secondary/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className={`${
                        product.badge === 'New' 
                          ? 'bg-green-500 text-white hover:bg-green-600' 
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                    </div>
                  </div>
                  <h1 className="heading-premium text-3xl lg:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <Badge variant="secondary" className="text-green-600 bg-green-50">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      In Stock
                    </Badge>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications Quick View */}
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{product.specifications.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Weight:</span>
                      <p className="font-medium">{product.specifications.weight}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Power:</span>
                      <p className="font-medium">{product.specifications.power}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Capacity:</span>
                      <p className="font-medium">{product.specifications.capacity}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-premium flex-1">
                    Request Quote
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Download Specs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-12 bg-secondary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Design
                </TabsTrigger>
                <TabsTrigger value="materials" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Materials
                </TabsTrigger>
                <TabsTrigger value="performance" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Performance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Product Overview
                    </CardTitle>
                    <CardDescription>
                      Comprehensive details about this professional kitchen equipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.overview.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {product.overview.keyBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="design">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Design & Construction
                    </CardTitle>
                    <CardDescription>
                      Engineering excellence meets functional design
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.design.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Design Features</h4>
                      <ul className="space-y-2">
                        {product.design.designFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Wrench className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="materials">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Materials & Build Quality
                    </CardTitle>
                    <CardDescription>
                      Premium materials for superior durability and food safety
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.materials.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Material Specifications</h4>
                      <ul className="space-y-2">
                        {product.materials.materialSpecs.map((spec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Performance Specifications
                    </CardTitle>
                    <CardDescription>
                      Technical performance data and operational metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.performance.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Performance Metrics</h4>
                      <ul className="space-y-2">
                        {product.performance.performanceMetrics.map((metric, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="heading-premium text-2xl lg:text-3xl mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground">
                Explore other equipment in the {product.category} category
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="card-premium p-4 group hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;