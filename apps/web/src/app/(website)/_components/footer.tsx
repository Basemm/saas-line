import FacebookLogo from '@/app/(website)/_components/logos/facebookLogo'
import GithubLogo from '@/app/(website)/_components/logos/githubLogo'
import InstagramLogo from '@/app/(website)/_components/logos/instagramLogo'
import YoutubeLogo from '@/app/(website)/_components/logos/youtubeLogo'
import { Separator } from '@repo/core-ui/components/ui/separator'
import { RocketIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-700">
      <div className="container grid gap-10 py-24 pb-8 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr_2fr]">
        <div className="flex flex-col gap-8">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <RocketIcon className="h-6 w-6 text-white" />
            <h1 className="px-1 text-2xl text-white">SaaS Line</h1>
          </Link>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper ligula eu elementum molestie.
          </p>
          <div className="flex gap-8">
            <Link href="#" title="Facebook">
              <FacebookLogo
                className="fill-slate-300 hover:fill-slate-50"
                width={28}
              />
            </Link>
            <Link href="#" title="Instagram">
              <InstagramLogo
                className="fill-slate-300 hover:fill-slate-50"
                width={28}
              />
            </Link>
            <Link href="#" title="Youtube">
              <YoutubeLogo
                className="fill-slate-300 hover:fill-slate-50"
                width={28}
              />
            </Link>
            <Link href="#" title="Github">
              <GithubLogo
                className="fill-slate-300 hover:fill-slate-50"
                width={28}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-white">Products</h4>

          <ul className="m-0 flex list-none flex-col gap-2">
            <li>
              <Link className="text-slate-300" href="#">
                Chat App
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Browser Extension
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Photo Editor
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Video Editor
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-white">Features</h4>

          <ul className="m-0 flex list-none flex-col gap-2">
            <li>
              <Link className="text-slate-300" href="#">
                Authentication
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Firewall
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Optimized Storage
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Cloud Backup
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-white">Company</h4>

          <ul className="m-0 flex list-none flex-col gap-2">
            <li>
              <Link className="text-slate-300" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="text-slate-300" href="#">
                Press
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
          <h4 className="text-white">Latest Blog</h4>

          <ul className="m-0 flex list-none flex-col gap-4">
            <li>
              <Link className="flex items-start gap-6 text-slate-300" href="#">
                <Image
                  alt="How to significantly reduce your AWS bill?"
                  className="rounded-sm"
                  height={80}
                  src="/img/mac-desktop.jpg"
                  width={80}
                />
                <p className="text-slate-300">
                  How to significantly reduce your AWS bill?
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex items-start gap-6 text-slate-300" href="#">
                <Image
                  alt="Avoiding unnecessary rendering with React/Nextjs"
                  className="rounded-sm"
                  height={80}
                  src="/img/pair-programming.jpg"
                  width={80}
                />
                <p className="text-slate-300">
                  Avoiding unnecessary rendering with React/Nextjs
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-4 bg-slate-400/50" />

      <div className="container flex justify-between py-6">
        <div className="flex gap-6">
          <Link className="text-slate-300" href="#">
            Privacy Policy
          </Link>
          <Link className="text-slate-300" href="#">
            Refund Policy
          </Link>
          <Link className="text-slate-300" href="#">
            Terms of Service
          </Link>
        </div>
        <div>
          <p className="text-slate-300">
            &copy; 2022 SaaS Line. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
