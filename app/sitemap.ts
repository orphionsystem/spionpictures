import { MetadataRoute } from 'next'
import { getSupabaseServerClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spionpictures.com'
  const supabase = getSupabaseServerClient()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          tr: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/artworks`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/artworks`,
          tr: `${baseUrl}/artworks`,
        },
      },
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/collections`,
          tr: `${baseUrl}/collections`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services`,
          tr: `${baseUrl}/services`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/projects`,
          tr: `${baseUrl}/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/journal`,
          tr: `${baseUrl}/journal`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          tr: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          tr: `${baseUrl}/contact`,
        },
      },
    },
  ]

  // Dynamic artwork pages
  const { data: artworks } = await supabase
    .from('artworks')
    .select('slug, updated_at')
    .eq('is_published', true)

  const artworkPages: MetadataRoute.Sitemap = (artworks || []).map((artwork) => ({
    url: `${baseUrl}/artworks/${artwork.slug}`,
    lastModified: new Date(artwork.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/en/artworks/${artwork.slug}`,
        tr: `${baseUrl}/artworks/${artwork.slug}`,
      },
    },
  }))

  // Dynamic collection pages
  const { data: collections } = await supabase
    .from('collections')
    .select('slug, updated_at')
    .eq('is_published', true)

  const collectionPages: MetadataRoute.Sitemap = (collections || []).map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(collection.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/en/collections/${collection.slug}`,
        tr: `${baseUrl}/collections/${collection.slug}`,
      },
    },
  }))

  return [...staticPages, ...artworkPages, ...collectionPages]
}
