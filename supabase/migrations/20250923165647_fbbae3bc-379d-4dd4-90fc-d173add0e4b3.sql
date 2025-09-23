-- Create Products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  badge TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Product Images table
CREATE TABLE public.product_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Product Features table
CREATE TABLE public.product_features (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  feature_text TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Product Specifications table
CREATE TABLE public.product_specifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  spec_name TEXT NOT NULL,
  spec_value TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create Product Details table
CREATE TABLE public.product_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL,
  section_title TEXT NOT NULL,
  section_description TEXT NOT NULL,
  section_items JSONB NOT NULL DEFAULT '[]'::jsonb,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_specifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_details ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Products are viewable by everyone" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "Product images are viewable by everyone" ON public.product_images FOR SELECT USING (true);
CREATE POLICY "Product features are viewable by everyone" ON public.product_features FOR SELECT USING (true);
CREATE POLICY "Product specifications are viewable by everyone" ON public.product_specifications FOR SELECT USING (true);
CREATE POLICY "Product details are viewable by everyone" ON public.product_details FOR SELECT USING (true);

-- Create RLS policies for authenticated admin access (INSERT, UPDATE, DELETE)
CREATE POLICY "Authenticated users can manage products" ON public.products FOR ALL USING (true);
CREATE POLICY "Authenticated users can manage product images" ON public.product_images FOR ALL USING (true);
CREATE POLICY "Authenticated users can manage product features" ON public.product_features FOR ALL USING (true);
CREATE POLICY "Authenticated users can manage product specifications" ON public.product_specifications FOR ALL USING (true);
CREATE POLICY "Authenticated users can manage product details" ON public.product_details FOR ALL USING (true);

-- Create indexes for performance
CREATE INDEX idx_products_category ON public.products(category) WHERE is_active = true;
CREATE INDEX idx_products_is_active ON public.products(is_active);
CREATE INDEX idx_product_images_product_id ON public.product_images(product_id);
CREATE INDEX idx_product_images_display_order ON public.product_images(product_id, display_order);
CREATE INDEX idx_product_images_is_primary ON public.product_images(product_id, is_primary);
CREATE INDEX idx_product_features_product_id ON public.product_features(product_id, display_order);
CREATE INDEX idx_product_specifications_product_id ON public.product_specifications(product_id, display_order);
CREATE INDEX idx_product_details_product_id ON public.product_details(product_id, display_order);

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create unique constraints to prevent duplicate primary images
CREATE UNIQUE INDEX idx_product_images_unique_primary 
ON public.product_images(product_id) 
WHERE is_primary = true;