import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import { Metadata } from 'next'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Spion Pictures | Sanat, ekranda bitmez',
  description: 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar. Spion Pictures sanat galerisi ve yaratıcı medya stüdyosu.',
}

export const revalidate = 0

async function getFeaturedArtworks() {
  const supabase = getSupabaseServerClient()
  
  const { data: artworks } = await supabase
    .from('artworks')
    .select(`
      *,
      images:artwork_images(*)
    `)
    .eq('is_published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3)

  return artworks || []
}

export default async function HomePage() {
  const featuredArtworks = await getFeaturedArtworks()

  return (
    <>
      <Header />
      <main>
        <Hero lang="tr" />
        
        {/* Selected Artworks Section */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Seçilmiş Eserler
              </h2>
              <p className="text-secondarytext text-lg max-w-2xl mx-auto">
                Spion Pictures koleksiyonundan özenle seçilmiş eserler.
              </p>
            </div>
            
            {featuredArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredArtworks.map((artwork: any) => {
                  const primaryImage = artwork.images?.find((img: any) => img.is_primary) || artwork.images?.[0]
                  
                  return (
                    <Link
                      key={artwork.id}
                      href={`/artworks/${artwork.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-[3/4] bg-border rounded-sm overflow-hidden mb-4">
                        {primaryImage ? (
                          <Image
                            src={primaryImage.image_url}
                            alt={primaryImage.alt_text_tr || artwork.title_tr}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400">No Image</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-secondarytext mb-1 uppercase tracking-wider">
                          {artwork.artist_name}
                        </p>
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {artwork.title_tr}
                        </h3>
                        <p className="font-semibold">
                          {formatPrice(artwork.base_price, artwork.currency)}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-border rounded-sm flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-secondarytext text-sm mb-2">
                        Eserler yönetim panelinden eklenecek
                      </p>
                      {i === 2 && (
                        <a
                          href="/admin/artworks/upload"
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          Eser Yükle →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <Link
                href="/artworks"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary hover:text-purewhite transition-all duration-300"
              >
                Tüm Eserleri Gör
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* The Art of Print Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Dijitalden Fiziksele
              </h2>
              <p className="text-secondarytext text-lg leading-relaxed">
                Her eser, dijital ortamda özgün olarak yaratılır ve özenle seçilmiş 
                baskı malzemeleriyle fiziksel bir sanat deneyimine dönüşür.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">1</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Özgün Dijital Sanat
                </h3>
                <p className="text-secondarytext">
                  Her eser, dijital ortamda özgün olarak üretilir ve yalnızca 
                  sınırlı sayıda basılır.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">2</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Özenle Seçilmiş Malzemeler
                </h3>
                <p className="text-secondarytext">
                  Arşiv kalitesinde kağıt ve profesyonel baskı teknikleri 
                  kullanılır.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">3</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Koleksiyon Değeri
                </h3>
                <p className="text-secondarytext">
                  Sınırlı edisyonlar, numaralandırma ve özel ambalaj ile 
                  sunulur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Spion Pictures */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-block h-[1px] w-24 bg-primary mb-6" />
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Spion Pictures
                </h2>
              </div>
              
              <p className="text-lg text-secondarytext leading-relaxed mb-8">
                Spion Pictures, sanatın yalnızca ekranda var olmak zorunda olmadığı 
                fikrinden doğdu. Dijital ortamda üretilen özgün eserleri fiziksel 
                koleksiyonlara dönüştürüyoruz. Görsel üretimi yalnızca bir teknik 
                değil, ifade biçimi olarak görüyoruz.
              </p>

              <a
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              >
                Daha Fazla Bilgi
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Spion Media Services Preview */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                Beyond Art
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                SPION MEDIA
              </h2>
              <p className="text-xl text-gray-300">
                Fikirleri görüntüye, görüntüleri deneyime dönüştürüyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="/services#film" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Film & Production
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Post prodüksiyon, drone çekimleri, 360° videolar ve AI destekli 
                    video prodüksiyonu.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Keşfet →
                  </span>
                </div>
              </a>

              <a href="/services#digital" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Digital & Technology
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Web tasarım, mobil uygulama, AI otomasyonları ve siber güvenlik 
                    çözümleri.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Keşfet →
                  </span>
                </div>
              </a>

              <a href="/services#marketing" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Marketing & Growth
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Sosyal medya yönetimi, içerik üretimi ve dijital reklam 
                    kampanyaları.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Keşfet →
                  </span>
                </div>
              </a>

              <a href="/services#experiential" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Experiential Media
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Kostümlü organizasyon, büyük el maketleri ve NFC dijital ürünler.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Keşfet →
                  </span>
                </div>
              </a>
            </div>

            <div className="text-center mt-16">
              <a
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-purewhite text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-purewhite hover:text-primary transition-all duration-300"
              >
                Tüm Hizmetler
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Bir fikrin mi var?
              </h2>
              <p className="text-lg text-secondarytext mb-8">
                Sanat, prodüksiyon ve dijital projeler için bizimle iletişime geç.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all"
              >
                Projeni Anlat
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
