-- Mevcut eserleri yayınla ve featured yap

UPDATE public.artworks 
SET 
  is_published = true,
  featured = true,
  updated_at = NOW()
WHERE slug IN ('adsiz-toren', 'ufkun-nobeti', 'isigin-son-itirafi');

-- Eğer sluglar farklıysa, tüm eserleri yayınla:
-- UPDATE public.artworks SET is_published = true, featured = true WHERE is_published = false;
