/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a static site into /out (works perfectly with Capacitor)
  output: 'export',
  // Next/Image requires this for static export
  images: { unoptimized: true },
  // Optional but helps with some static hosting path issues
  trailingSlash: true,
};

export default nextConfig;
