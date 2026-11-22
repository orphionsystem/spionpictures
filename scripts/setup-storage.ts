#!/usr/bin/env ts-node

/**
 * Supabase Storage Bucket Kurulum Scripti
 * 
 * Bu script:
 * 1. 'artworks' bucket'ını oluşturur (public)
 * 2. Gerekli RLS politikalarını uygular
 * 
 * Kullanım:
 * npx ts-node scripts/setup-storage.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

// .env.local dosyasını yükle
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Hata: NEXT_PUBLIC_SUPABASE_URL veya SUPABASE_SERVICE_ROLE_KEY bulunamadı')
  console.error('   .env.local dosyasını kontrol edin')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function setupStorage() {
  console.log('🚀 Supabase Storage kurulumu başlıyor...\n')

  // 1. Mevcut bucket'ları kontrol et
  console.log('📦 Mevcut bucket\'lar kontrol ediliyor...')
  const { data: existingBuckets, error: listError } = await supabase
    .storage
    .listBuckets()

  if (listError) {
    console.error('❌ Bucket listesi alınamadı:', listError.message)
    console.error('   Detay:', JSON.stringify(listError, null, 2))
    return
  }

  console.log(`✅ ${existingBuckets.length} bucket bulundu`)
  
  const artworksBucket = existingBuckets.find(b => b.name === 'artworks')
  
  if (artworksBucket) {
    console.log('✅ "artworks" bucket zaten mevcut')
    console.log('   Public:', artworksBucket.public)
    console.log('   ID:', artworksBucket.id)
  } else {
    // 2. Bucket oluştur
    console.log('\n📦 "artworks" bucket oluşturuluyor...')
    const { data: newBucket, error: createError } = await supabase
      .storage
      .createBucket('artworks', {
        public: true,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif']
      })

    if (createError) {
      console.error('❌ Bucket oluşturulamadı:', createError.message)
      console.error('   Detay:', JSON.stringify(createError, null, 2))
      return
    }

    console.log('✅ "artworks" bucket başarıyla oluşturuldu!')
    console.log('   Name:', newBucket.name)
  }

  // 3. Storage politikalarını uygula
  console.log('\n🔐 Storage RLS politikaları uygulanıyor...')
  console.log('   Supabase Dashboard SQL Editor\'de aşağıdaki komutu çalıştırın:')
  console.log('   https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql\n')
  
  const rlsSQL = `
-- Storage RLS Politikaları
-- artworks bucket için public okuma, admin yazma

-- Herkes görüntüleri görüntüleyebilir
CREATE POLICY "Public can view artwork images"
ON storage.objects FOR SELECT
USING (bucket_id = 'artworks');

-- Sadece admin kullanıcılar upload edebilir
CREATE POLICY "Admins can upload artwork images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'artworks' 
  AND auth.uid() IN (
    SELECT id FROM public.profiles WHERE role = 'admin'
  )
);

-- Sadece admin kullanıcılar silebilir
CREATE POLICY "Admins can delete artwork images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'artworks'
  AND auth.uid() IN (
    SELECT id FROM public.profiles WHERE role = 'admin'
  )
);

-- Service role her şeyi yapabilir (bu zaten default)
CREATE POLICY "Service role full access"
ON storage.objects FOR ALL
USING (bucket_id = 'artworks')
WITH CHECK (bucket_id = 'artworks');
`

  console.log('```sql')
  console.log(rlsSQL)
  console.log('```')

  // 4. Test upload
  console.log('\n🧪 Test upload yapılıyor...')
  const testFileName = `test-${Date.now()}.txt`
  const testFile = new Blob(['Test file content'], { type: 'text/plain' })
  
  const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from('artworks')
    .upload(`test/${testFileName}`, testFile)

  if (uploadError) {
    console.error('❌ Test upload başarısız:', uploadError.message)
    console.error('   Detay:', JSON.stringify(uploadError, null, 2))
  } else {
    console.log('✅ Test upload başarılı!')
    console.log('   Path:', uploadData.path)
    
    // Public URL al
    const { data: { publicUrl } } = supabase
      .storage
      .from('artworks')
      .getPublicUrl(uploadData.path)
    
    console.log('   Public URL:', publicUrl)
    
    // Test dosyasını temizle
    await supabase
      .storage
      .from('artworks')
      .remove([uploadData.path])
    
    console.log('   Test dosyası temizlendi')
  }

  console.log('\n✅ Storage kurulumu tamamlandı!')
  console.log('\nSonraki adımlar:')
  console.log('1. Yukarıdaki SQL komutunu Supabase Dashboard\'da çalıştır')
  console.log('2. http://localhost:3000/admin/artworks/upload adresinde eser yüklemeyi dene')
}

setupStorage().catch(console.error)
