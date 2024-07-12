import { Badge } from '@repo/core-ui/components/ui/badge'
import { TagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="mb-12 pb-6 pt-24 text-center">Blog</h1>

      <div className="container">
        <div className="grid gap-16 rounded-lg bg-muted p-8 shadow-lg lg:grid-cols-2">
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
              <h2 className="mt-4">
                Forest reopens for recreation and visitors
              </h2>
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
                    Northern lights reached as far south as Florida for the
                    first time
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
      </div>

      <div className="container my-24 grid gap-16 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-2">
          <div className="mb-6">
            <h3>Latest Articles</h3>
            <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
          </div>

          <ul className="m-0 flex list-none flex-col gap-6 p-0">
            <li className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
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
                    Wine grapes&apos; sweetness reveals Europe&apos;s climate
                    history
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Records on the quality of the grape harvest sheds light on
                    600 years of weather.
                  </p>
                </div>
              </Link>
            </li>
            <li className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
              <Link className="self-start" href="#">
                <Badge variant="secondary">Weather</Badge>
              </Link>
              <Link className="flex gap-6" href="#">
                <Image
                  alt="Post"
                  className="self-start rounded-sm"
                  height={80}
                  src="/img/northern-lights.jpg"
                  width={80}
                />
                <div>
                  <h4>
                    Deeper and stronger North Atlantic Gyre during the Last
                    Glacial Maximum
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Analysis of benthic foraminiferal δ18O profiles from
                    sediment cores
                  </p>
                </div>
              </Link>
            </li>
            <li className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
              <Link className="self-start" href="#">
                <Badge variant="secondary">Geology</Badge>
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
                  <h4>
                    How mud brought France and England together — 150 years ago
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Artificial daylight lacks commercial interest, and a
                    geologist&apos;s thirst for knowledge kickstarts the bid for
                    the Channel Tunnel,
                  </p>
                </div>
              </Link>
            </li>
            <li className="flex flex-col gap-2">
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
                  <h4>
                    Last year&apos;s summer was the warmest in 2,000 years
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    A record spanning two millennia of Northern Hemisphere
                    summer temperatures has revealed the extent to which 2023
                    was anomalously hot.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <div className="mb-6">
              <h3>Most Popular</h3>
              <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
            </div>

            <ol className="m-0 flex list-none flex-col gap-6 p-0">
              <li className="flex flex-col gap-4 border-b border-dashed border-b-muted">
                <Link className="flex gap-6 pb-4" href="#">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground bg-muted">
                    1
                  </div>
                  <h4>
                    First fossil chromosomes discovered in freeze-dried mammoth
                    skin
                  </h4>
                </Link>
              </li>
              <li className="flex flex-col gap-4 border-b border-dashed border-b-muted">
                <Link className="flex gap-6 pb-4" href="#">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground bg-muted">
                    2
                  </div>
                  <h4>
                    Scientists edit the genes of gut bacteria in living mice
                  </h4>
                </Link>
              </li>
              <li className="flex flex-col gap-4 border-b border-dashed border-b-muted">
                <Link className="flex gap-6 pb-4" href="#">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground bg-muted">
                    3
                  </div>
                  <h4>How do you make salty water drinkable?</h4>
                </Link>
              </li>
              <li className="flex flex-col gap-4">
                <Link className="flex gap-6 pb-4" href="#">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground bg-muted">
                    4
                  </div>
                  <h4>
                    Fast-moving stars around an intermediate-mass black hole in
                    ω Centauri
                  </h4>
                </Link>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3>Categories</h3>
              <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
            </div>

            <ul className="m-0 ml-4 flex flex-col gap-6 p-0">
              <li className="flex gap-4">
                <TagIcon className="self-center" size={20} />
                <Link className="self-start" href="#">
                  <h4>Earth</h4>
                </Link>
              </li>
              <li className="flex gap-4">
                <TagIcon className="self-center" size={20} />
                <Link className="self-start" href="#">
                  <h4>Weather</h4>
                </Link>
              </li>
              <li className="flex gap-4">
                <TagIcon className="self-center" size={20} />
                <Link className="self-start" href="#">
                  <h4>Forest</h4>
                </Link>
              </li>
              <li className="flex gap-4">
                <TagIcon className="self-center" size={20} />
                <Link className="self-start" href="#">
                  <h4>Geology</h4>
                </Link>
              </li>
              <li className="flex gap-4">
                <TagIcon className="self-center" size={20} />
                <Link className="self-start" href="#">
                  <h4>Winter</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
