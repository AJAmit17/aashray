/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bsmedia.business-standard.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
