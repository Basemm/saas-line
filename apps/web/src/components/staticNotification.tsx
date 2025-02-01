import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/core-ui/components/ui/alert'
import { cn } from '@repo/core-ui/lib/utils'
import { AlertCircleIcon, BanIcon, CheckIcon, InfoIcon } from 'lucide-react'
import type { ElementType } from 'react'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface StaticNotificationData {
  isVisible?: boolean
  type: NotificationType
  title: string
  message: string
}

interface StaticNotificationProps {
  data?: StaticNotificationData
}

const typeIconMap: Record<NotificationType, ElementType> = {
  success: CheckIcon,
  info: InfoIcon,
  warning: AlertCircleIcon,
  error: BanIcon,
}

export default function StaticNotification(props: StaticNotificationProps) {
  const { data } = props
  const {
    isVisible = true,
    type,
    title,
    message,
  }: StaticNotificationData = data ?? {
    isVisible: false,
    type: 'info',
    // Hack: use a better way to reserve space to avoid UI reflow
    title: '.', // Reserve space to avoid UI reflow
    message: '.', // Reserve space to avoid UI reflow
  }
  const Icon = typeIconMap[type]

  return (
    <Alert
      className={cn(!isVisible && 'invisible', {
        'border-green-400 bg-green-100 text-green-700': type === 'success',
        'border-blue-400 bg-blue-100 text-blue-700': type === 'info',
        'border-yellow-400 bg-yellow-100 text-yellow-700': type === 'warning',
        'border-red-400 bg-red-100 text-red-700': type === 'error',
      })}
    >
      <Icon
        className={cn(
          {
            'stroke-green-700': type === 'success',
            'stroke-blue-700': type === 'info',
            'stroke-yellow-700': type === 'warning',
            'stroke-red-700': type === 'error',
          },
          'top-auto h-4 w-4'
        )}
      />
      <AlertTitle className="font-bold">{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
