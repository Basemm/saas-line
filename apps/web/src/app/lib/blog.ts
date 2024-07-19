import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import { cache } from 'react'

export interface Post {
  title: string
  description: string
  slug: string
  headerImageSrc: string
  headerImageHeight: number
  headerImageWidth: number
  published: boolean
  date: string
  body: string
}

export const getPostList = cache(async () => {
  const posts = await fs.readdir('./content/')

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./content/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  const posts = await getPostList()
  return posts.find((post) => post?.slug === slug)
}

export default getPostList
