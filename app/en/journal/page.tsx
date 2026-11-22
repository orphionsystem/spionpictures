import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal | Spion Pictures',
  description: 'Insights about art, technology and creative production.',
}

export default function JournalPageEN() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Journal
            </h1>
            <p className="text-lg text-secondarytext max-w-2xl">
              Insights about art, technology and creative production.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="text-center py-24">
              <p className="text-secondarytext mb-4">Articles will be published soon.</p>
              <a href="/en" className="text-primary hover:underline">Back to Home →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
