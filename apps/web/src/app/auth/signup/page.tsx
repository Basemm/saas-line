import LoginSignupForm from '@/app/auth/_components/loginSignupForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Line - Sign Up',
  description: 'Sign Up',
}

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoginSignupForm state="signup" />
    </main>
  )
}
