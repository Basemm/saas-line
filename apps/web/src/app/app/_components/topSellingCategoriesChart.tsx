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
    color: 'blue-500 dark:bg-blue-700',
    icon: () => <SmartphoneIcon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'Laptops',
    value: 26000,
    color: 'green-500 dark:bg-green-700',
    icon: () => <LaptopIcon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'eBooks',
    value: 21000,
    color: 'red-500 dark:bg-red-700',
    icon: () => <BookOpenIcon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'Skin Care',
    value: 18600,
    color: 'violet-500 dark:bg-violet-700',
    icon: () => <HandIcon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'Video Games',
    value: 14200,
    color: 'amber-500 dark:bg-amber-700',
    icon: () => <Gamepad2Icon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'Kitchen Tools',
    value: 10200,
    color: 'lime-500 dark:bg-lime-700',
    icon: () => <Gamepad2Icon className="pb-1 pr-2" size={24} />,
  },
  {
    name: 'Gift Cards',
    value: 8100,
    color: 'emerald-500 dark:bg-emerald-700',
    icon: () => <Gamepad2Icon className="pb-1 pr-2" size={24} />,
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
  return (
    <BarList data={chartData} showAnimation valueFormatter={dataFormatter} />
  )
}
