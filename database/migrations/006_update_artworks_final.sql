-- Temizlik: Test eserlerini sil
DELETE FROM public.artwork_images WHERE artwork_id IN (
  SELECT id FROM public.artworks WHERE slug IN ('asaas', 'deneme')
);

DELETE FROM public.artworks WHERE slug IN ('asaas', 'deneme');

-- Adsız Tören: Fiyat ve edisyon güncelle + görsel path düzelt
UPDATE public.artworks SET
  base_price = 25000,
  total_editions = 10,
  year = 2024,
  medium = 'Fine Art Photography / Giclée Print',
  dimensions = '85 x 120 cm'
WHERE slug = 'adsiz-toren';

UPDATE public.artwork_images 
SET image_url = '/artworks/adsiz-toren.png'
WHERE artwork_id = (SELECT id FROM public.artworks WHERE slug = 'adsiz-toren');

-- Ufkun Nöbeti: Ekle veya güncelle
INSERT INTO public.artworks (
  title_tr, title_en, slug, description_tr, description_en,
  artist_name, year, medium, dimensions, base_price, currency,
  total_editions, sold_editions, is_published, featured
) VALUES 
(
  'Ufkun Nöbeti',
  'Sentinel of the Horizon',
  'ufkun-nobeti',
  E'Zamanın aktığı, fakat hiçbir şeyin acele etmediği bir coğrafya.\n\nİstanbul Boğazı\'nın sularında yükselen Kız Kulesi, bu kompozisyonda mimari bir anıttan öte, zamanın sürekliliğine direnen sessiz bir gözlemciye dönüşür. Kare, suyun yatay hattı ve gökyüzünün yükselen dikey genişliğiyle bölüşülürken, kule tam merkezde duruyor; ne yalnız, ne de kaybolmuş halde.\n\nKöprüden geçen araçların bulanık izleri, modern zamanın hızıyla tarihin durağanlığı arasındaki gerilimi vurgular. Bulutların dokusu ve suyun yumuşak yansıması, kompozisyona gizemli bir atmosfer katar.\n\nKız Kulesi, tarihin ve efsanelerin depolarından çıkıp, güncel bir anlatı çerçevesine oturur. Ufkun Nöbeti, mekânın hafızası ile anın geçiciliği arasında kurulan köprüyü görünür kılar.\n\n"Her şey geçerken, bazı şeyler kalır."',
  E'A geography where time flows, but nothing is in a hurry.\n\nThe Maiden\'s Tower rising from the waters of the Bosphorus transforms in this composition from an architectural monument into a silent observer resisting the continuity of time. The frame is divided between the horizontal line of the water and the rising vertical expanse of the sky, with the tower standing at the center—neither isolated nor lost.\n\nThe blurred traces of vehicles crossing the bridge emphasize the tension between the speed of modern time and the stillness of history. The texture of the clouds and the soft reflection of the water add a mysterious atmosphere to the composition.\n\nThe Maiden\'s Tower emerges from the archives of history and legend, settling into the frame of a contemporary narrative. Sentinel of the Horizon makes visible the bridge between the memory of place and the transience of the moment.\n\n"While everything passes, some things remain."',
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
  base_price = 35000,
  total_editions = 8,
  is_published = true,
  featured = true;

-- Işığın Son İtirafı: Ekle veya güncelle
INSERT INTO public.artworks (
  title_tr, title_en, slug, description_tr, description_en,
  artist_name, year, medium, dimensions, base_price, currency,
  total_editions, sold_editions, is_published, featured
) VALUES 
(
  'Işığın Son İtirafı',
  'The Last Confession of Light',
  'isigin-son-itirafi',
  E'Gün batarken şehir susmaz; yalnızca başka bir renge bürünür.\n\nKuzguncuk\'un gündelik kent dokusu, gökyüzünü kaplayan yoğun pembe, mor ve turuncu tonlarla alışılmış gerçekliğinden uzaklaşır. Karenin sol yarısını dolduran ağacın dalları, manzarayı bir filtre gibi bölerken, kent silüeti ufukta küçülür, fakat baskın tonların yansıması ile varlığını korur.\n\nİstanbul\'un organik ve modern katmanlarının bir arada bulunduğu bu an, doğanın ve şehrin birbirine ne kadar bağlı olduğunu hatırlatır. Gökyüzü burada yalnızca bir dekor değil, bütün kompozisyonu yöneten bir anlatı unsurudur.\n\nIşığın Son İtirafı, şehrin rutin yaşamını saniye saniye dönüştüren doğal bir olayın ardındaki dramatik anlatıyı görünür kılar. İzleyiciye zamana bağlı olmayan bir güzellik vaadi sunar.\n\n"Şehir aynı kalır. Işık, her şeyi değiştirir."',
  E'As the day sets, the city does not fall silent; it merely takes on another color.\n\nThe everyday urban fabric of Kuzguncuk departs from its familiar reality with intense pink, purple, and orange tones covering the sky. The branches of the tree filling the left half of the frame divide the view like a filter, while the city silhouette shrinks on the horizon, yet maintains its presence through the reflection of dominant tones.\n\nThis moment, where Istanbul\'s organic and modern layers coexist, reminds us how interconnected nature and the city truly are. Here, the sky is not merely a backdrop but a narrative element that governs the entire composition.\n\nThe Last Confession of Light makes visible the dramatic narrative behind a natural event that transforms the city\'s routine life second by second. It offers the viewer a promise of timeless beauty.\n\n"The city remains the same. Light changes everything."',
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
  base_price = 28000,
  total_editions = 12,
  is_published = true,
  featured = true;

-- Görselleri ekle
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
