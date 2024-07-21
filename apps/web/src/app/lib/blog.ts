import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import { cache } from 'react'

export interface Post {
  title: string
  description: string
  slug: string
  category: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  headerImageHeight: number
  headerImageWidth: number
  thumbImageHeight: number
  thumbImageWidth: number
  published: boolean
  date: string
  body: string
}

export const getPostList = cache(async () => {
  const postFileList = await fs.readdir('./content/')

  return Promise.all(
    postFileList
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./content/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (!data.published) {
          return null
        }

        data.slug = path.basename(file, '.mdx')

        return { ...data, body: content } as Post
      })
  ).then((postList) => postList.filter((post) => post !== null))
})

export const getPostListByCategory = cache(async (category: string) => {
  const postList = await getPostList()
  return postList.filter((post) => post.category === category)
})

export const getCategoryList = cache(async () => {
  const postList = await getPostList()
  return [...new Set(postList.map((post) => post.category))]
})

export const getPost = cache(async (slug: string) => {
  const postList = await getPostList()
  return postList.find((post) => post?.slug === slug)
})

export function getTitleSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[:?,]/g, '')
    .replace(/[\s']+/g, '-')
}

export default getPostList
