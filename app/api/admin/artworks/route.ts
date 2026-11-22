import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

// GET - List ALL artworks (including unpublished) for admin
export async function GET() {
  try {
    const supabase = getSupabaseAdmin()

    const { data: artworks, error } = await supabase
      .from('artworks')
      .select(`
        *,
        artwork_images(*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Admin artworks error:', error)
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
