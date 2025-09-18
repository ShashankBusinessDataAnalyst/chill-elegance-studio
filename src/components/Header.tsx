import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const navigation = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Markets', href: '#markets' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Arctic<span className="text-gunmetal">Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="default" 
              className="btn-premium"
              onClick={() => setIsConsultationModalOpen(true)}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="w-full mt-4 btn-premium"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
      
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </header>
  );
};