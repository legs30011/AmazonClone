/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        port: '',
      },
    ],
  },
  
};

module.exports = nextConfig;
