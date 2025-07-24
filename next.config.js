/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   images: {
    unoptimized: true
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Modify the config as needed for ShadCN components or other libraries
    return config;
  },
};

export default nextConfig;
