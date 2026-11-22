'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, Instagram } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function ContactPageEN() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Your message has been sent successfully!' })
        e.currentTarget.reset()
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

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
                Contact
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Get in touch with us about artworks, projects, collaborations or any inquiries.
              </p>
            </div>
          </div>
        </section>

        <div className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-8">
                  Send Message
                </h2>
                
                {message && (
                  <div className={`p-4 rounded-sm mb-6 ${
                    message.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="+90 555 555 55 55"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-all duration-300 appearance-none bg-purewhite cursor-pointer hover:border-primary/50"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '3rem'
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="artwork">Artworks</option>
                        <option value="service">Services / Spion Media</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-border rounded-sm focus:outline-none focus:border-primary transition-all duration-300 resize-none hover:border-primary/50"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-secondarytext">
                    * Required fields. Your message will be answered as soon as possible.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+905525515184"
                        className="text-secondarytext hover:text-primary transition-colors"
                      >
                        +90 552 551 51 84
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@spionpictures.com"
                        className="text-secondarytext hover:text-primary transition-colors"
                      >
                        info@spionpictures.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/spionmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondarytext hover:text-primary transition-colors"
                      >
                        @spionmedia
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mt-12 p-6 bg-purewhite rounded-sm border border-border">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondarytext">Monday - Friday</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondarytext">Saturday</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondarytext">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-12">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">When will I get a response?</p>
                      <p className="text-secondarytext">
                        We typically respond within 24-48 hours.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Can I order artwork?</p>
                      <p className="text-secondarytext">
                        Yes, you can purchase existing artworks or place custom orders.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">How do I get a project quote?</p>
                      <p className="text-secondarytext">
                        Fill out the form or call us directly for a custom quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
