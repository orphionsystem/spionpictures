'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  artworks: [
    { name: 'Tüm Eserler', nameEn: 'All Artworks', href: '/artworks' },
    { name: 'Koleksiyonlar', nameEn: 'Collections', href: '/collections' },
    { name: 'Yeni Eklenenler', nameEn: 'New Arrivals', href: '/artworks?filter=new' },
    { name: 'Öne Çıkanlar', nameEn: 'Featured', href: '/artworks?filter=featured' },
  ],
  services: [
    { name: 'Film & Prodüksiyon', nameEn: 'Film & Production', href: '/services#film' },
    { name: 'Dijital Teknolojiler', nameEn: 'Digital Technology', href: '/services#digital' },
    { name: 'Reklam & Büyüme', nameEn: 'Marketing & Growth', href: '/services#marketing' },
    { name: 'Deneyimsel Medya', nameEn: 'Experiential Media', href: '/services#experiential' },
  ],
  company: [
    { name: 'Hakkımızda', nameEn: 'About Us', href: '/about' },
    { name: 'Projeler', nameEn: 'Projects', href: '/projects' },
    { name: 'Journal', nameEn: 'Journal', href: '/journal' },
    { name: 'İletişim', nameEn: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', nameEn: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Kullanım Koşulları', nameEn: 'Terms of Use', href: '/legal/terms' },
    { name: 'KVKK', nameEn: 'Data Protection', href: '/legal/kvkk' },
    { name: 'İade ve Teslimat', nameEn: 'Refund & Shipping', href: '/legal/refund-shipping' },
  ],
}

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darksection text-purewhite">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Image
              src="/img/logo.png"
              alt="Spion Pictures"
              width={180}
              height={60}
              className="h-10 w-auto mb-6 brightness-200"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              {isEnglish
                ? 'Original digital artworks. Physical collections designed to live beyond the screen.'
                : 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.'}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/spionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-purewhite/10 rounded-md transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@spionpictures.com"
                className="p-2 hover:bg-purewhite/10 rounded-md transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+905525515184"
                className="p-2 hover:bg-purewhite/10 rounded-md transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Artworks */}
            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                {isEnglish ? 'Artworks' : 'Eserler'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.artworks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={isEnglish ? `/en${link.href}` : link.href}
                      className="text-sm text-gray-400 hover:text-purewhite transition-colors"
                    >
                      {isEnglish ? link.nameEn : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                {isEnglish ? 'Services' : 'Hizmetler'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={isEnglish ? `/en${link.href}` : link.href}
                      className="text-sm text-gray-400 hover:text-purewhite transition-colors"
                    >
                      {isEnglish ? link.nameEn : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                {isEnglish ? 'Company' : 'Kurumsal'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={isEnglish ? `/en${link.href}` : link.href}
                      className="text-sm text-gray-400 hover:text-purewhite transition-colors"
                    >
                      {isEnglish ? link.nameEn : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                {isEnglish ? 'Legal' : 'Yasal'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={isEnglish ? `/en${link.href}` : link.href}
                      className="text-sm text-gray-400 hover:text-purewhite transition-colors"
                    >
                      {isEnglish ? link.nameEn : link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purewhite/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Spion Pictures. {isEnglish ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
            </p>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <Link
                href={pathname?.replace('/en', '') || '/'}
                className={`text-sm font-medium transition-colors ${
                  !isEnglish ? 'text-purewhite' : 'text-gray-400 hover:text-purewhite'
                }`}
              >
                Türkçe
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href={`/en${pathname?.replace('/en', '') || '/'}`}
                className={`text-sm font-medium transition-colors ${
                  isEnglish ? 'text-purewhite' : 'text-gray-400 hover:text-purewhite'
                }`}
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
