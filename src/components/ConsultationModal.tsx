import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, Calendar, Users, Building2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    projectDetails: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultation_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            business_type: formData.businessType,
            project_details: formData.projectDetails,
            budget: formData.budget,
            timeline: formData.timeline,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast({
        title: "Request Submitted Successfully!",
        description: "Our sales consultant will contact you within 24 hours.",
      });

      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        businessType: '',
        projectDetails: '',
        budget: '',
        timeline: ''
      });
      onClose();

    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Request Premium Consultation
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Get expert advice and a custom 3D layout design for your commercial refrigeration needs
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@restaurant.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Restaurant Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Premium Bistro"
                />
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Business Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="cafe">Cafe</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                    <SelectItem value="retail">Gourmet Retail</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When do you need this completed?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-12-months">6-12 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Project Requirements
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="projectDetails">Project Details</Label>
              <Textarea
                id="projectDetails"
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                placeholder="Describe your refrigeration needs, kitchen size, specific equipment requirements, and any other details that would help us provide the best solution..."
                rows={4}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-premium"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};