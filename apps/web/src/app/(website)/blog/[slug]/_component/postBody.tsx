import { MDXRemote } from 'next-mdx-remote/rsc'

export default function PostBody({ children }: { children: string }) {
  return <MDXRemote source={children} />
}
