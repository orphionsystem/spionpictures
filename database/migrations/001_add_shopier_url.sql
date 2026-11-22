-- Migration: Add Shopier URL to artworks table
-- Date: 2025-01-XX
-- Description: Add e-commerce integration field for Shopier product links

-- Add shopier_url column to artworks table
ALTER TABLE public.artworks 
ADD COLUMN IF NOT EXISTS shopier_url TEXT;

-- Add comment for documentation
COMMENT ON COLUMN public.artworks.shopier_url IS 'Shopier e-commerce product URL for direct purchase';
