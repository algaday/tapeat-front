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
}
// next.config.js

export default nextConfig
