/**
 * JSON-LD Structured Data Generators
 * Google Search requires valid structured data for rich results
 */

import React from 'react'
import { Artwork, Collection, Article, Service } from '@/types'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const SITE_NAME = 'Spion Pictures'

/**
 * Organization structured data (for site-wide usage)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-primary.svg`,
    description: 'Özgün dijital sanat eserleri. Fiziksel dünyada yaşamak için tasarlanmış koleksiyonlar.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-552-551-51-84',
      contactType: 'Customer Service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://instagram.com/spionmedia',
    ],
  }
}

/**
 * Website structured data
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/artworks?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Breadcrumb list structured data
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

/**
 * Product (Artwork) structured data
 */
export function generateArtworkProductSchema(
  artwork: Artwork,
  lang: 'tr' | 'en' = 'tr'
) {
  const title = lang === 'en' ? artwork.title_en : artwork.title_tr
  const description = lang === 'en' ? artwork.description_en : artwork.description_tr
  const primaryImage = artwork.images?.find(img => img.is_primary)

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: description || `${title} by ${artwork.artist_name}`,
    image: primaryImage?.image_url || `${SITE_URL}/placeholder-artwork.jpg`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/artworks/${artwork.slug}`,
      priceCurrency: artwork.currency,
      price: artwork.base_price,
      availability:
        artwork.sold_editions < artwork.total_editions
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      priceValidUntil: new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1000
      ).toISOString().split('T')[0],
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Artist',
        value: artwork.artist_name,
      },
      {
        '@type': 'PropertyValue',
        name: 'Edition',
        value: `Limited Edition ${artwork.total_editions}`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Available',
        value: `${artwork.total_editions - artwork.sold_editions} of ${artwork.total_editions}`,
      },
    ],
  }
}

/**
 * Collection structured data
 */
export function generateCollectionSchema(
  collection: Collection,
  artworks: Artwork[],
  lang: 'tr' | 'en' = 'tr'
) {
  const name = lang === 'en' ? collection.name_en : collection.name_tr
  const description = lang === 'en' ? collection.description_en : collection.description_tr

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: name,
    description: description,
    url: `${SITE_URL}/collections/${collection.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: artworks.length,
      itemListElement: artworks.map((artwork, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/artworks/${artwork.slug}`,
      })),
    },
  }
}

/**
 * Article/BlogPosting structured data
 */
export function generateArticleSchema(
  article: Article,
  lang: 'tr' | 'en' = 'tr'
) {
  const title = lang === 'en' ? article.title_en : article.title_tr
  const content = lang === 'en' ? article.content_en : article.content_tr
  const excerpt = lang === 'en' ? article.excerpt_en : article.excerpt_tr

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt || title,
    image: article.cover_image,
    author: {
      '@type': 'Organization',
      name: article.author || SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-primary.svg`,
      },
    },
    datePublished: article.published_at || article.created_at,
    dateModified: article.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/journal/${article.slug}`,
    },
  }
}

/**
 * Service structured data
 */
export function generateServiceSchema(
  service: Service,
  lang: 'tr' | 'en' = 'tr'
) {
  const title = lang === 'en' ? service.title_en : service.title_tr
  const description = lang === 'en' ? service.description_en : service.description_tr

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Spion Media',
      parentOrganization: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    url: `${SITE_URL}/services/${service.slug}`,
  }
}

/**
 * Helper to safely stringify JSON-LD
 */
export function stringifyJsonLd(data: any): string {
  return JSON.stringify(data, null, 0)
}

/**
 * Component wrapper for JSON-LD script tag
 */
export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(data) }}
      suppressHydrationWarning
    />
  )
}
