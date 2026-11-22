-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_is_read ON public.contact_messages(is_read);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (send message)
CREATE POLICY "Anyone can send contact message" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can read (admin panel)
CREATE POLICY "Authenticated users can read messages" ON public.contact_messages
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update (mark as read)
CREATE POLICY "Authenticated users can update messages" ON public.contact_messages
  FOR UPDATE
  USING (auth.role() = 'authenticated');
