/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // Allow development access from your local network
  allowedDevOrigins: ['192.168.1.2'],
};
export default nextConfig;
