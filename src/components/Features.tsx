import { Leaf, Zap, Award, Headphones, Settings, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Design',
      description: 'Advanced refrigerant systems with minimal environmental impact and maximum sustainability.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Industry-leading efficiency ratings that reduce operating costs while maintaining optimal performance.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Stainless steel construction with commercial-grade components built to withstand demanding environments.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Settings,
      title: 'Smart Controls',
      description: 'Digital temperature management with remote monitoring capabilities and automated diagnostics.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Comprehensive service network with expert technicians available around the clock for peace of mind.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time performance monitoring and efficiency reports to optimize your operations.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
            Why Choose Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every aspect of our commercial refrigeration systems is engineered for excellence, 
            delivering unmatched performance, sustainability, and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-medium)]"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: '30+', label: 'Years Experience' },
            { value: '5000+', label: 'Installations' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};