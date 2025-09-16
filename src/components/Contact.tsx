import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@arcticpro.com',
      description: 'Get a detailed quote within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak with our refrigeration experts',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'New York, NY',
      description: 'Schedule a showroom appointment',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 8AM-6PM',
      description: '24/7 emergency service available',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-premium text-4xl lg:text-5xl mb-6">
            Ready to Upgrade Your Kitchen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let our experts design a custom refrigeration solution that meets your exact needs. 
            Get started with a consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-premium p-8">
            <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Restaurant/Business name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your refrigeration needs, kitchen size, and any specific requirements..."
                  rows={4}
                />
              </div>
              <Button size="lg" className="w-full btn-premium text-lg py-6">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                    <p className="text-primary font-semibold mb-2">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Emergency Service Banner */}
            <div className="bg-gradient-to-r from-primary to-charcoal rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-3">24/7 Emergency Service</h4>
              <p className="mb-4 text-white/90">
                Equipment breakdown? Our emergency technicians are standing by to restore your operations quickly.
              </p>
              <Button variant="secondary" className="btn-premium">
                Emergency Hotline: (555) 911-COOL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};