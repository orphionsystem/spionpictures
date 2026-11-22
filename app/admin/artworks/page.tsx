'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Edit, Trash2, ExternalLink, Plus } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

type Artwork = {
  id: string
  slug: string
  title_tr: string
  title_en: string
  artist_name: string
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

export default function ManageArtworksPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const supabase = createClient()

  useEffect(() => {
    loadArtworks()
  }, [])

  const loadArtworks = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('artworks')
        .select(`
          id,
          slug,
          title_tr,
          title_en,
          artist_name,
          base_price,
          currency,
          total_editions,
          sold_editions,
          is_published,
          featured,
          shopier_url,
          artwork_images (
            image_url,
            is_primary
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setArtworks(data || [])
    } catch (error) {
      console.error('Load error:', error)
      alert('❌ Eserler yüklenirken hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu eseri silmek istediğinizden emin misiniz?')) return

    try {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      alert('✅ Eser silindi')
      loadArtworks()
    } catch (error) {
      console.error('Delete error:', error)
      alert('❌ Silme hatası: ' + (error as Error).message)
    }
  }

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('artworks')
        .update({ is_published: !currentStatus })
        .eq('id', id)

      if (error) throw error
      
      loadArtworks()
    } catch (error) {
      console.error('Toggle error:', error)
      alert('❌ Durum değiştirilemedi')
    }
  }

  const formatPrice = (price: number, currency: string) => {
    if (currency === 'TRY') return `${price.toLocaleString('tr-TR')} ₺`
    if (currency === 'USD') return `$${price.toLocaleString('en-US')}`
    if (currency === 'EUR') return `€${price.toLocaleString('de-DE')}`
    return `${price} ${currency}`
  }

  const getPrimaryImage = (artwork: Artwork) => {
    const primary = artwork.artwork_images?.find(img => img.is_primary)
    return primary?.image_url || artwork.artwork_images?.[0]?.image_url || '/placeholder.jpg'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-secondarytext">Eserler yükleniyor...</p>
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
              href="/admin"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Admin</span>
            </Link>
            <h1 className="font-display text-xl font-bold">Eserleri Yönet</h1>
            <Link
              href="/admin/artworks/upload"
              className="flex items-center gap-2 px-4 py-2 bg-primary rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Eser</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="text-sm text-secondarytext mb-1">Toplam Eser</div>
            <div className="text-3xl font-display font-bold">{artworks.length}</div>
          </div>
          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="text-sm text-secondarytext mb-1">Yayında</div>
            <div className="text-3xl font-display font-bold text-green-600">
              {artworks.filter(a => a.is_published).length}
            </div>
          </div>
          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="text-sm text-secondarytext mb-1">Öne Çıkan</div>
            <div className="text-3xl font-display font-bold text-primary">
              {artworks.filter(a => a.featured).length}
            </div>
          </div>
          <div className="bg-purewhite p-6 rounded-sm border border-border">
            <div className="text-sm text-secondarytext mb-1">Shopier Bağlantılı</div>
            <div className="text-3xl font-display font-bold text-blue-600">
              {artworks.filter(a => a.shopier_url).length}
            </div>
          </div>
        </div>

        {/* Artworks List */}
        {artworks.length === 0 ? (
          <div className="bg-purewhite p-12 rounded-sm border border-border text-center">
            <p className="text-secondarytext mb-4">Henüz eser yüklenmemiş</p>
            <Link
              href="/admin/artworks/upload"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-purewhite rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>İlk Eseri Yükle</span>
            </Link>
          </div>
        ) : (
          <div className="bg-purewhite rounded-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-darksection text-purewhite">
                  <tr>
                    <th className="text-left px-6 py-4 font-medium">Görsel</th>
                    <th className="text-left px-6 py-4 font-medium">Eser</th>
                    <th className="text-left px-6 py-4 font-medium">Sanatçı</th>
                    <th className="text-left px-6 py-4 font-medium">Fiyat</th>
                    <th className="text-left px-6 py-4 font-medium">Edisyon</th>
                    <th className="text-left px-6 py-4 font-medium">E-Ticaret</th>
                    <th className="text-left px-6 py-4 font-medium">Durum</th>
                    <th className="text-right px-6 py-4 font-medium">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {artworks.map((artwork) => {
                    const remainingEditions = artwork.total_editions - artwork.sold_editions
                    
                    return (
                      <tr key={artwork.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="relative w-16 h-16 rounded-sm overflow-hidden bg-gray-100">
                            <Image
                              src={getPrimaryImage(artwork)}
                              alt={artwork.title_tr}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-semibold">{artwork.title_tr}</div>
                            <div className="text-sm text-secondarytext">{artwork.title_en}</div>
                            <div className="text-xs text-secondarytext mt-1">
                              /{artwork.slug}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {artwork.artist_name}
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          {formatPrice(artwork.base_price, artwork.currency)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="font-medium">
                              {remainingEditions}/{artwork.total_editions}
                            </div>
                            <div className="text-xs text-secondarytext">
                              {remainingEditions > 0 ? 'Stokta' : 'Tükendi'}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {artwork.shopier_url ? (
                            <a
                              href={artwork.shopier_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                            >
                              <span>🛒 Bağlı</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-xs text-gray-400">Yok</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => togglePublished(artwork.id, artwork.is_published)}
                              className={`text-xs px-2 py-1 rounded-full ${
                                artwork.is_published
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {artwork.is_published ? '✓ Yayında' : 'Taslak'}
                            </button>
                            {artwork.featured && (
                              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                ⭐ Öne Çıkan
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/artworks/edit/${artwork.id}`}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-sm transition-colors"
                              title="Düzenle"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(artwork.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-sm transition-colors"
                              title="Sil"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
