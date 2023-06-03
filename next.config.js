/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    experimental: {
        appDir: true
    },
    trailingSlash: true, 
    basePath: ''


}

module.exports = nextConfig
