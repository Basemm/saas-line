import ActivisionLogo from '@/app/(website)/_components/logos/activisionLogo'
import GoogleLogo from '@/app/(website)/_components/logos/googleLogo'
import IndofoodLogo from '@/app/(website)/_components/logos/indofoodLogo'
import RevelLogo from '@/app/(website)/_components/logos/revelLogo'
import VMWareLogo from '@/app/(website)/_components/logos/vmwareLogo'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/core-ui/components/ui/avatar'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import {
  AppleIcon,
  AppWindowIcon,
  BellRingIcon,
  CheckIcon,
  FacebookIcon,
  LinkedinIcon,
  MessageSquareTextIcon,
  PhoneIcon,
  ShoppingCartIcon,
  StarIcon,
  TwitterIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="container flex max-w-[760px] flex-col items-center justify-center pt-16 text-center lg:pt-32">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          SaaS Line the Fastest Way to Launch Your SaaS in No Time
        </h1>
        <p className="my-6 max-w-[540px] text-center text-base">
          SaaS Line is a collection of ready-to-use SaaS components that you can
          use to build your SaaS in no time.
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
      </section>

      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container grid gap-6 py-24 md:grid-cols-2 md:gap-16">
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
              Aenean lacus odio, consectetur non ligula eget, varius dapibus
              nisi. Nunc mollis felis urna, vitae tempor dui molestie a. Duis
              cursus id ipsum a ornare. Quisque fermentum magna elit,
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
        </div>
      </section>

      <section className="container grid gap-6 py-24 md:grid-cols-2 md:gap-16">
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
            Aenean lacus odio, consectetur non ligula eget, varius dapibus nisi.
            Nunc mollis felis urna, vitae tempor dui molestie a. Duis cursus id
            ipsum a ornare. Quisque fermentum magna elit,
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
      </section>

      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-col gap-16 py-24">
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
              <h3 className="mt-4">Social Authentication</h3>
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
        </div>
      </section>

      <section className="container flex flex-col gap-16 py-24">
        <div className="max-w-[540px] self-center text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions?
          </h1>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie. Quisque tristique lectus ut
            purus congue.
          </p>
        </div>
        <div className="grid gap-24 lg:grid-cols-2">
          <div className="flex gap-8">
            <span className="h-[64px] w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <AppleIcon size={36} />
            </span>
            <div>
              <h3>How long do you retain data?</h3>
              <p className="mt-6 text-muted-foreground">
                Donec semper ligula eu elementum molestie. Quisque tristique.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <span className="h-[64px] w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <AppWindowIcon size={36} />
            </span>
            <div>
              <h3>Is there a free trial on paid plans?</h3>
              <p className="mt-6 text-muted-foreground">
                Donec semper ligula eu elementum molestie. Quisque tristique.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <span className="h-[64px] w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <PhoneIcon size={36} />
            </span>
            <div>
              <h3>Do you offer a discount for non-profits?</h3>
              <p className="mt-6 text-muted-foreground">
                Donec semper ligula eu elementum molestie. Quisque tristique.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <span className="h-[64px] w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <ShoppingCartIcon size={36} />
            </span>
            <div>
              <h3>Are there any annual commitments?</h3>
              <p className="mt-6 text-muted-foreground">
                Donec semper ligula eu elementum molestie. Quisque tristique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-col gap-16 py-24">
          <div className="max-w-[540px] self-center text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl">
              10K Clients Can&apos;t Be Wrong?
            </h1>
            <p className="mt-4 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid auto-rows-min gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Quisque vel libero vehicula, egestas sem ac, mattis
                    lacus. Pellentesque placerat semper fermentum. Curabitur
                    congue id ipsum sit amet ullamcorper. Nulla id est sit amet
                    sapien ornare facilisis ut quis nulla. Cras condimentum
                    pharetra libero, ut ullamcorper quam efficitur eget. Donec
                    maximus purus ipsum, sit amet semper elit sodales id. Cras
                    quis enim magna. Pellentesque maximus lacus ac lorem auctor
                    efficitur.&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Jonny Cadden"
                        src="/img/avatar/male-avatar-1.jpg"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">Jonny Cadden</h6>
                      <p className="text-xs text-muted-foreground">
                        CEO of Sigma
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon size={16} />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Quisque vel libero vehicula, egestas sem ac, mattis
                    lacus. Pellentesque placerat semper fermentum. Curabitur
                    congue id ipsum sit amet ullamcorper. Nulla id est sit amet
                    sapien ornare facilisis ut quis nulla. Integer ac lacus quis
                    quam sollicitudin porttitor eu vel lectus. Aenean at elit
                    non nisl convallis aliquam. Curabitur nec blandit nulla.
                    Cras condimentum pharetra libero, ut ullamcorper&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Michael Cox"
                        src="/img/avatar/male-avatar-2.jpg"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">Michael Cox</h6>
                      <p className="text-xs text-muted-foreground">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid auto-rows-min gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon size={16} />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Quisque vel libero vehicula, egestas sem ac, mattis
                    lacus. Pellentesque placerat semper fermentum. Curabitur
                    congue id ipsum sit amet ullamcorper. Nulla id est sit amet
                    sapien ornare facilisis ut quis nulla.&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Zoe Hendrika"
                        src="/img/avatar/female-avatar-1.jpg"
                      />
                      <AvatarFallback>ZH</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">Zoe Hendrika</h6>
                      <p className="text-xs text-muted-foreground">
                        Founder of Alpha Inc
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Nulla tristique nisl in sapien sollicitudin, eu
                    pharetra sapien tempor. Sed tempus ut nunc malesuada mollis.
                    Etiam vestibulum elit vel felis placerat, sit amet sagittis
                    neque dignissim. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc ornare molestie ipsum, at accumsan
                    justo fringilla vitae. Sed ac cursus lacus. Integer ac lacus
                    quis quam sollicitudin porttitor eu vel lectus. Aenean at
                    elit non nisl convallis aliquam. Curabitur nec blandit
                    nulla. Cras condimentum pharetra libero, ut ullamcorper quam
                    efficitur eget. Donec maximus purus ipsum, sit amet semper
                    elit sodales id. Cras quis enim magna. Pellentesque maximus
                    lacus ac lorem auctor efficitur.&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Mike Pence"
                        src="/img/avatar/male-avatar-4.jpg"
                      />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">Mike Pence</h6>
                      <p className="text-xs text-muted-foreground">
                        Founder of Gresdane
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid auto-rows-min gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Quisque vel libero vehicula, egestas sem ac, mattis
                    lacus. Pellentesque placerat semper fermentum. Curabitur
                    congue id ipsum sit amet ullamcorper. Nulla id est sit amet
                    sapien ornare facilisis ut quis nulla. Integer ac lacus quis
                    quam sollicitudin porttitor eu vel lectus. Aenean at elit
                    non nisl convallis aliquam. Curabitur nec blandit nulla.
                    Cras condimentum pharetra libero, ut ullamcorper&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Kristi Shellen"
                        src="/img/avatar/female-avatar-2.jpg"
                      />
                      <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">Kristi Shellen</h6>
                      <p className="text-xs text-muted-foreground">
                        COO of Meta
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon
                      className="fill-yellow-600 stroke-yellow-600"
                      size={16}
                    />
                    <StarIcon size={16} />
                  </div>
                  <p className="my-8 text-muted-foreground">
                    &quot;Quisque vel libero vehicula, egestas sem ac, mattis
                    lacus. Pellentesque placerat semper fermentum. Curabitur
                    congue id ipsum sit amet ullamcorper. Nulla id est sit amet
                    sapien ornare facilisis ut quis nulla.&quot;
                  </p>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Jonny Cadden"
                        src="/img/avatar/male-avatar-3.jpg"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-sm">John Carmack</h6>
                      <p className="text-xs text-muted-foreground">
                        Creator of Doom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700">
        <div className="container flex max-w-[760px] flex-col items-center justify-center py-24 text-center">
          <h1 className="text-2xl text-white md:text-4xl lg:text-5xl">
            Want to Launch as Soon as Possible?
          </h1>
          <p className="my-6 max-w-[540px] text-center text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie.
          </p>

          <Button size="lg">Get Started</Button>
        </div>
      </section>

      <section className="container flex flex-col gap-16 py-24">
        <div className="max-w-[540px] self-center text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl">Pricing</h1>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie. Quisque tristique lectus ut
            purus congue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="grid justify-between gap-6 p-6">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                Perfect for individuals or small teams just getting started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-baseline gap-4">
                  <div className="text-4xl font-bold">$9</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
                <ul className="ml-0 grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Up to 5 users
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    5GB storage
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Basic analytics
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Our Logo Visible
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="self-end">
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="grid justify-between gap-6 border-2 border-muted-foreground p-6">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                For teams and businesses that need more advanced features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-bold">$49</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
                <ul className="ml-0 grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    100GB storage
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Custom branding
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="grid justify-between gap-6 p-6">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For large teams and businesses that require custom solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-bold">$999</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
                <ul className="ml-0 grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Unlimited storage
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="self-center rounded-full bg-primary/60 p-1 text-white dark:bg-primary/50">
                      <CheckIcon size={14} />
                    </span>
                    Custom branding
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="bg-slate-100 dark:bg-slate-900">
        <section className="container flex flex-col gap-16 py-24">
          <div className="max-w-[540px] self-center text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl">
              Our Innovation Team
            </h1>
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
                <div className="flex gap-6">
                  <Link href="#">
                    <FacebookIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <TwitterIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
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
                <div className="flex gap-6">
                  <Link href="#">
                    <FacebookIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <TwitterIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
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
                <div className="flex gap-6">
                  <Link href="#">
                    <FacebookIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <TwitterIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
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
                <div className="flex gap-6">
                  <Link href="#">
                    <FacebookIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                  <Link href="#">
                    <TwitterIcon
                      className="fill-muted-foreground stroke-muted-foreground"
                      size={20}
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
