#!/usr/bin/env node

/**
 * Alternative: Supabase Management API ile bucket oluşturma
 */

const https = require('https')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const projectRef = 'bfnwyegmppxdyaakenuj'
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const data = JSON.stringify({
  name: 'artworks',
  public: true,
  file_size_limit: 10485760,
  allowed_mime_types: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif']
})

const options = {
  hostname: `${projectRef}.supabase.co`,
  port: 443,
  path: '/storage/v1/bucket',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${serviceKey}`,
    'apikey': serviceKey,
    'Content-Length': data.length
  }
}

console.log('📦 Bucket oluşturuluyor (Management API)...')
console.log('URL:', `https://${options.hostname}${options.path}`)

const req = https.request(options, (res) => {
  let body = ''
  
  res.on('data', (chunk) => {
    body += chunk
  })
  
  res.on('end', () => {
    console.log('Status:', res.statusCode)
    console.log('Response:', body)
    
    if (res.statusCode === 200 || res.statusCode === 201) {
      console.log('✅ Bucket oluşturuldu!')
      console.log('\nŞimdi RLS politikalarını SQL Editor\'de çalıştır:')
      console.log('https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql')
    } else if (res.statusCode === 409) {
      console.log('✅ Bucket zaten mevcut!')
    } else {
      console.log('❌ Hata oluştu')
      console.log('💡 Manuel olarak oluştur:')
      console.log('https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets')
    }
  })
})

req.on('error', (error) => {
  console.error('❌ Request hatası:', error.message)
})

req.write(data)
req.end()
