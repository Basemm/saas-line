import CashFlowChart from '@/app/app/_components/cashFlowChart'
import NewCustomersSparkChart from '@/app/app/_components/newCustomersSparkChart'
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
import Image from 'next/image'
import Link from 'next/link'

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

      <div className="my-8 grid gap-8 lg:grid-cols-3">
        <Card className="col-span-2 bg-secondary lg:col-span-1">
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

        <Card className="col-span-2 bg-secondary">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p className="self-center">Top Selling Products</p>
              <Button size="icon" title="Settings" variant="ghost">
                <SettingsIcon />
              </Button>
            </CardTitle>
            <CardDescription>Total Sales $147K</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="iPhone 15 Pro Max"
                  className="object-contain"
                  fill
                  src="/img/iphone15.png"
                />
              </div>
              <Link href="#" title="Apple iPhone 12 Pro Max">
                <p>Apple iPhone 12 Pro Max</p>
                <p className="text-sm text-muted-foreground">
                  256GB, Pacific Blue
                </p>
              </Link>
              <div className="text-center">
                <p>$83K</p>
                <p className="text-sm text-muted-foreground">10k</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="Alienware m18 R2 Gaming Laptop"
                  className="object-contain"
                  fill
                  src="/img/alienware-laptop.png"
                />
              </div>
              <Link href="#" title="Alienware m18 R2 Gaming Laptop">
                <p>Alienware m18 R2 Gaming Laptop</p>
                <p className="text-sm text-muted-foreground">
                  Intel i9, RTX 4090
                </p>
              </Link>
              <div className="text-center">
                <p>$74k</p>
                <p className="text-sm text-muted-foreground">8K</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="The House Maid eBook"
                  className="object-contain"
                  fill
                  src="/img/theHouseMaid-book.jpg"
                />
              </div>
              <Link href="#" title="The Housemaid's Secret Book">
                <p>The Housemaid's Secret Book</p>
                <p className="text-sm text-muted-foreground">
                  The perfect home has one rule
                </p>
              </Link>
              <div className="text-center">
                <p>$70k</p>
                <p className="text-sm text-muted-foreground">40K</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="The Inmate eBook"
                  className="object-contain"
                  fill
                  src="/img/theinmate-book.jpg"
                />
              </div>
              <Link href="#" title="The Inmate Book">
                <p>The Inmate Book</p>
                <p className="text-sm text-muted-foreground">
                  A gripping, twisty thriller from Freida McFadden
                </p>
              </Link>
              <div className="text-center">
                <p>$64k</p>
                <p className="text-sm text-muted-foreground">35K</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="eos Shea Better Body Lotion"
                  className="object-contain"
                  fill
                  src="/img/eosSheaBetter.jpg"
                />
              </div>
              <Link href="#" title="eos Shea Better Body Lotion">
                <p>eos Shea Better Body Lotion</p>
                <p className="text-sm text-muted-foreground">
                  Vanilla Cashmere, 24-Hour Moisture Skin Care
                </p>
              </Link>
              <div className="text-center">
                <p>$52k</p>
                <p className="text-sm text-muted-foreground">30K</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_6fr_1fr] gap-4">
              <div className="relative w-16">
                <Image
                  alt="Fortnite Game"
                  className="object-contain"
                  fill
                  src="/img/fortnite.jpg"
                />
              </div>
              <Link href="#" title="Fortnite Game">
                <p>Fortnite Game</p>
                <p className="text-sm text-muted-foreground">
                  Be the last player standing in Battle Royale and Zero Build
                </p>
              </Link>
              <div className="text-center">
                <p>$36k</p>
                <p className="text-sm text-muted-foreground">21K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
