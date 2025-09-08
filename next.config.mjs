/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 🔑 desactiva la optimización
  },
};

export default nextConfig;
