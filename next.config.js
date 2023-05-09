/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    experimental: {
        appDir: true
    },
    output: 'export',
    trailingSlash: true, 
    basePath: '/exonera'
    
}

module.exports = nextConfig
