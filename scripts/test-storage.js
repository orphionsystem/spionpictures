#!/usr/bin/env node

/**
 * Storage Upload Test
 * 
 * Supabase Storage bucket'ına test upload yapar
 */

const { createClient } = require('@supabase/supabase-js')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Environment variables eksik!')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function testStorage() {
  console.log('🧪 Storage upload testi başlıyor...\n')

  // Test dosyası oluştur
  const testFileName = `test-${Date.now()}.txt`
  const testContent = 'Test file for Spion Pictures Storage'
  const testFile = Buffer.from(testContent)

  console.log(`📤 Dosya yükleniyor: ${testFileName}`)
  
  const { data: uploadData, error: uploadError } = await supabase
    .storage
    .from('artworks')
    .upload(`test/${testFileName}`, testFile, {
      contentType: 'text/plain',
      upsert: false
    })

  if (uploadError) {
    console.error('❌ Upload başarısız!')
    console.error('   Hata:', uploadError.message)
    console.error('   Kod:', uploadError.code || 'N/A')
    console.error('\n💡 Çözüm:')
    console.error('   1. Supabase Dashboard\'dan "artworks" bucket\'ını manuel oluştur')
    console.error('   2. STORAGE_BUCKET_SETUP.md dosyasındaki adımları takip et')
    console.error('   3. https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets')
    process.exit(1)
  }

  console.log('✅ Upload başarılı!')
  console.log('   Path:', uploadData.path)

  // Public URL al
  const { data: { publicUrl } } = supabase
    .storage
    .from('artworks')
    .getPublicUrl(uploadData.path)

  console.log('✅ Public URL alındı:', publicUrl)

  // Dosyayı temizle
  const { error: removeError } = await supabase
    .storage
    .from('artworks')
    .remove([uploadData.path])

  if (removeError) {
    console.error('⚠️  Test dosyası silinemedi:', removeError.message)
  } else {
    console.log('✅ Test dosyası temizlendi')
  }

  console.log('\n✅ Storage test başarılı!')
  console.log('\n📝 Sonraki adım:')
  console.log('   http://localhost:3000/admin/artworks/upload adresinden eser yükle')
}

testStorage().catch(err => {
  console.error('❌ Beklenmeyen hata:', err)
  process.exit(1)
})
