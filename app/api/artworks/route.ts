import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseAdmin()
    const formData = await request.formData()

    // Extract form fields
    const title_tr = formData.get('title_tr') as string
    const title_en = formData.get('title_en') as string
    const artist_name = formData.get('artist_name') as string
    const slug = formData.get('slug') as string
    const description_tr = formData.get('description_tr') as string
    const description_en = formData.get('description_en') as string
    const base_price = parseFloat(formData.get('base_price') as string)
    const total_editions = parseInt(formData.get('total_editions') as string)
    const currency = formData.get('currency') as string || 'TRY'
    const is_published = formData.get('is_published') === 'true'
    const featured = formData.get('featured') === 'true'

    // Get image files
    const images = formData.getAll('images') as File[]

    if (!images || images.length === 0) {
      return NextResponse.json(
        { error: 'En az bir görsel yüklemelisiniz' },
        { status: 400 }
      )
    }

    // Upload images to Supabase Storage
    const imageUrls: string[] = []
    
    for (let i = 0; i < images.length; i++) {
      const file = images[i]
      const fileExt = file.name.split('.').pop()
      const fileName = `${slug}-${Date.now()}-${i}.${fileExt}`
      const filePath = `artworks/${fileName}`

      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('artworks')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        return NextResponse.json(
          { error: 'Görsel yükleme hatası: ' + uploadError.message },
          { status: 500 }
        )
      }

      // Get public URL
      const { data: { publicUrl } } = supabase
        .storage
        .from('artworks')
        .getPublicUrl(filePath)

      imageUrls.push(publicUrl)
    }

    // Insert artwork into database
    const { data: artwork, error: artworkError } = await supabase
      .from('artworks')
      .insert({
        slug,
        title_tr,
        title_en,
        artist_name,
        description_tr,
        description_en,
        base_price,
        total_editions,
        currency,
        is_published,
        featured,
        sold_editions: 0,
      })
      .select()
      .single()

    if (artworkError) {
      console.error('Artwork insert error:', artworkError)
      return NextResponse.json(
        { error: 'Eser kaydetme hatası: ' + artworkError.message },
        { status: 500 }
      )
    }

    // Insert artwork images
    for (let i = 0; i < imageUrls.length; i++) {
      const { error: imageError } = await supabase
        .from('artwork_images')
        .insert({
          artwork_id: artwork.id,
          image_url: imageUrls[i],
          display_order: i,
          is_primary: i === 0, // First image is primary
          alt_text_tr: `${title_tr} - Görsel ${i + 1}`,
          alt_text_en: `${title_en} - Image ${i + 1}`,
        })

      if (imageError) {
        console.error('Image insert error:', imageError)
      }
    }

    // Create edition records
    for (let i = 1; i <= total_editions; i++) {
      await supabase
        .from('editions')
        .insert({
          artwork_id: artwork.id,
          edition_number: i,
          is_sold: false,
          is_reserved: false,
        })
    }

    return NextResponse.json({
      success: true,
      artwork,
      message: 'Eser başarıyla kaydedildi!'
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu: ' + (error as Error).message },
      { status: 500 }
    )
  }
}

// GET - List artworks
export async function GET() {
  try {
    const supabase = getSupabaseAdmin()

    const { data: artworks, error } = await supabase
      .from('artworks')
      .select(`
        *,
        images:artwork_images(*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ artworks })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
