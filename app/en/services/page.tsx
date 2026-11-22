'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { ShoppingCart, X, ChevronDown, Download } from 'lucide-react'
import jsPDF from 'jspdf'

interface Service {
  id: string
  category: string
  badge: string
  title: string
  description: string
  price: number
  unit: string
}

const services: Service[] = [
  // Video & Production
  {
    id: 'social-media-video',
    category: 'Video & Production',
    badge: 'Video Shooting',
    title: 'Social Media Video Production',
    description: 'Professional shooting for Reels, TikTok and feed videos.',
    price: 2500,
    unit: 'piece'
  },
  {
    id: 'drone-shooting',
    category: 'Video & Production',
    badge: 'Drone',
    title: 'Drone Shooting',
    description: 'Impressive aerial footage with drone technology.',
    price: 3500,
    unit: 'piece'
  },
  {
    id: 'promotional-film',
    category: 'Video & Production',
    badge: 'Promotional Film',
    title: 'Promotional Film',
    description: 'Cinematic video for company and product promotion.',
    price: 8500,
    unit: 'piece'
  },
  {
    id: 'product-photo',
    category: 'Video & Production',
    badge: 'Product Photography',
    title: 'Product Photography',
    description: 'Product photos for e-commerce and social media.',
    price: 1800,
    unit: 'session'
  },
  {
    id: 'corporate-photo',
    category: 'Video & Production',
    badge: 'Corporate Photography',
    title: 'Corporate Photography',
    description: 'Office, team and event photography.',
    price: 2500,
    unit: 'session'
  },
  {
    id: 'video-editing',
    category: 'Video & Production',
    badge: 'Video Editing',
    title: 'Video Editing and Post Production',
    description: 'Color correction, sound design, effects and editing.',
    price: 1500,
    unit: 'minute'
  },
  {
    id: 'motion-graphics',
    category: 'Video & Production',
    badge: 'Motion Graphics',
    title: 'Motion Graphics and Animation',
    description: '2D/3D animation and motion graphics design.',
    price: 3000,
    unit: 'piece'
  },
  {
    id: 'documentary',
    category: 'Video & Production',
    badge: 'Documentary',
    title: 'Documentary and Interview Shooting',
    description: 'Story-focused documentary and interview production.',
    price: 12000,
    unit: 'project'
  },
  {
    id: 'live-stream',
    category: 'Video & Production',
    badge: 'Live Stream',
    title: 'Live Stream Production',
    description: 'Technical support for event and webinar live streaming.',
    price: 5000,
    unit: 'event'
  },
  {
    id: '360-video',
    category: 'Video & Production',
    badge: '360° Video',
    title: '360° Video Shooting',
    description: '360° shooting for virtual tours and immersive experiences.',
    price: 4500,
    unit: 'piece'
  },

  // Digital Marketing
  {
    id: 'social-media-management',
    category: 'Digital Marketing',
    badge: 'Social Media',
    title: 'Social Media Management',
    description: 'Instagram, Facebook, TikTok account management.',
    price: 4500,
    unit: 'month'
  },
  {
    id: 'google-ads',
    category: 'Digital Marketing',
    badge: 'Google Ads',
    title: 'Google Ads Management',
    description: 'Search and display advertising campaigns.',
    price: 3500,
    unit: 'month'
  },
  {
    id: 'meta-ads',
    category: 'Digital Marketing',
    badge: 'Meta Ads',
    title: 'Meta Ads (FB & IG)',
    description: 'Targeted Facebook and Instagram advertising.',
    price: 3000,
    unit: 'month'
  },
  {
    id: 'content-creation',
    category: 'Digital Marketing',
    badge: 'Content Creation',
    title: 'Content Creation Package',
    description: 'Monthly 20 visual and 10 short video content pieces.',
    price: 6000,
    unit: 'month'
  },
  {
    id: 'influencer-marketing',
    category: 'Digital Marketing',
    badge: 'Influencer Marketing',
    title: 'Influencer Marketing Campaign',
    description: 'Influencer selection, negotiation and campaign management.',
    price: 8000,
    unit: 'campaign'
  },
  {
    id: 'seo-optimization',
    category: 'Digital Marketing',
    badge: 'SEO',
    title: 'SEO Optimization',
    description: 'Search engine optimization and organic traffic growth.',
    price: 5000,
    unit: 'month'
  },
  {
    id: 'email-marketing',
    category: 'Digital Marketing',
    badge: 'Email Marketing',
    title: 'Email Marketing Campaign',
    description: 'Newsletter design, writing and delivery management.',
    price: 2500,
    unit: 'month'
  },
  {
    id: 'marketing-strategy',
    category: 'Digital Marketing',
    badge: 'Strategy Consulting',
    title: 'Digital Marketing Strategy',
    description: 'Brand analysis and 6-month digital marketing strategy.',
    price: 15000,
    unit: 'project'
  },
  {
    id: 'community-management',
    category: 'Digital Marketing',
    badge: 'Community Management',
    title: 'Community Management',
    description: 'Comment, message and user engagement management.',
    price: 2000,
    unit: 'month'
  },
  {
    id: 'analytics-reporting',
    category: 'Digital Marketing',
    badge: 'Reporting',
    title: 'Analytics and Reporting',
    description: 'Detailed performance analysis and monthly reporting.',
    price: 1500,
    unit: 'month'
  },

  // Web & Software
  {
    id: 'corporate-website',
    category: 'Web & Software',
    badge: 'Corporate Web',
    title: 'Corporate Website',
    description: '5-page, mobile-responsive, SEO optimized.',
    price: 15000,
    unit: 'project'
  },
  {
    id: 'ecommerce-website',
    category: 'Web & Software',
    badge: 'E-Commerce',
    title: 'E-Commerce Website',
    description: 'WooCommerce or Shopify integrated.',
    price: 25000,
    unit: 'project'
  },
  {
    id: 'landing-page',
    category: 'Web & Software',
    badge: 'Landing Page',
    title: 'Landing Page Design',
    description: 'Single page site for campaigns and product launches.',
    price: 5000,
    unit: 'piece'
  },
  {
    id: 'mobile-app',
    category: 'Web & Software',
    badge: 'Mobile App',
    title: 'Mobile App Development',
    description: 'iOS and Android app (React Native).',
    price: 50000,
    unit: 'project'
  },
  {
    id: 'web-maintenance',
    category: 'Web & Software',
    badge: 'Maintenance & Support',
    title: 'Website Maintenance and Support',
    description: 'Updates, backups and technical support.',
    price: 2000,
    unit: 'month'
  },
  {
    id: 'ui-ux-design',
    category: 'Web & Software',
    badge: 'UI/UX Design',
    title: 'UI/UX Design Service',
    description: 'User experience and interface design.',
    price: 8000,
    unit: 'project'
  },
  {
    id: 'api-integration',
    category: 'Web & Software',
    badge: 'API Integration',
    title: 'API and System Integration',
    description: 'Third-party system and API integrations.',
    price: 6000,
    unit: 'project'
  },
  {
    id: 'database-design',
    category: 'Web & Software',
    badge: 'Database',
    title: 'Database Design',
    description: 'Custom database architecture and optimization.',
    price: 7000,
    unit: 'project'
  },
  {
    id: 'hosting-setup',
    category: 'Web & Software',
    badge: 'Hosting & Domain',
    title: 'Hosting and Domain Setup',
    description: 'Server setup, SSL and DNS management.',
    price: 1000,
    unit: 'project'
  },
  {
    id: 'web-security',
    category: 'Web & Software',
    badge: 'Security',
    title: 'Web Security Audit',
    description: 'Security vulnerability scanning and improvement recommendations.',
    price: 4000,
    unit: 'project'
  },

  // Graphic Design
  {
    id: 'brand-identity',
    category: 'Graphic Design',
    badge: 'Corporate Identity',
    title: 'Corporate Identity Design',
    description: 'Logo, business card, letterhead, brand guide.',
    price: 12000,
    unit: 'package'
  },
  {
    id: 'logo-design',
    category: 'Graphic Design',
    badge: 'Logo',
    title: 'Logo Design',
    description: '3 concepts, unlimited revisions, all format delivery.',
    price: 5000,
    unit: 'project'
  },
  {
    id: 'social-media-design',
    category: 'Graphic Design',
    badge: 'Social Media Design',
    title: 'Social Media Graphics',
    description: 'Monthly 30 feed and story designs.',
    price: 3500,
    unit: 'month'
  },
  {
    id: 'brochure-design',
    category: 'Graphic Design',
    badge: 'Brochure',
    title: 'Brochure and Catalog Design',
    description: 'Product catalog and promotional brochure design.',
    price: 4000,
    unit: 'project'
  },
  {
    id: 'packaging-design',
    category: 'Graphic Design',
    badge: 'Packaging',
    title: 'Packaging Design',
    description: 'Product packaging 3D mockup and print-ready files.',
    price: 6000,
    unit: 'project'
  },
  {
    id: 'banner-design',
    category: 'Graphic Design',
    badge: 'Banner',
    title: 'Banner and Billboard Design',
    description: 'Large format design for outdoor and events.',
    price: 2500,
    unit: 'piece'
  },
  {
    id: 'infographic',
    category: 'Graphic Design',
    badge: 'Infographic',
    title: 'Infographic Design',
    description: 'Data visualization and informative graphics.',
    price: 2000,
    unit: 'piece'
  },
  {
    id: 'presentation',
    category: 'Graphic Design',
    badge: 'Presentation',
    title: 'Presentation Design',
    description: 'PowerPoint / Keynote template and presentation design.',
    price: 3000,
    unit: 'project'
  },
  {
    id: 'menu-design',
    category: 'Graphic Design',
    badge: 'Menu',
    title: 'Menu and Price List Design',
    description: 'Restaurant, cafe and business menu design.',
    price: 2000,
    unit: 'project'
  },
  {
    id: 'sticker-design',
    category: 'Graphic Design',
    badge: 'Label & Sticker',
    title: 'Label and Sticker Design',
    description: 'Product label, sticker and decal design.',
    price: 1500,
    unit: 'set'
  },

  // Promotional Products
  {
    id: 'tshirt-printing',
    category: 'Promotional Products',
    badge: 'T-shirt',
    title: 'T-shirt Printing',
    description: 'Custom design t-shirt printing (minimum 50 pieces).',
    price: 80,
    unit: 'piece'
  },
  {
    id: 'tote-bag',
    category: 'Promotional Products',
    badge: 'Tote Bag',
    title: 'Tote Bag Printing',
    description: 'Logo and slogan printed tote bags.',
    price: 25,
    unit: 'piece'
  },
  {
    id: 'mug-printing',
    category: 'Promotional Products',
    badge: 'Mug',
    title: 'Mug Printing',
    description: 'White ceramic mug with logo printing.',
    price: 30,
    unit: 'piece'
  },
  {
    id: 'notebook',
    category: 'Promotional Products',
    badge: 'Notebook',
    title: 'Custom Design Notebook',
    description: 'A5 notebook, hardcover, custom cover design.',
    price: 15,
    unit: 'piece'
  },
  {
    id: 'pen-printing',
    category: 'Promotional Products',
    badge: 'Pen',
    title: 'Promotional Pen',
    description: 'Logo printed ballpoint pen.',
    price: 5,
    unit: 'piece'
  },
  {
    id: 'usb-flash',
    category: 'Promotional Products',
    badge: 'USB',
    title: 'USB Flash Drive',
    description: '8GB USB drive, logo printing (minimum 100 pieces).',
    price: 40,
    unit: 'piece'
  },
  {
    id: 'powerbank',
    category: 'Promotional Products',
    badge: 'Powerbank',
    title: 'Promotional Powerbank',
    description: '5000mAh powerbank, logo printing.',
    price: 120,
    unit: 'piece'
  },
  {
    id: 'badge',
    category: 'Promotional Products',
    badge: 'Badge',
    title: 'Badge and Magnet',
    description: 'Custom design badge and fridge magnet.',
    price: 8,
    unit: 'piece'
  },
  {
    id: 'keychain',
    category: 'Promotional Products',
    badge: 'Keychain',
    title: 'Keychain',
    description: 'Metal or PVC keychain, logo printing.',
    price: 12,
    unit: 'piece'
  },
  {
    id: 'sticker-print',
    category: 'Promotional Products',
    badge: 'Sticker Printing',
    title: 'Sticker Printing',
    description: 'Custom die-cut sticker printing.',
    price: 3,
    unit: 'piece'
  },
]

const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState<{[key: string]: number}>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('services_cart_en')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('services_cart_en', JSON.stringify(cart))
  }, [cart])

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory)

  const addToCart = (serviceId: string) => {
    setCart(prev => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) + 1
    }))
  }

  const updateQuantity = (serviceId: string, delta: number) => {
    setCart(prev => {
      const newQuantity = (prev[serviceId] || 0) + delta
      if (newQuantity <= 0) {
        const { [serviceId]: _, ...rest } = prev
        return rest
      }
      return {
        ...prev,
        [serviceId]: newQuantity
      }
    })
  }

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)
  
  const cartItems = Object.entries(cart).map(([serviceId, quantity]) => {
    const service = services.find(s => s.id === serviceId)!
    return { service, quantity, subtotal: service.price * quantity }
  })

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0)

  const generatePDF = () => {
    const doc = new jsPDF()
    
    // Header
    doc.setFontSize(20)
    doc.text('SPION PICTURES', 105, 20, { align: 'center' })
    doc.setFontSize(12)
    doc.text('Service Quotation Invoice', 105, 30, { align: 'center' })
    
    // Date
    doc.setFontSize(10)
    doc.text(`Date: ${new Date().toLocaleDateString('en-US')}`, 20, 45)
    
    // Line
    doc.setLineWidth(0.5)
    doc.line(20, 50, 190, 50)
    
    // Table header
    let yPos = 60
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Service', 20, yPos)
    doc.text('Quantity', 120, yPos)
    doc.text('Unit Price', 145, yPos)
    doc.text('Amount', 175, yPos)
    
    yPos += 5
    doc.line(20, yPos, 190, yPos)
    yPos += 8
    
    // Items
    doc.setFont('helvetica', 'normal')
    cartItems.forEach(item => {
      if (yPos > 270) {
        doc.addPage()
        yPos = 20
      }
      
      doc.text(item.service.title.substring(0, 35), 20, yPos)
      doc.text(`${item.quantity} ${item.service.unit}`, 120, yPos)
      doc.text(`₺${item.service.price.toLocaleString('en-US')}`, 145, yPos)
      doc.text(`₺${item.subtotal.toLocaleString('en-US')}`, 175, yPos)
      yPos += 8
    })
    
    // Total
    yPos += 5
    doc.setLineWidth(0.5)
    doc.line(20, yPos, 190, yPos)
    yPos += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text(`TOTAL: ₺${total.toLocaleString('en-US')}`, 175, yPos, { align: 'right' })
    
    // Footer
    yPos += 20
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('This is a proforma invoice. Official invoice will be issued after transaction.', 105, yPos, { align: 'center' })
    doc.text('info@spionpictures.com | +90 552 551 51 84', 105, yPos + 7, { align: 'center' })
    
    doc.save(`spion-quote-${Date.now()}.pdf`)
  }

  // Group services by category
  const servicesByCategory = selectedCategory === 'All'
    ? categories.slice(1).map(cat => ({
        category: cat,
        items: services.filter(s => s.category === cat)
      }))
    : [{
        category: selectedCategory,
        items: filteredServices
      }]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-16 border-b border-border animate-fade-in">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-block h-[1px] w-16 bg-primary mb-6" />
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-lg text-secondarytext leading-relaxed">
                Professional services to grow your brand from video production to digital marketing, 
                website development to promotional products.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-purewhite border-b border-border sticky top-20 z-40">
          <div className="container-custom">
            <div className="flex items-center justify-between gap-4">
              {/* Category Dropdown */}
              <div className="relative flex-1 max-w-sm">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3 bg-purewhite border-2 border-border rounded-sm text-left flex items-center justify-between hover:border-primary transition-all duration-300 group"
                >
                  <span className="font-medium">{selectedCategory}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-purewhite border-2 border-border rounded-sm shadow-lg overflow-hidden animate-slide-down z-50">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat)
                          setDropdownOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-primary hover:text-purewhite transition-all duration-200 ${
                          selectedCategory === cat ? 'bg-primary/10 text-primary font-medium' : ''
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Button */}
              {totalItems > 0 && (
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart ({totalItems})</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            {servicesByCategory.map(({ category, items }) => (
              <div key={category} className="mb-16 last:mb-0 animate-fade-in">
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold mb-2">
                    {category}
                  </h2>
                  <div className="h-[1px] w-24 bg-primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(service => (
                    <div
                      key={service.id}
                      className="bg-purewhite border border-border rounded-sm p-6 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {service.badge}
                      </span>

                      <h3 className="font-semibold text-lg mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm text-secondarytext mb-4">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₺{service.price.toLocaleString('en-US')}
                          </span>
                          <span className="text-sm text-secondarytext ml-2">
                            / {service.unit}
                          </span>
                        </div>
                      </div>

                      {cart[service.id] ? (
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-border rounded-sm overflow-hidden">
                            <button
                              onClick={() => updateQuantity(service.id, -1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-purewhite transition-all duration-200"
                            >
                              −
                            </button>
                            <span className="w-12 text-center font-medium">
                              {cart[service.id]}
                            </span>
                            <button
                              onClick={() => updateQuantity(service.id, 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-purewhite transition-all duration-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => addToCart(service.id)}
                            className="flex-1 px-4 py-2 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                          >
                            Add to Cart
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(service.id)}
                          className="w-full px-4 py-2 bg-primary text-purewhite rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-purewhite rounded-sm max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl font-bold">My Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-border rounded-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {cartItems.length === 0 ? (
                <p className="text-center text-secondarytext py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(({ service, quantity, subtotal }) => (
                    <div key={service.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{service.title}</h3>
                        <p className="text-sm text-secondarytext mb-2">
                          {service.category}
                        </p>
                        <p className="text-sm">
                          ₺{service.price.toLocaleString('en-US')} x {quantity} {service.unit}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-primary">
                          ₺{subtotal.toLocaleString('en-US')}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(service.id, -1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded hover:bg-primary hover:text-purewhite transition-all"
                          >
                            −
                          </button>
                          <button
                            onClick={() => updateQuantity(service.id, 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded hover:bg-primary hover:text-purewhite transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xl font-bold">TOTAL</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    ₺{total.toLocaleString('en-US')}
                  </span>
                </div>
                <button
                  onClick={generatePDF}
                  className="w-full bg-primary text-purewhite px-6 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <p className="text-xs text-secondarytext text-center mt-3">
                  Will be downloaded as a proforma invoice
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
