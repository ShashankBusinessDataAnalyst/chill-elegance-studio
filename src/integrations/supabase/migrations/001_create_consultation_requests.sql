-- Create consultation_requests table
CREATE TABLE consultation_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  business_type TEXT,
  project_details TEXT,
  budget TEXT,
  timeline TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'qualified', 'quoted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultation_requests_updated_at 
    BEFORE UPDATE ON consultation_requests 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Add Row Level Security (RLS)
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserting consultation requests (public access for form submissions)
CREATE POLICY "Anyone can insert consultation requests" ON consultation_requests
    FOR INSERT WITH CHECK (true);

-- Policy to allow admin users to view all consultation requests
-- (You'll need to set up admin roles separately)
CREATE POLICY "Admins can view all consultation requests" ON consultation_requests
    FOR SELECT USING (auth.role() = 'authenticated');

-- Add indexes for better performance
CREATE INDEX idx_consultation_requests_created_at ON consultation_requests(created_at DESC);
CREATE INDEX idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX idx_consultation_requests_email ON consultation_requests(email);