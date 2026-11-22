import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projeler | Spion Pictures',
  description: 'Spion Media tarafından gerçekleştirilen projeler. Film prodüksiyonu, dijital çözümler ve yaratıcı kampanyalar.',
}

export default function ProjectsPage() {
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
                Projeler
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Spion Media tarafından gerçekleştirilen projeler. Film prodüksiyonundan 
                dijital çözümlere uzanan portföyümüz.
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">
                  Portföy Yakında
                </h2>
                <p className="text-secondarytext mb-6">
                  Tamamlanan projelerimizi burada paylaşacağız. Yeni projeler 
                  için iletişime geçin.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-purewhite px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Proje Teklifi Al
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
