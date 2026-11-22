import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

/**
 * Get Supabase client for Server Components
 */
export function getSupabaseServerClient() {
  return createServerComponentClient({ cookies })
}
