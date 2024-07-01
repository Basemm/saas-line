import NewCustomersSparkChart from '@/app/app/_components/newCustomersSparkChart'
import CashFlowChart from '@/app/app/_components/cashFlowChart'
import SalesProgressChart from '@/app/app/_components/salesProgressChart'
import { TopSellingCategoriesChart } from '@/app/app/_components/topSellingCategoriesChart'
import UniqueNewVisitorsSparkChart from '@/app/app/_components/uniqueNewVisitorsSparkChart'
import VisitorsSparkChart from '@/app/app/_components/visitorsSparkChart'
import { Badge } from '@repo/core-ui/components/ui/badge'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import { ChevronDown, ChevronUp, SettingsIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-8">
      <div className="grid justify-center gap-8 lg:grid-cols-2">
        <div className="grid auto-rows-fr gap-8 sm:grid-cols-2">
          <Card className="flex flex-col justify-between bg-secondary">
            <CardHeader>
              <CardTitle className="flex justify-center gap-4 align-middle">
                $156,231
                <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
                  <ChevronUp className="w-4 pb-1" /> %41.3
                </Badge>
              </CardTitle>
              <CardDescription className="text-center font-bold">
                Sales
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-[-16px]">
              <div className="flex flex-col items-center justify-start space-x-5">
                <SalesProgressChart />
                <p className="mt-4 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Target out of $200k
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-between bg-secondary">
            <CardHeader>
              <CardTitle className="flex justify-center gap-4 align-middle">
                2,356
                <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
                  <ChevronUp className="w-4" /> %23.1
                </Badge>
              </CardTitle>
              <CardDescription className="text-center font-bold">
                New Customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NewCustomersSparkChart />
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-between bg-secondary">
            <CardHeader>
              <CardTitle className="flex justify-center gap-4 align-middle">
                46,154
                <Badge className="bg-red-200 px-2 text-red-900 hover:bg-red-200">
                  <ChevronDown className="w-4" /> %1.3
                </Badge>
              </CardTitle>
              <CardDescription className="text-center font-bold">
                Visitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VisitorsSparkChart />
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-between bg-secondary">
            <CardHeader>
              <CardTitle className="flex justify-center gap-4 align-middle">
                26,879
                <Badge className="bg-green-200 px-2 text-green-900 hover:bg-green-200">
                  <ChevronUp className="w-4" /> %18.6
                </Badge>
              </CardTitle>
              <CardDescription className="text-center font-bold">
                Unique New Visitors
              </CardDescription>
            </CardHeader>
            <CardContent className="align-bottom">
              <UniqueNewVisitorsSparkChart />
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-center text-muted-foreground">Cash Flow</h3>
          <CashFlowChart />
        </div>
      </div>

      <div className="my-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p className="self-center">Top Selling Categories</p>
              <Button size="icon" title="Settings" variant="ghost">
                <SettingsIcon />
              </Button>
            </CardTitle>
            <CardDescription>Total Sales $110K</CardDescription>
          </CardHeader>
          <CardContent>
            <TopSellingCategoriesChart />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
