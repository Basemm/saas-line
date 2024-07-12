import { Badge } from '@repo/core-ui/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="mb-12 pb-6 pt-24 text-center">Blog</h1>

      <div className="container grid gap-16 lg:grid-cols-2">
        <div className="flex flex-col lg:justify-self-end">
          <Link href="#">
            <Image
              alt="Nature Sunset"
              className="rounded-md"
              height={200}
              src="/img/nature-sunset.jpg"
              width={580}
            />
          </Link>
          <Link className="mt-4 self-start" href="#">
            <Badge variant="secondary">Forest</Badge>
          </Link>
          <Link href="#">
            <h2 className="mt-4">Forest reopens for recreation and visitors</h2>
            <p className="mt-2 text-muted-foreground">
              The Mason Hill section has reopened to the public.
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
            <Link className="self-start" href="#">
              <Badge variant="secondary">Earth</Badge>
            </Link>
            <Link className="flex gap-6" href="#">
              <Image
                alt="Post"
                className="self-start rounded-sm"
                height={80}
                src="/img/earth.jpg"
                width={80}
              />
              <div>
                <h4>
                  Earth&apos;s rotating inner core is starting to slow down
                </h4>
                <p className="mt-2 text-muted-foreground">
                  A new study confirms that.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
            <Link className="self-start" href="#">
              <Badge variant="secondary">Earth</Badge>
            </Link>
            <Link className="flex gap-6" href="#">
              <Image
                alt="Post"
                className="self-start rounded-sm"
                height={80}
                src="/img/northen-lights.jpg"
                width={80}
              />
              <div>
                <h4>Northern lights: See them again this summer?</h4>
                <p className="mt-2 text-muted-foreground">
                  Northern lights reached as far south as Florida for the first
                  time
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
            <Link className="self-start" href="#">
              <Badge variant="secondary">Forest</Badge>
            </Link>
            <Link className="flex gap-6" href="#">
              <Image
                alt="Post"
                className="self-start rounded-sm"
                height={80}
                src="/img/large-tree.jpg"
                width={80}
              />
              <div>
                <h4>What makes a good tree? We used AI to ask birds</h4>
                <p className="mt-2 text-muted-foreground">
                  Can we use machine learning to get some tips?
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link className="self-start" href="#">
              <Badge variant="secondary">Winter</Badge>
            </Link>
            <Link className="flex gap-6" href="#">
              <Image
                alt="Post"
                className="self-start rounded-sm"
                height={80}
                src="/img/snowy-road.jpg"
                width={80}
              />
              <div>
                <h4>A snow lover&apos;s road trip to Falls Creek</h4>
                <p className="mt-2 text-muted-foreground">
                  Roads are closed to cars during winter.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
