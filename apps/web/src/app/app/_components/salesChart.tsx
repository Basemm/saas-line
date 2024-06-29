'use client'

import { AreaChart } from '@tremor/react'

const chartData = [
  {
    date: 'Jan 22',
    Revenue: 2890,
    Expenditure: 2338,
  },
  {
    date: 'Feb 22',
    Revenue: 2756,
    Expenditure: 2103,
  },
  {
    date: 'Mar 22',
    Revenue: 3322,
    Expenditure: 2194,
  },
  {
    date: 'Apr 22',
    Revenue: 3470,
    Expenditure: 2108,
  },
  {
    date: 'May 22',
    Revenue: 3475,
    Expenditure: 1812,
  },
  {
    date: 'Jun 22',
    Revenue: 4000,
    Expenditure: 1726,
  },
  {
    date: 'Jul 22',
    Revenue: 3490,
    Expenditure: 1982,
  },
  {
    date: 'Aug 22',
    Revenue: 4200,
    Expenditure: 2012,
  },
  {
    date: 'Sep 22',
    Revenue: 3100,
    Expenditure: 2342,
  },
  {
    date: 'Oct 22',
    Revenue: 4500,
    Expenditure: 2473,
  },
  {
    date: 'Nov 22',
    Revenue: 4800,
    Expenditure: 3848,
  },
  {
    date: 'Dec 22',
    Revenue: 5050,
    Expenditure: 3736,
  },
]

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`

export default function SalesChart() {
  return (
    <AreaChart
      categories={['Revenue', 'Expenditure']}
      className="h-80 w-full self-center"
      colors={['blue', 'red-700']}
      data={chartData}
      index="date"
      valueFormatter={dataFormatter}
      yAxisWidth={60}
    />
  )
}
