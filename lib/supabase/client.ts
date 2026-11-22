import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

/**
 * Client-side Supabase client (for use in components)
 */
export function getSupabaseBrowserClient() {
  return createClientComponentClient()
}

// Export createClient for backward compatibility
export function createClient() {
  return createClientComponentClient()
}

/**
 * Server-side Supabase client with service role (admin privileges)
 * ONLY use this in server components, API routes, or server actions
 * NEVER expose service role key to the client
 */
export function getSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createSupabaseClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

