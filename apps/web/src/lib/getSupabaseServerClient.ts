import getConfig from '@/lib/getConfig'
import type { CookieMethodsServer } from '@supabase/ssr'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export default function getSupabaseServerClient() {
  const cookieStore = cookies()
  const cookieMethodsServer: CookieMethodsServer = {
    getAll() {
      return cookieStore.getAll()
    },
    setAll(cookiesToSet) {
      try {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        )
      } catch {
        // The `setAll` method was called from a Server Component.
        // This can be ignored if you have middleware refreshing
        // user sessions.
        console.error(
          'You are trying to set a cookie from within a server component'
        )
      }
    },
  }

  return createServerClient(
    getConfig().supabaseURL,
    getConfig().supabaseAnonKey,
    {
      cookies: cookieMethodsServer,
    }
  )
}
