/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@react-three/drei"],
  },
  async redirects() {
    return [
      { source: "/services/exhibitions", destination: "/services/event-production", permanent: true },
      { source: "/services/production-operations", destination: "/services/event-production", permanent: true },
      { source: "/services/campus-connect", destination: "/services/campus-marketing", permanent: true },
      { source: "/services/digital-creative", destination: "/services/digital-marketing", permanent: true },
      { source: "/services/csr-education", destination: "/services/csr-programs", permanent: true },
    ];
  },
};

module.exports = nextConfig;