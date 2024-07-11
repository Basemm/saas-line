import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="mb-12 pb-6 pt-24 text-center">Blog</h1>

      <div className="container grid gap-16 lg:grid-cols-2">
        <div className="lg:justify-self-end">
          <Image
            alt="Nature Sunset"
            className="rounded-md"
            height={200}
            src="/img/nature-sunset.jpg"
            width={580}
          />
          <h2 className="mt-4">Forest reopens for recreation and visitors</h2>
          <p className="mt-2 text-muted-foreground">
            The Mason Hill section has reopened to the public.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="flex gap-6 p-4 pt-0" href="#">
            <Image
              alt="Post"
              className="self-start rounded-sm"
              height={80}
              src="/img/earth.jpg"
              width={80}
            />
            <div>
              <h4>Earth&apos;s rotating inner core is starting to slow down</h4>
              <p className="mt-2 text-muted-foreground">
                A new study confirms that.
              </p>
            </div>
          </Link>
          <Link className="flex gap-6 rounded-sm bg-muted p-4" href="#">
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
          <Link className="flex gap-6 p-4" href="#">
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
          <Link className="flex gap-6 rounded-sm bg-muted p-4" href="#">
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
    </main>
  )
}
