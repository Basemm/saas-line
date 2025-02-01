import LinkedInLogo from '@/app/(website)/_components/logos/linkedInLogo'
import XLogo from '@/app/(website)/_components/logos/xLogo'
import { Card, CardContent } from '@repo/core-ui/components/ui/card'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Line - About',
  description:
    'At PrecisionTech Machinery, we&apos;re passionate about precision engineering. As a leading manufacturer of CNC milling machines, we blend cutting-edge technology with decades of expertise. Our commitment to quality, innovation, and customer satisfaction sets us apart.',
}

export default function AboutPage() {
  return (
    <main className="">
      <section className="container">
        <h1 className="mb-12 pb-6 pt-6 text-center">About</h1>
      </section>

      <section className="container grid gap-6 pb-24 pt-16 md:grid-cols-2 md:gap-16">
        <Image
          alt="Meeting"
          className="rounded-lg"
          height={421}
          src="/img/meeting.jpg"
          width={760}
        />

        <div className="order-last flex flex-col gap-8 md:order-first">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Who we are?</h2>
          <p className="mb-6 text-muted-foreground">
            At PrecisionTech Machinery, we&apos;re passionate about precision
            engineering. As a leading manufacturer of CNC milling machines, we
            blend cutting-edge technology with decades of expertise. Our
            commitment to quality, innovation, and customer satisfaction sets us
            apart.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-col gap-8 py-24">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Timeline</h2>

          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <ol className="relative flex list-none flex-col gap-16 border-s border-gray-200 dark:border-gray-700">
              <li className="ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jan 1986
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  New Plant in Ohio
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Aenean lacus odio, consectetur non ligula eget, varius dapibus
                  nisi. Nunc mollis felis urna, vitae tempor dui molestie.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Oct 1968
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Invention of Precision Cutting Process
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Donec semper ligula eu elementum molestie. Quisque tristique
                  lectus ut purus congue lobortis.
                </p>
              </li>
              <li className="ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Feb 1953
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  First Design
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            </ol>

            <Image
              alt="Headquarters"
              className="justify-self-center rounded-lg"
              height={533}
              src="/img/headquarter-building.jpg"
              width={400}
            />
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-16 py-24">
        <div className="max-w-[540px] self-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Our Innovation Team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie. Quisque tristique lectus ut
            purus congue.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center gap-6 p-6 text-center">
              <Image
                alt="Michael Hudson"
                className="rounded-full"
                height={128}
                src="/img/avatar/male-avatar-4.jpg"
                width={128}
              />
              <div>
                <h4>Michael Hudson</h4>
                <p className="text-sm text-muted-foreground">
                  Creative Designer
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" title="LinkedIn">
                  <LinkedInLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={20}
                  />
                </Link>
                <Link href="#" title="X">
                  <XLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={18}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-6 p-6 text-center">
              <Image
                alt="Julia Daniels"
                className="rounded-full"
                height={128}
                src="/img/avatar/female-avatar-1.jpg"
                width={128}
              />
              <div>
                <h4>Julia Daniels</h4>
                <p className="text-sm text-muted-foreground">
                  Marketing Manager
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" title="LinkedIn">
                  <LinkedInLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={20}
                  />
                </Link>
                <Link href="#" title="X">
                  <XLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={18}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-6 p-6 text-center">
              <Image
                alt="Robert Sanders"
                className="rounded-full"
                height={128}
                src="/img/avatar/male-avatar-3.jpg"
                width={128}
              />
              <div>
                <h4>Robert Sanders</h4>
                <p className="text-sm text-muted-foreground">
                  Chief Financial Officer
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" title="LinkedIn">
                  <LinkedInLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={20}
                  />
                </Link>
                <Link href="#" title="X">
                  <XLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={18}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-6 p-6 text-center">
              <Image
                alt="Melissa Ferrel"
                className="rounded-full"
                height={128}
                src="/img/avatar/female-avatar-2.jpg"
                width={128}
              />
              <div>
                <h4>Melissa Ferrel</h4>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" title="LinkedIn">
                  <LinkedInLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={20}
                  />
                </Link>
                <Link href="#" title="X">
                  <XLogo
                    className="fill-muted-foreground stroke-muted-foreground"
                    width={18}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
