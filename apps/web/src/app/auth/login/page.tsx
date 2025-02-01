import getSupabaseServerClient from '@/lib/getSupabaseServerClient'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import LoginForm from './loginForm'

export const metadata: Metadata = {
  title: 'SaaS Line - Login',
  description: 'Login',
}

interface LoginPageProps {
  searchParams: Promise<{ confirmationError?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { confirmationError } = await searchParams
  const { data } = await getSupabaseServerClient().auth.getUser()

  if (data.user) {
    redirect('/')
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginForm confirmationError={confirmationError} />
    </main>
  )
}
