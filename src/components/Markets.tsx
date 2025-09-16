import { ChefHat, Building2, Coffee, ShoppingBag, Utensils, Hotel } from 'lucide-react';

export const Markets = () => {
  const markets = [
    {
      icon: ChefHat,
      title: 'Fine Dining Restaurants',
      description: 'Precision refrigeration for Michelin-starred kitchens and upscale dining establishments.',
      features: ['Temperature precision ±0.5°C', 'Silent operation', 'Custom sizing'],
    },
    {
      icon: Hotel,
      title: 'Luxury Hotels',
      description: 'Comprehensive cooling solutions for hotel kitchens, bars, and catering operations.',
      features: ['Large-scale capacity', 'Energy optimization', 'Remote monitoring'],
    },
    {
      icon: Coffee,
      title: 'Artisan Cafés',
      description: 'Compact yet powerful refrigeration for specialty coffee shops and bakeries.',
      features: ['Space-efficient design', 'Display capabilities', 'Quick access'],
    },
    {
      icon: ShoppingBag,
      title: 'Gourmet Retailers',
      description: 'Showcase refrigeration for premium food markets and delicatessens.',
      features: ['Glass display options', 'LED lighting', 'Customer appeal'],
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Mobile and stationary solutions for event catering and food service.',
      features: ['Portable options', 'High-volume capacity', 'Rapid cooling'],
    },
    {
      icon: Building2,
      title: 'Corporate Kitchens',
      description: 'Scalable refrigeration systems for office buildings and institutional facilities.',
      features: ['Modular design', 'Easy maintenance', 'Energy reporting'],
    },
  ];

  return (
    <section id="markets" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
            Markets We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate bistros to large-scale hotel operations, our refrigeration solutions 
            are tailored to meet the unique demands of every premium food service environment.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => {
            const IconComponent = market.icon;
            return (
              <div key={index} className="card-premium p-8 text-center group">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {market.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {market.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {market.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Marriott Hotels', 'Four Seasons', 'Whole Foods', 'Ritz-Carlton', 'Le Bernardin', 'The French Laundry'].map((brand, index) => (
              <div key={index} className="text-lg font-medium text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};