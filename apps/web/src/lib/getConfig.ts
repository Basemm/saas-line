import memoize from '@repo/utils/memoize'
import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  // Arbitrary length, it's mostly larger than 50 to ensure no random/test text
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10),
  NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID: z.string().min(10),
})

const config = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID:
    process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
}

function getConfig() {
  const result = configSchema.safeParse(config)

  if (!result.success) {
    console.error('Invalid Supabase config', result.error)
    throw new Error(result.error.errors.join('\n'))
  }

  return {
    supabaseURL: result.data.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: result.data.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    googleOAuthClientId: result.data.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
  }
}

export default memoize(getConfig)
