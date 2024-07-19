import PostBody from '@/app/(website)/blog/[slug]/_component/postBody'
import { getPost, getPostList } from '@/app/lib/blog'
import { Button } from '@repo/core-ui/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@repo/core-ui/components/ui/card'
import { Input } from '@repo/core-ui/components/ui/input'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title:
    "SaaS Line - Blog - Earth's rotating inner core is starting to slow down",
  description: 'A new study confirms that, showing the latest measurements',
}

export async function generateStaticParams() {
  const posts = await getPostList()

  return posts.map((post) => ({ slug: post?.slug }))
}

interface BlogPostProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <main className="mb-32">
      <h1 className="mb-12 pb-6 pt-6 text-center">Blog Post</h1>

      <div className="container flex flex-col items-center pt-16">
        <article className="flex flex-col gap-6">
          <header>
            <h1>{post.title}</h1>
            <p className="mb-6 text-muted-foreground">{post.description}</p>
            <Image
              alt="Nature Sunset"
              className="rounded-md"
              height={post.headerImageHeight}
              src={post.headerImageSrc}
              width={post.headerImageWidth}
            />
          </header>

          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PostBody>{post.body}</PostBody>
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
