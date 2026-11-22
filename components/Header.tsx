'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const navigation = [
  { name: 'Eserler', nameEn: 'Artworks', href: '/artworks' },
  { name: 'Koleksiyonlar', nameEn: 'Collections', href: '/collections' },
  { name: 'Hakkımızda', nameEn: 'About', href: '/about' },
  { name: 'Hizmetler', nameEn: 'Services', href: '/services' },
  { name: 'Projeler', nameEn: 'Projects', href: '/projects' },
  { name: 'Journal', nameEn: 'Journal', href: '/journal' },
  { name: 'İletişim', nameEn: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isEnglish = pathname?.startsWith('/en')

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom" aria-label="Global navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={isEnglish ? '/en' : '/'} className="block">
              <Image
                src="/img/logo.png"
                alt="Spion Pictures"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={isEnglish ? `/en${item.href}` : item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href || pathname === `/en${item.href}`
                    ? 'text-primary'
                    : 'text-secondarytext'
                }`}
              >
                {isEnglish ? item.nameEn : item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-x-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-x-2">
              <Link
                href={pathname?.replace('/en', '') || '/'}
                className={`text-sm font-medium transition-colors ${
                  !isEnglish ? 'text-primary' : 'text-secondarytext hover:text-primary'
                }`}
              >
                TR
              </Link>
              <span className="text-secondarytext">/</span>
              <Link
                href={`/en${pathname?.replace('/en', '') || '/'}`}
                className={`text-sm font-medium transition-colors ${
                  isEnglish ? 'text-primary' : 'text-secondarytext hover:text-primary'
                }`}
              >
                EN
              </Link>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 hover:bg-border rounded-md transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {/* Cart count badge - will be dynamic */}
              <span className="absolute -top-1 -right-1 bg-primary text-purewhite text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 hover:bg-border rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={isEnglish ? `/en${item.href}` : item.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === item.href || pathname === `/en${item.href}`
                      ? 'text-primary'
                      : 'text-secondarytext hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isEnglish ? item.nameEn : item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-x-3 pt-4 border-t border-border mt-2">
                <Link
                  href={pathname?.replace('/en', '') || '/'}
                  className={`text-base font-medium ${
                    !isEnglish ? 'text-primary' : 'text-secondarytext'
                  }`}
                >
                  Türkçe
                </Link>
                <span className="text-secondarytext">|</span>
                <Link
                  href={`/en${pathname?.replace('/en', '') || '/'}`}
                  className={`text-base font-medium ${
                    isEnglish ? 'text-primary' : 'text-secondarytext'
                  }`}
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
