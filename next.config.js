/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    experimental: {
        appDir: true
    },
    output: 'export',
    trailingSlash: true, 
    assetPrefix: isProd ? 'https://alex-custodio.github.io/' : undefined,
    basePath: '/exoneraa'
    
}

module.exports = nextConfig
