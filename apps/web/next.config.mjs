/** @type {import('next').NextConfig} */

import NextBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = {
  transpilePackages: ['next-mdx-remote', '@repo/core-ui'],
}

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(nextConfig)
  : nextConfig
