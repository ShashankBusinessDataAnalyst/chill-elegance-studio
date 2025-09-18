-- Enable Row Level Security on consultations table (if not already enabled)
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert consultation requests
-- This is appropriate for a public contact form
CREATE POLICY "Allow public consultation submissions" 
ON public.consultations 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Optional: Create policy to allow only authenticated users to view consultation data
-- This prevents public access to viewing submitted consultations
CREATE POLICY "Only authenticated users can view consultations" 
ON public.consultations 
FOR SELECT 
TO authenticated 
USING (true);