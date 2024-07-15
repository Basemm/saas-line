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
  CheckIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from 'lucide-react'

export default function Pricing() {
  return (
    <main className="container mb-24 flex flex-col gap-12">
      <section>
        <h1 className="mb-12 pb-6 pt-6 text-center">Pricing</h1>

        <p className="mt-4 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          ligula eu elementum molestie. Quisque tristique lectus ut purus
          congue.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex gap-8">
            <span className="h-[64px] w-[64px] rounded-lg bg-blue-500 p-[14px] text-white">
              <AppleIcon size={36} />
            </span>
            <div>
              <h4>How long do you retain data?</h4>
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
              <h4>Is there a free trial on paid plans?</h4>
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
              <h4>Do you offer a discount for non-profits?</h4>
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
              <h4>Are there any annual commitments?</h4>
              <p className="mt-6 text-muted-foreground">
                Donec semper ligula eu elementum molestie. Quisque tristique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
