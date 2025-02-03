import type { StaticNotificationData } from '@/components/staticNotification'
import getSupabaseBrowserClient from '@/lib/getSupabaseBrowserClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@repo/core-ui/components/ui/button'
import { Input } from '@repo/core-ui/components/ui/input'
import { Label } from '@repo/core-ui/components/ui/label'
import { cn } from '@repo/core-ui/lib/utils'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const magicLinkFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

type MagicLinkFormData = z.infer<typeof magicLinkFormSchema>

interface MagicLinkFormProps {
  onNotification: (data: StaticNotificationData) => void
}

export default function MagicLinkForm(props: MagicLinkFormProps) {
  const { onNotification } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MagicLinkFormData>({
    resolver: zodResolver(magicLinkFormSchema),
  })

  const onSubmit = async (formData: MagicLinkFormData) => {
    const { email } = formData
    const { error } = await getSupabaseBrowserClient().auth.signInWithOtp({
      email,
    })

    if (error) {
      console.error('Error sending magic link:', error)
      onNotification({
        type: 'error',
        title: 'Failed',
        message: "Couldn't send the email, please try another login method.",
      })
    } else {
      onNotification({
        type: 'success',
        title: 'Success',
        message: 'Magic link sent! Please check your email.',
      })
      reset()
    }
  }

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <Input
          autoComplete="email"
          required
          type="email"
          {...register('email')}
        />
        <p
          className={cn(
            errors.email ? 'visible' : 'invisible',
            'mt-2 text-sm text-red-500'
          )}
        >
          {errors.email?.message}.
          <br />
        </p>
        <Button className="w-full" type="submit">
          Send Magic Link
        </Button>
      </form>
    </>
  )
}
