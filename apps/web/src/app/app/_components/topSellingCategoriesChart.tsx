'use client'

import { BarList } from '@tremor/react'
import {
  BookOpenIcon,
  Gamepad2Icon,
  HandIcon,
  LaptopIcon,
  SmartphoneIcon,
} from 'lucide-react'

const chartData = [
  {
    name: 'Mobile Phones',
    value: 31000,
    color: 'blue-700',
    icon: SmartphoneIcon,
  },
  {
    name: 'Laptops',
    value: 26000,
    color: 'green-700',
    icon: LaptopIcon,
  },
  {
    name: 'eBooks',
    value: 21000,
    color: 'red-700',
    icon: BookOpenIcon,
  },
  {
    name: 'Skin Care',
    value: 18600,
    color: 'violet-700',
    icon: HandIcon,
  },
  {
    name: 'Video Games',
    value: 14200,
    color: 'slate-700',
    icon: Gamepad2Icon,
  },
]

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  })
    .format(number)
    .toString()

export function TopSellingCategoriesChart() {
  return <BarList data={chartData} valueFormatter={dataFormatter} />
}
