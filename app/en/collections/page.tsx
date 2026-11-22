import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections | Spion Pictures',
  description: 'Discover curated art collections.',
}

export default function CollectionsPageEN() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Collections
            </h1>
            <p className="text-lg text-secondarytext max-w-2xl">
              Curated collections of original digital artworks.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="text-center py-24">
              <p className="text-secondarytext mb-4">Collections will be added soon.</p>
              <a href="/en/artworks" className="text-primary hover:underline">View All Artworks →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
