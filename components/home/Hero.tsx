'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  lang?: 'tr' | 'en'
}

export default function Hero({ lang = 'tr' }: HeroProps) {
  const isEnglish = lang === 'en'

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-purewhite">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[1px] h-64 bg-border" />
        <div className="absolute bottom-40 right-20 w-[1px] h-96 bg-border" />
        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondarytext">
              {isEnglish ? 'Independent Art & Media Studio' : 'Bağımsız Sanat ve Medya Stüdyosu'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] text-balance">
            {isEnglish ? (
              <>
                Art Goes<br />Beyond the Screen
              </>
            ) : (
              <>
                Sanat, ekranda<br />bitmez.
              </>
            )}
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-24 bg-primary" />
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-[1px] w-24 bg-primary" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondarytext max-w-3xl mx-auto mb-12 leading-relaxed">
            {isEnglish
              ? 'Original digital artworks. Physical collections designed to live in the real world.'
              : 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={isEnglish ? '/en/artworks' : '/artworks'}
              className="group inline-flex items-center gap-2 bg-primary text-purewhite px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              {isEnglish ? 'Discover Artworks' : 'Eserleri Keşfet'}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href={isEnglish ? '/en/collections' : '/collections'}
              className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-sm font-medium hover:bg-primary hover:text-purewhite transition-all duration-300 w-full sm:w-auto justify-center"
            >
              {isEnglish ? 'View Collections' : 'Koleksiyonları İncele'}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats or Info */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-12 border-t border-border">
            <div>
              <div className="font-display text-3xl font-bold mb-2">Limited</div>
              <div className="text-sm text-secondarytext uppercase tracking-wider">
                {isEnglish ? 'Editions' : 'Edisyon'}
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold mb-2">Premium</div>
              <div className="text-sm text-secondarytext uppercase tracking-wider">
                {isEnglish ? 'Quality' : 'Kalite'}
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold mb-2">Original</div>
              <div className="text-sm text-secondarytext uppercase tracking-wider">
                {isEnglish ? 'Artworks' : 'Eserler'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-primary" />
          <span className="text-xs text-secondarytext uppercase tracking-wider">
            {isEnglish ? 'Scroll' : 'Kaydır'}
          </span>
        </div>
      </div>
    </section>
  )
}
