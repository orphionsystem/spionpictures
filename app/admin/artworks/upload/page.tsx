'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, X } from 'lucide-react'
import Image from 'next/image'

export default function UploadArtworkPage() {
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages([...images, ...files])
      
      // Create previews
      files.forEach(file => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviews(prev => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
    setPreviews(previews.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      // Add images to formData
      images.forEach((image) => {
        formData.append('images', image)
      })

      // Send to API
      const response = await fetch('/api/artworks', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Bir hata oluştu')
      }

      // Success!
      alert('✅ Eser başarıyla kaydedildi!')
      window.location.href = '/admin'
      
    } catch (error) {
      console.error('Submit error:', error)
      alert('❌ Hata: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-darksection text-purewhite border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/admin"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Geri</span>
            </Link>
            <h1 className="font-display text-xl font-bold">Yeni Eser Yükle</h1>
            <div className="w-20" /> {/* Spacer */}
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Görseller</h2>
              
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-sm p-8 text-center mb-6 hover:border-primary transition-colors">
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label 
                  htmlFor="images"
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Görselleri yükleyin</p>
                    <p className="text-sm text-secondarytext">
                      Birden fazla görsel seçebilirsiniz (JPG, PNG)
                    </p>
                  </div>
                </label>
              </div>

              {/* Image Previews */}
              {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group aspect-square">
                      <Image
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        fill
                        className="object-cover rounded-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 text-xs rounded-sm">
                          Ana Görsel
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Artwork Details */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Eser Bilgileri</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Eser Adı (Türkçe) *
                  </label>
                  <input
                    type="text"
                    name="title_tr"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Örn: Digital Dreams #1"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Eser Adı (İngilizce) *
                  </label>
                  <input
                    type="text"
                    name="title_en"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g: Digital Dreams #1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sanatçı *
                  </label>
                  <input
                    type="text"
                    name="artist_name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Spion Art Studio"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    required
                    pattern="[a-z0-9-]+"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="digital-dreams-001"
                  />
                  <p className="text-xs text-secondarytext mt-1">
                    Sadece küçük harf, rakam ve tire kullanın
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Açıklama (Türkçe)
                  </label>
                  <textarea
                    name="description_tr"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Eserin detaylı açıklaması..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Açıklama (İngilizce)
                  </label>
                  <textarea
                    name="description_en"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Detailed description of the artwork..."
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Editions */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Fiyat ve Edisyon</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Temel Fiyat (TRY) *
                  </label>
                  <input
                    type="number"
                    name="base_price"
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="850.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Toplam Edisyon *
                  </label>
                  <input
                    type="number"
                    name="total_editions"
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Para Birimi
                  </label>
                  <select
                    name="currency"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="TRY">TRY - Türk Lirası</option>
                    <option value="USD">USD - Dolar</option>
                    <option value="EUR">EUR - Euro</option>
                  </select>
                </div>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">🛒 E-Ticaret</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Shopier Ürün Linki
                </label>
                <input
                  type="url"
                  name="shopier_url"
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://www.shopier.com/spionpictures/digital-dreams-001"
                />
                <p className="text-xs text-secondarytext mt-2">
                  💡 Opsiyonel: Shopier mağazanızdaki ürün linkini ekleyin. 
                  Eklerseniz eserin altında "🛒 Satın Al" butonu görünecek.
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Durum</h2>
              
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="is_published"
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <div>
                    <div className="font-medium">Yayınla</div>
                    <div className="text-sm text-secondarytext">
                      Eseri sitede görünür yap
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <div>
                    <div className="font-medium">Öne Çıkan</div>
                    <div className="text-sm text-secondarytext">
                      Ana sayfada göster
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <Link
                href="/admin"
                className="px-6 py-3 border border-border rounded-sm hover:bg-purewhite transition-colors"
              >
                İptal
              </Link>
              <button
                type="submit"
                disabled={loading || images.length === 0}
                className="px-8 py-3 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Yükleniyor...' : 'Eseri Kaydet'}
              </button>
            </div>
          </form>

          {/* Success Message */}
          <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-sm">
            <h3 className="font-semibold mb-2 text-green-900">✅ Sistem Hazır</h3>
            <p className="text-sm text-green-800">
              Eser yükleme sistemi tamamen fonksiyonel! Görseller Supabase Storage'a 
              yüklenecek ve veritabanına kaydedilecek. Yüklemeden önce Supabase Storage'da 
              "artworks" bucket'ının oluşturulduğundan emin olun.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
