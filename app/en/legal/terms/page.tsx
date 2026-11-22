import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Spion Pictures',
  description: 'Spion Pictures website terms of use and conditions.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Terms of Use
              </h1>
              <p className="text-sm text-secondarytext">
                Last Updated: {new Date().toLocaleDateString('en-US')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl prose prose-lg">
              <div className="space-y-8 text-secondarytext">
                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. General Terms</h2>
                  <p>
                    By using this website (spionpictures.com), you agree to accept the following terms of use. 
                    If you do not agree to these terms, please do not use the site.
                  </p>
                  <p>
                    Spion Pictures reserves the right to change these terms without prior notice. 
                    By continuing to use the site, you agree to the current terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Service Description</h2>
                  <p>Spion Pictures offers the following services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Original digital art sales</li>
                    <li>Fine art prints and collectible products</li>
                    <li>Video production and post-production services</li>
                    <li>Digital marketing and creative content production</li>
                    <li>Web design and software development</li>
                    <li>Graphic design and corporate identity projects</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. User Responsibilities</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">3.1. Compliance with Laws</h3>
                  <p>
                    Users agree to use the site in compliance with all applicable laws and regulations.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.2. Prohibited Activities</h3>
                  <p>The following activities are strictly prohibited:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Copying, reproducing, or distributing content on the site without permission</li>
                    <li>Violating copyrighted materials</li>
                    <li>Distributing viruses, malware, or harmful code</li>
                    <li>Attempting unauthorized access to other users' accounts</li>
                    <li>Sharing spam, harassing, or misleading content</li>
                    <li>Scraping the site with automated tools or collecting data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Intellectual Property Rights</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">4.1. Copyrights</h3>
                  <p>
                    All content, designs, logos, graphics, photographs, videos, and text on this site are the 
                    property of Spion Pictures or its licensors and are protected by copyright laws.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">4.2. Artworks</h3>
                  <p>
                    The artworks displayed on the site are original works by artists. Physical copies of purchased 
                    works belong to the buyer, but copyrights remain with the artist. Rights to reproduce and 
                    publish for commercial purposes belong to the artist and Spion Pictures.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">4.3. Usage License</h3>
                  <p>
                    You are granted a limited license to download or print materials on this site for personal, 
                    non-commercial use only. This license does not include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modifying or copying materials</li>
                    <li>Using for commercial purposes</li>
                    <li>Creating derivative works</li>
                    <li>Using on another website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Purchase and Payment</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">5.1. Prices</h3>
                  <p>
                    All prices are in Turkish Lira (TRY) and include VAT. Prices may change without prior notice.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.2. Payment Method</h3>
                  <p>
                    Payments are processed through secure payment provider Shopier. You can pay by credit card, 
                    debit card, and wire transfer/EFT.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.3. Order Confirmation</h3>
                  <p>
                    Placing an order constitutes an offer. The contract becomes binding after we confirm your order. 
                    We reserve the right to refuse orders due to stock availability, payment verification, or other reasons.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Delivery</h2>
                  <p>
                    Physical products (art prints, promotional products) are shipped via courier. 
                    Please refer to our Return and Delivery Policy for delivery times and conditions.
                  </p>
                  <p>
                    Delivery times for digital services (design, video production) are determined on a 
                    project basis and specified in the contract.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. Cancellation and Returns</h2>
                  <p>
                    You have a 14-day right of withdrawal. However, the right of withdrawal cannot be exercised 
                    for custom-ordered, personalized, or opened products. Please read our Return and Delivery 
                    Policy for detailed information.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Warranty and Liability</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">8.1. Service Warranty</h3>
                  <p>
                    We exercise utmost care to provide quality and timely services. However, we do not guarantee 
                    that any service will be uninterrupted, error-free, or secure.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">8.2. Limitation of Liability</h3>
                  <p>
                    Spion Pictures cannot be held liable for direct, indirect, incidental, special, or punitive 
                    damages arising from your use of the site or services. Our liability, if any, is limited to 
                    the amount you paid.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">8.3. Third-Party Links</h3>
                  <p>
                    Our site may contain links to third-party websites. We are not responsible for the content, 
                    privacy policies, or practices of these sites.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Dispute Resolution</h2>
                  <p>
                    Disputes arising from these terms will first be attempted to be resolved through amicable discussions. 
                    If unresolved, the Courts and Enforcement Offices of Istanbul are authorized.
                  </p>
                  <p>
                    For consumer complaints, you may apply to Consumer Arbitration Committees and Consumer Courts.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. General Provisions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>These terms are subject to the laws of the Republic of Turkey</li>
                    <li>If any provision of these terms is deemed invalid, it does not affect other provisions</li>
                    <li>Spion Pictures reserves the right to modify or discontinue services or the site without prior notice</li>
                    <li>Users are responsible for regularly reviewing the terms</li>
                  </ul>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">Contact</h2>
                  <p className="mb-4">
                    For questions about the terms of use:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Spion Pictures</strong></p>
                    <p><strong>Email:</strong> info@spionpictures.com</p>
                    <p><strong>Phone:</strong> +90 552 551 51 84</p>
                    <p><strong>Address:</strong> Istanbul, Turkey</p>
                  </div>
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
