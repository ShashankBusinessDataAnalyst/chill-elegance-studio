-- Create chat_sessions table to store entire conversations per session
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  phone_number TEXT,
  conversation JSONB NOT NULL DEFAULT '[]'::jsonb
);

-- Enable Row Level Security
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public chat session submissions" 
ON public.chat_sessions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public chat session updates" 
ON public.chat_sessions 
FOR UPDATE 
USING (true);

CREATE POLICY "Only authenticated users can view chat sessions" 
ON public.chat_sessions 
FOR SELECT 
USING (true);