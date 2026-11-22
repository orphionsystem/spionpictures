import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Spion Pictures',
  description: 'Spion Pictures privacy policy and personal data protection notice.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Privacy Policy
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
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. General Information</h2>
                  <p>
                    As Spion Pictures ("we", "our" or "Company"), we value the privacy of our users. 
                    This Privacy Policy explains how personal information collected through our website 
                    (spionpictures.com) is used, stored, and protected.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Information We Collect</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">2.1. Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and surname</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Contact messages and requests</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">2.2. Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited</li>
                    <li>Visit duration and date</li>
                    <li>Cookies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Purpose of Information Use</h2>
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Responding to your contact requests</li>
                    <li>Managing order and service processes</li>
                    <li>Improving website experience</li>
                    <li>Fulfilling our legal obligations</li>
                    <li>Marketing and information (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Information Sharing</h2>
                  <p>
                    We do not share your personal information with third parties. However, we may share in the following cases:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Legal obligations (court order, official request)</li>
                    <li>Secure payment providers for payment processing (Shopier)</li>
                    <li>Technical infrastructure providers (hosting, database)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Cookies</h2>
                  <p>
                    Our website uses cookies to improve user experience. Cookies are small text files stored 
                    on your device by your browser. You can block or delete cookies from your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Data Security</h2>
                  <p>
                    We take industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encrypted connection with SSL certificate</li>
                    <li>Secure database systems (Supabase)</li>
                    <li>Regular security audits</li>
                    <li>Limited access authorization</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. Your Rights</h2>
                  <p>Under Law No. 6698 on the Protection of Personal Data, you have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Learning whether your personal data is being processed</li>
                    <li>Learning the purpose of processing and whether it is used appropriately</li>
                    <li>Knowing third parties to whom data is transferred domestically or abroad</li>
                    <li>Requesting correction of incomplete or incorrectly processed data</li>
                    <li>Requesting deletion or destruction of data</li>
                    <li>Objecting to a result against you due to data analysis by automated systems only</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Data Retention Period</h2>
                  <p>
                    Your personal data is stored for the period necessary for collection purposes and in accordance 
                    with our legal retention obligations. When this period ends, your data will be deleted, 
                    destroyed, or anonymized.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Children's Privacy</h2>
                  <p>
                    Our website is not intended for persons under 18 years of age. We do not knowingly collect 
                    personal information from persons under 18. If you are a parent or guardian and become aware 
                    that your child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Changes</h2>
                  <p>
                    We may update this Privacy Policy from time to time. When significant changes occur, you will 
                    be notified through an announcement on our website. We recommend reviewing the policy regularly.
                  </p>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">Contact</h2>
                  <p className="mb-4">
                    You can contact us regarding our privacy policy or your personal data:
                  </p>
                  <div className="space-y-2">
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
