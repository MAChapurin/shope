import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn-bucket.hb.ru-msk.vkcs.cloud/**')],
  },
};

export default nextConfig;
