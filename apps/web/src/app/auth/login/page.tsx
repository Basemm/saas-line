import type { Metadata } from 'next'
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
  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginForm confirmationError={confirmationError} />
    </main>
  )
}
