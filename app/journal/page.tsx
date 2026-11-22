import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal | Spion Pictures',
  description: 'Sanat, tasarım, üretim süreçleri ve görsel kültür üzerine yazılar.',
}

export default function JournalPage() {
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
                Journal
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Sanat, tasarım, üretim süreçleri ve görsel kültür üzerine yazılar.
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold mb-3">
                  İçerikler Yakında
                </h2>
                <p className="text-secondarytext mb-6">
                  Sanat ve yaratım süreçleri üzerine düşüncelerimizi paylaşacağız. 
                  Güncellemeler için sosyal medyada bizi takip edin.
                </p>
                <a
                  href="https://instagram.com/spionmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-purewhite px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Instagram'da Takip Et
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
