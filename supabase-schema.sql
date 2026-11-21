-- =====================================================
-- NadwaHealthcare (NHC) - Supabase Database Setup Script
-- Run this in your Supabase Dashboard: SQL Editor -> New Query
-- =====================================================

-- 1. Create Patient Inquiries Table
CREATE TABLE IF NOT EXISTS public.patient_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    calling_code TEXT NOT NULL,
    phone TEXT NOT NULL,
    country TEXT NOT NULL,
    treatment TEXT NOT NULL,
    preferred_city TEXT NOT NULL,
    message TEXT NOT NULL,
    report_file_url TEXT,
    report_file_name TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'contacted', 'scheduled', 'closed')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for speedy querying by ticket_id and status
CREATE INDEX IF NOT EXISTS idx_patient_inquiries_ticket ON public.patient_inquiries(ticket_id);
CREATE INDEX IF NOT EXISTS idx_patient_inquiries_status ON public.patient_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_patient_inquiries_created_at ON public.patient_inquiries(created_at DESC);

-- Auto-update updated_at timestamp trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_patient_inquiries_updated_at ON public.patient_inquiries;
CREATE TRIGGER set_patient_inquiries_updated_at
    BEFORE UPDATE ON public.patient_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.patient_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous patients to INSERT their inquiry from the website
CREATE POLICY "Allow public insert into patient_inquiries"
    ON public.patient_inquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow authenticated admins to view all patient inquiries
CREATE POLICY "Allow authenticated users to read patient_inquiries"
    ON public.patient_inquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated admins to update inquiry statuses/notes
CREATE POLICY "Allow authenticated users to update patient_inquiries"
    ON public.patient_inquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 3. Create Storage Bucket for Medical Reports (Scans, PDFs, Images)
INSERT INTO storage.buckets (id, name, public)
VALUES ('medical-reports', 'medical-reports', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow anyone to upload medical reports
CREATE POLICY "Allow public upload to medical-reports bucket"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (bucket_id = 'medical-reports');

-- Allow public read access to uploaded reports
CREATE POLICY "Allow public read from medical-reports bucket"
    ON storage.objects
    FOR SELECT
    TO anon, authenticated
    USING (bucket_id = 'medical-reports');
