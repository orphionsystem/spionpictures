import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund & Shipping Policy | Spion Pictures',
  description: 'Spion Pictures product return, exchange, and shipping policy.',
}

export default function RefundShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Refund & Shipping
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
                {/* SHIPPING POLICY */}
                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20">
                  <h2 className="font-display text-3xl font-bold text-primarytext mb-4">Shipping Policy</h2>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">1. Shipping Scope</h2>
                  <p>
                    Spion Pictures uses the following shipping methods for different product and service categories:
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">1.1. Physical Products</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Artworks (Fine Art Prints):</strong> Professional courier with special packaging</li>
                    <li><strong>Promotional Products:</strong> Bulk delivery via standard courier</li>
                    <li><strong>Custom Order Products:</strong> Project-based delivery agreement</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">1.2. Digital Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Video Production:</strong> Online delivery (WeTransfer, Google Drive)</li>
                    <li><strong>Graphic Design:</strong> Digital delivery via email or cloud link</li>
                    <li><strong>Web & Software:</strong> Online deployment or source code transfer</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">2. Delivery Times</h2>
                  
                  <div className="bg-purewhite p-4 rounded-sm border border-border mb-4">
                    <h3 className="font-semibold text-primarytext mb-3">Physical Products (Courier)</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>In-Stock Products</strong></td>
                          <td className="py-2">2-5 business days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Art Print</strong></td>
                          <td className="py-2">5-10 business days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Custom Production</strong></td>
                          <td className="py-2">10-20 business days</td>
                        </tr>
                        <tr>
                          <td className="py-2"><strong>Promotional Products (Bulk)</strong></td>
                          <td className="py-2">7-15 business days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-purewhite p-4 rounded-sm border border-border">
                    <h3 className="font-semibold text-primarytext mb-3">Digital Services</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Logo Design</strong></td>
                          <td className="py-2">5-7 business days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Social Media Content</strong></td>
                          <td className="py-2">3-5 business days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2"><strong>Video Production</strong></td>
                          <td className="py-2">10-15 business days</td>
                        </tr>
                        <tr>
                          <td className="py-2"><strong>Website</strong></td>
                          <td className="py-2">15-30 business days</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs mt-2">* Special time agreements are made for large projects.</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">3. Shipping Fees</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Domestic Shipping (Turkey):</strong> 50 TRY (free for orders over 500 TRY)</li>
                    <li><strong>Express Shipping (1-2 days):</strong> 100 TRY</li>
                    <li><strong>Special Packaging (Artworks):</strong> Included in product price</li>
                    <li><strong>International Shipping:</strong> Varies by country and weight (custom quote)</li>
                    <li><strong>Digital Delivery:</strong> Free</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">4. Shipment Tracking</h2>
                  <p>
                    When your order is shipped, you will receive a tracking number via email and SMS. 
                    You can track your shipment status in real-time on the courier company's website.
                  </p>
                  <p>
                    <strong>Courier Companies:</strong> MNG Cargo, Aras Cargo, Yurtiçi Cargo (depending on order status)
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">5. Delivery Issues</h2>
                  <h3 className="font-semibold text-lg text-primarytext mb-2">5.1. Damaged Delivery</h3>
                  <p>
                    If the product arrives damaged or broken:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Note "damaged delivery" on the courier delivery receipt</li>
                    <li>Take photos of the product</li>
                    <li>Notify info@spionpictures.com within 48 hours</li>
                    <li>A replacement will be sent free of charge or a refund will be issued</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.2. Delivery Failure</h3>
                  <p>
                    The courier will attempt delivery to your address 3 times. If delivery cannot be made, it will 
                    return to the courier branch. We will contact you in this case. Products not collected within 
                    15 days will be returned to our company and your payment will be refunded minus shipping costs.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">5.3. Wrong/Missing Product</h3>
                  <p>
                    If you receive a different or missing product than what you ordered, notify within 7 days. 
                    The correct product will be shipped by us, and you can return the wrong product via courier.
                  </p>
                </div>

                {/* REFUND POLICY */}
                <div className="bg-primary/5 p-6 rounded-sm border border-primary/20 mt-12">
                  <h2 className="font-display text-3xl font-bold text-primarytext mb-4">Refund Policy</h2>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">6. Right of Withdrawal (14 Days)</h2>
                  <p>
                    In accordance with Law No. 6502 on Consumer Protection, you have the right to withdraw from 
                    the contract <strong>within 14 days</strong> from the date the product is delivered to you, 
                    without giving any reason and without paying any penalty.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">6.1. Products Covered by Right of Withdrawal</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Standard catalog products</li>
                    <li>Unopened promotional products</li>
                    <li>Undamaged and unused art prints</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">6.2. Products/Services Not Covered by Right of Withdrawal</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Custom Order Products:</strong> Products specially designed or produced for individuals</li>
                    <li><strong>Completed Services:</strong> After delivery of digital services (video, design, software)</li>
                    <li><strong>Opened Products:</strong> Products that cannot be returned for hygiene or health reasons</li>
                    <li><strong>Perishable Products:</strong> If any (food, plants, etc.)</li>
                    <li><strong>Original Artworks:</strong> Single-edition original works (except exchanges)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">7. Return Process</h2>
                  
                  <div className="bg-purewhite p-6 rounded-sm border border-border">
                    <h3 className="font-semibold text-primarytext mb-4">Return Steps:</h3>
                    <ol className="list-decimal pl-6 space-y-3">
                      <li>
                        <strong>Notification:</strong> Notify us that you wish to return by emailing info@spionpictures.com 
                        or calling +90 552 551 51 84. Provide your order number and reason for return.
                      </li>
                      <li>
                        <strong>Approval:</strong> Your return request will be evaluated and approved within 1 business day.
                      </li>
                      <li>
                        <strong>Shipping:</strong> Ship the product with its original packaging via courier. 
                        Notify us of the tracking number.
                      </li>
                      <li>
                        <strong>Inspection:</strong> After the product reaches us, it will be inspected (1-2 business days).
                      </li>
                      <li>
                        <strong>Refund:</strong> If the product is suitable, your payment will be refunded to your account within 10 business days.
                      </li>
                    </ol>
                  </div>

                  <p className="mt-4">
                    <strong>Important:</strong> Return shipping costs are covered by us for product defects or 
                    wrong shipments. For right of withdrawal, shipping costs are borne by the customer.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">8. Refund</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Credit Card:</strong> Refund to the credit card you used for payment (2-14 business days depending on bank process)</li>
                    <li><strong>Wire Transfer/EFT:</strong> Transfer to your specified IBAN (3-5 business days)</li>
                    <li><strong>Cash on Delivery:</strong> Transfer to your specified IBAN</li>
                  </ul>
                  <p className="mt-2">
                    After refund approval, payment will reach you within <strong>14 days</strong> at the latest.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">9. Exchange</h2>
                  <p>
                    If you want to exchange your product (size, color, model):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request exchange within 14 days</li>
                    <li>Return the product</li>
                    <li>New product will be shipped with free shipping</li>
                    <li>Any price difference will be paid or refunded</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">10. Warranty Terms</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">10.1. Artworks</h3>
                  <p>
                    Our Fine Art prints are produced with professional museum-quality materials:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>100+ year guarantee against fading</li>
                    <li>Unlimited replacement guarantee against manufacturing defects</li>
                    <li>Frame defects covered under 6-month warranty</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">10.2. Digital Services</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>2 revision rights after delivery (varies by project scope)</li>
                    <li>Technical errors corrected free of charge</li>
                    <li>Customer satisfaction guarantee</li>
                  </ul>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">10.3. Promotional Products</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Manufacturing defects replaced within 30 days</li>
                    <li>Print quality guarantee</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">11. Special Cases</h2>
                  
                  <h3 className="font-semibold text-lg text-primarytext mb-2">11.1. International Orders</h3>
                  <p>
                    Special conditions and customs information for international shipments are shared before ordering. 
                    In case of return, shipping and customs costs are borne by the customer.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">11.2. Bulk Orders</h3>
                  <p>
                    Special delivery and return conditions are determined for bulk orders of 50+ units. 
                    Project-based agreements are made.
                  </p>

                  <h3 className="font-semibold text-lg text-primarytext mb-2 mt-4">11.3. Corporate Services</h3>
                  <p>
                    Cancellation and refund conditions for ongoing services such as digital marketing and web 
                    development are specified in the service contract.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">12. Customer Satisfaction</h2>
                  <p>
                    As Spion Pictures, customer satisfaction is our priority. For any issues:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact us first, let's find a solution</li>
                    <li>We evaluate and meet reasonable requests</li>
                    <li>Your legal rights are always reserved</li>
                  </ul>
                </div>

                <div className="bg-purewhite p-6 rounded-sm border border-border mt-12">
                  <h2 className="font-display text-2xl font-bold text-primarytext mb-4">Contact and Support</h2>
                  <p className="mb-4">
                    For returns, shipping, or order status:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@spionpictures.com</p>
                    <p><strong>Phone:</strong> +90 552 551 51 84</p>
                    <p><strong>Business Hours:</strong> Monday-Friday 09:00-18:00</p>
                    <p><strong>Address:</strong> Istanbul, Turkey</p>
                  </div>
                  <p className="mt-4 text-sm">
                    For consumer complaints: <strong>www.tuketici.gov.tr</strong>
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
