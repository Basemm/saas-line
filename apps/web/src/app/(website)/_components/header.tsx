'use client'

import { Button } from '@repo/core-ui/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/core-ui/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@repo/core-ui/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@repo/core-ui/components/ui/sheet'
import { cn } from '@repo/core-ui/lib/utils'
import { useWindowScroll } from '@repo/utils/hooks/useWindowScroll'
import {
  ChevronRightIcon,
  ChevronUpIcon,
  CircleDollarSignIcon,
  InfoIcon,
  LayoutListIcon,
  MenuIcon,
  MessageCircleXIcon,
  NotepadTextIcon,
  RocketIcon,
} from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isVerticalScrolling] = useWindowScroll()

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Button
        className={cn(
          'fixed bottom-16 right-16 z-50 rounded-lg p-3 py-5 shadow-md',
          isVerticalScrolling ? '' : 'hidden'
        )}
        onClick={scrollUp}
        title="Scroll Up"
        variant="outline"
      >
        <ChevronUpIcon size={24} />
        <span className="sr-only">Scroll Up</span>
      </Button>

      <header
        className={cn(
          'sticky top-0 z-40 flex h-16 w-full items-center px-4 md:px-6',
          isVerticalScrolling
            ? 'border-b bg-secondary/80 backdrop-blur-md dark:bg-neutral-950/80'
            : 'bg-transparent'
        )}
      >
        <div className="container flex w-full items-center justify-between gap-4">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="/"
          >
            <RocketIcon className="h-6 w-6" />
            <h1 className="px-1 text-2xl">SaaS Line</h1>
          </Link>

          <div className="hidden md:flex md:gap-4">
            <NavigationMenu>
              <NavigationMenuList className="m-0 gap-4 p-0">
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuLink
                    asChild
                    className="m-0 h-auto p-0 text-foreground hover:bg-inherit hover:text-muted-foreground focus:bg-inherit focus:text-muted-foreground data-[state=open]:bg-inherit"
                  >
                    <Link
                      className="select-none text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuLink
                    asChild
                    className="m-0 h-auto p-0 text-foreground hover:bg-inherit hover:text-muted-foreground focus:bg-inherit focus:text-muted-foreground data-[state=open]:bg-inherit"
                  >
                    <Link
                      className="select-none text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/pricing"
                    >
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuLink
                    asChild
                    className="m-0 h-auto p-0 text-foreground hover:bg-inherit hover:text-muted-foreground focus:bg-inherit focus:text-muted-foreground data-[state=open]:bg-inherit"
                  >
                    <Link
                      className="select-none text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuLink
                    asChild
                    className="m-0 h-auto p-0 text-foreground hover:bg-inherit hover:text-muted-foreground focus:bg-inherit focus:text-muted-foreground data-[state=open]:bg-inherit"
                  >
                    <Link
                      className="select-none text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/about"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-0 p-0">
                  <NavigationMenuTrigger className="m-0 h-auto bg-inherit p-0 text-sm text-foreground hover:bg-inherit hover:text-muted-foreground focus:bg-inherit focus:text-muted-foreground data-[state=open]:bg-inherit">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="m-0 ml-0 grid w-[340px] list-none gap-1 py-4">
                      <li className="m-0">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none gap-4 space-y-1 rounded-md p-3 pl-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/pricing"
                          >
                            <CircleDollarSignIcon className="self-center" />
                            <div>
                              <p className="text-sm font-medium leading-none">
                                Pricing
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Payment packages and FAQ
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="m-0">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none gap-4 space-y-1 rounded-md p-3 pl-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/about"
                          >
                            <InfoIcon className="self-center" />
                            <div>
                              <p className="text-sm font-medium leading-none">
                                About
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Company and team details
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="m-0">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none gap-4 space-y-1 rounded-md p-3 pl-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/blog"
                          >
                            <LayoutListIcon className="self-center" />
                            <div>
                              <p className="text-sm font-medium leading-none">
                                Blog List
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Your blog&apos;s landing page
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="m-0">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none gap-4 space-y-1 rounded-md p-3 pl-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/blog/test"
                          >
                            <NotepadTextIcon className="self-center" />
                            <div>
                              <p className="text-sm font-medium leading-none">
                                Blog Post
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Latest blog post
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="m-0">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex select-none gap-4 space-y-1 rounded-md p-3 pl-6 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <MessageCircleXIcon className="self-center" />
                            <div>
                              <p className="text-sm font-medium leading-none">
                                404 Error
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                Page not found error
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button>Sign Up</Button>
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="shrink-0 md:hidden"
                size="icon"
                variant="outline"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="flex flex-col justify-between px-0"
              side="left"
            >
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="mb-6 flex items-center gap-2 pl-6 text-lg font-semibold"
                  href="/"
                >
                  <RocketIcon className="h-6 w-6" />
                  <h1 className="px-1 text-2xl">SaaS Line</h1>
                </Link>
                <Link className="pl-6 text-foreground" href="/">
                  Home
                </Link>
                <Link
                  className="pl-6 text-muted-foreground hover:text-foreground"
                  href="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="pl-6 text-muted-foreground hover:text-foreground"
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="pl-6 text-muted-foreground hover:text-foreground"
                  href="/about"
                >
                  About
                </Link>
                <Collapsible className="grid gap-1">
                  <CollapsibleTrigger className="-mt-1 flex items-center justify-between rounded-md px-4 py-2 pl-6 text-muted-foreground transition-colors hover:bg-gray-200 hover:text-foreground dark:hover:bg-gray-800">
                    Pages
                    <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pl-4">
                    <ul className="my-0 flex list-none flex-col gap-6 pt-4 text-base font-medium [&>li]:mt-0">
                      <li>
                        <Link
                          className="text-muted-foreground hover:text-foreground"
                          href="/pricing"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-muted-foreground hover:text-foreground"
                          href="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-muted-foreground hover:text-foreground"
                          href="/blog"
                        >
                          Blog List
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-muted-foreground hover:text-foreground"
                          href="/blog/test"
                        >
                          Blog Post
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-muted-foreground hover:text-foreground"
                          href="#"
                        >
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </nav>

              <div className="flex flex-col gap-6 p-6">
                <Button asChild size="lg" variant="outline">
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="lg">Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
