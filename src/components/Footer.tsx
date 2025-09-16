import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Display Cabinets', href: '#display-cabinets' },
    { name: 'Blast Chillers', href: '#blast-chillers' },
    { name: 'Cold Storage', href: '#cold-storage' },
    { name: 'Custom Solutions', href: '#custom' },
  ];

  const services = [
    { name: 'Installation', href: '#installation' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Emergency Repair', href: '#repair' },
    { name: 'Consultation', href: '#consultation' },
  ];

  const markets = [
    { name: 'Restaurants', href: '#restaurants' },
    { name: 'Hotels', href: '#hotels' },
    { name: 'Cafés', href: '#cafes' },
    { name: 'Retail', href: '#retail' },
  ];

  return (
  <footer className="bg-gunmetal text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6">
              Arctic<span className="text-french-gray">Pro</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Premium commercial refrigeration solutions for the world's finest restaurants, 
              hotels, and gourmet food establishments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4" />
                <span>info@arcticpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-bold text-lg mb-6">Markets</h4>
            <ul className="space-y-3">
              {markets.map((market, index) => (
                <li key={index}>
                  <a 
                    href={market.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {market.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60">
              © 2024 ArcticPro. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};