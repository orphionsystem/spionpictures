import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Spion Pictures',
  description: 'Spion Pictures gizlilik politikası ve kişisel veri koruma bildirimi.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Gizlilik Politikası
              </h1>
              <p className="text-sm text-secondarytext">
                Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl prose prose-lg">
              <div className="space-y-8 text-secondarytext">
                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Genel Bilgiler</h2>
                  <p>
                    Spion Pictures ("biz", "bizim" veya "Şirket") olarak, kullanıcılarımızın gizliliğine önem veriyoruz. 
                    Bu Gizlilik Politikası, web sitemiz (spionpictures.com) üzerinden topladığımız kişisel bilgilerin nasıl 
                    kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Topladığımız Bilgiler</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">2.1. Kişisel Bilgiler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ad ve soyad</li>
                    <li>E-posta adresi</li>
                    <li>Telefon numarası</li>
                    <li>İletişim mesajları ve talepleri</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">2.2. Otomatik Toplanan Bilgiler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP adresi</li>
                    <li>Tarayıcı türü ve versiyonu</li>
                    <li>Ziyaret edilen sayfalar</li>
                    <li>Ziyaret süresi ve tarihi</li>
                    <li>Çerezler (cookies)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Bilgilerin Kullanım Amaçları</h2>
                  <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>İletişim taleplerinize yanıt vermek</li>
                    <li>Sipariş ve hizmet süreçlerini yönetmek</li>
                    <li>Web sitesi deneyimini iyileştirmek</li>
                    <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                    <li>Pazarlama ve bilgilendirme (onay vermeniz halinde)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Bilgi Paylaşımı</h2>
                  <p>
                    Kişisel bilgilerinizi üçüncü şahıslarla paylaşmıyoruz. Ancak aşağıdaki durumlarda paylaşım yapabiliriz:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Yasal zorunluluklar (mahkeme kararı, resmi talep)</li>
                    <li>Ödeme işlemleri için güvenli ödeme sağlayıcıları (Shopier)</li>
                    <li>Teknik altyapı sağlayıcıları (hosting, veritabanı)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Çerezler (Cookies)</h2>
                  <p>
                    Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezler, 
                    tarayıcınız tarafından cihazınızda saklanan küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan 
                    çerezleri engelleyebilir veya silebilirsiniz.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Veri Güvenliği</h2>
                  <p>
                    Kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemleri alıyoruz:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL sertifikası ile şifreli bağlantı</li>
                    <li>Güvenli veritabanı sistemleri (Supabase)</li>
                    <li>Düzenli güvenlik denetimleri</li>
                    <li>Sınırlı erişim yetkilendirmesi</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. Haklarınız</h2>
                  <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurtiçinde veya yurtdışında aktarıldığı üçüncü kişileri bilme</li>
                    <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini talep etme</li>
                    <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç çıkmasına itiraz etme</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Veri Saklama Süresi</h2>
                  <p>
                    Kişisel verileriniz, toplama amaçları için gerekli olan süre boyunca ve yasal saklama 
                    yükümlülüklerimiz doğrultusunda saklanır. Bu süre sona erdiğinde verileriniz silinir, 
                    yok edilir veya anonim hale getirilir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Çocukların Gizliliği</h2>
                  <p>
                    Web sitemiz 18 yaşından küçük kişilere yönelik değildir. Bilerek 18 yaşından küçük 
                    kişilerden kişisel bilgi toplamıyoruz. Eğer bir ebeveyn veya vasi olarak çocuğunuzun 
                    bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle iletişime geçin.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Değişiklikler</h2>
                  <p>
                    Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda, 
                    web sitemizdeki duyuru ile bilgilendirileceksiniz. Politikayı düzenli olarak gözden 
                    geçirmenizi öneririz.
                  </p>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">İletişim</h2>
                  <p className="mb-4">
                    Gizlilik politikamız veya kişisel verileriniz hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-posta:</strong> info@spionpictures.com</p>
                    <p><strong>Telefon:</strong> +90 552 551 51 84</p>
                    <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
