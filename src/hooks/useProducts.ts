import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  image: string | null;
  price: string | null;
  description: string | null;
  features: string[] | null;
  category: string | null;
  badge: string | null;
  // Specifications
  dimensions: string | null;
  weight: string | null;
  power: string | null;
  capacity: string | null;
  temperature: string | null;
  // Overview
  overview_description: string | null;
  overview_key_benefits: string[] | null;
  // Design
  design_description: string | null;
  design_features: string[] | null;
  // Materials
  materials_description: string | null;
  material_specs: string[] | null;
  // Performance
  performance_description: string | null;
  performance_metrics: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string | null;
  display_order: number | null;
  is_primary: boolean | null;
  created_at: string;
}

export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (category) {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
      
      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }
      
      return data as Product | null;
    },
    enabled: !!id,
  });
};

export const useProductImages = (productId: string) => {
  return useQuery({
    queryKey: ['product-images', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', productId)
        .order('display_order', { ascending: true });
      
      if (error) {
        console.error('Error fetching product images:', error);
        throw error;
      }
      
      return data as ProductImage[];
    },
    enabled: !!productId,
  });
};