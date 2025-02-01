import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import getSupabaseServerClient from '@/lib/getSupabaseServerClient'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const nextURL = searchParams.get('next') ?? '/'
  const confirmationErrorPath = '/auth/login?confirmationError=true'

  if (!token_hash || !type) {
    redirect(confirmationErrorPath)
  }

  const supabase = getSupabaseServerClient()

  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  })

  if (error) {
    redirect(confirmationErrorPath)
  }

  redirect(nextURL)
}
