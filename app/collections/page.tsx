import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koleksiyonlar | Spion Pictures',
  description: 'Spion Pictures sanat koleksiyonlarını keşfedin. Tematik olarak düzenlenmiş özgün dijital sanat eserleri.',
}

export default function CollectionsPage() {
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
                Koleksiyonlar
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Tematik olarak düzenlenmiş sanat eseri koleksiyonları. Her koleksiyon, 
                belirli bir konsept veya görsel dil etrafında şekillenir.
              </p>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="py-24">
          <div className="container-custom">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">
                  Koleksiyonlar Yakında
                </h2>
                <p className="text-secondarytext mb-6">
                  İlk koleksiyonlarımız hazırlanıyor. Admin panelinden koleksiyonları 
                  oluşturabilir ve yönetebilirsiniz.
                </p>
                <a
                  href="/admin"
                  className="inline-flex items-center gap-2 bg-primary text-purewhite px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Yönetim Paneli
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
