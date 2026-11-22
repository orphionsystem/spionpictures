import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hakkımızda | Spion Pictures',
  description: 'Spion Pictures, sanatın yalnızca ekranda var olmak zorunda olmadığı fikrinden doğdu. Dijital ortamda üretilen özgün eserleri fiziksel koleksiyonlara dönüştürüyoruz.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block h-[1px] w-24 bg-purewhite mb-8" />
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
                Spion Pictures
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Sanat, ekranda bitmez.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Hikâyemiz
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-secondarytext leading-relaxed mb-6">
                  Spion Pictures, sanatın yalnızca ekranda var olmak zorunda olmadığı 
                  fikrinden doğdu. Dijital ortamda üretilen özgün eserleri fiziksel 
                  koleksiyonlara dönüştürüyoruz.
                </p>
                <p className="text-lg text-secondarytext leading-relaxed mb-6">
                  Her eser, dijital yaratım sürecinin özgünlüğünü korurken, fiziksel 
                  dünyada dokunulabilir bir sanat deneyimi sunuyor. Görsel üretimi 
                  yalnızca bir teknik değil, ifade biçimi olarak görüyoruz.
                </p>
                <p className="text-lg text-secondarytext leading-relaxed">
                  Sınırlı edisyonlu baskılar, özenle seçilmiş malzemeler ve koleksiyonluk 
                  sunum anlayışıyla, dijital sanatı fiziksel bir değere dönüştürüyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
                Değerlerimiz
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">1</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Özgünlük
                  </h3>
                  <p className="text-secondarytext">
                    Her eser, dijital ortamda özgün olarak yaratılır ve sınırlı 
                    sayıda üretilir.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">2</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Kalite
                  </h3>
                  <p className="text-secondarytext">
                    Arşiv kalitesinde malzemeler ve profesyonel baskı teknikleri 
                    kullanırız.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">3</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Koleksiyon
                  </h3>
                  <p className="text-secondarytext">
                    Sınırlı edisyonlar, numaralandırma ve özel ambalaj ile sunulur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spion Media Section */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                Beyond Art
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Spion Media
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Spion Pictures'ın yaratıcı üretim kanadı olan Spion Media, 
                film prodüksiyonundan dijital teknolojilere uzanan geniş bir 
                yelpazede hizmet sunuyor.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Post prodüksiyon, drone çekimleri, yapay zeka destekli içerik 
                üretimi, web tasarım, mobil uygulama geliştirme ve dijital pazarlama 
                alanlarında profesyonel çözümler üretiyoruz.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-purewhite text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-purewhite hover:text-primary transition-all duration-300"
              >
                Hizmetlerimiz
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                İletişime Geç
              </h2>
              <p className="text-lg text-secondarytext mb-8">
                Sanat eserleri, projeler ve işbirlikleri hakkında konuşalım.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all"
                >
                  İletişim Formu
                  <span>→</span>
                </a>
                <a
                  href="mailto:info@spionpictures.com"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary hover:text-purewhite transition-all"
                >
                  Email Gönder
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
