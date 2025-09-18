import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Request Sent",
        description: "Your consultation request was sent successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectDetails: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Zapier Webhook URL *</label>
                <Input 
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  required 
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Create a Zap with Webhook trigger → Google Forms action, then paste the webhook URL here
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input 
                  name="name"
                  placeholder="Your answer" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  name="company"
                  placeholder="Your answer"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email ID *</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Your answer"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input 
                  name="phone"
                  type="tel" 
                  placeholder="Your answer"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  name="projectDetails"
                  placeholder="Your answer"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="w-full btn-premium text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
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
            <div className="bg-gradient-to-r from-glaucous to-gunmetal rounded-2xl p-8 text-white">
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