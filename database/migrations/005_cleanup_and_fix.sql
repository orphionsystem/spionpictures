-- 1. Test eserlerini sil
DELETE FROM public.artwork_images WHERE artwork_id IN (
  SELECT id FROM public.artworks WHERE slug IN ('asaas', 'deneme')
);

DELETE FROM public.artworks WHERE slug IN ('asaas', 'deneme');

-- 2. "Adsız Tören" eserinin görselini local path'e güncelle
UPDATE public.artwork_images 
SET image_url = '/artworks/adsiz-toren.png'
WHERE artwork_id = (SELECT id FROM public.artworks WHERE slug = 'adsiz-toren');

-- 3. Diğer 2 eseri de ekle (eğer yoklarsa)
-- Önce kontrol et, varsa güncelle
INSERT INTO public.artworks (
  title_tr, title_en, slug, description_tr, description_en,
  artist_name, year, medium, dimensions, base_price, currency,
  total_editions, sold_editions, is_published, featured
) VALUES 
(
  'Ufkun Nöbeti',
  'Sentinel of the Horizon',
  'ufkun-nobeti',
  'Zamanın aktığı, fakat hiçbir şeyin acele etmediği bir coğrafya.

İstanbul Boğazı''nın sularında yükselen Kız Kulesi, bu kompozisyonda mimari bir anıttan öte, zamanın sürekliliğine direnen sessiz bir gözlemciye dönüşür.

"Her şey geçerken, bazı şeyler kalır."',
  'A geography where time flows, but nothing is in a hurry.

The Maiden''s Tower rising from the waters of the Bosphorus transforms in this composition from an architectural monument into a silent observer.

"While everything passes, some things remain."',
  'Spion Pictures',
  2024,
  'Fine Art Photography / Giclée Print',
  '90 x 120 cm',
  35000.00,
  'TRY',
  8,
  0,
  true,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  is_published = true,
  featured = true;

INSERT INTO public.artworks (
  title_tr, title_en, slug, description_tr, description_en,
  artist_name, year, medium, dimensions, base_price, currency,
  total_editions, sold_editions, is_published, featured
) VALUES 
(
  'Işığın Son İtirafı',
  'The Last Confession of Light',
  'isigin-son-itirafi',
  'Gün batarken şehir susmaz; yalnızca başka bir renge bürünür.

Kuzguncuk''un gündelik kent dokusu, gökyüzünü kaplayan yoğun pembe, mor ve turuncu tonlarla alışılmış gerçekliğinden uzaklaşır.

"Şehir aynı kalır. Işık, her şeyi değiştirir."',
  'As the day sets, the city does not fall silent; it merely takes on another color.

The everyday urban fabric of Kuzguncuk departs from its familiar reality with intense pink, purple, and orange tones.

"The city remains the same. Light changes everything."',
  'Spion Pictures',
  2024,
  'Fine Art Photography / Giclée Print',
  '80 x 120 cm',
  28000.00,
  'TRY',
  12,
  0,
  true,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  is_published = true,
  featured = true;

-- 4. Görselleri ekle (eğer yoklarsa)
INSERT INTO public.artwork_images (
  artwork_id, image_url, alt_text_tr, alt_text_en, is_primary, display_order
) 
SELECT 
  (SELECT id FROM public.artworks WHERE slug = 'ufkun-nobeti'),
  '/artworks/ufkun-nobeti.png',
  'Ufkun Nöbeti - Kız Kulesi',
  'Sentinel of the Horizon - Maiden''s Tower',
  true,
  0
WHERE NOT EXISTS (
  SELECT 1 FROM public.artwork_images 
  WHERE artwork_id = (SELECT id FROM public.artworks WHERE slug = 'ufkun-nobeti')
);

INSERT INTO public.artwork_images (
  artwork_id, image_url, alt_text_tr, alt_text_en, is_primary, display_order
) 
SELECT 
  (SELECT id FROM public.artworks WHERE slug = 'isigin-son-itirafi'),
  '/artworks/isigin-son-itirafi.png',
  'Işığın Son İtirafı - Kuzguncuk gün batımı',
  'The Last Confession of Light - Kuzguncuk sunset',
  true,
  0
WHERE NOT EXISTS (
  SELECT 1 FROM public.artwork_images 
  WHERE artwork_id = (SELECT id FROM public.artworks WHERE slug = 'isigin-son-itirafi')
);
