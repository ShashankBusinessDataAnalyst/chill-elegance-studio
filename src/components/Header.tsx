import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import williamsLogo from '@/assets/williams-logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      description: 'Return to our main page featuring premium commercial refrigeration solutions'
    },
    { 
      name: 'Product', 
      href: '/#products',
      description: 'Explore our range of display cabinets, commercial refrigeration, and professional kitchen equipment'
    },
    { 
      name: 'Markets', 
      href: '/#markets',
      description: 'Discover how we serve restaurants, hotels, supermarkets, and other commercial establishments'
    },
    { 
      name: 'Experience Center', 
      href: '/experience-center',
      description: 'Visit our state-of-the-art showroom to see our products in action'
    },
    { 
      name: 'Contact', 
      href: '/#contact',
      description: 'Get in touch with our team for quotes, support, and technical assistance'
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block hover:opacity-80 transition-opacity duration-200">
              <img 
                src={williamsLogo} 
                alt="Williams Refrigeration" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <HoverCard key={item.name}>
                <HoverCardTrigger asChild>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="default" className="btn-premium" onClick={scrollToContact}>
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
              <Button variant="default" className="w-full mt-4 btn-premium" onClick={scrollToContact}>
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};