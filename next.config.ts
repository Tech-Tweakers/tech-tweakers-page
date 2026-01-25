import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: '/tech-tweakers-page',
    assetPrefix: '/tech-tweakers-page/',
};

export default nextConfig;
