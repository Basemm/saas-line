import getConfig from '@/lib/getConfig'
import { createBrowserClient } from '@supabase/ssr'

export default function getSupabaseBrowserClient() {
  return createBrowserClient(
    getConfig().supabaseURL,
    getConfig().supabaseAnonKey
  )
}
