/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    imageDir: 'optimized',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    // basePath: '/out',
    // basePath: "/",
}

module.exports = config