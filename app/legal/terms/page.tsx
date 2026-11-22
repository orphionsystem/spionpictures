import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | Spion Pictures',
  description: 'Spion Pictures web sitesi kullanım koşulları ve şartları.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Kullanım Koşulları
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
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Genel Hükümler</h2>
                  <p>
                    Bu web sitesini (spionpictures.com) kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. 
                    Koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
                  </p>
                  <p>
                    Spion Pictures, bu koşulları önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. 
                    Siteyi kullanmaya devam ederek güncel koşulları kabul etmiş sayılırsınız.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Hizmet Tanımı</h2>
                  <p>Spion Pictures aşağıdaki hizmetleri sunar:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Özgün dijital sanat eserleri satışı</li>
                    <li>Fine art baskı ve koleksiyon ürünleri</li>
                    <li>Video prodüksiyon ve post-prodüksiyon hizmetleri</li>
                    <li>Dijital pazarlama ve yaratıcı içerik üretimi</li>
                    <li>Web tasarım ve yazılım geliştirme</li>
                    <li>Grafik tasarım ve kurumsal kimlik çalışmaları</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Kullanıcı Sorumlulukları</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">3.1. Yasalara Uyum</h3>
                  <p>
                    Kullanıcılar, siteyi yürürlükteki tüm yasalara ve düzenlemelere uygun şekilde kullanmayı kabul eder.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.2. Yasak Faaliyetler</h3>
                  <p>Aşağıdaki faaliyetler kesinlikle yasaktır:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sitede bulunan içerikleri izinsiz kopyalamak, çoğaltmak veya dağıtmak</li>
                    <li>Telif hakkı ile korunan materyalleri ihlal etmek</li>
                    <li>Virüs, kötü amaçlı yazılım veya zararlı kod yaymak</li>
                    <li>Diğer kullanıcıların hesaplarına yetkisiz erişim sağlamaya çalışmak</li>
                    <li>Spam, taciz edici veya yanıltıcı içerik paylaşmak</li>
                    <li>Siteyi otomatik araçlarla taramak veya veri toplamak</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Fikri Mülkiyet Hakları</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">4.1. Telif Hakları</h3>
                  <p>
                    Bu sitede yer alan tüm içerik, tasarım, logo, grafik, fotoğraf, video ve metin Spion Pictures'ın 
                    veya lisans verenlerin mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">4.2. Sanat Eserleri</h3>
                  <p>
                    Sitede sergilenen sanat eserleri, sanatçıların özgün çalışmalarıdır. Satın alınan eserlerin 
                    fiziksel kopyaları alıcıya aittir ancak telif hakları sanatçıda kalır. Ticari amaçla çoğaltma 
                    ve yayınlama hakları sanatçıya ve Spion Pictures'a aittir.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">4.3. Kullanım Lisansı</h3>
                  <p>
                    Size, bu sitedeki materyalleri yalnızca kişisel, ticari olmayan kullanım için indirmek 
                    veya yazdırmak için sınırlı bir lisans verilir. Bu lisans aşağıdakileri içermez:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Materyalleri değiştirme veya kopyalama</li>
                    <li>Ticari amaçlarla kullanma</li>
                    <li>Türev eserler oluşturma</li>
                    <li>Başka bir web sitesinde kullanma</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Satın Alma ve Ödeme</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">5.1. Fiyatlar</h3>
                  <p>
                    Tüm fiyatlar Türk Lirası (TRY) cinsindendir ve KDV dahildir. Fiyatlar önceden haber 
                    verilmeksizin değiştirilebilir.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.2. Ödeme Yöntemi</h3>
                  <p>
                    Ödemeler güvenli ödeme sağlayıcısı Shopier üzerinden gerçekleştirilir. Kredi kartı, 
                    banka kartı ve havale/EFT ile ödeme yapabilirsiniz.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.3. Sipariş Onayı</h3>
                  <p>
                    Sipariş vermek bir teklif niteliğindedir. Biz siparişinizi onayladıktan sonra sözleşme 
                    bağlayıcı hale gelir. Stok durumu, ödeme doğrulaması veya diğer nedenlerle sipariş 
                    reddedilme hakkımız saklıdır.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Teslimat</h2>
                  <p>
                    Fiziksel ürünler (sanat baskıları, promosyon ürünleri) kargo ile gönderilir. 
                    Teslimat süreleri ve koşulları için İade ve Teslimat Politikamızı inceleyiniz.
                  </p>
                  <p>
                    Dijital hizmetler (tasarım, video prodüksiyon) için teslimat süreleri proje bazında 
                    belirlenir ve sözleşmede belirtilir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. İptal ve İade</h2>
                  <p>
                    14 günlük cayma hakkınız bulunmaktadır. Ancak özel sipariş verilen, kişiye özel 
                    üretilen veya ambalajı açılmış ürünlerde cayma hakkı kullanılamaz. Detaylı bilgi 
                    için İade ve Teslimat Politikamızı okuyunuz.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Garanti ve Sorumluluk</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">8.1. Hizmet Garantisi</h3>
                  <p>
                    Hizmetlerimizin kaliteli ve zamanında sunulması için azami özeni gösteririz. 
                    Ancak hiçbir hizmetin kesintisiz, hatasız veya güvenli olacağını garanti etmeyiz.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">8.2. Sorumluluk Sınırlaması</h3>
                  <p>
                    Spion Pictures, siteyi veya hizmetleri kullanımınızdan kaynaklanan doğrudan, dolaylı, 
                    tesadüfi, özel veya cezai zararlardan sorumlu tutulamaz. Sorumluluğumuz, varsa, 
                    ödediğiniz ücret ile sınırlıdır.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">8.3. Üçüncü Taraf Bağlantıları</h3>
                  <p>
                    Sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriği, 
                    gizlilik politikaları veya uygulamalarından sorumlu değiliz.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Uyuşmazlık Çözümü</h2>
                  <p>
                    Bu koşullardan doğan uyuşmazlıklar öncelikle dostane görüşmelerle çözülmeye çalışılır. 
                    Çözülemediği takdirde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                  </p>
                  <p>
                    Tüketici şikayetleri için Tüketici Hakem Heyetleri ve Tüketici Mahkemelerine 
                    başvurabilirsiniz.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Genel Hükümler</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir</li>
                    <li>Koşulların herhangi bir hükmünün geçersiz sayılması diğer hükümleri etkilemez</li>
                    <li>Spion Pictures, hizmetleri veya siteyi önceden haber vermeksizin değiştirme veya durdurma hakkını saklı tutar</li>
                    <li>Kullanıcılar, koşulları düzenli olarak gözden geçirmekle yükümlüdür</li>
                  </ul>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">İletişim</h2>
                  <p className="mb-4">
                    Kullanım koşulları hakkında sorularınız için:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Spion Pictures</strong></p>
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
