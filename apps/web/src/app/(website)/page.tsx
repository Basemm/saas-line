import ActivisionLogo from '@/app/(website)/_components/logos/activisionLogo'
import GoogleLogo from '@/app/(website)/_components/logos/googleLogo'
import IndofoodLogo from '@/app/(website)/_components/logos/indofoodLogo'
import RevelLogo from '@/app/(website)/_components/logos/revelLogo'
import VMWareLogo from '@/app/(website)/_components/logos/vmwareLogo'
import { Button } from '@repo/core-ui/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-[2000px]">
      <div className="bg-blue-700 pt-32">
        <div className="container flex justify-center">
          <div className="flex max-w-[760px] flex-col items-center text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl">
              SaaS Line the Fastest Way to Launch Your SaaS in No Time
            </h1>
            <p className="my-6 max-w-[540px] text-center text-base text-white">
              SaaS Line is a collection of ready-to-use SaaS components that you
              can use to build your SaaS in no time.
            </p>
            <div className="my-4 flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4">
              <GoogleLogo
                className="fill-slate-400 hover:fill-slate-50"
                width={100}
              />
              <VMWareLogo
                className="fill-slate-400 hover:fill-slate-50"
                width={100}
              />
              <ActivisionLogo
                className="fill-slate-400 hover:fill-slate-50"
                width={100}
              />
              <IndofoodLogo
                className="hidden fill-slate-400 hover:fill-slate-50 sm:block"
                width={100}
              />
              <RevelLogo
                className="hidden fill-slate-400 hover:fill-slate-50 sm:block"
                width={100}
              />
            </div>

            <div>
              <Image
                alt="Dashboard Screenshot"
                height={584}
                src="/img/dashboard-screenshot.jpg"
                width={842}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
