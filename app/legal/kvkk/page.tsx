import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Spion Pictures',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
}

export default function KVKKPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                KVKK Aydınlatma Metni
              </h1>
              <p className="text-sm text-secondarytext">
                6698 Sayılı Kişisel Verilerin Korunması Kanunu
              </p>
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
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Veri Sorumlusu</h2>
                  <p>
                    6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz 
                    veri sorumlusu sıfatıyla Spion Pictures tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                  </p>
                  <div className="bg-purewhite p-4 rounded-sm border border-border">
                    <p><strong>Veri Sorumlusu:</strong> Spion Pictures</p>
                    <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                    <p><strong>E-posta:</strong> info@spionpictures.com</p>
                    <p><strong>Telefon:</strong> +90 552 551 51 84</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
                  <p>
                    Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>İletişim:</strong> Sorularınıza yanıt vermek, bilgi ve destek sağlamak</li>
                    <li><strong>Sipariş Yönetimi:</strong> Sanat eseri ve hizmet siparişlerinizi işlemek</li>
                    <li><strong>Ödeme İşlemleri:</strong> Güvenli ödeme süreçlerini yönetmek</li>
                    <li><strong>Teslimat:</strong> Ürünlerin adresinize teslim edilmesini sağlamak</li>
                    <li><strong>Müşteri İlişkileri:</strong> Müşteri memnuniyetini artırmak, şikayet ve talepleri değerlendirmek</li>
                    <li><strong>Pazarlama:</strong> Onayınız dahilinde kampanya, ürün ve hizmet bilgilendirmesi yapmak</li>
                    <li><strong>Hukuki Yükümlülükler:</strong> Yasal düzenlemeler ve resmi makam taleplerine uymak</li>
                    <li><strong>Güvenlik:</strong> Bilgi güvenliği süreçlerini yürütmek, yetkisiz erişimi önlemek</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. İşlenen Kişisel Veri Kategorileri</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">3.1. Kimlik Bilgisi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ad, soyad</li>
                    <li>T.C. kimlik numarası (fatura için gerekli olması halinde)</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.2. İletişim Bilgisi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>E-posta adresi</li>
                    <li>Telefon numarası</li>
                    <li>Adres bilgisi</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.3. Müşteri İşlem Bilgisi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sipariş ve hizmet talep bilgileri</li>
                    <li>İletişim mesajları</li>
                    <li>Şikayet ve öneri kayıtları</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.4. İşlem Güvenliği Bilgisi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP adresi</li>
                    <li>Çerez kayıtları</li>
                    <li>Tarayıcı bilgileri</li>
                    <li>Giriş ve işlem logları</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.5. Finansal Bilgi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ödeme tutarları</li>
                    <li>Fatura bilgileri</li>
                    <li>Not: Kredi kartı bilgileri tarafımızca saklanmaz, güvenli ödeme sağlayıcısı (Shopier) üzerinden işlenir</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Kişisel Verilerin Toplanma Yöntemi</h2>
                  <p>Kişisel verileriniz aşağıdaki yollarla toplanmaktadır:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Web sitemiz (spionpictures.com) üzerinden doldurulan formlar</li>
                    <li>E-posta, telefon veya sosyal medya üzerinden iletişim</li>
                    <li>Sipariş ve hizmet talep süreçleri</li>
                    <li>Çerezler ve benzer izleme teknolojileri</li>
                    <li>Ödeme sağlayıcılarından (Shopier) alınan bilgiler</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
                  <p>
                    Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda ve 
                    KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları dahilinde:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ödeme Sağlayıcıları:</strong> Shopier (ödeme işlemleri için)</li>
                    <li><strong>Kargo Şirketleri:</strong> Teslimat için gerekli bilgiler</li>
                    <li><strong>Hizmet Sağlayıcıları:</strong> Supabase (veritabanı), Vercel (hosting)</li>
                    <li><strong>Yasal Yükümlülükler:</strong> Mahkemeler, kolluk kuvvetleri ve diğer kamu kurumları</li>
                    <li><strong>İş Ortakları:</strong> Hizmet teslimi için gerekli olması halinde</li>
                  </ul>
                  <p className="mt-4">
                    Kişisel verileriniz yurt dışına aktarılabilir. Yurt dışı aktarımı, KVKK'nın 9. maddesinde 
                    öngörülen şartlara uygun olarak gerçekleştirilir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                  <p>
                    Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere 
                    dayanılarak işlenmektedir:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kanunlarda açıkça öngörülmesi</li>
                    <li>Bir sözleşmenin kurulması veya ifası için gerekli olması</li>
                    <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi için zorunlu olması</li>
                    <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
                    <li>Açık rızanızın bulunması</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
                  <p>
                    KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                    <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                    <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
                    <li>Düzeltme ve silme taleplerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                    <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Haklarınızı Nasıl Kullanabilirsiniz?</h2>
                  <p>
                    Yukarıda sayılan haklarınıza yönelik başvurularınızı, KVKK'nın 13. maddesi ve 
                    Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca aşağıdaki yollarla 
                    tarafımıza iletebilirsiniz:
                  </p>

                  <div className="bg-purewhite p-4 rounded-sm border border-border my-4">
                    <p className="font-semibold mb-2">Başvuru Yöntemleri:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>E-posta:</strong> info@spionpictures.com (Güvenli elektronik imza ile)</li>
                      <li><strong>Posta:</strong> İstanbul, Türkiye adresine yazılı olarak</li>
                      <li><strong>Şahsen Başvuru:</strong> İstanbul ofisimize kimlik teyidi ile</li>
                    </ul>
                  </div>

                  <p>
                    Başvurunuzda aşağıdaki bilgiler yer almalıdır:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Adınız, soyadınız</li>
                    <li>Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numaranız</li>
                    <li>İletişim bilgileriniz (e-posta, telefon, adres)</li>
                    <li>Talep konunuz</li>
                  </ul>

                  <p className="mt-4">
                    Başvurunuz, niteliğine göre en geç 30 gün içinde ücretsiz olarak 
                    sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, 
                    Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Kişisel Verilerin Saklanma Süresi</h2>
                  <p>
                    Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve yasal saklama 
                    yükümlülükleri doğrultusunda saklanacaktır:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>İletişim ve talep kayıtları:</strong> 3 yıl</li>
                    <li><strong>Sipariş ve fatura bilgileri:</strong> 10 yıl (Vergi Usul Kanunu gereği)</li>
                    <li><strong>Pazarlama izinleri:</strong> İzin geri çekilene kadar</li>
                    <li><strong>Çerez verileri:</strong> 1 yıl</li>
                    <li><strong>Güvenlik logları:</strong> 2 yıl</li>
                  </ul>
                  <p className="mt-4">
                    Saklama süreleri sonunda kişisel verileriniz silinir, yok edilir veya anonim hale getirilir.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Veri Güvenliği</h2>
                  <p>
                    Spion Pictures olarak, kişisel verilerinizin güvenliğini sağlamak için teknik ve 
                    idari tedbirler almaktayız:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL sertifikası ile şifreli iletişim</li>
                    <li>Güvenli veritabanı sistemleri (Supabase)</li>
                    <li>Erişim yetkilendirme ve kontrol mekanizmaları</li>
                    <li>Düzenli güvenlik denetimleri ve güncellemeleri</li>
                    <li>Çalışan eğitimi ve farkındalık programları</li>
                    <li>Veri ihlali durumunda acil müdahale prosedürleri</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20 mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">İletişim ve Başvuru</h2>
                  <p className="mb-4">
                    KVKK kapsamındaki haklarınızı kullanmak veya kişisel verileriniz hakkında bilgi almak için:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Veri Sorumlusu:</strong> Spion Pictures</p>
                    <p><strong>E-posta:</strong> info@spionpictures.com</p>
                    <p><strong>Telefon:</strong> +90 552 551 51 84</p>
                    <p><strong>Adres:</strong> İstanbul, Türkiye</p>
                  </div>
                  <p className="mt-4 text-sm">
                    Bu aydınlatma metni {new Date().toLocaleDateString('tr-TR')} tarihinde yayınlanmış olup, 
                    değişiklikler web sitemizde duyurulacaktır.
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
