/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseAPI: process.env.BASE_API,
        SECRET: process.env.NEXTAUTH_SECRET
    }
}

module.exports = nextConfig
