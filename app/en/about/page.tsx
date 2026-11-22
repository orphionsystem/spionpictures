import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Spion Pictures',
  description: 'Spion Pictures was born from the idea that art doesn\'t have to exist only on screen. We transform original artworks created in digital format into physical collections.',
}

export default function AboutPageEN() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block h-[1px] w-24 bg-purewhite mb-8" />
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
                Spion Pictures
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Art Goes Beyond the Screen
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-secondarytext leading-relaxed mb-6">
                  Spion Pictures was born from the idea that art doesn't have to exist 
                  only on screen. We transform original artworks created in digital 
                  format into physical collections.
                </p>
                <p className="text-lg text-secondarytext leading-relaxed mb-6">
                  Each artwork preserves the originality of the digital creation process 
                  while offering a tangible art experience in the physical world. We see 
                  visual production not just as a technique, but as a form of expression.
                </p>
                <p className="text-lg text-secondarytext leading-relaxed">
                  With limited edition prints, carefully selected materials and a 
                  collectible presentation approach, we transform digital art into 
                  physical value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-purewhite">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">1</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Originality
                  </h3>
                  <p className="text-secondarytext">
                    Each artwork is originally created in digital format and produced 
                    in limited quantities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">2</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Quality
                  </h3>
                  <p className="text-secondarytext">
                    We use archive-quality materials and professional printing 
                    techniques.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <span className="text-purewhite text-2xl font-display font-bold">3</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Collection
                  </h3>
                  <p className="text-secondarytext">
                    Limited editions are presented with numbering and special packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spion Media Section */}
        <section className="py-24 bg-darksection text-purewhite">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                Beyond Art
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Spion Media
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Spion Media, the creative production arm of Spion Pictures, 
                offers services across a wide range from film production to 
                digital technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                We produce professional solutions in post-production, drone filming, 
                AI-powered content creation, web design, mobile application development 
                and digital marketing.
              </p>
              <a
                href="/en/services"
                className="inline-flex items-center gap-2 border-2 border-purewhite text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-purewhite hover:text-primary transition-all duration-300"
              >
                Our Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-secondarytext mb-8">
                Let's talk about artworks, projects and collaborations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/en/contact"
                  className="inline-flex items-center gap-2 bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all"
                >
                  Contact Form
                  <span>→</span>
                </a>
                <a
                  href="mailto:info@spionpictures.com"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary hover:text-purewhite transition-all"
                >
                  Send Email
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
