/**
 * @type {import('next-export-optimize-images').Config}
 */
const videosData = require("./public/content/videos/videos.json")


const config = {
    imageDir: 'optimized',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    remoteImages: () => {
        const allVideos = Object.entries(videosData).flatMap(e => e[1])
        const allLinks = allVideos.map(video => `https://img.youtube.com/vi/${video.link.slice(32)}/${video.thumbnailQuality ?? "maxresdefault"}.jpg`)
        // console.log(`allLinks = ${allLinks}`)
        return allLinks
    },
}

module.exports = config