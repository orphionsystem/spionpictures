import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import { Metadata } from 'next'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Spion Pictures | Art Goes Beyond the Screen',
  description: 'Original digital artworks. Collections designed to live in the physical world. Spion Pictures art gallery and creative media studio.',
}

export const revalidate = 0

async function getFeaturedArtworks() {
  const supabase = getSupabaseServerClient()
  
  const { data: artworks } = await supabase
    .from('artworks')
    .select(`
      *,
      images:artwork_images(*)
    `)
    .eq('is_published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3)

  return artworks || []
}

export default async function HomePageEN() {
  const featuredArtworks = await getFeaturedArtworks()

  return (
    <>
      <Header />
      <main>
        <Hero lang="en" />
        
        {/* Selected Artworks Section */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Selected Artworks
              </h2>
              <p className="text-secondarytext text-lg max-w-2xl mx-auto">
                Carefully selected artworks from Spion Pictures collection.
              </p>
            </div>
            
            {featuredArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredArtworks.map((artwork: any) => {
                  const primaryImage = artwork.images?.find((img: any) => img.is_primary) || artwork.images?.[0]
                  
                  return (
                    <Link
                      key={artwork.id}
                      href={`/en/artworks/${artwork.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-[3/4] bg-border rounded-sm overflow-hidden mb-4">
                        {primaryImage ? (
                          <Image
                            src={primaryImage.image_url}
                            alt={primaryImage.alt_text_en || artwork.title_en}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400">No Image</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-secondarytext mb-1 uppercase tracking-wider">
                          {artwork.artist_name}
                        </p>
                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {artwork.title_en}
                        </h3>
                        <p className="font-semibold">
                          {formatPrice(artwork.base_price, artwork.currency)}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-border rounded-sm flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-secondarytext text-sm mb-2">
                        Artworks will be added from admin panel
                      </p>
                      {i === 2 && (
                        <a
                          href="/admin/artworks/upload"
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          Upload Artwork →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <Link
                href="/en/artworks"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary hover:text-purewhite transition-all duration-300"
              >
                View All Artworks
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* The Art of Print Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                From Digital to Physical
              </h2>
              <p className="text-secondarytext text-lg leading-relaxed">
                Each artwork is originally created in digital format and transformed 
                into a physical art experience with carefully selected printing materials.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">1</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Original Digital Art
                </h3>
                <p className="text-secondarytext">
                  Each artwork is originally produced in digital format and printed 
                  in limited quantities only.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">2</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Carefully Selected Materials
                </h3>
                <p className="text-secondarytext">
                  Archive-quality paper and professional printing techniques 
                  are used.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                  <span className="text-purewhite text-2xl font-display font-bold">3</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Collection Value
                </h3>
                <p className="text-secondarytext">
                  Limited editions are presented with numbering and special 
                  packaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Spion Pictures */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-block h-[1px] w-24 bg-primary mb-6" />
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Spion Pictures
                </h2>
              </div>
              
              <p className="text-lg text-secondarytext leading-relaxed mb-8">
                Spion Pictures was born from the idea that art doesn't have to exist 
                only on screen. We transform original artworks created in digital 
                format into physical collections. We see visual production not just 
                as a technique, but as a form of expression.
              </p>

              <a
                href="/en/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              >
                Learn More
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Spion Media Services Preview */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                Beyond Art
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                SPION MEDIA
              </h2>
              <p className="text-xl text-gray-300">
                We transform ideas into visuals, visuals into experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="/en/services#film" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Film & Production
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Post-production, drone filming, 360° videos and AI-powered 
                    video production.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Explore →
                  </span>
                </div>
              </a>

              <a href="/en/services#digital" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Digital & Technology
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Web design, mobile applications, AI automation and cybersecurity 
                    solutions.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Explore →
                  </span>
                </div>
              </a>

              <a href="/en/services#marketing" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Marketing & Growth
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Social media management, content production and digital advertising 
                    campaigns.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Explore →
                  </span>
                </div>
              </a>

              <a href="/en/services#experiential" className="group">
                <div className="bg-purewhite/5 p-8 rounded-sm hover:bg-purewhite/10 transition-colors h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Experiential Media
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Costumed events, large-scale hand models and NFC digital products.
                  </p>
                  <span className="text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Explore →
                  </span>
                </div>
              </a>
            </div>

            <div className="text-center mt-16">
              <a
                href="/en/services"
                className="inline-flex items-center gap-2 border-2 border-purewhite text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-purewhite hover:text-primary transition-all duration-300"
              >
                All Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Have an idea?
              </h2>
              <p className="text-lg text-secondarytext mb-8">
                Get in touch with us for art, production and digital projects.
              </p>
              <a
                href="/en/contact"
                className="inline-flex items-center gap-2 bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all"
              >
                Tell Us Your Project
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
