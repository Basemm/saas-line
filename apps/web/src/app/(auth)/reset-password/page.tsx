import { Button } from '@repo/core-ui/components/ui/button'
import { Input } from '@repo/core-ui/components/ui/input'
import { Label } from '@repo/core-ui/components/ui/label'
import { RocketIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Line - Reset Password',
  description: 'Reset Password',
}

export default function Home() {
  return (
    <main className="mt-6 flex flex-col gap-24">
      <div className="flex justify-center">
        <Link
          className="flex items-center gap-2 font-semibold md:text-base"
          href="/"
        >
          <RocketIcon className="h-8 w-8" />
          <h1 className="px-1 text-4xl">SaaS Line</h1>
        </Link>
      </div>
      <div className="mx-auto w-96 max-w-sm space-y-6 self-center">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              required
              type="email"
            />
          </div>
          <Button className="w-full" type="submit">
            Reset Password
          </Button>
        </div>
      </div>
    </main>
  )
}
