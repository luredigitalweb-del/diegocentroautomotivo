import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Dev e produção usam pastas separadas: rodar `npm run dev` não corrompe
  // mais o build servido por `npm run start`.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
