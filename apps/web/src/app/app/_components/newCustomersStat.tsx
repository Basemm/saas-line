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
import { ChevronUpIcon } from 'lucide-react'

const chartData = [
  {
    month: 'Jan 21',
    Performance: 3000,
  },
  {
    month: 'Feb 21',
    Performance: 3000,
  },
  {
    month: 'Mar 21',
    Performance: 2000,
  },
  {
    month: 'Apr 21',
    Performance: 3780,
  },
  {
    month: 'May 21',
    Performance: 1890,
  },
  {
    month: 'Jun 21',
    Performance: 2390,
  },
  {
    month: 'Jul 21',
    Performance: 4000,
  },
]

export default function NewCustomersStat() {
  return (
    <Card className="flex flex-col justify-between bg-secondary">
      <CardHeader>
        <CardTitle className="flex justify-center gap-4 align-middle">
          2,356
          <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
            <ChevronUpIcon className="w-4" /> %23.1
          </Badge>
        </CardTitle>
        <CardDescription className="text-center font-bold">
          New Customers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <SparkAreaChart
            categories={['Performance']}
            className="h-10 w-80"
            colors={['green-700']}
            data={chartData}
            index="month"
          />
        </div>
      </CardContent>
    </Card>
  )
}
