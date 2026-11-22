import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Sanat Eserleri | Spion Pictures',
  description: 'Özgün dijital sanat eserlerini keşfedin. Sınırlı edisyonlu Fine Art baskılar.',
}

export const revalidate = 0 // Always fetch fresh data

async function getArtworks() {
  const supabase = getSupabaseAdmin()
  
  const { data: artworks, error } = await supabase
    .from('artworks')
    .select(`
      *,
      images:artwork_images(*)
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching artworks:', error)
    return []
  }

  console.log('Artworks loaded:', artworks?.length, 'First images count:', artworks?.[0]?.images?.length)

  return artworks || []
}

export default async function ArtworksPage() {
  const artworks = await getArtworks()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Sanat Eserleri
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Dijital ortamda özgün olarak yaratılan, fiziksel dünyada koleksiyon 
                değeri taşıyan sanat eserleri.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-purewhite border-b border-border">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-4 py-2 bg-primary text-purewhite rounded-sm text-sm font-medium">
                  Tümü
                </button>
                <button className="px-4 py-2 bg-border text-primary rounded-sm text-sm font-medium hover:bg-primary hover:text-purewhite transition-colors">
                  Yeni Eklenenler
                </button>
                <button className="px-4 py-2 bg-border text-primary rounded-sm text-sm font-medium hover:bg-primary hover:text-purewhite transition-colors">
                  Öne Çıkanlar
                </button>
                <button className="px-4 py-2 bg-border text-primary rounded-sm text-sm font-medium hover:bg-primary hover:text-purewhite transition-colors">
                  Stokta Var
                </button>
              </div>

              {/* Sort */}
              <select className="px-4 py-2 border border-border rounded-sm text-sm bg-purewhite">
                <option>Varsayılan Sıralama</option>
                <option>Fiyat: Düşükten Yükseğe</option>
                <option>Fiyat: Yüksekten Düşüğe</option>
                <option>Yeni Eklenenler</option>
                <option>Alfabetik</option>
              </select>
            </div>
          </div>
        </section>

        {/* Artwork Grid */}
        <section className="py-16">
          <div className="container-custom">
            {artworks.length === 0 ? (
              /* Empty State */
              <div className="text-center py-24">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-border rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-secondarytext"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-3">
                    Henüz Eser Eklenmedi
                  </h2>
                  <p className="text-secondarytext mb-6">
                    İlk sanat eserlerinizi yüklemek için admin paneline gidin.
                  </p>
                  <a
                    href="/admin/artworks/upload"
                    className="inline-flex items-center gap-2 bg-primary text-purewhite px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Eser Yükle
                    <span>→</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Artworks Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.map((artwork: any) => {
                  const primaryImage = artwork.images?.find((img: any) => img.is_primary) || artwork.images?.[0]
                  const remainingEditions = artwork.total_editions - artwork.sold_editions

                  return (
                    <Link
                      key={artwork.id}
                      href={`/artworks/${artwork.slug}`}
                      className="group"
                    >
                      {/* Image */}
                      <div className="relative aspect-[3/4] bg-border rounded-sm overflow-hidden mb-4">
                        {primaryImage ? (
                          <Image
                            src={primaryImage.image_url}
                            alt={primaryImage.alt_text_tr || artwork.title_tr}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400">No Image</span>
                          </div>
                        )}
                        
                        {/* Featured Badge */}
                        {artwork.featured && (
                          <div className="absolute top-4 left-4 bg-primary text-purewhite px-3 py-1 text-xs font-semibold rounded-sm">
                            Öne Çıkan
                          </div>
                        )}

                        {/* Stock Status */}
                        {remainingEditions <= 5 && remainingEditions > 0 && (
                          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 text-xs font-semibold rounded-sm">
                            Son {remainingEditions} Adet
                          </div>
                        )}
                        {remainingEditions === 0 && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-sm">
                            Tükendi
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-xs text-secondarytext mb-1 uppercase tracking-wider">
                          {artwork.artist_name}
                        </p>
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {artwork.title_tr}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">
                            {formatPrice(artwork.base_price, artwork.currency)}
                          </p>
                          <p className="text-sm text-secondarytext">
                            Edisyon: {artwork.total_editions}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
