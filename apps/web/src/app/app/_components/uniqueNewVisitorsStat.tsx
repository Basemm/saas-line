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
    Performance: 5000,
  },
  {
    month: 'Feb 21',
    Performance: 6000,
  },
  {
    month: 'Mar 21',
    Performance: 3000,
  },
  {
    month: 'Apr 21',
    Performance: 3500,
  },
  {
    month: 'May 21',
    Performance: 6000,
  },
]

export default function UniqueNewVisitorsStat() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-center gap-4 align-middle">
          26,879
          <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
            <ChevronUpIcon className="w-4" /> %18.6
          </Badge>
        </CardTitle>
        <CardDescription className="text-center font-bold">
          Unique New Visitors
        </CardDescription>
      </CardHeader>
      <CardContent className="align-bottom">
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
