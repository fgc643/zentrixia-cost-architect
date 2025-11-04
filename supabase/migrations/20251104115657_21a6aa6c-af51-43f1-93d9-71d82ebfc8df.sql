-- Create appointments table
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert appointments
CREATE POLICY "Anyone can create appointments"
ON public.appointments
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Anyone can view their own appointments by email
CREATE POLICY "Users can view their own appointments"
ON public.appointments
FOR SELECT
TO anon
USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_appointments_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_appointments_timestamp
BEFORE UPDATE ON public.appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_appointments_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.appointments;