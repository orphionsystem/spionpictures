import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Spion Media',
  description: 'Explore our portfolio of creative projects.',
}

export default function ProjectsPageEN() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Projects
            </h1>
            <p className="text-lg text-secondarytext max-w-2xl">
              Our portfolio of film, digital and experiential projects.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="text-center py-24">
              <p className="text-secondarytext mb-4">Projects will be added soon.</p>
              <a href="/en/contact" className="text-primary hover:underline">Start Your Project →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
