'use client'

import ContinueWithGoogleButton from '@/app/auth/_components/continueWithGoogleButton'
import MagicLinkForm from '@/app/auth/_components/magicLinkForm'
import StaticNotification, {
  type StaticNotificationData,
} from '@/components/staticNotification'
import { Card, CardContent } from '@repo/core-ui/components/ui/card'
import { Separator } from '@repo/core-ui/components/ui/separator'
import { RocketIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface LoginFormProps {
  state: 'login' | 'signup'
  confirmationError?: string
}

export default function LoginSignupForm(props: LoginFormProps) {
  const { confirmationError, state } = props
  const [staticNotificationData, setStaticNotificationData] =
    useState<StaticNotificationData>()

  useEffect(() => {
    if (!confirmationError) {
      return
    }

    setStaticNotificationData({
      type: 'error',
      title: 'Email Confirmation Failed',
      message: 'The link is invalid or has expired. Please try again.',
    })
  }, [confirmationError])

  return (
    <div className="flex flex-col gap-6">
      <StaticNotification data={staticNotificationData} />
      <Card className="border-0 p-4 sm:border sm:p-8">
        <CardContent className="flex h-[30rem] w-80 flex-col gap-16 sm:w-96">
          <div className="flex justify-center">
            <Link
              className="flex items-center gap-2 font-semibold md:text-base"
              href="/"
            >
              <RocketIcon className="h-8 w-8" />
              <h1 className="px-1 text-4xl">SaaS Line</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">
                {state === 'login' && 'Login'}
                {state === 'signup' && 'Join Us Now!'}
              </h1>
            </div>
            <div>
              <ContinueWithGoogleButton
                onNotification={setStaticNotificationData}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <MagicLinkForm onNotification={setStaticNotificationData} />

            {state === 'login' && (
              <Link
                className="text-sm text-muted-foreground"
                href="/auth/signup"
              >
                Don&apos;t have an account? Sign up
              </Link>
            )}
            {state === 'signup' && (
              <Link
                className="text-sm text-muted-foreground"
                href="/auth/login"
              >
                Already have an account? Log in
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
