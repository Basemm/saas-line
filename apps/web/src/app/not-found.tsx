import Footer from '@/app/(website)/_components/footer'
import Header from '@/app/(website)/_components/header'
import { Button } from '@repo/core-ui/components/ui/button'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Line - Page Not Found',
  description: 'Page Not Found',
}

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center gap-8 py-24">
        <Image
          alt="Error 404: Page Not Found"
          className="rounded-xl"
          height={600}
          src="/img/cute-puppy-404-error.jpg"
          width={600}
        />

        <Button asChild size="lg" title="Back to Home" variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}
