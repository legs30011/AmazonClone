/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pngimg.com',
        pathname: '/**', // Permite todas las imágenes del dominio
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '/**', // Permite todas las imágenes del dominio
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/**', // Permite todas las imágenes del dominio
      },
    ],
  },
};

module.exports = nextConfig;
