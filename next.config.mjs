/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:3333/:path*`,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tapeat-dev-bucket.object.pscloud.io',
        port: '',
        pathname: '/tapeat-dev-bucket/**',
      },
    ],
  },
}
// next.config.js

export default nextConfig
