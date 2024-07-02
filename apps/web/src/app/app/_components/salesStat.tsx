'use client'

import { Badge } from '@repo/core-ui/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import { ProgressCircle } from '@tremor/react'
import { ChevronUpIcon } from 'lucide-react'

export default function SalesStat() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-center gap-4 align-middle">
          $156,231
          <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
            <ChevronUpIcon className="w-4 pb-1" /> %41.3
          </Badge>
        </CardTitle>
        <CardDescription className="text-center font-bold">
          Sales
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-[-16px]">
        <div className="flex flex-col items-center justify-start space-x-5">
          <div className="flex justify-center">
            <ProgressCircle size="md" value={78}>
              <span className="text-xs font-medium">78%</span>
            </ProgressCircle>
          </div>
          <p className="mt-4 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Target out of $200k
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
