/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    experimental: {
        appDir: true
    },
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://alex-custodio.github.io/' : undefined,
}

module.exports = nextConfig
