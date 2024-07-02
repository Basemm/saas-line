'use client'

import { Badge } from '@repo/core-ui/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import { SparkAreaChart } from '@tremor/react'
import { ChevronDownIcon } from 'lucide-react'

const chartData = [
  {
    month: 'Jan 21',
    Performance: 4000,
  },
  {
    month: 'Feb 21',
    Performance: 3500,
  },
  {
    month: 'Mar 21',
    Performance: 3800,
  },
  {
    month: 'Apr 21',
    Performance: 2780,
  },
  {
    month: 'May 21',
    Performance: 2999,
  },
  {
    month: 'Jun 21',
    Performance: 2700,
  },
]

export default function SalesStat() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-center gap-4 align-middle">
          46,154
          <Badge className="bg-red-200 px-2 text-red-900 hover:bg-red-200">
            <ChevronDownIcon className="w-4" /> %1.3
          </Badge>
        </CardTitle>
        <CardDescription className="text-center font-bold">
          Visitors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <SparkAreaChart
            categories={['Performance']}
            className="h-10 w-80"
            colors={['red-700']}
            data={chartData}
            index="month"
          />
        </div>
      </CardContent>
    </Card>
  )
}
