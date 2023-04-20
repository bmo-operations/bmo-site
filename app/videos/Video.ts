export interface Video {
    title: string,
    link: string,
    description?: string,
    thumbnailQuality?: string,
}

function videoSource(video: Video) { return "youtube" }
function videoID(video: Video) { return idFromSource(videoSource(video), video.link) }


export function videoThumbnail(video: Video) {
    return `https://img.youtube.com/vi/${videoID(video)}/${video.thumbnailQuality ?? "maxresdefault"}.jpg`
}

function idFromSource(source: string, url: string) {
    switch (source) {
        case "youtube": return url.slice(32)
        default: return ""
    }
}