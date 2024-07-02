'use client'

import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import { BarList } from '@tremor/react'
import { SettingsIcon } from 'lucide-react'
import Image from 'next/image'

const chartData = [
  {
    name: 'United States',
    value: 92e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="United States"
        className="mr-2"
        height={24}
        src="/img/flags/us.svg"
        width={24}
      />
    ),
  },
  {
    name: 'United Kingdom',
    value: 80e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="United Kingdom"
        className="mr-2"
        height={24}
        src="/img/flags/gb.svg"
        width={24}
      />
    ),
  },
  {
    name: 'France',
    value: 79e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="France"
        className="mr-2"
        height={24}
        src="/img/flags/fr.svg"
        width={24}
      />
    ),
  },
  {
    name: 'India',
    value: 74e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="India"
        className="mr-2"
        height={24}
        src="/img/flags/in.svg"
        width={24}
      />
    ),
  },
  {
    name: 'Germany',
    value: 64e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="Germany"
        className="mr-2"
        height={24}
        src="/img/flags/de.svg"
        width={24}
      />
    ),
  },
  {
    name: 'Russia',
    value: 56e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="Russia"
        className="mr-2"
        height={24}
        src="/img/flags/ru.svg"
        width={24}
      />
    ),
  },
  {
    name: 'Italy',
    value: 42e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="Italy"
        className="mr-2"
        height={24}
        src="/img/flags/it.svg"
        width={24}
      />
    ),
  },
  {
    name: 'Brazil',
    value: 38e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="Brazil"
        className="mr-2"
        height={24}
        src="/img/flags/br.svg"
        width={24}
      />
    ),
  },
  {
    name: 'Australia',
    value: 18e3,
    color: 'muted',
    icon: () => (
      <Image
        alt="Australia"
        className="mr-2"
        height={24}
        src="/img/flags/au.svg"
        width={24}
      />
    ),
  },
]

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us', {
    maximumSignificantDigits: 3,
    notation: 'compact',
  })
    .format(number)
    .toString()

export default function VisitsByCountry() {
  return (
    <Card className="col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <p className="self-center">Visits By Country</p>
          <Button size="icon" title="Settings" variant="ghost">
            <SettingsIcon />
          </Button>
        </CardTitle>
        <CardDescription>Total 500K</CardDescription>
      </CardHeader>
      <CardContent>
        <BarList
          data={chartData}
          showAnimation
          valueFormatter={dataFormatter}
        />
      </CardContent>
    </Card>
  )
}
