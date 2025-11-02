/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['eu-west-2.graphassets.com'], // ← Adicione isso
    // ou use remotePatterns (recomendado):
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: '**.graphassets.com', // permite todos subdomínios
      },
    ],
  },
}

module.exports = nextConfig