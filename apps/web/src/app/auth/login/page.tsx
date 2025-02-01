import LoginSignupForm from '@/app/auth/_components/loginSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Line - Login',
  description: 'Login',
}

interface LoginPageProps {
  searchParams: Promise<{ confirmationError?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { confirmationError } = await searchParams

  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginSignupForm confirmationError={confirmationError} state="login" />
    </main>
  )
}
