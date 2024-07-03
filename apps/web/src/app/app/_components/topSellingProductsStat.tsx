import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/core-ui/components/ui/card'
import { SettingsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TopSellingProductsStat() {
  return (
    <Card className="lg:col-span-2">
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
              sizes="20vw"
              src="/img/iphone15.png"
            />
          </div>
          <Link href="#" title="Apple iPhone 12 Pro Max">
            <p>Apple iPhone 12 Pro Max</p>
            <p className="text-sm text-muted-foreground">256GB, Pacific Blue</p>
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
              sizes="20vw"
              src="/img/alienware-laptop.png"
            />
          </div>
          <Link href="#" title="Alienware m18 R2 Gaming Laptop">
            <p>Alienware m18 R2 Gaming Laptop</p>
            <p className="text-sm text-muted-foreground">Intel i9, RTX 4090</p>
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
              sizes="20vw"
              src="/img/theHouseMaid-book.jpg"
            />
          </div>
          <Link href="#" title="The Housemaid's Secret Book">
            <p>The Housemaid&apos;s Secret Book</p>
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
              sizes="20vw"
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
              sizes="20vw"
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
              sizes="20vw"
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
  )
}
