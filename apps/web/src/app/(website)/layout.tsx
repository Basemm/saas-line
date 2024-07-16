import Footer from '@/app/(website)/_components/footer'
import Header from '@/app/(website)/_components/header'
import '@repo/core-ui/globals.css'
import { cn } from '@repo/core-ui/lib/utils'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark antialiased" lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}
