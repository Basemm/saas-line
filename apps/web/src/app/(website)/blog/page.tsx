import getPostList, { getCategoryList, type Post } from '@/lib/blog'
import { Badge } from '@repo/core-ui/components/ui/badge'
import { TagIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Line - Blog',
  description: 'Blog',
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="flex flex-col lg:justify-self-end">
      <Link href={`/blog/${post.slug}`}>
        <Image
          alt={post.imageAlt}
          className="rounded-md"
          height={post.headerImageHeight}
          src={post.imageSrc}
          width={post.headerImageWidth}
        />
      </Link>
      <Link
        className="mt-4 self-start"
        href={`/blog/category/${post.category}`}
      >
        <Badge variant="secondary">{post.category}</Badge>
      </Link>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="mt-4">{post.title}</h2>
        <p className="mt-2 text-muted-foreground">{post.description}</p>
      </Link>
    </div>
  )
}

function TopPost({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
      <Link className="self-start" href={`/blog/category/${post.category}`}>
        <Badge variant="secondary">{post.category}</Badge>
      </Link>
      <Link className="flex gap-6" href={`/blog/${post.slug}`}>
        <Image
          alt={post.imageAlt}
          className="self-start rounded-sm"
          height={post.thumbImageHeight}
          src={post.imageSrc}
          width={post.thumbImageWidth}
        />
        <div>
          <h4>{post.title}</h4>
          <p className="mt-2 text-muted-foreground">{post.description}</p>
        </div>
      </Link>
    </div>
  )
}

function LatestPost({ post }: { post: Post }) {
  return (
    <li className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
      <Link className="self-start" href={`/blog/category/${post.category}`}>
        <Badge variant="secondary">{post.category}</Badge>
      </Link>
      <Link className="flex gap-6" href={`/blog/${post.slug}`}>
        <Image
          alt={post.imageAlt}
          className="self-start rounded-sm"
          height={post.thumbImageHeight}
          src={post.imageSrc}
          width={post.thumbImageWidth}
        />
        <div>
          <h4>{post.title}</h4>
          <p className="mt-2 text-muted-foreground">{post.description}</p>
        </div>
      </Link>
    </li>
  )
}

function PopularPost({ rank, post }: { rank: number; post: Post }) {
  return (
    <li className="flex flex-col gap-4 border-b border-dashed border-b-muted">
      <Link className="flex gap-6 pb-4" href={`/blog/${post.slug}`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-muted-foreground bg-muted">
          {rank}
        </div>
        <h4>{post.title}</h4>
      </Link>
    </li>
  )
}

function CategoryItem({ name }: { name: string }) {
  return (
    <li className="flex gap-4">
      <TagIcon className="self-center" size={20} />
      <Link className="self-start" href={`/blog/category/${name}`}>
        <h4>{name}</h4>
      </Link>
    </li>
  )
}

export default async function Blog() {
  const categoryList = await getCategoryList()
  const postList = await getPostList()
  const topPost = postList[0]
  const topPostList = postList.slice(1, 5)
  const latestPostList = postList.slice(5)
  const popularPostList = postList.slice(3, 8)
  console.log('postList', postList)

  return (
    <main>
      <h1 className="mb-12 pb-6 pt-6 text-center">Blog</h1>

      <div className="container pt-16">
        <div className="grid gap-16 rounded-lg bg-muted p-8 shadow-lg lg:grid-cols-2">
          {!!topPost && <FeaturedPost post={topPost} />}

          <div className="flex flex-col gap-2">
            {topPostList.map((post) => (
              <TopPost key={post.slug} post={post} />
            ))}
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
            {latestPostList.map((post) => (
              <LatestPost key={post.slug} post={post} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <div className="mb-6">
              <h3>Most Popular</h3>
              <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
            </div>

            <ol className="m-0 flex list-none flex-col gap-6 p-0">
              {popularPostList.map((post, index) => (
                <PopularPost key={post.slug} post={post} rank={index + 1} />
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3>Categories</h3>
              <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
            </div>

            <ul className="m-0 ml-4 flex flex-col gap-6 p-0">
              {categoryList.map((category) => (
                <CategoryItem key={category} name={category} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
