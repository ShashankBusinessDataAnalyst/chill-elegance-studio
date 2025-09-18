-- Create a table for chat interactions with phone numbers
CREATE TABLE public.chat_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone_number TEXT NOT NULL,
  user_message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chat_interactions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insertion of chat interactions
CREATE POLICY "Allow public chat interaction submissions" 
ON public.chat_interactions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for authenticated users to view chat interactions
CREATE POLICY "Only authenticated users can view chat interactions" 
ON public.chat_interactions 
FOR SELECT 
USING (true);

-- Create index for better performance on phone number lookups
CREATE INDEX idx_chat_interactions_phone ON public.chat_interactions(phone_number);
CREATE INDEX idx_chat_interactions_created_at ON public.chat_interactions(created_at);