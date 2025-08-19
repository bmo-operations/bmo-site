/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com"
            }
        ]
    },

    async redirects() {
        return [
            {
                source: '/alumni/:path*',
                destination: 'https://alumni.bmo.team/:path*',
                permanent: true,
            },
        ]
    },
};

module.exports = nextConfig;