'use client'

import type { StaticNotificationData } from '@/components/staticNotification'
import getConfig from '@/lib/getConfig'
import getSupabaseBrowserClient from '@/lib/getSupabaseBrowserClient'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    loginWithGoogleCallback: (response: { credential: string }) => Promise<void>
  }
}

interface ContinueWithGoogleButtonProps {
  onNotification: (errorDetails: StaticNotificationData) => void
}

export default function ContinueWithGoogleButton(
  props: ContinueWithGoogleButtonProps
) {
  const { onNotification } = props
  useEffect(() => {
    window.loginWithGoogleCallback = async (response: {
      credential: string
    }) => {
      const { error } = await getSupabaseBrowserClient().auth.signInWithIdToken(
        {
          provider: 'google',
          token: response.credential,
        }
      )

      if (error) {
        onNotification({
          type: 'error',
          title: 'Failed',
          message: 'Cannot login with Google at the time.',
        })
        console.error('Continue with Google button error', error)
        return
      }

      window.location.reload()
    }
  }, [onNotification])

  return (
    <>
      <Script async src="https://accounts.google.com/gsi/client" />
      <div
        data-auto_prompt="false"
        data-callback="loginWithGoogleCallback"
        data-client_id={getConfig().googleOAuthClientId}
        data-context="signin"
        data-use_fedcm_for_prompt="true"
        data-ux_mode="popup"
        id="g_id_onload"
      />

      <div
        className="g_id_signin"
        data-locale="en-US"
        data-logo_alignment="left"
        data-shape="pill"
        data-size="large"
        data-text="continue_with"
        data-theme="outline"
        data-type="standard"
      />
    </>
  )
}
