import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Protection Notice | Spion Pictures',
  description: 'Data protection and GDPR compliance notice under Law No. 6698 on the Protection of Personal Data.',
}

export default function KVKKPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Data Protection Notice
              </h1>
              <p className="text-sm text-secondarytext">
                Law No. 6698 on the Protection of Personal Data
              </p>
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
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Data Controller</h2>
                  <p>
                    In accordance with Law No. 6698 on the Protection of Personal Data ("LPPD"), your personal data 
                    may be processed by Spion Pictures as the data controller within the scope explained below.
                  </p>
                  <div className="bg-purewhite p-4 rounded-sm border border-border">
                    <p><strong>Data Controller:</strong> Spion Pictures</p>
                    <p><strong>Address:</strong> Istanbul, Turkey</p>
                    <p><strong>Email:</strong> info@spionpictures.com</p>
                    <p><strong>Phone:</strong> +90 552 551 51 84</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Purpose of Processing Personal Data</h2>
                  <p>
                    Your collected personal data is processed for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Communication:</strong> Answering your questions, providing information and support</li>
                    <li><strong>Order Management:</strong> Processing your art and service orders</li>
                    <li><strong>Payment Processing:</strong> Managing secure payment processes</li>
                    <li><strong>Delivery:</strong> Ensuring products are delivered to your address</li>
                    <li><strong>Customer Relations:</strong> Increasing customer satisfaction, evaluating complaints and requests</li>
                    <li><strong>Marketing:</strong> Providing campaign, product, and service information with your consent</li>
                    <li><strong>Legal Obligations:</strong> Complying with legal regulations and official authority requests</li>
                    <li><strong>Security:</strong> Conducting information security processes, preventing unauthorized access</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Categories of Personal Data Processed</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">3.1. Identity Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name, surname</li>
                    <li>National ID number (if required for invoicing)</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.2. Contact Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Address information</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.3. Customer Transaction Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Order and service request information</li>
                    <li>Communication messages</li>
                    <li>Complaint and suggestion records</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.4. Transaction Security Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address</li>
                    <li>Cookie records</li>
                    <li>Browser information</li>
                    <li>Login and transaction logs</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">3.5. Financial Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Payment amounts</li>
                    <li>Invoice information</li>
                    <li>Note: Credit card information is not stored by us, processed through secure payment provider (Shopier)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Method of Collecting Personal Data</h2>
                  <p>Your personal data is collected through the following methods:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Forms filled out on our website (spionpictures.com)</li>
                    <li>Communication via email, phone, or social media</li>
                    <li>Order and service request processes</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Information received from payment providers (Shopier)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. To Whom and For What Purpose Personal Data May Be Transferred</h2>
                  <p>
                    Your personal data may be transferred in accordance with the purposes stated above and within 
                    the personal data processing conditions specified in Articles 8 and 9 of the LPPD to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Payment Providers:</strong> Shopier (for payment processing)</li>
                    <li><strong>Courier Companies:</strong> Information necessary for delivery</li>
                    <li><strong>Service Providers:</strong> Supabase (database), Vercel (hosting)</li>
                    <li><strong>Legal Obligations:</strong> Courts, law enforcement, and other public institutions</li>
                    <li><strong>Business Partners:</strong> When necessary for service delivery</li>
                  </ul>
                  <p className="mt-4">
                    Your personal data may be transferred abroad. International transfer is carried out in accordance 
                    with the conditions stipulated in Article 9 of the LPPD.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Method and Legal Basis of Personal Data Collection</h2>
                  <p>
                    Your personal data is processed based on the following legal grounds specified in Articles 5 and 6 of the LPPD:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Explicitly stipulated in laws</li>
                    <li>Necessary for the establishment or performance of a contract</li>
                    <li>Mandatory for the data controller to fulfill its legal obligation</li>
                    <li>Data processing is mandatory for the legitimate interests of the data controller, provided it does not harm the fundamental rights and freedoms of the data subject</li>
                    <li>Your explicit consent exists</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. Your Rights Under LPPD</h2>
                  <p>
                    In accordance with Article 11 of the LPPD, as a data subject, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Learning whether your personal data is being processed,</li>
                    <li>Requesting information if your personal data has been processed,</li>
                    <li>Learning the purpose of processing and whether it is used appropriately,</li>
                    <li>Knowing third parties to whom your personal data is transferred domestically or abroad,</li>
                    <li>Requesting correction of your personal data if it is incomplete or incorrectly processed,</li>
                    <li>Requesting deletion or destruction of your personal data within the framework of the conditions stipulated in Article 7 of the LPPD,</li>
                    <li>Requesting that correction and deletion requests be notified to third parties to whom personal data has been transferred,</li>
                    <li>Objecting to a result against you arising solely from analysis of processed data by automated systems,</li>
                    <li>Requesting compensation for damages if you suffer damage due to unlawful processing of your personal data.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. How Can You Exercise Your Rights?</h2>
                  <p>
                    You can submit your applications regarding the rights listed above to us through the following 
                    methods in accordance with Article 13 of the LPPD and the Communiqué on the Procedures and 
                    Principles of Application to the Data Controller:
                  </p>

                  <div className="bg-purewhite p-4 rounded-sm border border-border my-4">
                    <p className="font-semibold mb-2">Application Methods:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Email:</strong> info@spionpictures.com (with secure electronic signature)</li>
                      <li><strong>Mail:</strong> Written application to Istanbul, Turkey address</li>
                      <li><strong>In Person:</strong> Istanbul office with identity verification</li>
                    </ul>
                  </div>

                  <p>
                    Your application must include the following information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your name and surname</li>
                    <li>National ID number for Turkish citizens</li>
                    <li>Your contact information (email, phone, address)</li>
                    <li>Subject of your request</li>
                  </ul>

                  <p className="mt-4">
                    Your application will be concluded free of charge within 30 days at the latest, depending on 
                    its nature. However, if the process requires an additional cost, a fee may be charged according 
                    to the tariff determined by the Personal Data Protection Board.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Retention Period of Personal Data</h2>
                  <p>
                    Your personal data will be retained for the period necessary for the purposes for which they 
                    are processed and in accordance with legal retention obligations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact and request records:</strong> 3 years</li>
                    <li><strong>Order and invoice information:</strong> 10 years (as required by Tax Procedure Law)</li>
                    <li><strong>Marketing consents:</strong> Until consent is withdrawn</li>
                    <li><strong>Cookie data:</strong> 1 year</li>
                    <li><strong>Security logs:</strong> 2 years</li>
                  </ul>
                  <p className="mt-4">
                    At the end of retention periods, your personal data will be deleted, destroyed, or anonymized.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Data Security</h2>
                  <p>
                    As Spion Pictures, we take technical and administrative measures to ensure the security of your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encrypted communication with SSL certificate</li>
                    <li>Secure database systems (Supabase)</li>
                    <li>Access authorization and control mechanisms</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training and awareness programs</li>
                    <li>Emergency response procedures in case of data breach</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20 mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">Contact and Application</h2>
                  <p className="mb-4">
                    To exercise your rights under LPPD or to obtain information about your personal data:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Data Controller:</strong> Spion Pictures</p>
                    <p><strong>Email:</strong> info@spionpictures.com</p>
                    <p><strong>Phone:</strong> +90 552 551 51 84</p>
                    <p><strong>Address:</strong> Istanbul, Turkey</p>
                  </div>
                  <p className="mt-4 text-sm">
                    This disclosure text was published on {new Date().toLocaleDateString('en-US')}, 
                    and changes will be announced on our website.
                  </p>
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
