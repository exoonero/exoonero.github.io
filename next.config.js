/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    experimental: {
        appDir: true
    },
    output: 'export',
    trailingSlash: true, 
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH | '',
    basePath: '/exoneraa'
    
}

module.exports = nextConfig
