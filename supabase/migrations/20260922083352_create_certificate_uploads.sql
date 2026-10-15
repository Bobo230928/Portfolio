/*
# Create certificate file storage and tracking table

## Purpose
Allows the portfolio owner to upload certificate files (PDFs, images, documents) that persist across page reloads. Files are stored in Supabase Storage; a tracking table records which certificate each file belongs to.

## New Storage Bucket
- `certificates` — public bucket for storing certificate files

## New Tables
- `certificate_uploads`
  - `id` (uuid, primary key)
  - `cert_key` (text) — unique key identifying which certificate slot (e.g. "google-ai-0", "bootcamp-3")
  - `file_name` (text) — original file name
  - `file_path` (text) — path in storage bucket
  - `file_type` (text) — MIME type
  - `is_image` (boolean) — whether the file is an image (for preview)
  - `created_at` (timestamp)

## Security
- Storage bucket is public (files need to be viewable by visitors)
- RLS enabled on `certificate_uploads`
- Anon + authenticated can read, insert, update, delete (single-tenant portfolio, no auth)
*/

-- Create storage bucket for certificate files
INSERT INTO storage.buckets (id, name, public)
VALUES ('certificates', 'certificates', true)
ON CONFLICT (id) DO NOTHING;

-- Create tracking table
CREATE TABLE IF NOT EXISTS certificate_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cert_key text UNIQUE NOT NULL,
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_type text,
  is_image boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE certificate_uploads ENABLE ROW LEVEL SECURITY;

-- Allow anon + authenticated full CRUD (single-tenant portfolio, no sign-in)
DROP POLICY IF EXISTS "anon_select_cert_uploads" ON certificate_uploads;
CREATE POLICY "anon_select_cert_uploads" ON certificate_uploads
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_cert_uploads" ON certificate_uploads;
CREATE POLICY "anon_insert_cert_uploads" ON certificate_uploads
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_cert_uploads" ON certificate_uploads;
CREATE POLICY "anon_update_cert_uploads" ON certificate_uploads
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_cert_uploads" ON certificate_uploads;
CREATE POLICY "anon_delete_cert_uploads" ON certificate_uploads
  FOR DELETE TO anon, authenticated USING (true);

-- Storage policies: allow anon + authenticated to upload, read, and delete files in the certificates bucket
DROP POLICY IF EXISTS "anon_read_cert_storage" ON storage.objects;
CREATE POLICY "anon_read_cert_storage" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'certificates');

DROP POLICY IF EXISTS "anon_insert_cert_storage" ON storage.objects;
CREATE POLICY "anon_insert_cert_storage" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'certificates');

DROP POLICY IF EXISTS "anon_delete_cert_storage" ON storage.objects;
CREATE POLICY "anon_delete_cert_storage" ON storage.objects
  FOR DELETE TO anon, authenticated
  USING (bucket_id = 'certificates');
