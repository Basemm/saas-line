import { getCategoryList, getPostListByCategory, type Post } from '@/lib/blog'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Line - Blog Category',
  description: 'Blog',
}

function PostItem({ post }: { post: Post }) {
  return (
    <li className="flex flex-col gap-2 border-b border-dashed border-b-muted pb-4">
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

export async function generateStaticParams() {
  const categoryList = await getCategoryList()

  return categoryList.map((category) => ({ slug: category }))
}

interface BlogCategoryProps {
  params: { slug: string }
}

export default async function BlogCategoryPage({ params }: BlogCategoryProps) {
  const categoryName = params.slug
  const postList = await getPostListByCategory(categoryName)

  return (
    <main>
      <h1 className="mb-12 pb-6 pt-6 text-center">Blog Category</h1>

      <div className="container my-24">
        <div className="flex flex-col gap-2">
          <div className="mb-6">
            <h3>Category: {categoryName}</h3>
            <span className="mt-4 inline-block h-[4px] w-20 bg-blue-700" />
          </div>

          <ul className="m-0 flex list-none flex-col gap-6 p-0">
            {postList.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
