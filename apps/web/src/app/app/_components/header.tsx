'use client'

import getSupabaseBrowserClient from '@/lib/getSupabaseBrowserClient'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/core-ui/components/ui/avatar'
import { Badge } from '@repo/core-ui/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@repo/core-ui/components/ui/breadcrumb'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/core-ui/components/ui/collapsible'
import { Input } from '@repo/core-ui/components/ui/input'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@repo/core-ui/components/ui/menubar'
import { Separator } from '@repo/core-ui/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@repo/core-ui/components/ui/sheet'
import {
  ChevronRightIcon,
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  MonitorIcon,
  MoonIcon,
  PackageIcon,
  RocketIcon,
  SearchIcon,
  ShoppingCartIcon,
  SunIcon,
  Users2Icon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  async function logout() {
    await getSupabaseBrowserClient().auth.signOut({ scope: 'global' })
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden" size="icon" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="px-0 sm:max-w-xs" side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className="mb-6 flex items-center gap-2 pl-6 text-lg font-semibold"
              href="#"
            >
              <RocketIcon className="h-6 w-6" />
              <h1 className="px-1 text-2xl">SaaS Line</h1>
            </Link>
            <Link
              className="flex items-center gap-4 pl-6 text-foreground"
              href="#"
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-4 pl-6 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link
              className="flex items-center gap-4 pl-6 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <PackageIcon className="h-5 w-5" />
              Products
            </Link>
            <Link
              className="flex items-center gap-4 pl-6 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <Users2Icon className="h-5 w-5" />
              Customers
            </Link>
            <Link
              className="flex items-center gap-4 pl-6 text-muted-foreground hover:text-foreground"
              href="#"
            >
              <LineChartIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList className="my-auto list-none">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Main</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          placeholder="Search..."
          type="search"
        />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Avatar className="block sm:hidden">
            <AvatarImage alt="Mike Ross" src="/img/avatar.jpg" />
            <AvatarFallback>MR</AvatarFallback>
            <span className="sr-only">Toggle my account menu</span>
          </Avatar>
        </SheetTrigger>
        <SheetContent className="px-0" side="right">
          <nav className="flex flex-col gap-2">
            <div className="flex gap-2 px-4">
              <Image
                alt="Logo"
                className="max-w-fit rounded-md"
                height={80}
                src="/img/avatar.jpg"
                width={80}
              />
              <div className="mt-2">
                <h4 className="flex items-center gap-2">
                  <p>Mike Ross</p>
                  <Badge variant="secondary">Pro</Badge>
                </h4>
                <p className="my-1 text-xs text-muted-foreground">
                  mike.ross@nast.gov
                </p>
                <p className="my-1 text-xs text-muted-foreground">
                  Last: October 30, 2025 8:00 AM
                </p>
              </div>
            </div>

            <Separator className="my-2" />

            <Link
              className="px-4 py-2 text-base font-medium hover:text-muted-foreground"
              href="#"
            >
              My Account
            </Link>
            <Link
              className="px-4 py-2 text-base font-medium hover:text-muted-foreground"
              href="#"
            >
              Search
            </Link>

            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center justify-between rounded-md px-4 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
                Settings
                <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4">
                <ul className="my-0 flex list-none flex-col gap-6 pt-4 text-sm font-medium [&>li]:mt-0">
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      Personal Info
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      Billing
                    </Link>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center justify-between rounded-md px-4 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
                Color Mode
                <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4">
                <ul className="my-0 flex list-none flex-col gap-6 pt-4 text-sm font-medium [&>li]:mt-0">
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      <p className="flex items-center gap-1">
                        <SunIcon />
                        Light
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      <p className="flex items-center gap-1">
                        <MoonIcon className="mr-2" />
                        Dark
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-muted-foreground" href="#">
                      <p className="flex items-center gap-1">
                        <MonitorIcon className="mr-2" />
                        System
                      </p>
                    </Link>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Link
              className="px-4 py-2 text-base font-medium hover:text-muted-foreground"
              href="#"
            >
              Support
            </Link>

            <Separator className="my-2" />

            <Button
              className="justify-start px-4 py-2 text-base font-medium hover:text-muted-foreground hover:no-underline"
              onClick={() => {
                void logout()
              }}
              variant="link"
            >
              Logout
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <Menubar className="hidden h-auto rounded-full border-0 p-0 sm:block">
        <MenubarMenu>
          <MenubarTrigger
            className="p-0 focus:bg-background data-[state=open]:bg-background"
            title="My Accounts"
          >
            <Avatar>
              <AvatarImage alt="Mike Ross" src="/img/avatar.jpg" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle my account menu</span>
          </MenubarTrigger>
          <MenubarContent className="w-80 p-2">
            <div className="flex gap-2">
              <Image
                alt="Logo"
                className="max-w-fit rounded-md"
                height={80}
                src="/img/avatar.jpg"
                width={80}
              />
              <div className="mt-2">
                <h4 className="flex items-center gap-2">
                  <p>Mike Ross</p>
                  <Badge variant="secondary">Pro</Badge>
                </h4>
                <p className="my-1 text-xs text-muted-foreground">
                  mike.ross@nast.gov
                </p>
                <p className="my-1 text-xs text-muted-foreground">
                  Last: October 30, 2025 8:00 AM
                </p>
              </div>
            </div>
            <MenubarSeparator className="my-2" />
            <MenubarItem>My Account</MenubarItem>
            <MenubarItem>
              Search <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Settings</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Personal Info</MenubarItem>
                <MenubarItem>Security</MenubarItem>
                <MenubarItem>Billing</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Color Mode</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <SunIcon className="mr-2" />
                  Light
                </MenubarItem>
                <MenubarItem>
                  <MoonIcon className="mr-2" />
                  Dark
                </MenubarItem>
                <MenubarItem>
                  <MonitorIcon className="mr-2" />
                  System
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Support</MenubarItem>
            <MenubarSeparator className="my-2" />
            <MenubarItem
              onClick={() => {
                void logout()
              }}
            >
              Logout
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}
