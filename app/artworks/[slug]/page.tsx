import { getSupabaseServerClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'

export default async function ArtworkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const supabase = getSupabaseServerClient()
  
  const { data: artwork } = await supabase
    .from('artworks')
    .select('shopier_url, slug')
    .eq('slug', params.slug)
    .single()

  if (!artwork) {
    notFound()
  }

  // Eğer Shopier URL varsa oraya yönlendir
  if (artwork.shopier_url) {
    redirect(artwork.shopier_url)
  }

  // Shopier URL yoksa, geçici olarak artworks sayfasına yönlendir
  redirect('/artworks')
}
