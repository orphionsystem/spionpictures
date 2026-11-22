'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Save } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

type Artwork = {
  id: string
  slug: string
  title_tr: string
  title_en: string
  artist_name: string
  description_tr: string | null
  description_en: string | null
  base_price: number
  currency: string
  total_editions: number
  sold_editions: number
  is_published: boolean
  featured: boolean
  shopier_url: string | null
  artwork_images: Array<{
    image_url: string
    is_primary: boolean
  }>
}

export default function EditArtworkPage() {
  const params = useParams()
  const router = useRouter()
  const [artwork, setArtwork] = useState<Artwork | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    loadArtwork()
  }, [params.id])

  const loadArtwork = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('artworks')
        .select(`
          *,
          artwork_images (
            image_url,
            is_primary
          )
        `)
        .eq('id', params.id)
        .single()

      if (error) throw error
      setArtwork(data)
    } catch (error) {
      console.error('Load error:', error)
      alert('❌ Eser yüklenemedi')
      router.push('/admin/artworks')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)

    try {
      const formData = new FormData(e.currentTarget)
      
      const updates = {
        title_tr: formData.get('title_tr') as string,
        title_en: formData.get('title_en') as string,
        artist_name: formData.get('artist_name') as string,
        slug: formData.get('slug') as string,
        description_tr: formData.get('description_tr') as string || null,
        description_en: formData.get('description_en') as string || null,
        base_price: parseFloat(formData.get('base_price') as string),
        currency: formData.get('currency') as string,
        total_editions: parseInt(formData.get('total_editions') as string),
        shopier_url: formData.get('shopier_url') as string || null,
        is_published: formData.get('is_published') === 'on',
        featured: formData.get('featured') === 'on',
      }

      const { error } = await supabase
        .from('artworks')
        .update(updates)
        .eq('id', params.id)

      if (error) throw error

      alert('✅ Değişiklikler kaydedildi!')
      router.push('/admin/artworks')
      
    } catch (error) {
      console.error('Save error:', error)
      alert('❌ Kaydetme hatası: ' + (error as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const getPrimaryImage = () => {
    if (!artwork) return '/placeholder.jpg'
    const primary = artwork.artwork_images?.find(img => img.is_primary)
    return primary?.image_url || artwork.artwork_images?.[0]?.image_url || '/placeholder.jpg'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-secondarytext">Eser yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-secondarytext mb-4">Eser bulunamadı</p>
          <Link
            href="/admin/artworks"
            className="text-primary hover:underline"
          >
            ← Eserlere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-darksection text-purewhite border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/admin/artworks"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Eserlere Dön</span>
            </Link>
            <h1 className="font-display text-xl font-bold">Eser Düzenle</h1>
            <div className="w-32" /> {/* Spacer */}
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Preview Image */}
          <div className="mb-8 bg-purewhite p-6 rounded-sm border border-border">
            <h3 className="font-semibold mb-4">Ana Görsel</h3>
            <div className="relative w-full h-96 rounded-sm overflow-hidden bg-gray-100">
              <Image
                src={getPrimaryImage()}
                alt={artwork.title_tr}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-secondarytext mt-2">
              💡 Görselleri değiştirmek için yeni bir eser yükleyin veya mevcut görselleri API üzerinden yönetin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Temel Bilgiler</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Eser Adı (Türkçe) *
                  </label>
                  <input
                    type="text"
                    name="title_tr"
                    defaultValue={artwork.title_tr}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Eser Adı (İngilizce) *
                  </label>
                  <input
                    type="text"
                    name="title_en"
                    defaultValue={artwork.title_en}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sanatçı *
                  </label>
                  <input
                    type="text"
                    name="artist_name"
                    defaultValue={artwork.artist_name}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    defaultValue={artwork.slug}
                    required
                    pattern="[a-z0-9-]+"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-secondarytext mt-1">
                    Sadece küçük harf, rakam ve tire
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Açıklama (Türkçe)
                  </label>
                  <textarea
                    name="description_tr"
                    defaultValue={artwork.description_tr || ''}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Açıklama (İngilizce)
                  </label>
                  <textarea
                    name="description_en"
                    defaultValue={artwork.description_en || ''}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-purewhite p-8 rounded-sm border border-border">
              <h2 className="font-display text-2xl font-semibold mb-6">Fiyat ve Edisyon</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Fiyat *
                  </label>
                  <input
                    type="number"
                    name="base_price"
                    defaultValue={artwork.base_price}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Para Birimi
                  </label>
                  <select
                    name="currency"
                    defaultValue={artwork.currency}
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Toplam Edisyon *
                  </label>
                  <input
                    type="number"
                    name="total_editions"
                    defaultValue={artwork.total_editions}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-3 bg-gray-50 p-4 rounded-sm">
                  <div className="text-sm">
                    <strong>Satılan Edisyon:</strong> {artwork.sold_editions} / {artwork.total_editions}
                    <div className="text-secondarytext mt-1">
                      Kalan: {artwork.total_editions - artwork.sold_editions} adet
                    </div>
                  </div>
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
                  defaultValue={artwork.shopier_url || ''}
                  className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://www.shopier.com/spionpictures/..."
                />
                <p className="text-xs text-secondarytext mt-2">
                  💡 Shopier mağazanızdaki ürün linkini ekleyin. Eklerseniz eserin altında "🛒 Satın Al" butonu görünecek.
                </p>
                
                {artwork.shopier_url && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-sm">
                    <div className="flex items-center gap-2 text-green-700">
                      <span className="font-semibold">✅ Shopier Bağlantısı Aktif</span>
                    </div>
                    <a
                      href={artwork.shopier_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline mt-1 inline-block"
                    >
                      {artwork.shopier_url}
                    </a>
                  </div>
                )}
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
                    defaultChecked={artwork.is_published}
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
                    defaultChecked={artwork.featured}
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
                href="/admin/artworks"
                className="px-6 py-3 border border-border rounded-sm hover:bg-purewhite transition-colors"
              >
                İptal
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
