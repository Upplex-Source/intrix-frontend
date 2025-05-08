/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // images: {
    //     domains: ["backoffice.intrixlifestyle.com"],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backoffice.intrixlifestyle.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
