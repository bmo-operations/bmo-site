import { Video } from "./Video";
import videosData from "../../public/content/videos/videos.json"

export function allVideos(): Map<number, Video[]> {
    return new Map(Object.entries(videosData).map(e => {
        const year: number = parseInt(e[0])
        const value: Video[] = e[1]
        return [year, value]
    }))
}