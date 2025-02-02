import memoize from '@repo/utils/memoize'
import { z } from 'zod'

const configSchema = z.object({
  supabaseURL: z.string().url(),
  // Arbitrary length, it's mostly larger than 50 to ensure no random/test text
  supabaseAnonKey: z.string().min(10),
  googleOAuthClientId: z.string().min(10),
})

const config = {
  supabaseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  googleOAuthClientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
}

function getConfig() {
  const result = configSchema.safeParse(config)

  if (!result.success) {
    console.error('Invalid Supabase config', result.error)
    throw new Error(result.error.errors.join('\n'))
  }

  return result.data
}

export default memoize(getConfig)
