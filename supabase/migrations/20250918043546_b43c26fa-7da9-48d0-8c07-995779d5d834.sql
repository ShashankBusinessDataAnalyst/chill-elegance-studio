-- Create appointments table for booking appointments
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public appointment bookings
CREATE POLICY "Allow public appointment bookings" 
ON public.appointments 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Create policy to allow only authenticated users to view appointments
CREATE POLICY "Only authenticated users can view appointments" 
ON public.appointments 
FOR SELECT 
TO authenticated 
USING (true);