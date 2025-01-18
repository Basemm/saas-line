import Footer from '@/app/(website)/_components/footer'
import Header from '@/app/(website)/_components/header'
import '@repo/core-ui/globals.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
