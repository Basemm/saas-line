import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@repo/core-ui/components/ui/alert'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@repo/core-ui/components/ui/card'
import { Input } from '@repo/core-ui/components/ui/input'
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <main className="mb-32">
      <h1 className="mb-12 pb-6 pt-24 text-center">Blog Post</h1>

      <div className="container flex flex-col items-center">
        <article className="flex flex-col gap-6">
          <header>
            <h1>Earth&apos;s rotating inner core is starting to slow down</h1>
            <p className="mb-6 text-muted-foreground">
              A new study confirms that, showing the latest measurements
            </p>
            <Image
              alt="Nature Sunset"
              className="rounded-md"
              height={500}
              src="/img/earth.jpg"
              width={1400}
            />
          </header>

          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <Alert className="my-8">
                <InfoIcon size={20} />
                <AlertTitle>Quick Talk!</AlertTitle>
                <AlertDescription>
                  You can use this section for a quick tips.
                </AlertDescription>
              </Alert>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>

              <div className="flex flex-col items-center">
                <iframe
                  allowFullScreen
                  className="giphy-embed my-8 max-h-[408px] max-w-[480px] rounded-lg"
                  src="https://giphy.com/embed/mf8UbIDew7e8g"
                  title="Earth's rotating inner core is starting to slow down"
                />
                <p>
                  <a href="https://giphy.com/gifs/earth-mf8UbIDew7e8g">
                    via GIPHY
                  </a>
                </p>
              </div>

              <p className="mt-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>

            <aside className="relative w-full">
              <Card className="sticky top-28 text-center">
                <CardHeader>
                  <h3>Join our newsletter!</h3>
                </CardHeader>
                <CardContent className="flex flex-col gap-10">
                  <p className="text-muted-foreground">
                    Enter your email to receive the latest news and updates.
                  </p>

                  <Input placeholder="Email" type="email" />
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>
            </aside>
          </div>
        </article>
      </div>
    </main>
  )
}
