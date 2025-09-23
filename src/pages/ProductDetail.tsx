import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Star, Shield, Zap, Award, CheckCircle, Info, Wrench, Package, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProduct, useProductImages, useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
import professionalKitchenEquipment from '@/assets/professional-kitchen-equipment.jpg';
import blastChiller from '@/assets/blast-chiller.jpg';
import commercialRefrigeration from '@/assets/commercial-refrigeration.jpg';
import displayCabinets from '@/assets/display-cabinets.jpg';
import OneDoorCabinet from '@/assets/RC_OneFoorFV.png';
import sOneDoorCabinet from '@/assets/RC_OneFoorSV.png';
import s2OneDoorCabinet from '@/assets/RC_OneFoorSV2.jpg';
const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Fetch product data
  const { data: product, isLoading: isProductLoading, error: productError } = useProduct(id || '');
  const { data: productImages, isLoading: isImagesLoading } = useProductImages(id || '');
  const { data: allProducts } = useProducts(); // For related products
  

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Combine product images and fallback images
  const fallbackImages = [OneDoorCabinet, sOneDoorCabinet, commercialRefrigeration, s2OneDoorCabinet, blastChiller];
  const allImages = productImages && productImages.length > 0 
    ? productImages.map(img => img.image_url) 
    : fallbackImages;

  // Auto-cycle through images every 3 seconds (pause when modal is open or hovered)
  useEffect(() => {
    // Don't run slideshow if modal is open or if hovering
    if (isModalOpen || isHovered || allImages.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length, isModalOpen, isHovered]);

  // Modal navigation functions
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Loading state
  if (isProductLoading || isImagesLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="animate-pulse">
                <div className="bg-secondary/20 h-8 w-32 rounded mb-8"></div>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-secondary/20 h-96 rounded-xl"></div>
                  <div className="space-y-4">
                    <div className="bg-secondary/20 h-8 w-3/4 rounded"></div>
                    <div className="bg-secondary/20 h-6 w-24 rounded"></div>
                    <div className="bg-secondary/20 h-4 w-full rounded"></div>
                    <div className="bg-secondary/20 h-4 w-5/6 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (productError || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Product Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The product you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/product-catalogue">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Button>
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
      
      {/* Image Modal with blur overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={allImages[modalImageIndex]}
                alt={`${product.name} - View ${modalImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevModalImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {modalImageIndex + 1} / {allImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

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
            <Link to="/professional-kitchen-equipment" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image Slideshow */}
                <div className="space-y-4">
                <div 
                  className="relative rounded-2xl overflow-hidden bg-secondary/10"
                >
                  <div className="relative w-full h-[500px] lg:h-[600px]">
                     {allImages.map((image, index) => {
                        return <img 
                          key={index} 
                          src={image} 
                          alt={`${product.name} - View ${index + 1}`} 
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                          onMouseEnter={() => setIsHovered(true)} 
                          onMouseLeave={() => setIsHovered(false)} 
                          onClick={() => {
                            openModal(index);
                          }} 
                        />
                      })}
                     
                     {/* Image indicators */}
                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                       {allImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
                     </div>
                   </div>
                  
                  {product.badge && <div className="absolute top-4 left-4 z-10">
                      <Badge variant="secondary" className={`${product.badge === 'New' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-orange-500 text-white hover:bg-orange-600'}`}>
                        {product.badge}
                      </Badge>
                    </div>}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                    </div>
                  </div>
                  <h1 className="heading-premium text-3xl lg:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {(product.features || []).map((feature, index) => <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                {/* Specifications Quick View */}
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{product.dimensions || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Weight:</span>
                      <p className="font-medium">{product.weight || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Power:</span>
                      <p className="font-medium">{product.power || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Capacity:</span>
                      <p className="font-medium">{product.capacity || 'N/A'}</p>
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
                      {product.overview_description || 'No overview available.'}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {(product.overview_key_benefits || []).map((benefit, index) => <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>)}
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
                      {product.design_description || 'No design description available.'}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Design Features</h4>
                      <ul className="space-y-2">
                        {(product.design_features || []).map((feature, index) => <li key={index} className="flex items-start gap-2">
                            <Wrench className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>)}
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
                      {product.materials_description || 'No materials description available.'}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Material Specifications</h4>
                      <ul className="space-y-2">
                        {(product.material_specs || []).map((spec, index) => <li key={index} className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{spec}</span>
                          </li>)}
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
                      {product.performance_description || 'No performance description available.'}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Performance Metrics</h4>
                      <ul className="space-y-2">
                        {(product.performance_metrics || []).map((metric, index) => <li key={index} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{metric}</span>
                          </li>)}
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
              <h2 className="heading-premium text-2xl lg:text-3xl mb-4">Trusted by Leading Hotels</h2>
              <p className="text-muted-foreground mb-6">
                Premium hotels worldwide trust our {product.category.toLowerCase()} equipment
              </p>
              
              {/* Scrolling Hotels List */}
              <div className="relative overflow-hidden bg-secondary/5 py-4 rounded-lg">
                <div className="flex animate-scroll-left whitespace-nowrap">
                  <div className="flex items-center space-x-8 min-w-max">
                    {[
                      "The Ritz-Carlton", "Four Seasons Hotels", "Mandarin Oriental", "St. Regis Hotels", 
                      "Conrad Hotels", "Park Hyatt", "The Peninsula Hotels", "Shangri-La Hotels",
                      "InterContinental Hotels", "Waldorf Astoria", "Grand Hyatt", "JW Marriott",
                      "The Luxury Collection", "Fairmont Hotels", "Rosewood Hotels", "Aman Resorts",
                      "One&Only Resorts", "Bulgari Hotels", "Edition Hotels", "W Hotels"
                    ].map((hotel, index) => (
                      <span key={index} className="text-sm font-medium text-foreground/80 px-4 py-2 bg-background/80 rounded-full">
                        {hotel}
                      </span>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="flex items-center space-x-8 min-w-max ml-8">
                    {[
                      "The Ritz-Carlton", "Four Seasons Hotels", "Mandarin Oriental", "St. Regis Hotels", 
                      "Conrad Hotels", "Park Hyatt", "The Peninsula Hotels", "Shangri-La Hotels",
                      "InterContinental Hotels", "Waldorf Astoria", "Grand Hyatt", "JW Marriott",
                      "The Luxury Collection", "Fairmont Hotels", "Rosewood Hotels", "Aman Resorts",
                      "One&Only Resorts", "Bulgari Hotels", "Edition Hotels", "W Hotels"
                    ].map((hotel, index) => (
                      <span key={`duplicate-${index}`} className="text-sm font-medium text-foreground/80 px-4 py-2 bg-background/80 rounded-full">
                        {hotel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(allProducts || [])
                .filter(p => p.category === product?.category && p.id !== product?.id)
                .slice(0, 3)
                .map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <div className="card-premium p-4 group hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={relatedProduct.image || displayCabinets} 
                        alt={relatedProduct.name} 
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold text-sm">{relatedProduct.price || 'Contact for pricing'}</p>
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