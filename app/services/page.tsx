'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { ShoppingCart, X, ChevronDown, Download } from 'lucide-react'
import jsPDF from 'jspdf'

interface Service {
  id: string
  category: string
  badge: string
  title: string
  description: string
  price: number
  unit: string
}

const services: Service[] = [
  // Video & Prodüksiyon
  {
    id: 'social-media-video',
    category: 'Video & Prodüksiyon',
    badge: 'Video Çekim',
    title: 'Sosyal Medya Video Çekimi',
    description: 'Reels, TikTok ve feed videoları için profesyonel çekim.',
    price: 2500,
    unit: 'adet'
  },
  {
    id: 'drone-shooting',
    category: 'Video & Prodüksiyon',
    badge: 'Drone',
    title: 'Drone Çekimi',
    description: 'Hava çekimi ile etkileyici görüntüler.',
    price: 3500,
    unit: 'adet'
  },
  {
    id: 'promotional-film',
    category: 'Video & Prodüksiyon',
    badge: 'Tanıtım Filmi',
    title: 'Tanıtım Filmi',
    description: 'Şirket ve ürün tanıtımı için sinematik video.',
    price: 8500,
    unit: 'adet'
  },
  {
    id: 'product-photo',
    category: 'Video & Prodüksiyon',
    badge: 'Ürün Fotoğraf',
    title: 'Ürün Fotoğraf Çekimi',
    description: 'E-ticaret ve sosyal medya için ürün fotoğrafları.',
    price: 1800,
    unit: 'seans'
  },
  {
    id: 'corporate-photo',
    category: 'Video & Prodüksiyon',
    badge: 'Kurumsal Fotoğraf',
    title: 'Kurumsal Fotoğraf Çekimi',
    description: 'Ofis, ekip ve etkinlik fotoğrafları.',
    price: 2500,
    unit: 'seans'
  },
  {
    id: 'video-editing',
    category: 'Video & Prodüksiyon',
    badge: 'Video Kurgu',
    title: 'Video Kurgu ve Post Prodüksiyon',
    description: 'Renk düzeltme, ses tasarımı, efekt ve kurgu.',
    price: 1500,
    unit: 'dakika'
  },
  {
    id: 'motion-graphics',
    category: 'Video & Prodüksiyon',
    badge: 'Motion Graphics',
    title: 'Motion Graphics ve Animasyon',
    description: '2D/3D animasyon ve motion graphics tasarım.',
    price: 3000,
    unit: 'adet'
  },
  {
    id: 'documentary',
    category: 'Video & Prodüksiyon',
    badge: 'Belgesel',
    title: 'Belgesel ve Röportaj Çekimi',
    description: 'Hikaye odaklı belgesel ve röportaj prodüksiyonu.',
    price: 12000,
    unit: 'proje'
  },
  {
    id: 'live-stream',
    category: 'Video & Prodüksiyon',
    badge: 'Canlı Yayın',
    title: 'Canlı Yayın Prodüksiyonu',
    description: 'Etkinlik ve webinar için canlı yayın teknik desteği.',
    price: 5000,
    unit: 'etkinlik'
  },
  {
    id: '360-video',
    category: 'Video & Prodüksiyon',
    badge: '360° Video',
    title: '360° Video Çekimi',
    description: 'Sanal tur ve immersive deneyimler için 360° çekim.',
    price: 4500,
    unit: 'adet'
  },

  // Dijital Pazarlama
  {
    id: 'social-media-management',
    category: 'Dijital Pazarlama',
    badge: 'Sosyal Medya',
    title: 'Sosyal Medya Yönetimi',
    description: 'Instagram, Facebook, TikTok hesap yönetimi.',
    price: 4500,
    unit: 'ay'
  },
  {
    id: 'google-ads',
    category: 'Dijital Pazarlama',
    badge: 'Google Ads',
    title: 'Google Ads Yönetimi',
    description: 'Arama ve görüntülü reklam kampanyaları.',
    price: 3500,
    unit: 'ay'
  },
  {
    id: 'meta-ads',
    category: 'Dijital Pazarlama',
    badge: 'Meta Ads',
    title: 'Meta Ads (FB ve IG)',
    description: 'Hedefli Facebook ve Instagram reklamları.',
    price: 3000,
    unit: 'ay'
  },
  {
    id: 'content-creation',
    category: 'Dijital Pazarlama',
    badge: 'İçerik Üretimi',
    title: 'İçerik Üretimi Paketi',
    description: 'Aylık 20 adet görsel ve 10 adet kısa video içerik.',
    price: 6000,
    unit: 'ay'
  },
  {
    id: 'influencer-marketing',
    category: 'Dijital Pazarlama',
    badge: 'Influencer Marketing',
    title: 'Influencer Marketing Kampanyası',
    description: 'Fenomen seçimi, anlaşma ve kampanya yönetimi.',
    price: 8000,
    unit: 'kampanya'
  },
  {
    id: 'seo-optimization',
    category: 'Dijital Pazarlama',
    badge: 'SEO',
    title: 'SEO Optimizasyonu',
    description: 'Arama motoru optimizasyonu ve organik trafik artırma.',
    price: 5000,
    unit: 'ay'
  },
  {
    id: 'email-marketing',
    category: 'Dijital Pazarlama',
    badge: 'E-posta Pazarlama',
    title: 'E-posta Pazarlama Kampanyası',
    description: 'Newsletter tasarım, yazım ve gönderim yönetimi.',
    price: 2500,
    unit: 'ay'
  },
  {
    id: 'marketing-strategy',
    category: 'Dijital Pazarlama',
    badge: 'Strateji Danışmanlığı',
    title: 'Dijital Pazarlama Stratejisi',
    description: 'Marka analizi ve 6 aylık dijital pazarlama stratejisi.',
    price: 15000,
    unit: 'proje'
  },
  {
    id: 'community-management',
    category: 'Dijital Pazarlama',
    badge: 'Topluluk Yönetimi',
    title: 'Topluluk Yönetimi',
    description: 'Yorum, mesaj ve kullanıcı etkileşimi yönetimi.',
    price: 2000,
    unit: 'ay'
  },
  {
    id: 'analytics-reporting',
    category: 'Dijital Pazarlama',
    badge: 'Raporlama',
    title: 'Analitik ve Raporlama',
    description: 'Detaylı performans analizi ve aylık raporlama.',
    price: 1500,
    unit: 'ay'
  },

  // Web & Yazılım
  {
    id: 'corporate-website',
    category: 'Web & Yazılım',
    badge: 'Kurumsal Web',
    title: 'Kurumsal Web Sitesi',
    description: '5 sayfalı, mobil uyumlu, SEO optimize.',
    price: 15000,
    unit: 'proje'
  },
  {
    id: 'ecommerce-website',
    category: 'Web & Yazılım',
    badge: 'E-Ticaret',
    title: 'E-Ticaret Sitesi',
    description: 'WooCommerce veya Shopify entegrasyonlu.',
    price: 25000,
    unit: 'proje'
  },
  {
    id: 'landing-page',
    category: 'Web & Yazılım',
    badge: 'Landing Page',
    title: 'Landing Page Tasarımı',
    description: 'Kampanya ve ürün tanıtımı için tek sayfa site.',
    price: 5000,
    unit: 'adet'
  },
  {
    id: 'mobile-app',
    category: 'Web & Yazılım',
    badge: 'Mobil Uygulama',
    title: 'Mobil Uygulama Geliştirme',
    description: 'iOS ve Android uygulaması (React Native).',
    price: 50000,
    unit: 'proje'
  },
  {
    id: 'web-maintenance',
    category: 'Web & Yazılım',
    badge: 'Bakım & Destek',
    title: 'Web Sitesi Bakım ve Destek',
    description: 'Güncelleme, yedekleme ve teknik destek.',
    price: 2000,
    unit: 'ay'
  },
  {
    id: 'ui-ux-design',
    category: 'Web & Yazılım',
    badge: 'UI/UX Tasarım',
    title: 'UI/UX Tasarım Hizmeti',
    description: 'Kullanıcı deneyimi ve arayüz tasarımı.',
    price: 8000,
    unit: 'proje'
  },
  {
    id: 'api-integration',
    category: 'Web & Yazılım',
    badge: 'API Entegrasyonu',
    title: 'API ve Sistem Entegrasyonu',
    description: 'Üçüncü parti sistem ve API entegrasyonları.',
    price: 6000,
    unit: 'proje'
  },
  {
    id: 'database-design',
    category: 'Web & Yazılım',
    badge: 'Veritabanı',
    title: 'Veritabanı Tasarımı',
    description: 'Özel veritabanı mimarisi ve optimizasyon.',
    price: 7000,
    unit: 'proje'
  },
  {
    id: 'hosting-setup',
    category: 'Web & Yazılım',
    badge: 'Hosting & Domain',
    title: 'Hosting ve Domain Kurulumu',
    description: 'Sunucu kurulumu, SSL ve DNS yönetimi.',
    price: 1000,
    unit: 'proje'
  },
  {
    id: 'web-security',
    category: 'Web & Yazılım',
    badge: 'Güvenlik',
    title: 'Web Güvenlik Denetimi',
    description: 'Güvenlik açığı taraması ve iyileştirme önerileri.',
    price: 4000,
    unit: 'proje'
  },

  // Grafik Tasarım
  {
    id: 'brand-identity',
    category: 'Grafik Tasarım',
    badge: 'Kurumsal Kimlik',
    title: 'Kurumsal Kimlik Tasarımı',
    description: 'Logo, kartvizit, antetli kağıt, brand guide.',
    price: 12000,
    unit: 'paket'
  },
  {
    id: 'logo-design',
    category: 'Grafik Tasarım',
    badge: 'Logo',
    title: 'Logo Tasarımı',
    description: '3 konsept, sınırsız revizyon, tüm format teslimi.',
    price: 5000,
    unit: 'proje'
  },
  {
    id: 'social-media-design',
    category: 'Grafik Tasarım',
    badge: 'Sosyal Medya Tasarım',
    title: 'Sosyal Medya Görselleri',
    description: 'Aylık 30 adet feed ve story tasarımı.',
    price: 3500,
    unit: 'ay'
  },
  {
    id: 'brochure-design',
    category: 'Grafik Tasarım',
    badge: 'Broşür',
    title: 'Broşür ve Katalog Tasarımı',
    description: 'Ürün katalogu ve tanıtım broşürü tasarımı.',
    price: 4000,
    unit: 'proje'
  },
  {
    id: 'packaging-design',
    category: 'Grafik Tasarım',
    badge: 'Ambalaj',
    title: 'Ambalaj Tasarımı',
    description: 'Ürün ambalajı 3D mockup ve baskıya hazır dosya.',
    price: 6000,
    unit: 'proje'
  },
  {
    id: 'banner-design',
    category: 'Grafik Tasarım',
    badge: 'Banner',
    title: 'Banner ve Billboard Tasarımı',
    description: 'Açık hava ve etkinlik için büyük format tasarım.',
    price: 2500,
    unit: 'adet'
  },
  {
    id: 'infographic',
    category: 'Grafik Tasarım',
    badge: 'İnfografik',
    title: 'İnfografik Tasarımı',
    description: 'Veri görselleştirme ve bilgilendirici grafikler.',
    price: 2000,
    unit: 'adet'
  },
  {
    id: 'presentation',
    category: 'Grafik Tasarım',
    badge: 'Sunum',
    title: 'Sunum Tasarımı',
    description: 'PowerPoint / Keynote şablon ve sunum tasarımı.',
    price: 3000,
    unit: 'proje'
  },
  {
    id: 'menu-design',
    category: 'Grafik Tasarım',
    badge: 'Menü',
    title: 'Menü ve Fiyat Listesi Tasarımı',
    description: 'Restoran, kafe ve işletme menü tasarımı.',
    price: 2000,
    unit: 'proje'
  },
  {
    id: 'sticker-design',
    category: 'Grafik Tasarım',
    badge: 'Etiket & Sticker',
    title: 'Etiket ve Sticker Tasarımı',
    description: 'Ürün etiketi, sticker ve çıkartma tasarımı.',
    price: 1500,
    unit: 'set'
  },

  // Promosyon Ürünleri
  {
    id: 'tshirt-printing',
    category: 'Promosyon Ürünleri',
    badge: 'T-shirt',
    title: 'T-shirt Baskı',
    description: 'Özel tasarım t-shirt baskı (minimum 50 adet).',
    price: 80,
    unit: 'adet'
  },
  {
    id: 'tote-bag',
    category: 'Promosyon Ürünleri',
    badge: 'Bez Çanta',
    title: 'Bez Çanta Baskı',
    description: 'Logo ve slogan baskılı bez çanta.',
    price: 25,
    unit: 'adet'
  },
  {
    id: 'mug-printing',
    category: 'Promosyon Ürünleri',
    badge: 'Kupa',
    title: 'Kupa Bardak Baskı',
    description: 'Beyaz seramik kupa bardak logo baskı.',
    price: 30,
    unit: 'adet'
  },
  {
    id: 'notebook',
    category: 'Promosyon Ürünleri',
    badge: 'Defter',
    title: 'Özel Tasarım Defter',
    description: 'A5 defter, ciltli, özel kapak tasarımı.',
    price: 15,
    unit: 'adet'
  },
  {
    id: 'pen-printing',
    category: 'Promosyon Ürünleri',
    badge: 'Kalem',
    title: 'Promosyon Kalem',
    description: 'Logo baskılı tükenmez kalem.',
    price: 5,
    unit: 'adet'
  },
  {
    id: 'usb-flash',
    category: 'Promosyon Ürünleri',
    badge: 'USB',
    title: 'USB Flash Bellek',
    description: '8GB USB bellek, logo baskı (minimum 100 adet).',
    price: 40,
    unit: 'adet'
  },
  {
    id: 'powerbank',
    category: 'Promosyon Ürünleri',
    badge: 'Powerbank',
    title: 'Promosyon Powerbank',
    description: '5000mAh powerbank, logo baskı.',
    price: 120,
    unit: 'adet'
  },
  {
    id: 'badge',
    category: 'Promosyon Ürünleri',
    badge: 'Rozet',
    title: 'Rozet ve Magnet',
    description: 'Özel tasarım rozet ve buzdolabı magneti.',
    price: 8,
    unit: 'adet'
  },
  {
    id: 'keychain',
    category: 'Promosyon Ürünleri',
    badge: 'Anahtarlık',
    title: 'Anahtarlık',
    description: 'Metal veya PVC anahtarlık, logo baskı.',
    price: 12,
    unit: 'adet'
  },
  {
    id: 'sticker-print',
    category: 'Promosyon Ürünleri',
    badge: 'Sticker Baskı',
    title: 'Sticker Baskı',
    description: 'Özel kesim sticker, die-cut baskı.',
    price: 3,
    unit: 'adet'
  },
]

const categories = ['Tümü', ...Array.from(new Set(services.map(s => s.category)))]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [cart, setCart] = useState<{[key: string]: number}>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('services_cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('services_cart', JSON.stringify(cart))
  }, [cart])

  const filteredServices = selectedCategory === 'Tümü' 
    ? services 
    : services.filter(s => s.category === selectedCategory)

  const addToCart = (serviceId: string) => {
    setCart(prev => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) + 1
    }))
  }

  const updateQuantity = (serviceId: string, delta: number) => {
    setCart(prev => {
      const newQuantity = (prev[serviceId] || 0) + delta
      if (newQuantity <= 0) {
        const { [serviceId]: _, ...rest } = prev
        return rest
      }
      return {
        ...prev,
        [serviceId]: newQuantity
      }
    })
  }

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  
  const cartItems = Object.entries(cart).map(([serviceId, quantity]) => {
    const service = services.find(s => s.id === serviceId)!
    return { service, quantity, subtotal: service.price * quantity }
  })

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0)

  const generatePDF = () => {
    const doc = new jsPDF()
    
    // Header
    doc.setFontSize(20)
    doc.text('SPION PICTURES', 105, 20, { align: 'center' })
    doc.setFontSize(12)
    doc.text('Hizmet Teklif Faturası', 105, 30, { align: 'center' })
    
    // Date
    doc.setFontSize(10)
    doc.text(`Tarih: ${new Date().toLocaleDateString('tr-TR')}`, 20, 45)
    
    // Line
    doc.setLineWidth(0.5)
    doc.line(20, 50, 190, 50)
    
    // Table header
    let yPos = 60
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Hizmet', 20, yPos)
    doc.text('Miktar', 120, yPos)
    doc.text('Birim Fiyat', 145, yPos)
    doc.text('Tutar', 175, yPos)
    
    yPos += 5
    doc.line(20, yPos, 190, yPos)
    yPos += 8
    
    // Items
    doc.setFont('helvetica', 'normal')
    cartItems.forEach(item => {
      if (yPos > 270) {
        doc.addPage()
        yPos = 20
      }
      
      doc.text(item.service.title.substring(0, 35), 20, yPos)
      doc.text(`${item.quantity} ${item.service.unit}`, 120, yPos)
      doc.text(`₺${item.service.price.toLocaleString('tr-TR')}`, 145, yPos)
      doc.text(`₺${item.subtotal.toLocaleString('tr-TR')}`, 175, yPos)
      yPos += 8
    })
    
    // Total
    yPos += 5
    doc.setLineWidth(0.5)
    doc.line(20, yPos, 190, yPos)
    yPos += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text(`TOPLAM: ₺${total.toLocaleString('tr-TR')}`, 175, yPos, { align: 'right' })
    
    // Footer
    yPos += 20
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('Bu belge proforma faturadır. Resmi fatura işlem sonrası kesilecektir.', 105, yPos, { align: 'center' })
    doc.text('info@spionpictures.com | +90 552 551 51 84', 105, yPos + 7, { align: 'center' })
    
    doc.save(`spion-teklif-${Date.now()}.pdf`)
  }

  // Group services by category
  const servicesByCategory = selectedCategory === 'Tümü'
    ? categories.slice(1).map(cat => ({
        category: cat,
        items: services.filter(s => s.category === cat)
      }))
    : [{
        category: selectedCategory,
        items: filteredServices
      }]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-16 border-b border-border animate-fade-in">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Hizmetlerimiz
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Video prodüksiyondan dijital pazarlamaya, web sitesi geliştirmeden 
                promosyon ürünlerine kadar markanızı büyütecek profesyonel hizmetler.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-purewhite border-b border-border sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex items-center justify-between gap-4">
              {/* Category Dropdown */}
              <div className="relative flex-1 max-w-sm">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3 bg-purewhite border-2 border-border rounded-sm text-left flex items-center justify-between hover:border-primary transition-all duration-300 group"
                >
                  <span className="font-medium">{selectedCategory}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-purewhite border-2 border-border rounded-sm shadow-lg overflow-hidden animate-slide-down z-50">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat)
                          setDropdownOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-primary hover:text-purewhite transition-all duration-200 ${
                          selectedCategory === cat ? 'bg-primary/10 text-primary font-medium' : ''
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Button */}
              {totalItems > 0 && (
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Sepet ({totalItems})</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            {servicesByCategory.map(({ category, items }) => (
              <div key={category} className="mb-16 last:mb-0 animate-fade-in">
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold mb-2">
                    {category}
                  </h2>
                  <div className="h-[1px] w-24 bg-primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(service => (
                    <div
                      key={service.id}
                      className="bg-purewhite border border-border rounded-sm p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {service.badge}
                      </span>

                      <h3 className="font-semibold text-lg mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-secondarytext mb-4">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₺{service.price.toLocaleString('tr-TR')}
                          </span>
                          <span className="text-sm text-secondarytext ml-2">
                            / {service.unit}
                          </span>
                        </div>
                      </div>

                      {cart[service.id] ? (
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-border rounded-sm overflow-hidden">
                            <button
                              onClick={() => updateQuantity(service.id, -1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-purewhite transition-all duration-200"
                            >
                              −
                            </button>
                            <span className="w-12 text-center font-medium">
                              {cart[service.id]}
                            </span>
                            <button
                              onClick={() => updateQuantity(service.id, 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-purewhite transition-all duration-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => addToCart(service.id)}
                            className="flex-1 px-4 py-2 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            Sepete Ekle
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(service.id)}
                          className="w-full px-4 py-2 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Sepete Ekle
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-purewhite rounded-sm max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold">Sepetim</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-border rounded-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {cartItems.length === 0 ? (
                <p className="text-center text-secondarytext py-8">Sepetiniz boş</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(({ service, quantity, subtotal }) => (
                    <div key={service.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{service.title}</h3>
                        <p className="text-sm text-secondarytext mb-2">
                          {service.category}
                        </p>
                        <p className="text-sm">
                          ₺{service.price.toLocaleString('tr-TR')} x {quantity} {service.unit}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-primary">
                          ₺{subtotal.toLocaleString('tr-TR')}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(service.id, -1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded hover:bg-primary hover:text-purewhite transition-all"
                          >
                            −
                          </button>
                          <button
                            onClick={() => updateQuantity(service.id, 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded hover:bg-primary hover:text-purewhite transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xl font-bold">TOPLAM</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    ₺{total.toLocaleString('tr-TR')}
                  </span>
                </div>
                <button
                  onClick={generatePDF}
                  className="w-full bg-primary text-purewhite px-6 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  PDF İndir
                </button>
                <p className="text-xs text-secondarytext text-center mt-3">
                  Proforma fatura olarak indirilecektir
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
