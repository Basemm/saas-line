import ActivisionLogo from '@/app/(website)/_components/logos/activisionLogo'
import GoogleLogo from '@/app/(website)/_components/logos/googleLogo'
import IndofoodLogo from '@/app/(website)/_components/logos/indofoodLogo'
import RevelLogo from '@/app/(website)/_components/logos/revelLogo'
import VMWareLogo from '@/app/(website)/_components/logos/vmwareLogo'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  AppleIcon,
  AppWindowIcon,
  BellRingIcon,
  CheckIcon,
  MessageSquareTextIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-[4000px]">
      <section className="bg-blue-700 pt-32">
        <div className="container flex max-w-[760px] flex-col items-center justify-center text-center">
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
              className="rounded-t-lg"
              height={421}
              src="/img/dashboard-screenshot.jpg"
              width={760}
            />
          </div>
        </div>
      </section>

      <section className="container my-12 grid gap-6 md:grid-cols-2 md:gap-16">
        <Image
          alt="Mobile Phone Notification"
          className="rounded-lg"
          height={421}
          src="/img/mobile-phone-notification.avif"
          width={760}
        />
        <div className="order-last md:order-first">
          <h1 className="mb-4">Mobile App</h1>
          <p className="mb-6 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie. Quisque tristique lectus ut
            purus congue lobortis.
          </p>
          <p className="mb-16 text-muted-foreground">
            Aenean lacus odio, consectetur non ligula eget, varius dapibus nisi.
            Nunc mollis felis urna, vitae tempor dui molestie a. Duis cursus id
            ipsum a ornare. Quisque fermentum magna elit,
          </p>

          <div className="my-6 flex gap-6 border-b border-dashed border-secondary pb-4">
            <span className="self-center rounded-full bg-primary/20 p-3">
              <BellRingIcon size={20} />
            </span>
            <div>
              <h4>Get Notified</h4>
              <p className="text-muted-foreground">
                Quisque vel libero vehicula, egestas sem ac, mattis lacus
              </p>
            </div>
          </div>
          <div className="my-6 flex gap-6">
            <span className="self-center rounded-full bg-primary/20 p-3">
              <MessageSquareTextIcon size={20} />
            </span>
            <div>
              <h4>Chat with Your Team</h4>
              <p className="text-muted-foreground">
                Quisque vel libero vehicula, egestas sem ac, mattis lacus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 bg-blue-50 dark:bg-blue-950">
        <div className="container grid gap-6 py-16 md:grid-cols-2 md:gap-16">
          <Image
            alt="Cloud Network"
            className="rounded-lg"
            height={421}
            src="/img/cloud-network.svg"
            width={760}
          />
          <div>
            <h1 className="mb-4">Cloud Computing</h1>
            <p className="mb-6 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              semper ligula eu elementum molestie. Quisque tristique lectus ut
              purus congue lobortis.
            </p>
            <p className="mb-16 text-muted-foreground">
              Aenean lacus odio, consectetur non ligula eget, varius dapibus
              nisi. Nunc mollis felis urna, vitae tempor dui molestie a. Duis
              cursus id ipsum a ornare. Quisque fermentum magna elit,
            </p>

            <div className="my-4 flex gap-4">
              <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                <CheckIcon size={14} />
              </span>

              <h6 className="font-bold">Fast Cloud Deploys</h6>
            </div>
            <div className="my-4 flex gap-4">
              <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                <CheckIcon size={14} />
              </span>

              <h6 className="font-bold">Efficient CI/CD</h6>
            </div>
            <div className="my-4 flex gap-4">
              <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                <CheckIcon size={14} />
              </span>

              <h6 className="font-bold">Great Developer Experience</h6>
            </div>
            <div className="my-4 flex gap-4">
              <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                <CheckIcon size={14} />
              </span>

              <h6 className="font-bold">Dynamic Failover</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-16">
        <div className="max-w-[540px] self-center text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl">Main Features</h1>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie. Quisque tristique lectus ut
            purus congue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <AppleIcon size={36} />
            </span>
            <h3 className="mt-4">ِSocial Authentication</h3>
            <p className="text-muted-foreground">
              Donec semper ligula eu elementum molestie. Quisque tristique.
            </p>
            <Link className="mt-4" href="#">
              Learn more
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <AppWindowIcon size={36} />
            </span>
            <h3 className="mt-4">Stripe Integration</h3>
            <p className="text-muted-foreground">
              Donec semper ligula eu elementum molestie. Quisque tristique.
            </p>
            <Link className="mt-4" href="#">
              Learn more
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <PhoneIcon size={36} />
            </span>
            <h3 className="mt-4">Code Quality</h3>
            <p className="text-muted-foreground">
              Donec semper ligula eu elementum molestie. Quisque tristique.
            </p>
            <Link className="mt-4" href="#">
              Learn more
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <ShoppingCartIcon size={36} />
            </span>
            <h3 className="mt-4">Extensive Support</h3>
            <p className="text-muted-foreground">
              Donec semper ligula eu elementum molestie. Quisque tristique.
            </p>
            <Link className="mt-4" href="#">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
