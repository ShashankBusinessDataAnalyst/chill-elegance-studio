import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import displayRefrigerator from '@/assets/display-refrigerator.jpg';
import blastChiller from '@/assets/blast-chiller.jpg';
import commercialKitchen from '@/assets/commercial-kitchen.jpg';
const ProductCatalogue = () => {
  const categories = [{
    title: 'Display Cabinets',
    image: displayRefrigerator,
    description: 'Premium glass-door display cases and showcases'
  }, {
    title: 'Commercial Refrigeration',
    image: blastChiller,
    description: 'Walk-in coolers, freezers, and storage solutions'
  }, {
    title: 'Professional Kitchen Equipment',
    image: commercialKitchen,
    description: 'Complete kitchen setups and specialized equipment'
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-6 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              
              
              <h1 className="heading-premium text-4xl lg:text-6xl mb-6">
                Products
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We have established ourselves as a leading brand in the furnishing industry for bars, gelato shops, 
                bakeries, and the broader food sector. Our display cases and preservation technology embody Italian 
                craftsmanship, and with each venue we design, we aim to convey a unique narrative.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {categories.map((category, index) => {
                const isKitchenEquipment = category.title === 'Professional Kitchen Equipment';
                
                const cardContent = (
                  <>
                    {/* Product Image Container */}
                    <div className="bg-secondary/20 rounded-2xl p-8 mb-6 aspect-square flex items-center justify-center overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Category Info */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      <button className="text-primary font-medium hover:text-primary/80 transition-colors duration-300 relative group/link">
                        {isKitchenEquipment ? 'View Products' : 'View all'}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                      </button>
                    </div>
                  </>
                );
                
                return isKitchenEquipment ? (
                  <Link key={index} to="/professional-kitchen-equipment" className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-elegant)]">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-elegant)]">
                    {cardContent}
                  </div>
                );
              })}
            </div>
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
              <Link to="/">
                <Button size="lg" className="btn-premium text-lg px-8 py-6" onClick={() => {
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }, 100);
              }}>
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default ProductCatalogue;