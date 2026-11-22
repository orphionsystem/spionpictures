import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İade ve Teslimat Koşulları | Spion Pictures',
  description: 'Spion Pictures ürün iade, değişim ve teslimat politikası.',
}

export default function RefundShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                İade ve Teslimat
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
                {/* TESLİMAT POLİTİKASI */}
                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20">
                  <h2 className="font-display text-3xl font-bold text-primarytext mb-4">📦 Teslimat Politikası</h2>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Teslimat Kapsamı</h2>
                  <p>
                    Spion Pictures, farklı ürün ve hizmet kategorileri için aşağıdaki teslimat yöntemlerini kullanır:
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">1.1. Fiziksel Ürünler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Sanat Eserleri (Fine Art Baskılar):</strong> Profesyonel kargo ile özel paketleme</li>
                    <li><strong>Promosyon Ürünleri:</strong> Standart kargo ile toplu teslimat</li>
                    <li><strong>Özel Sipariş Ürünler:</strong> Proje bazlı teslimat anlaşması</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">1.2. Dijital Hizmetler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Video Prodüksiyon:</strong> Online teslimat (WeTransfer, Google Drive)</li>
                    <li><strong>Grafik Tasarım:</strong> E-posta veya cloud link ile dijital teslimat</li>
                    <li><strong>Web & Yazılım:</strong> Online deployment veya kaynak kod transferi</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Teslimat Süreleri</h2>
                  
                  <div className="bg-purewhite p-4 rounded-sm border border-border mb-4">
                    <h3 className="font-semibold text-primarytext mb-3">Fiziksel Ürünler (Kargo)</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Stokta Mevcut Ürünler</strong></td>
                          <td className="py-2">2-5 iş günü</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Sanat Eseri Baskı</strong></td>
                          <td className="py-2">5-10 iş günü</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Özel Üretim</strong></td>
                          <td className="py-2">10-20 iş günü</td>
                        </tr>
                        <tr>
                          <td className="py-2"><strong>Promosyon Ürünleri (Toplu)</strong></td>
                          <td className="py-2">7-15 iş günü</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-purewhite p-4 rounded-sm border border-border">
                    <h3 className="font-semibold text-primarytext mb-3">Dijital Hizmetler</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Logo Tasarım</strong></td>
                          <td className="py-2">5-7 iş günü</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Sosyal Medya İçerik</strong></td>
                          <td className="py-2">3-5 iş günü</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Video Prodüksiyon</strong></td>
                          <td className="py-2">10-15 iş günü</td>
                        </tr>
                        <tr>
                          <td className="py-2"><strong>Web Sitesi</strong></td>
                          <td className="py-2">15-30 iş günü</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs mt-2">* Büyük projeler için özel süre anlaşması yapılır.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Teslimat Ücretleri</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Türkiye İçi Kargo:</strong> 50 TL (500 TL üzeri siparişlerde ücretsiz)</li>
                    <li><strong>Hızlı Kargo (1-2 gün):</strong> 100 TL</li>
                    <li><strong>Özel Paketleme (Sanat Eserleri):</strong> Ürün fiyatına dahil</li>
                    <li><strong>Uluslararası Kargo:</strong> Ülke ve ağırlığa göre değişkenlik gösterir (özel teklif)</li>
                    <li><strong>Dijital Teslimat:</strong> Ücretsiz</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Kargo Takibi</h2>
                  <p>
                    Siparişiniz kargoya verildiğinde size e-posta ve SMS ile takip numarası gönderilir. 
                    Kargo durumunuzu kargo firmasının web sitesinden anlık takip edebilirsiniz.
                  </p>
                  <p>
                    <strong>Kargo Firmaları:</strong> MNG Kargo, Aras Kargo, Yurtiçi Kargo (sipariş durumuna göre)
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Teslimat Sorunları</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">5.1. Hasarlı Teslimat</h3>
                  <p>
                    Ürün hasarlı veya kırık olarak size ulaştıysa:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Kargo teslim tutanağına "hasarlı teslim" notu düşürün</li>
                    <li>Ürünün fotoğraflarını çekin</li>
                    <li>48 saat içinde info@spionpictures.com adresine bildirim yapın</li>
                    <li>Ücretsiz yenisi gönderilir veya ücret iadesi yapılır</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.2. Adrese Teslim Edilememe</h3>
                  <p>
                    Kargo 3 defa adresinize teslim denemesi yapar. Teslim edilemezse kargo şubesine geri döner. 
                    Bu durumda sizinle iletişime geçeriz. 15 gün içinde teslim alınmayan ürünler firmamıza iade edilir 
                    ve kargo ücreti düşülerek ödemeniz iade edilir.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.3. Yanlış/Eksik Ürün</h3>
                  <p>
                    Sipariş ettiğiniz ürünle farklı veya eksik bir ürün gelirse, 7 gün içinde bildirim yapın. 
                    Doğru ürün tarafımızdan kargolanır, yanlış ürünü kargo ile iade edebilirsiniz.
                  </p>
                </div>

                {/* İADE POLİTİKASI */}
                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20 mt-12">
                  <h2 className="font-display text-3xl font-bold text-primarytext mb-4">🔄 İade Politikası</h2>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Cayma Hakkı (14 Gün)</h2>
                  <p>
                    6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca, ürünün size teslim edildiği 
                    tarihten itibaren <strong>14 gün içinde</strong> herhangi bir sebep göstermeksizin ve 
                    cezai şart ödemeksizin sözleşmeden cayma hakkına sahipsiniz.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">6.1. Cayma Hakkı Kapsamındaki Ürünler</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Standart katalog ürünleri</li>
                    <li>Ambalajı açılmamış promosyon ürünleri</li>
                    <li>Hasarsız ve kullanılmamış sanat baskıları</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">6.2. Cayma Hakkı Kapsamı Dışındaki Ürünler/Hizmetler</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Özel Sipariş Ürünler:</strong> Kişiye özel tasarlanmış veya üretilmiş ürünler</li>
                    <li><strong>Tamamlanmış Hizmetler:</strong> Dijital hizmetler (video, tasarım, yazılım) teslim edildikten sonra</li>
                    <li><strong>Ambalajı Açılmış Ürünler:</strong> Hijyen veya sağlık açısından iade edilemeyecek ürünler</li>
                    <li><strong>Hızlı Bozulan Ürünler:</strong> Varsa (yiyecek, bitki vb.)</li>
                    <li><strong>Orijinal Sanat Eserleri:</strong> Tek baskılı özgün eserler (değişim hariç)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. İade Süreci</h2>
                  
                  <div className="bg-purewhite p-6 rounded-sm border border-border">
                    <h3 className="font-semibold text-primarytext mb-4">İade Adımları:</h3>
                    <ol className="list-decimal pl-6 space-y-3">
                      <li>
                        <strong>Bildirim:</strong> İade etmek istediğinizi info@spionpictures.com adresine 
                        veya +90 552 551 51 84 numaralı telefona bildirin. Sipariş numaranızı ve iade sebebinizi belirtin.
                      </li>
                      <li>
                        <strong>Onay:</strong> İade talebiniz değerlendirilir ve 1 iş günü içinde onaylanır.
                      </li>
                      <li>
                        <strong>Gönderim:</strong> Ürünü orijinal ambalajı ile birlikte kargo ile gönderin. 
                        Kargo takip numarasını bize bildirin.
                      </li>
                      <li>
                        <strong>Kontrol:</strong> Ürün tarafımıza ulaştıktan sonra incelenir (1-2 iş günü).
                      </li>
                      <li>
                        <strong>İade:</strong> Ürün uygunsa, ödemeniz 10 iş günü içinde hesabınıza iade edilir.
                      </li>
                    </ol>
                  </div>

                  <p className="mt-4">
                    <strong>Önemli:</strong> İade kargo ücreti, ürün hatası veya yanlış gönderimde 
                    tarafımızca karşılanır. Cayma hakkı kullanımında kargo ücreti müşteriye aittir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Para İadesi</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kredi Kartı:</strong> Ödeme yaptığınız kredi kartına iade (banka sürecine bağlı olarak 2-14 iş günü)</li>
                    <li><strong>Havale/EFT:</strong> Belirttiğiniz IBAN numarasına havale (3-5 iş günü)</li>
                    <li><strong>Kapıda Ödeme:</strong> Belirttiğiniz IBAN numarasına havale</li>
                  </ul>
                  <p className="mt-2">
                    İade onayından sonra ödeme en geç <strong>14 gün içinde</strong> tarafınıza ulaşır.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Değişim</h2>
                  <p>
                    Ürününüzü değiştirmek istiyorsanız (beden, renk, model):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>14 gün içinde değişim talebi yapın</li>
                    <li>Ürünü iade edin</li>
                    <li>Yeni ürün ücretsiz kargo ile gönderilir</li>
                    <li>Fiyat farkı varsa ödenir veya iade edilir</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Garanti Koşulları</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">10.1. Sanat Eserleri</h3>
                  <p>
                    Fine Art baskılarımız profesyonel müze kalitesi malzeme ile üretilir:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Solmaya karşı 100+ yıl garanti</li>
                    <li>Üretim hatalarına karşı sınırsız değişim garantisi</li>
                    <li>Çerçeve hataları 6 ay garanti kapsamında</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">10.2. Dijital Hizmetler</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Teslimden sonra 2 revizyon hakkı (proje kapsamına göre değişir)</li>
                    <li>Teknik hatalar ücretsiz düzeltilir</li>
                    <li>Müşteri memnuniyeti garantisi</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">10.3. Promosyon Ürünleri</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Üretim hataları 30 gün içinde değiştirilir</li>
                    <li>Baskı kalitesi garantisi</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">11. Özel Durumlar</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">11.1. Yurtdışı Siparişler</h3>
                  <p>
                    Uluslararası gönderimler için özel koşullar ve gümrük bilgileri sipariş öncesi paylaşılır. 
                    İade durumunda kargo ve gümrük ücretleri müşteriye aittir.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">11.2. Toplu Siparişler</h3>
                  <p>
                    50+ adet toplu siparişlerde özel teslimat ve iade koşulları belirlenir. 
                    Proje bazında anlaşma yapılır.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">11.3. Kurumsal Hizmetler</h3>
                  <p>
                    Dijital pazarlama, web geliştirme gibi devam eden hizmetlerde iptal ve iade 
                    koşulları hizmet sözleşmesinde belirlenir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">12. Müşteri Memnuniyeti</h2>
                  <p>
                    Spion Pictures olarak müşteri memnuniyeti önceliğimizdir. Her türlü sorun için:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Önce iletişime geçin, çözüm üretelim</li>
                    <li>Makul talepleri değerlendirir ve karşılarız</li>
                    <li>Yasal haklarınız her zaman saklıdır</li>
                  </ul>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">İletişim ve Destek</h2>
                  <p className="mb-4">
                    İade, teslimat veya sipariş durumu hakkında:
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-posta:</strong> info@spionpictures.com</p>
                    <p><strong>Telefon:</strong> +90 552 551 51 84</p>
                    <p><strong>Çalışma Saatleri:</strong> Pazartesi-Cuma 09:00-18:00</p>
                    <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                  </div>
                  <p className="mt-4 text-sm">
                    Tüketici şikayetleri için: <strong>www.tuketici.gov.tr</strong>
                  </p>
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
